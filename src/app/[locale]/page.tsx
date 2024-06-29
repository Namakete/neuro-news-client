import { LocaleSwitcher, ThemeSwitcher } from '@component/inputs/Switcher'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@source/navigation'
import { Locale } from '@source/navigation'

const HomePage = () => {
  const t = useTranslations('Index')
  const locale = useLocale() as Locale

  return (
    <div className="flex flex-col p-4">
      <h1 className="font-bold">{t('title_home')}</h1>
      <LocaleSwitcher locale={locale} />
      <ThemeSwitcher className="flex" />
      <Link href={'/auth'} locale={locale as any}>
        {t('title_auth')}
      </Link>
    </div>
  )
}

export default HomePage
