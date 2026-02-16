import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useT } from '../i18n/i18n.jsx'
import logo from '../assets/logo.svg'

export default function Navbar({ onMenuOpenChange = () => {} }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    // Default to dark unless user previously chose a theme
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') return true
    if (saved === 'light') return false
    return true
  })
  const { t } = useT()
  const { pathname } = useLocation()
  const sectionHref = (id) => `/#${id}`

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.dataset.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.dataset.theme = 'light'
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    onMenuOpenChange(open)
  }, [open, onMenuOpenChange])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
      <div  className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <a href={sectionHref('home')} className="flex items-center gap-3 font-bold">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <span>{t.brand}</span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a href={sectionHref('projects')} className="hover:underline">
            {t.nav.projects}
          </a>
          <a href={sectionHref('contact')} className="hover:underline">
            {t.nav.contact}
          </a>
          <a href={sectionHref('skills')} className="hover:underline">
            {t.nav.skills}
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-3 py-1 border rounded-md"
            aria-pressed={dark}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <LanguageToggle />
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-3 bg-white dark:bg-zinc-900">
          <a href={sectionHref('projects')}>{t.nav.projects}</a>
          <a href={sectionHref('skills')}>{t.nav.skills}</a>
          <a href={sectionHref('contact')}>{t.nav.contact}</a>
          <div className="flex gap-3">
            <button
              onClick={() => setDark((d) => !d)}
              className="px-3 py-1 border rounded-md"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  )
}