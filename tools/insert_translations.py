#!/usr/bin/env python3
"""Insert ru/de/es translations next to each en value in a content file.

Matches `en: '...'` anywhere in a line (standalone or inline in an object)
and inserts `, ru: '...', de: '...', es: '...'` right after the en value.
Translations come sequentially from a data module:
    TRIPLES = [("ru", "de", "es"), ...]
Processing starts at `export const chapters` (skips ui/types blocks).
"""
import re
import sys

sys.path.insert(0, '/Users/fifulina/Documents/Kimi/Workspaces/Proxied/app/tools')

EN_RE = re.compile(r"en: '((?:[^'\\]|\\.)*)'")


def ts_escape(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


def main():
    data_path, target_path = sys.argv[1], sys.argv[2]
    spec = __import__(data_path.replace('.py', ''))
    triples = iter(spec.TRIPLES)

    with open(target_path, encoding='utf-8') as f:
        lines = f.readlines()

    out = []
    in_chapters = False
    used = 0

    def repl(m):
        nonlocal used
        try:
            ru, de, es = next(triples)
        except StopIteration:
            raise RuntimeError(f'ran out of triples near: {m.group(0)[:80]}')
        used += 1
        return (
            m.group(0)
            + f", ru: '{ts_escape(ru)}'"
            + f", de: '{ts_escape(de)}'"
            + f", es: '{ts_escape(es)}'"
        )

    try:
        for line in lines:
            if not in_chapters and line.startswith('export const chapters'):
                in_chapters = True
            if in_chapters:
                line = EN_RE.sub(repl, line)
            out.append(line)
    except RuntimeError as e:
        print(f'ERROR: {e}')
        sys.exit(1)

    rest = list(triples)
    if rest:
        print(f'ERROR: {len(rest)} unused triples (used {used})')
        sys.exit(1)

    with open(target_path, 'w', encoding='utf-8') as f:
        f.writelines(out)
    print(f'OK: inserted translations for {used} en-values in {target_path}')

if __name__ == '__main__':
    main()
