'use client'

import { usePathname, useRouter, type Locale } from '@source/navigation'

export const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname()
  const router = useRouter()

  const otherLocale = locale === 'en' ? 'ru' : 'en'

  const changeLocale = () => router.replace(pathname, { locale: otherLocale })

  return (
    <div>
      <button onClick={changeLocale}>{otherLocale.toUpperCase()}</button>
    </div>
  )
}
