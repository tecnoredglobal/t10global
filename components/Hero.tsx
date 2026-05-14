'use client'

import { useI18n } from '@/lib/i18n'
import RevealOnScroll from './RevealOnScroll'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <RevealOnScroll>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>
            <span>{t('hero.title.part1')}</span>{' '}
            <span className="accent">{t('hero.title.part2')}</span>
          </h1>
          <p className="hero-lead">{t('hero.lead')}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">{t('hero.cta.primary')}</a>
            <a className="btn btn-secondary" href="#contact">{t('hero.cta.secondary')}</a>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>5</strong>
              <span>{t('hero.stat1')}</span>
            </div>
            <div className="stat">
              <strong>1</strong>
              <span>{t('hero.stat2')}</span>
            </div>
            <div className="stat">
              <strong>1</strong>
              <span>{t('hero.stat3')}</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="hero-card">
          <svg className="constellation" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <radialGradient id="haloG" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a2547" />
                <stop offset="100%" stopColor="#2d7fc1" />
              </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="100" fill="url(#haloG)" />
            <circle cx="120" cy="120" r="78" fill="none" stroke="url(#ringG)" strokeWidth="1.5" strokeOpacity="0.35" />
            <g fill="#0a2547">
              <circle cx="120" cy="42" r="7" />
              <circle cx="166" cy="56" r="5" />
              <circle cx="196" cy="92" r="5" />
              <circle cx="200" cy="138" r="5" />
              <circle cx="174" cy="178" r="5" />
              <circle cx="132" cy="196" r="5" />
              <circle cx="86" cy="190" r="5" />
              <circle cx="50" cy="162" r="5" />
              <circle cx="38" cy="118" r="5" />
            </g>
            <circle cx="58" cy="72" r="9" fill="#14b8a6" />
            <circle cx="58" cy="72" r="14" fill="none" stroke="#14b8a6" strokeOpacity="0.35" strokeWidth="2" />
            <g stroke="#2d7fc1" strokeOpacity="0.28" strokeWidth="1.2" fill="none">
              <line x1="58" y1="72" x2="120" y2="42" />
              <line x1="58" y1="72" x2="38" y2="118" />
              <line x1="58" y1="72" x2="166" y2="56" />
              <line x1="58" y1="72" x2="50" y2="162" />
              <line x1="58" y1="72" x2="120" y2="120" />
            </g>
            <circle cx="120" cy="120" r="34" fill="#fff" stroke="#dbe4ef" strokeWidth="1.5" />
            <text x="120" y="132" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" fontSize="32" fontWeight="800" fill="#0a2547" letterSpacing="-1">
              <tspan>1</tspan><tspan fill="#14b8a6">0</tspan>
            </text>
          </svg>
          <div className="pillars" aria-label="Service pillars">
            <div className="pillar">
              <span className="pillar-name">{t('pillar.audit')}</span>
              <span className="pillar-tag">{t('pillar.audit.tag')}</span>
            </div>
            <div className="pillar">
              <span className="pillar-name">{t('pillar.tax')}</span>
              <span className="pillar-tag">{t('pillar.tax.tag')}</span>
            </div>
            <div className="pillar">
              <span className="pillar-name">{t('pillar.legal')}</span>
              <span className="pillar-tag">{t('pillar.legal.tag')}</span>
            </div>
            <div className="pillar">
              <span className="pillar-name">{t('pillar.consulting')}</span>
              <span className="pillar-tag">{t('pillar.consulting.tag')}</span>
            </div>
            <div className="pillar">
              <span className="pillar-name">{t('pillar.tech')}</span>
              <span className="pillar-tag">{t('pillar.tech.tag')}</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
