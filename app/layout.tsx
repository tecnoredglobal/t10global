import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'T10Global — A global network of top-tier professional firms',
  description: 'T10Global is a curated alliance of professional firms delivering audit, tax, legal, consulting and technology services to ambitious businesses.',
  metadataBase: new URL('https://t10global.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://t10global.com/',
    title: 'T10Global — A global network of top-tier professional firms',
    description: 'A curated alliance of professional firms delivering audit, tax, legal, consulting and technology services.',
  },
  twitter: {
    card: 'summary',
    title: 'T10Global',
    description: 'A curated alliance of professional firms delivering audit, tax, legal, consulting and technology services.',
  },
  other: {
    'theme-color': '#0a2547',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'T10Global',
  url: 'https://t10global.com',
  logo: 'https://t10global.com/favicon.svg',
  description: 'A curated alliance of professional firms delivering audit, tax, legal, consulting and technology services.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@t10global.com',
    contactType: 'customer support',
    availableLanguage: ['en', 'es'],
  },
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Av. de Anaga 24',
      addressLocality: 'Santa Cruz de Tenerife',
      postalCode: '38001',
      addressCountry: 'ES',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
