'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

const STORAGE_KEY = 't10_lang'

export const translations = {
  en: {
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.model': 'Model',
    'nav.offices': 'Office',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Global network of professional firms',
    'hero.title.part1': 'The top ten disciplines.',
    'hero.title.part2': 'One global network.',
    'hero.lead': 'T10Global is a curated alliance of independent firms delivering audit, tax, legal, consulting and technology services with the proximity of a local partner and the reach of a global network.',
    'hero.cta.primary': 'Explore our services',
    'hero.cta.secondary': 'Talk to us',
    'hero.stat1': 'Integrated service lines',
    'hero.stat2': 'Office in Tenerife',
    'hero.stat3': 'Unified global network',
    'pillar.audit': 'Audit',
    'pillar.audit.tag': 'Trust & control',
    'pillar.tax': 'Tax',
    'pillar.tax.tag': 'Regulatory rigour',
    'pillar.legal': 'Legal',
    'pillar.legal.tag': 'Legal certainty',
    'pillar.consulting': 'Consulting & Corporate Finance',
    'pillar.consulting.tag': 'Strategic vision',
    'pillar.tech': 'Tech & Software',
    'pillar.tech.tag': 'Digital advantage',
    'ten.eyebrow': 'The meaning behind the 10',
    'ten.title': 'Why "10"',
    'ten.lead': 'Ten is the standard of top-tier work. Ten is the shorthand for a complete answer. Ten is what we set out to be for every client we serve.',
    'ten.c1.title': 'Top-tier work',
    'ten.c1.body': 'We aim for a 10 on every engagement, with senior partners involved end-to-end.',
    'ten.c2.title': 'A complete answer',
    'ten.c2.body': 'A single point of contact orchestrates audit, tax, legal, consulting and technology together.',
    'ten.c3.title': 'A curated alliance',
    'ten.c3.body': 'Independent specialist firms, hand-picked and aligned under a single standard of care.',
    'ten.c4.title': 'Global by design',
    'ten.c4.body': 'Local proximity in every office, network capability whenever a client crosses a border.',
    'services.eyebrow': 'What we do',
    'services.title': 'Five disciplines. One integrated response.',
    'services.lead': 'Each line operates with its own depth of specialisation, brought together under a shared standard for quality, communication and accountability.',
    'service.audit.title': 'Audit',
    'service.audit.body': 'Independent assurance, internal control review and transparency that earns confidence with shareholders, regulators and partners.',
    'service.tax.title': 'Tax',
    'service.tax.body': 'Strategic tax planning, compliance and specialised advisory for groups, family businesses and cross-border operations.',
    'service.legal.title': 'Legal',
    'service.legal.body': 'Corporate, commercial, contractual and regulatory counsel grounded in three decades of experience with the business world.',
    'service.consulting.title': 'Consulting & Corporate Finance',
    'service.consulting.body': 'Strategy, transformation, valuations and transaction support to help leadership teams act with conviction.',
    'service.tech.title': 'Tech & Software',
    'service.tech.body': 'Digital transformation, data, automation, AI and custom software solutions built around the way your business actually works.',
    'model.eyebrow': 'How the network works',
    'model.title': 'A unified brand. Specialist firms. A scalable alliance.',
    'model.lead': 'T10Global is built so the client always feels one team — and so member firms keep the independence they need to be the best in their discipline.',
    'model.s1.step': '01 · Brand',
    'model.s1.title': 'A single seal of quality',
    'model.s1.body': 'T10Global stands for a shared promise: senior involvement, integrated thinking, and clear communication on every engagement.',
    'model.s2.step': '02 · Firms',
    'model.s2.title': 'Specialists, not generalists',
    'model.s2.body': 'Each member firm leads its discipline. Together, they cover the full set of needs of a modern, ambitious business.',
    'model.s3.step': '03 · Alliance',
    'model.s3.title': 'Designed to grow',
    'model.s3.body': 'The model scales naturally — new offices, new disciplines and new partners can join without diluting the standard.',
    'why.eyebrow': 'Why T10Global',
    'why.title': 'Built around what clients actually value.',
    'why.lead': 'Four principles that show up in every engagement, from a first conversation to a multi-year partnership.',
    'why.c1.title': 'Partner-led',
    'why.c1.body': 'A senior partner is involved in every engagement, end to end. No hand-offs after the kick-off meeting.',
    'why.c2.title': 'Constant communication',
    'why.c2.body': 'Clear, fast and honest. Clients hear from us before they ask — and never have to chase an update.',
    'why.c3.title': 'Integrated response',
    'why.c3.body': 'When a question touches several disciplines, the right specialists arrive together — not in a queue.',
    'why.c4.title': 'Technology-driven',
    'why.c4.body': 'Modern tools, automation and AI sit inside every line of service — not just the technology practice.',
    'offices.eyebrow': 'Where to find us',
    'offices.title': 'Our Presence.',
    'offices.lead': 'Headquartered in the Canary Islands.',
    'offices.hq.tag': 'Headquarters',
    'offices.hq.title': 'Santa Cruz de Tenerife',
    'offices.hq.address': 'Av. de Anaga 24, 38001 Santa Cruz de Tenerife, Canary Islands, Spain',
    'cta.title': "Let's talk about what's next.",
    'cta.lead': "Tell us about your business, your challenge or the opportunity in front of you. A partner will get back to you within one working day.",
    'cta.button': 'info@t10global.com',
    'footer.tagline': 'A curated alliance of professional firms — audit, tax, legal, consulting and technology, delivered as one team.',
    'footer.services': 'Services',
    'footer.network': 'Network',
    'footer.contact': 'Contact',
    'footer.why': 'Why T10Global',
    'footer.hqline': 'HQ — Tenerife, Spain',
    'footer.copyright': '© 2026 T10Global. All rights reserved.',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.notice': 'Legal notice',
    'footer.legal.cookies': 'Cookies',
    'chat.title': 'Ask Aria',
    'chat.welcome': "Hi there! I'm Aria, your T10Global guide. Whether you're curious about our services, how we work, or just want to know who to contact — I'm here to help. What's on your mind?",
    'chat.placeholder': 'Type your question…',
    'chat.limit': "You've reached the session limit — but our team would love to continue the conversation!",
    'chat.limit.email': 'Email us directly',
    'chat.error': "Hmm, something went wrong on my end. Sorry about that! You can reach us directly at info@t10global.com.",
    '_doc.title': 'T10Global — A global network of top-tier professional firms',
    '_doc.description': 'T10Global is a curated alliance of professional firms delivering audit, tax, legal, consulting and technology services to ambitious businesses.',
  },
  es: {
    'skip': 'Saltar al contenido',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.model': 'Modelo',
    'nav.offices': 'Oficina',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Red global de firmas profesionales',
    'hero.title.part1': 'Las diez disciplinas clave.',
    'hero.title.part2': 'Una sola red global.',
    'hero.lead': 'T10Global es una alianza seleccionada de firmas independientes que prestan servicios de auditoría, fiscal, legal, consultoría y tecnología con la cercanía de un socio local y el alcance de una red global.',
    'hero.cta.primary': 'Ver nuestros servicios',
    'hero.cta.secondary': 'Hablemos',
    'hero.stat1': 'Líneas de servicio integradas',
    'hero.stat2': 'Oficina en Tenerife',
    'hero.stat3': 'Red global unificada',
    'pillar.audit': 'Auditoría',
    'pillar.audit.tag': 'Confianza y control',
    'pillar.tax': 'Fiscal',
    'pillar.tax.tag': 'Rigor normativo',
    'pillar.legal': 'Legal',
    'pillar.legal.tag': 'Seguridad jurídica',
    'pillar.consulting': 'Consultoría y Corporate Finance',
    'pillar.consulting.tag': 'Visión estratégica',
    'pillar.tech': 'Tecnología y Software',
    'pillar.tech.tag': 'Ventaja digital',
    'ten.eyebrow': 'El significado detrás del 10',
    'ten.title': 'Por qué "10"',
    'ten.lead': 'Diez es el estándar del trabajo excelente. Diez es la forma corta de una respuesta completa. Diez es lo que queremos ser para cada cliente al que servimos.',
    'ten.c1.title': 'Trabajo de máximo nivel',
    'ten.c1.body': 'Apuntamos a un 10 en cada encargo, con socios senior implicados de principio a fin.',
    'ten.c2.title': 'Una respuesta completa',
    'ten.c2.body': 'Un único interlocutor coordina auditoría, fiscal, legal, consultoría y tecnología juntos.',
    'ten.c3.title': 'Una alianza seleccionada',
    'ten.c3.body': 'Firmas independientes especialistas, escogidas y alineadas bajo un mismo estándar de cuidado.',
    'ten.c4.title': 'Global por diseño',
    'ten.c4.body': 'Cercanía local en cada oficina, capacidad de red cuando el cliente cruza una frontera.',
    'services.eyebrow': 'Qué hacemos',
    'services.title': 'Cinco disciplinas. Una respuesta integrada.',
    'services.lead': 'Cada línea opera con su propia profundidad de especialización, unidas por un mismo estándar de calidad, comunicación y responsabilidad.',
    'service.audit.title': 'Auditoría',
    'service.audit.body': 'Revisión independiente, control interno y transparencia que generan confianza ante accionistas, reguladores y socios.',
    'service.tax.title': 'Fiscal',
    'service.tax.body': 'Planificación fiscal estratégica, cumplimiento y asesoramiento especializado para grupos, empresa familiar y operaciones transfronterizas.',
    'service.legal.title': 'Legal',
    'service.legal.body': 'Asesoramiento mercantil, societario, contractual y regulatorio con tres décadas de experiencia en el mundo empresarial.',
    'service.consulting.title': 'Consultoría y Corporate Finance',
    'service.consulting.body': 'Estrategia, transformación, valoraciones y soporte a operaciones para que los equipos directivos actúen con convicción.',
    'service.tech.title': 'Tecnología y Software',
    'service.tech.body': 'Transformación digital, datos, automatización, IA y soluciones de software a medida pensadas para cómo funciona realmente tu negocio.',
    'model.eyebrow': 'Cómo funciona la red',
    'model.title': 'Una marca común. Firmas especialistas. Una alianza escalable.',
    'model.lead': 'T10Global está diseñada para que el cliente siempre sienta un solo equipo, y para que las firmas miembro mantengan la independencia que necesitan para ser las mejores en su disciplina.',
    'model.s1.step': '01 · Marca',
    'model.s1.title': 'Un sello común de calidad',
    'model.s1.body': 'T10Global representa una promesa compartida: implicación senior, pensamiento integrado y comunicación clara en cada encargo.',
    'model.s2.step': '02 · Firmas',
    'model.s2.title': 'Especialistas, no generalistas',
    'model.s2.body': 'Cada firma miembro lidera su disciplina. Juntas, cubren todas las necesidades de una empresa moderna y ambiciosa.',
    'model.s3.step': '03 · Alianza',
    'model.s3.title': 'Diseñada para crecer',
    'model.s3.body': 'El modelo escala con naturalidad: pueden sumarse nuevas oficinas, disciplinas y socios sin diluir el estándar.',
    'why.eyebrow': 'Por qué T10Global',
    'why.title': 'Construida en torno a lo que el cliente realmente valora.',
    'why.lead': 'Cuatro principios que aparecen en cada encargo, desde la primera conversación hasta una relación de varios años.',
    'why.c1.title': 'Liderado por socios',
    'why.c1.body': 'Un socio senior se implica en cada encargo, de principio a fin. Sin traspasos tras la reunión inicial.',
    'why.c2.title': 'Comunicación constante',
    'why.c2.body': 'Clara, rápida y honesta. Los clientes saben de nosotros antes de preguntar y nunca tienen que perseguir una actualización.',
    'why.c3.title': 'Respuesta integrada',
    'why.c3.body': 'Cuando un tema cruza varias disciplinas, los especialistas adecuados llegan juntos, no en cola.',
    'why.c4.title': 'Impulsada por la tecnología',
    'why.c4.body': 'Herramientas modernas, automatización e IA están dentro de cada línea de servicio, no solo en la práctica tecnológica.',
    'offices.eyebrow': 'Dónde encontrarnos',
    'offices.title': 'Nuestra oficina.',
    'offices.lead': 'Sede en las Islas Canarias.',
    'offices.hq.tag': 'Sede',
    'offices.hq.title': 'Santa Cruz de Tenerife',
    'offices.hq.address': 'Av. de Anaga 24, 38001 Santa Cruz de Tenerife, Islas Canarias, España',
    'cta.title': 'Hablemos de lo que viene.',
    'cta.lead': 'Cuéntanos sobre tu negocio, tu reto o la oportunidad que tienes delante. Un socio te responderá en un día laborable.',
    'cta.button': 'info@t10global.com',
    'footer.tagline': 'Una alianza seleccionada de firmas profesionales: auditoría, fiscal, legal, consultoría y tecnología, prestadas como un solo equipo.',
    'footer.services': 'Servicios',
    'footer.network': 'Red',
    'footer.contact': 'Contacto',
    'footer.why': 'Por qué T10Global',
    'footer.hqline': 'Sede — Tenerife, España',
    'footer.copyright': '© 2026 T10Global. Todos los derechos reservados.',
    'footer.legal.privacy': 'Privacidad',
    'footer.legal.notice': 'Aviso legal',
    'footer.legal.cookies': 'Cookies',
    'chat.title': 'Habla con Aria',
    'chat.welcome': '¡Hola! Soy Aria, tu guía en T10Global. Si tienes dudas sobre nuestros servicios, cómo trabajamos o con quién contactar, estoy aquí para ayudarte. ¿En qué puedo ayudarte hoy?',
    'chat.placeholder': 'Escribe tu pregunta…',
    'chat.limit': '¡Has llegado al límite de la sesión! Pero nuestro equipo estará encantado de seguir la conversación.',
    'chat.limit.email': 'Escríbenos directamente',
    'chat.error': 'Vaya, algo ha fallado por mi parte. ¡Disculpa! Puedes contactarnos directamente en info@t10global.com.',
    '_doc.title': 'T10Global — Una red global de firmas profesionales de primer nivel',
    '_doc.description': 'T10Global es una alianza seleccionada de firmas profesionales que ofrece servicios de auditoría, fiscal, legal, consultoría y tecnología a empresas ambiciosas.',
  },
} as const

type TranslationKey = keyof typeof translations.en

interface I18nContextValue {
  lang: Lang
  t: (key: TranslationKey) => string
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  t: (key) => translations.en[key] ?? key,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    let detected: Lang = 'en'
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (saved === 'en' || saved === 'es') { detected = saved }
      else { detected = (navigator.language?.toLowerCase() ?? 'en').startsWith('es') ? 'es' : 'en' }
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(detected)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }

  const t = (key: TranslationKey): string =>
    (translations[lang] as Record<string, string>)[key] ?? (translations.en as Record<string, string>)[key] ?? key

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
