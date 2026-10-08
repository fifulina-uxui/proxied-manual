import { pick, ui } from '@/content'
import { useSettings } from '@/hooks/settings'
import { Logo } from './Header'

export default function Footer() {
  const { lang } = useSettings()
  const year = 2026
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-px flex flex-col gap-4 py-12 md:flex-row md:items-center md:gap-[88px]">
        <a href="#top" aria-label="Proxied manual" className="focus-ring inline-flex shrink-0 rounded-md">
          <Logo height={24} />
        </a>
        <p className="muted flex-1 text-sm leading-5 md:text-right">{pick(ui.footerTagline, lang)}</p>
      </div>
      <div className="border-t border-border">
        <div className="container-px flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-[88px]">
          <p className="muted text-xs leading-5">© {year} Proxied Limited</p>
          <p className="muted flex-1 text-xs leading-5 md:text-right">{pick(ui.footerLegal, lang)}</p>
        </div>
      </div>
    </footer>
  )
}
