'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function CTA() {
  const { t } = useI18n()

  return (
    <section className="cta" id="contact">
      <div className="container cta-box">
        <RevealOnScroll>
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.lead')}</p>
        </RevealOnScroll>
        <a className="btn btn-ghost-light" href="mailto:info@t10global.com">
          {t('cta.button')}
        </a>
      </div>
    </section>
  )
}
