import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useT } from '../i18n/i18n.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const { t } = useT()
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    dark ? root.classList.add('dark') : root.classList.remove('dark')
  }, [dark])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (to) => (pathname === to ? 'underline underline-offset-4' : 'hover:underline')

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="font-bold">{t.brand}</Link>

        <div className="hidden md:flex items-center gap-4">
          <Link className={isActive('/')} to="/">{t.nav.home}</Link>
          <a href="#about" className="hover:underline">{t.nav.about}</a>
          <a href="#projects" className="hover:underline">{t.nav.projects}</a>
          <a href="#skills" className="hover:underline">{t.nav.skills}</a>
          <a href="#data" className="hover:underline">{t.nav.data}</a>
          <Link className={isActive('/resumes')} to="/resumes">{t.nav.resumes}</Link>
          <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          <button onClick={() => setDark(d => !d)} className="px-3 py-1 border rounded-md" aria-pressed={dark}>
            {dark ? 'Light' : 'Dark'}
          </button>
          <LanguageToggle />
        </div>

        <button onClick={() => setOpen(o => !o)} className="md:hidden" aria-expanded={open}>☰</button>
      </div>

      {open && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-3 bg-white dark:bg-zinc-900">
          <Link to="/">{t.nav.home}</Link>
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#data">{t.nav.data}</a>
          <Link to="/resumes">{t.nav.resumes}</Link>
          <a href="#contact">{t.nav.contact}</a>
          <div className="flex gap-3">
            <button onClick={() => setDark(d => !d)} className="px-3 py-1 border rounded-md">{dark ? 'Light' : 'Dark'}</button>
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  )
}