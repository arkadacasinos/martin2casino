import { Analytics } from '@vercel/analytics/next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const serif = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
  variable: '--x4v7-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--x4v7-sans',
  display: 'swap',
})

const SITE_URL = 'https://martin-casino.com'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <title>
          Martin Casino официальный сайт — играть онлайн и рабочее зеркало |
          Мартин Казино
        </title>
        <meta
          name="description"
          content="Martin Casino официальный сайт и рабочее зеркало. Играть в слоты и рулетку онлайн, быстрые выплаты и честные условия. Мартин казино — регистрация, бонусы и вход в один клик."
        />
        <meta
          name="keywords"
          content="martin casino, martin casino официальный сайт, martin casino официальный, martin casino зеркало, мартин казино, martin casino играть, мартин казино официальный сайт, мартин казино официальный, martin казино, мартин казино онлайн, мартин казино играть, мартин казино зеркало, мартин казино зеркало рабочее"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e3b2e" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta
          property="og:title"
          content="Martin Casino официальный сайт — играть онлайн и рабочее зеркало"
        />
        <meta
          property="og:description"
          content="Martin Casino официальный сайт и рабочее зеркало. Играть в слоты и рулетку онлайн, быстрые выплаты и честные условия."
        />
        <meta property="og:site_name" content="Martin Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Martin Casino официальный сайт — играть онлайн и рабочее зеркало"
        />
        <meta
          name="twitter:description"
          content="Martin Casino официальный сайт и рабочее зеркало. Играть в слоты и рулетку онлайн, быстрые выплаты."
        />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
