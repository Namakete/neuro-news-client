import createMiddleware from 'next-intl/middleware'
import { locales } from '@source/navigation'

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localeDetection: false,
})

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
}
