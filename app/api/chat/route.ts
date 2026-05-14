import { type NextRequest } from 'next/server'

export const runtime = 'edge'

const SYSTEM_PROMPT = `You are T10Global's assistant. T10Global is a curated alliance of independent professional firms headquartered in Santa Cruz de Tenerife, Spain, delivering five integrated service lines:

1. Audit: Independent assurance, internal control review, transparency for shareholders and regulators.
2. Tax: Strategic tax planning, compliance, advisory for groups, family businesses, cross-border operations.
3. Legal: Corporate, commercial, contractual and regulatory counsel, three decades of experience.
4. Consulting & Corporate Finance: Strategy, transformation, valuations, transaction support.
5. Tech & Software: Digital transformation, data, automation, AI, custom software.

Answer ONLY questions about T10Global's services, network model, or how to contact the firm. For anything outside this scope, politely decline and suggest the visitor contact info@t10global.com. Keep answers concise (under 120 words).`

interface AiBinding {
  run: (model: string, options: object) => Promise<{ response?: string }>
}

interface Message {
  role: string
  content: string
}

export async function POST(req: NextRequest) {
  let body: { message?: unknown; history?: unknown; lang?: unknown }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const userMessage = typeof body.message === 'string' ? body.message.trim().slice(0, 500) : ''
  if (!userMessage) {
    return Response.json({ error: 'Empty message' }, { status: 400 })
  }

  const lang = body.lang === 'es' ? 'es' : 'en'
  const rawHistory = Array.isArray(body.history) ? body.history : []
  const history: Message[] = rawHistory.slice(-6).map((m: unknown) => {
    const msg = m as Record<string, unknown>
    return {
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: typeof msg.content === 'string' ? msg.content.slice(0, 500) : '',
    }
  })

  const systemPrompt = SYSTEM_PROMPT + (lang === 'es' ? '\n\nResponde siempre en español.' : '')

  let ai: AiBinding | undefined
  try {
    // Dynamic import to avoid bundling issues in non-Cloudflare environments
    const { getRequestContext } = await import('@cloudflare/next-on-pages')
    const ctx = getRequestContext()
    ai = (ctx.env as Record<string, unknown>).AI as AiBinding | undefined
  } catch {
    // Not running on Cloudflare Pages (e.g. local next dev)
  }

  if (!ai) {
    return Response.json(
      { reply: 'The assistant is only available in the deployed environment. Please contact info@t10global.com.' },
      { status: 200 }
    )
  }

  try {
    const result = await ai.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: userMessage },
      ],
      max_tokens: 300,
    })

    return Response.json({ reply: result.response ?? '' })
  } catch (err) {
    console.error('Workers AI error:', err)
    return Response.json({ error: 'AI unavailable' }, { status: 502 })
  }
}
