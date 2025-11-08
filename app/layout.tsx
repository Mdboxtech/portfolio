import type { Metadata } from 'next'
import { DM_Sans, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Abdullahi Ali (MD) - Software Engineer',
  description: 'Software Engineer specializing in building secure and scalable web applications. Experienced in Laravel, React, and full-stack development.',
  keywords: ['Software Engineer', 'Web Developer', 'Laravel', 'React', 'Full Stack Developer', 'Muhammad Abdullahi Ali'],
  authors: [{ name: 'Muhammad Abdullahi Ali' }],
  creator: 'Muhammad Abdullahi Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mdali.dev',
    title: 'Muhammad Abdullahi Ali (MD) - Software Engineer',
    description: 'Software Engineer specializing in building secure and scalable web applications.',
    siteName: 'MD Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abdullahi Ali (MD) - Software Engineer',
    description: 'Software Engineer specializing in building secure and scalable web applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Muhammad Abdullahi Ali',
              alternateName: 'MD',
              jobTitle: 'Software Engineer',
              url: 'https://mdali.dev',
              sameAs: [
                'https://github.com/Mdboxtech',
                'https://www.linkedin.com/in/muhammad-abdullahi-ali-a47307292',
              ],
              knowsAbout: ['Software Engineering', 'Web Development', 'Laravel', 'React', 'Full Stack Development'],
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${roboto.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
