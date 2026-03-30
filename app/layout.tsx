import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ToolHub - Безкоштовні онлайн інструменти',
  description: 'Найкращі безкоштовні онлайн інструменти: генератор паролів, QR-кодів, конвертер тексту та багато іншого. Швидко, безпечно, без реєстрації.',
  keywords: 'генератор паролів, QR код онлайн, конвертер тексту, безкоштовні інструменти, онлайн утиліти',
  openGraph: {
    title: 'ToolHub - Безкоштовні онлайн інструменти',
    description: 'Найкращі безкоштовні онлайн інструменти для щоденних завдань',
    type: 'website',
    locale: 'uk_UA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {children}
      </body>
    </html>
  )
}