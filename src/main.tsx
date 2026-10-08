import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource/geist/400.css'
import '@fontsource/geist/500.css'
import '@fontsource/geist/600.css'
import '@fontsource/geist/700.css'
import '@fontsource/noto-sans-georgian/400.css'
import '@fontsource/noto-sans-georgian/500.css'
import '@fontsource/noto-sans-georgian/600.css'
import '@fontsource/noto-sans-georgian/700.css'
import './index.css'
import App from './App.tsx'

// GitHub Pages serves the app from a subpath (/proxied-manual/). Derive the
// router basename from the module script URL so routing works both locally
// (served at "/") and on the deployed subpath, regardless of the base option.
const moduleSrc = document.querySelector<HTMLScriptElement>('script[type="module"]')?.src ?? ''
const basename = moduleSrc.replace(/https?:\/\/[^/]+/, '').replace(/\/assets\/[^/]*$/, '') || '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
