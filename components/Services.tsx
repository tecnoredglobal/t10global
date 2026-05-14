'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="services">
      <div className="container">
        <RevealOnScroll className="section-title">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.lead')}</p>
        </RevealOnScroll>

        <div className="services-grid">
          <RevealOnScroll>
            <article className="service">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l2 2 4-4" /><path d="M12 3l8 4v5c0 5-3.4 9.2-8 10-4.6-.8-8-5-8-10V7l8-4z" />
                </svg>
              </div>
              <h3>{t('service.audit.title')}</h3>
              <p>{t('service.audit.body')}</p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll>
            <article className="service">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-6h6v6" /><path d="M9 12h6" />
                </svg>
              </div>
              <h3>{t('service.tax.title')}</h3>
              <p>{t('service.tax.body')}</p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll>
            <article className="service">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" /><path d="M5 21h14" /><path d="M5 8h14" />
                  <path d="M8 8l-3 7h6L8 8z" /><path d="M16 8l-3 7h6l-3-7z" />
                </svg>
              </div>
              <h3>{t('service.legal.title')}</h3>
              <p>{t('service.legal.body')}</p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll>
            <article className="service">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
                </svg>
              </div>
              <h3>{t('service.consulting.title')}</h3>
              <p>{t('service.consulting.body')}</p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll>
            <article className="service">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6l-5 6 5 6" /><path d="M16 6l5 6-5 6" /><path d="M14 4l-4 16" />
                </svg>
              </div>
              <h3>{t('service.tech.title')}</h3>
              <p>{t('service.tech.body')}</p>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
