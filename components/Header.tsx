'use client'

import { useI18n } from '@/lib/i18n'

export default function Header() {
  const { lang, t, setLang } = useI18n()

  const handleLangSwitch = (target: 'en' | 'es') => {
    document.body.classList.add('lang-fade', 'fading')
    setTimeout(() => {
      setLang(target)
      document.body.classList.remove('fading')
      setTimeout(() => document.body.classList.remove('lang-fade'), 200)
    }, 140)
  }

  return (
    <header>
      <div className="container nav">
        <a href="#top" className="brand" aria-label="T10Global home">
          <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="brandG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a2547" />
                <stop offset="100%" stopColor="#143a6b" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#brandG)" />
            <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeOpacity="0.20" strokeWidth="1.5" />
            <circle cx="32" cy="12" r="3.2" fill="#14b8a6" />
            <circle cx="44" cy="16" r="2.0" fill="#ffffff" fillOpacity="0.85" />
            <circle cx="52" cy="26" r="2.0" fill="#ffffff" fillOpacity="0.7" />
            <circle cx="52" cy="38" r="2.0" fill="#ffffff" fillOpacity="0.55" />
            <circle cx="44" cy="48" r="2.0" fill="#ffffff" fillOpacity="0.55" />
            <circle cx="32" cy="52" r="2.0" fill="#ffffff" fillOpacity="0.55" />
            <circle cx="20" cy="48" r="2.0" fill="#ffffff" fillOpacity="0.55" />
            <circle cx="12" cy="38" r="2.0" fill="#ffffff" fillOpacity="0.7" />
            <circle cx="12" cy="26" r="2.0" fill="#ffffff" fillOpacity="0.85" />
            <circle cx="20" cy="16" r="2.6" fill="#14b8a6" />
          </svg>
          <span className="brand-wordmark">
            <span className="t">T</span>
            <span className="ten">1<span className="zero">0</span></span>
            <span className="global">global</span>
          </span>
        </a>

        <nav className="primary" aria-label="Primary">
          <ul>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#model">{t('nav.model')}</a></li>
            <li><a href="#offices">{t('nav.offices')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              aria-pressed={lang === 'en'}
              onClick={() => handleLangSwitch('en')}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === 'es'}
              onClick={() => handleLangSwitch('es')}
            >
              ES
            </button>
          </div>
          <a className="btn btn-primary nav-cta" href="#contact">{t('nav.contact')}</a>
        </div>
      </div>
    </header>
  )
}
