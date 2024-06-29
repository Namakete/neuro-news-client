import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@source/navigation'

const AuthPage = () => {
  const t = useTranslations('Index')
  const locale = useLocale()

  return (
    <h1>
      <p>
        <h1>{t('title_auth')}</h1>

        <Link href={'/'} locale={locale as any}>
          {t('title_home')}
        </Link>
      </p>
    </h1>
  )
}

export default AuthPage
