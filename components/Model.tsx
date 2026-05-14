'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function Model() {
  const { t } = useI18n()

  return (
    <section className="model" id="model">
      <div className="container">
        <RevealOnScroll className="section-title">
          <span className="eyebrow">{t('model.eyebrow')}</span>
          <h2>{t('model.title')}</h2>
          <p>{t('model.lead')}</p>
        </RevealOnScroll>
        <div className="model-grid">
          <RevealOnScroll>
            <article className="model-card">
              <div className="step">{t('model.s1.step')}</div>
              <h3>{t('model.s1.title')}</h3>
              <p>{t('model.s1.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="model-card">
              <div className="step">{t('model.s2.step')}</div>
              <h3>{t('model.s2.title')}</h3>
              <p>{t('model.s2.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="model-card">
              <div className="step">{t('model.s3.step')}</div>
              <h3>{t('model.s3.title')}</h3>
              <p>{t('model.s3.body')}</p>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
