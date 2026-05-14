'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function Offices() {
  const { lang, t } = useI18n()

  return (
    <section className="offices" id="offices">
      <div className="container">
        <RevealOnScroll className="section-title">
          <span className="eyebrow">{t('offices.eyebrow')}</span>
          <h2>{t('offices.title')}</h2>
          <p>{t('offices.lead')}</p>
        </RevealOnScroll>
        <div className="offices-grid">
          <RevealOnScroll>
            <article className="office">
              <div className="office-flag" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="tag">{t('offices.hq.tag')}</div>
                <h3>{t('offices.hq.title')}</h3>
                <address>
                  Av. de Anaga 24<br />
                  38001 Santa Cruz de Tenerife<br />
                  {lang === 'es' ? 'Islas Canarias, España' : 'Canary Islands, Spain'}
                </address>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
