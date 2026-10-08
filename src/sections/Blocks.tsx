import { pick, type Block, type Lang } from '@/content'

function Cards({ items, lang }: { items: { title: { en: string; ka: string }; text: { en: string; ka: string } }[]; lang: Lang }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((c, i) => (
        <div
          key={i}
          className="relative space-y-2 overflow-hidden rounded-xl border border-border bg-background p-6"
        >
          <h4 className="text-lg leading-7 font-semibold" style={{ color: 'hsl(var(--display))' }}>
            {pick(c.title, lang)}
          </h4>
          <p className="muted mt-2 text-base leading-6">{pick(c.text, lang)}</p>
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 h-14 w-[75px] bg-primary opacity-20 blur-2xl"
          />
        </div>
      ))}
    </div>
  )
}

export default function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <div className="mt-2 flex flex-col gap-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'lead':
            return (
              <p key={i} className="muted text-base leading-6">
                {pick(b.text, lang)}
              </p>
            )
          case 'p':
            return (
              <p key={i} className="muted text-base leading-6">
                {pick(b.text, lang)}
              </p>
            )
          case 'h3':
            return (
              <h3 key={i} className="panel-heading -mb-4">
                {pick(b.text, lang)}
              </h3>
            )
          case 'list':
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="muted flex items-start gap-3 text-base leading-6">
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: 'hsl(var(--secondary))' }}
                      aria-hidden="true"
                    />
                    {pick(it, lang)}
                  </li>
                ))}
              </ul>
            )
          case 'cards':
            return <Cards key={i} items={b.items} lang={lang} />
          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-border">
                <table className="table-docs">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{pick(h, lang)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((cell, k) => (
                          <td key={k} className="muted">
                            {pick(cell, lang)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'steps':
            return (
              <ol key={i} className="flex flex-col">
                {b.items.map((s, j) => (
                  <li key={j} className="relative flex gap-4 pb-6 last:pb-0">
                    {j < b.items.length - 1 && (
                      <span
                        className="absolute left-[15px] top-9 h-[calc(100%-36px)] w-px bg-border"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
                      style={{
                        background: 'hsl(var(--accent))',
                        color: 'hsl(var(--display))',
                      }}
                    >
                      {j + 1}
                    </span>
                    <div>
                      <h4 className="text-lg leading-7 font-semibold" style={{ color: 'hsl(var(--display))' }}>
                        {pick(s.title, lang)}
                      </h4>
                      <p className="muted mt-2 text-base leading-6">{pick(s.text, lang)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )
          case 'note':
            return (
              <aside
                key={i}
                className="rounded-xl border border-border p-4"
                style={{ background: 'hsl(var(--card))' }}
              >
                <h4 className="text-lg leading-7 font-semibold" style={{ color: 'hsl(var(--display))' }}>
                  {pick(b.title, lang)}
                </h4>
                <p className="muted mt-2 text-base leading-6">
                  {pick(b.text, lang)}
                </p>
              </aside>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
