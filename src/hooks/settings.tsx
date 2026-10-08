import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Lang } from '@/content'

type Theme = 'light' | 'dark'

interface SettingsCtx {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

const Ctx = createContext<SettingsCtx | null>(null)

function initialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'dark' ? 'dark' : 'light'
}

function initialLang(): Lang {
  const attr = document.documentElement.getAttribute('lang')
  return (['en', 'ka'] as const).find((l) => l === attr) ?? 'en'
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('proxied-manual-theme', theme)
    } catch {}
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem('proxied-manual-lang', lang)
    } catch {}
  }, [lang])

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )
  const setLang = useCallback((l: Lang) => setLangState(l), [])

  return (
    <Ctx.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </Ctx.Provider>
  )
}

export function useSettings(): SettingsCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useSettings outside provider')
  return ctx
}
