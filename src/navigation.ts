import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'ru'] as const

export type Locale = (typeof locales)[number]

export const localePrefix: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
