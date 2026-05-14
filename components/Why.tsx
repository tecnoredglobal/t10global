'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function Why() {
  const { t } = useI18n()

  return (
    <section id="why">
      <div className="container">
        <RevealOnScroll className="section-title">
          <span className="eyebrow">{t('why.eyebrow')}</span>
          <h2>{t('why.title')}</h2>
          <p>{t('why.lead')}</p>
        </RevealOnScroll>
        <div className="why-grid">
          <RevealOnScroll>
            <article className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <h3>{t('why.c1.title')}</h3>
              <p>{t('why.c1.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-7.6-4.7L3 21l1.7-1.4A8.38 8.38 0 0 1 3 11.5a8.5 8.5 0 0 1 17 0z" />
                </svg>
              </div>
              <h3>{t('why.c2.title')}</h3>
              <p>{t('why.c2.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M3 12h18" />
                  <path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" />
                </svg>
              </div>
              <h3>{t('why.c3.title')}</h3>
              <p>{t('why.c3.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l-3-3 3-3" /><path d="M15 6l3 3-3 3" />
                  <path d="M6 15h12" /><path d="M6 9h12" />
                </svg>
              </div>
              <h3>{t('why.c4.title')}</h3>
              <p>{t('why.c4.body')}</p>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
