import '@style/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { getMessages } from 'next-intl/server'

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem={true} key={locale}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
