import { pick, ui } from '@/content'
import { useSettings } from '@/hooks/settings'
import patternDots from '@/assets/pattern-dots.png'

export default function Hero() {
  const { lang } = useSettings()
  return (
    <section id="top" className="mt-[104px]">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-2xl border border-border px-6 py-8 text-center md:py-12">
          {/* Dot pattern, top right */}
          <img
            src={patternDots}
            aria-hidden="true"
            alt=""
            className="pointer-events-none absolute -top-8 -right-8 w-56 opacity-70 invert select-none dark:invert-0 md:w-72"
          />
          {/* Light blue blur, like the cards */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-20 w-[100px] bg-primary opacity-20 blur-2xl"
          />
          <div className="relative flex flex-col items-center">
            <span className="badge-brand mb-3">{pick(ui.trustBadge, lang)}</span>
            <div className="w-full max-w-[640px]">
              <h1 className="display-heading">{pick(ui.heroTitle, lang)}</h1>
              <p className="muted mt-1 text-base leading-6">
                {pick(ui.heroSubtitle, lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
