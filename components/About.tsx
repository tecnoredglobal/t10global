'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  const { t } = useI18n()

  return (
    <section className="ten-meaning" id="about">
      <div className="container">
        <RevealOnScroll className="section-title">
          <span className="eyebrow">{t('ten.eyebrow')}</span>
          <h2>{t('ten.title')}</h2>
          <p>{t('ten.lead')}</p>
        </RevealOnScroll>
        <div className="ten-grid">
          <RevealOnScroll>
            <article className="ten-card">
              <div className="num">01</div>
              <h3>{t('ten.c1.title')}</h3>
              <p>{t('ten.c1.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="ten-card">
              <div className="num">02</div>
              <h3>{t('ten.c2.title')}</h3>
              <p>{t('ten.c2.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="ten-card">
              <div className="num">03</div>
              <h3>{t('ten.c3.title')}</h3>
              <p>{t('ten.c3.body')}</p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll>
            <article className="ten-card">
              <div className="num">04</div>
              <h3>{t('ten.c4.title')}</h3>
              <p>{t('ten.c4.body')}</p>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
