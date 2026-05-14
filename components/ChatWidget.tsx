'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'
import { useI18n } from '@/lib/i18n'

interface ChatMessage {
  role: 'user' | 'bot'
  content: string
  typing?: boolean
}

const COUNT_KEY = 'chat_count'
const MAX_MESSAGES = 5

export default function ChatWidget() {
  const { lang, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [msgCount, setMsgCount] = useState(0)
  const [limitReached, setLimitReached] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useRef<{ role: string; content: string }[]>([])

  // Load session count on mount
  useEffect(() => {
    let saved = 0
    try { saved = parseInt(sessionStorage.getItem(COUNT_KEY) ?? '0', 10) } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMsgCount(saved)
    if (saved >= MAX_MESSAGES) setLimitReached(true)
  }, [])

  // Show welcome message when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessages([{ role: 'bot', content: t('chat.welcome') }])
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleToggle = () => setIsOpen((o) => !o)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading || limitReached) return

    const userMsg: ChatMessage = { role: 'user', content: text }
    setMessages((m) => [...m, userMsg])
    history.current.push({ role: 'user', content: text })
    setInput('')
    setLoading(true)

    // Add typing indicator
    setMessages((m) => [...m, { role: 'bot', content: '…', typing: true }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: history.current.slice(-6),
          lang,
        }),
      })
      const data = await res.json()
      const reply: string = data.reply || t('chat.error')

      // Replace typing indicator with actual reply
      setMessages((m) => [
        ...m.filter((msg) => !msg.typing),
        { role: 'bot', content: reply },
      ])
      history.current.push({ role: 'assistant', content: reply })

      const newCount = msgCount + 1
      setMsgCount(newCount)
      try { sessionStorage.setItem(COUNT_KEY, String(newCount)) } catch {}

      if (newCount >= MAX_MESSAGES) setLimitReached(true)
    } catch {
      setMessages((m) => [
        ...m.filter((msg) => !msg.typing),
        { role: 'bot', content: t('chat.error') },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="chat-widget" role="complementary" aria-label="Chat assistant">
      {isOpen && (
        <div id="chat-panel" className="open" aria-live="polite">
          <div className="chat-header">
            <span>{t('chat.title')}</span>
            <button
              className="chat-header-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div id="chat-messages" role="log" aria-atomic="false">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`msg ${msg.role}${msg.typing ? ' typing' : ''}`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {limitReached && (
            <div id="chat-limit-notice" style={{ display: 'block' }}>
              {t('chat.limit')}{' '}
              <a href="mailto:info@t10global.com">{t('chat.limit.email')}</a>
            </div>
          )}

          {!limitReached && (
            <form id="chat-form" onSubmit={handleSubmit} autoComplete="off">
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.placeholder')}
                maxLength={400}
                aria-label="Message"
                disabled={loading}
              />
              <button
                id="chat-send"
                type="submit"
                aria-label="Send"
                disabled={loading || !input.trim()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
              </button>
            </form>
          )}
        </div>
      )}

      <button
        id="chat-toggle"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
