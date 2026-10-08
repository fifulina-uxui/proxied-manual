import { Routes, Route } from 'react-router'
import { SettingsProvider } from './hooks/settings'
import Home from './pages/Home'

export default function App() {
  return (
    <SettingsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SettingsProvider>
  )
}
