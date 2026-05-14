'use client'

import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand" aria-label="T10Global home">
              <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="64" height="64" rx="14" fill="#143a6b" />
                <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
                <circle cx="32" cy="12" r="3.2" fill="#14b8a6" />
                <circle cx="20" cy="16" r="2.6" fill="#14b8a6" />
                <circle cx="44" cy="16" r="2" fill="#ffffff" fillOpacity="0.7" />
                <circle cx="52" cy="26" r="2" fill="#ffffff" fillOpacity="0.7" />
                <circle cx="52" cy="38" r="2" fill="#ffffff" fillOpacity="0.55" />
                <circle cx="44" cy="48" r="2" fill="#ffffff" fillOpacity="0.55" />
                <circle cx="32" cy="52" r="2" fill="#ffffff" fillOpacity="0.55" />
                <circle cx="20" cy="48" r="2" fill="#ffffff" fillOpacity="0.55" />
                <circle cx="12" cy="38" r="2" fill="#ffffff" fillOpacity="0.7" />
                <circle cx="12" cy="26" r="2" fill="#ffffff" fillOpacity="0.7" />
              </svg>
              <span className="brand-wordmark">
                <span className="t">T</span>
                <span className="ten">1<span className="zero">0</span></span>
                <span className="global">global</span>
              </span>
            </a>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><a href="#services">{t('service.audit.title')}</a></li>
              <li><a href="#services">{t('service.tax.title')}</a></li>
              <li><a href="#services">{t('service.legal.title')}</a></li>
              <li><a href="#services">{t('service.consulting.title')}</a></li>
              <li><a href="#services">{t('service.tech.title')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.network')}</h4>
            <ul>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#model">{t('nav.model')}</a></li>
              <li><a href="#why">{t('footer.why')}</a></li>
              <li><a href="#offices">{t('nav.offices')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="mailto:info@t10global.com">info@t10global.com</a></li>
              <li><span>{t('footer.hqline')}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>{t('footer.copyright')}</div>
          <div className="footer-legal">
            <a href="#">{t('footer.legal.privacy')}</a>
            <a href="#">{t('footer.legal.notice')}</a>
            <a href="#">{t('footer.legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
