import { createContext, useContext, useEffect, useState, useCallback } from 'react'

/*
  ThemeContext — global site theme
  ────────────────────────────────
  Four themes: A1 Botanical, A2 Aurora Sky, A4 Sunrise, A5 Bokeh Gold.
  Stored in localStorage so it survives page navigation.
  Applied via data-theme attribute on <html> so CSS can scope everything.
*/

export const THEMES = [
  {
    k: 'A1',
    name: 'Botanical',
    sub: 'sunlight + leaves',
    swatch: ['#4a1f15', '#3a7a5c', '#d68a8e'],
  },
  {
    k: 'A2',
    name: 'Aurora Sky',
    sub: 'color-shifting',
    swatch: ['#4a8a8a', '#c14a8a', '#d4af6a'],
  },
  {
    k: 'A4',
    name: 'Sunrise',
    sub: 'gradient + dust',
    swatch: ['#4a1410', '#d4704a', '#f1d9a0'],
  },
  {
    k: 'A5',
    name: 'Bokeh Gold',
    sub: 'soft light orbs',
    swatch: ['#3a1015', '#c14a4f', '#d4af6a'],
  },
]

const STORAGE_KEY = 'saman.theme'

const ThemeContext = createContext({
  theme: 'A1',
  setTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'A1'
    return localStorage.getItem(STORAGE_KEY) || 'A1'
  })

  // Sync to <html data-theme="..."> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(STORAGE_KEY, theme) } catch {}
  }, [theme])

  const setTheme = useCallback((k) => {
    if (THEMES.find(t => t.k === k)) setThemeState(k)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
