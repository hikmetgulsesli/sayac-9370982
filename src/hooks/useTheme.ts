import { useState, useCallback, useEffect } from 'react'
import type { Theme } from '../types'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('sayac-theme')
    return (stored as Theme) || 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('sayac-theme', theme)
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  return { theme, toggleTheme }
}