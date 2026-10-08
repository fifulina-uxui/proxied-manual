import { Globe, Moon, Sun } from 'lucide-react'
import { pick, ui, type Lang } from '@/content'
import { useSettings } from '@/hooks/settings'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import logoLight from '@/assets/logo-light.png'
import logoDark from '@/assets/logo-dark.png'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ka', label: 'ქართული' },
]

export function Logo({ height = 28 }: { height?: number }) {
  return (
    <span className="inline-flex shrink-0 items-center">
      <img
        src={logoLight}
        alt="proxied"
        style={{ height }}
        className="block shrink-0 dark:hidden"
      />
      <img
        src={logoDark}
        alt="proxied"
        style={{ height }}
        className="hidden shrink-0 dark:block"
      />
    </span>
  )
}

export default function Header() {
  const { lang, setLang, theme, toggleTheme } = useSettings()

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 h-20">
      <div className="container-px flex h-full items-center justify-between gap-4">
        <a href="#top" aria-label="Proxied manual" className="focus-ring flex shrink-0 items-center gap-2.5 rounded-md">
          <Logo />
          <span
            className={`badge-brand hidden ${
              lang === 'ka' ? 'min-[1100px]:inline-flex' : 'min-[420px]:inline-flex'
            }`}
          >
            {lang === 'ka' ? 'სახელმძღვანელო' : 'manual'}
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={pick(ui.themeToggle, lang)}
            className="focus-ring relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors duration-150"
            style={{ background: 'hsl(var(--secondary))' }}
          >
            <span
              className={`pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-0 transition-transform duration-150 ${
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
              }`}
            >
              {theme === 'dark' ? (
                <Moon className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Sun className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </span>
          </button>

          <span className="h-6 w-px bg-border" aria-hidden="true" />

          {/* Language switcher */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              aria-label="Language"
              className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent p-0 text-sm font-medium text-muted-foreground transition-colors duration-150"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {lang.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[220px] rounded-xl p-1.5">
              {LANGS.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onSelect={() => setLang(l.code)}
                  className="cursor-pointer rounded-lg px-3 py-2 text-base focus:bg-accent focus:text-foreground data-[highlighted]:bg-accent data-[highlighted]:text-foreground"
                >
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
