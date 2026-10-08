import { useEffect, useState } from 'react'
import { allChapters, pick, ui } from '@/content'
import { useSettings } from '@/hooks/settings'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Blocks from '@/sections/Blocks'
import Footer from '@/sections/Footer'

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-120px 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

export default function Home() {
  const { lang } = useSettings()
  const ids = allChapters.map((c) => `chapter-${c.num}`)
  const active = useScrollSpy(ids)

  // Keep the active chapter visible in the mobile contents bar
  useEffect(() => {
    const nav = document.querySelector('nav[data-contents]')
    if (!nav) return
    const link = nav.querySelector(`a[href="#${active}"]`)
    if (!link) return
    link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Mobile contents */}
      <nav
        aria-label={pick(ui.contents, lang)}
        data-contents
        className="site-header sticky top-20 z-40 mt-6 border-y border-border lg:hidden"
      >
        <div className="container-px flex gap-2 overflow-x-auto py-3">
          {allChapters.map((c) => (
            <a
              key={c.id}
              href={`#chapter-${c.num}`}
              className={`focus-ring shrink-0 rounded-lg border px-3 py-1.5 text-sm whitespace-nowrap ${
                active === `chapter-${c.num}`
                  ? 'border-border bg-accent text-foreground'
                  : 'border-transparent text-foreground'
              }`}
            >
              {c.num} · {pick(c.title, lang)}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-px mt-16 mb-4 grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav
            aria-label={pick(ui.contents, lang)}
            className="sticky top-28 flex max-h-[calc(100vh-140px)] flex-col gap-2 overflow-y-auto border-r border-border px-6 py-2"
          >
            {allChapters.map((c) => {
              const isActive = active === `chapter-${c.num}`
              return (
                <a
                  key={c.id}
                  href={`#chapter-${c.num}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`focus-ring block w-full rounded-lg px-3 py-1 text-base leading-6 transition-colors duration-150 ${
                    isActive
                      ? 'bg-accent text-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {c.num} · {pick(c.title, lang)}
                </a>
              )
            })}
          </nav>
        </aside>

        {/* Chapters */}
        <main className="flex flex-col gap-[72px] md:gap-20">
          {allChapters.map((c) => (
            <section key={c.id} id={`chapter-${c.num}`} className="chapter">
              <div className="flex items-center gap-3">
                <span className="badge-brand">
                  {pick(ui.chapter, lang)} {c.num}
                </span>
              </div>
              <h2 className="section-heading mt-6">{pick(c.title, lang)}</h2>
              <Blocks blocks={c.blocks} lang={lang} />
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  )
}
