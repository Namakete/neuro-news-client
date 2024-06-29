'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

type ThemeSwitcherProps = {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className={className}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
