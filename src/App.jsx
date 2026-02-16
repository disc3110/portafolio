import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [activeSectionTitle, setActiveSectionTitle] = useState('')
  const [navMenuOpen, setNavMenuOpen] = useState(false)

  useEffect(() => {
    const homeEl = document.getElementById('home')
    if (!homeEl) {
      // If for any reason we can't find the section, keep the navbar visible
      setShowNavbar(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide navbar while Home is prominently visible
        setShowNavbar(!entry.isIntersecting)
      },
      {
        root: null,
        // When ~60% of Home is visible, consider it "in Home"
        threshold: 0.6,
      }
    )

    observer.observe(homeEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionEls = Array.from(
      document.querySelectorAll('section[data-section-title]')
    ).filter((el) => el.getAttribute('data-section-title'))

    if (sectionEls.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry that is currently intersecting and most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))

        if (visible.length > 0) {
          const title = visible[0].target.getAttribute('data-section-title') || ''
          setActiveSectionTitle(title)
        }
      },
      {
        root: null,
        // Bias toward the section near the middle of the viewport
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="h-[100svh] flex flex-col overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {showNavbar && <Navbar onMenuOpenChange={setNavMenuOpen} />}
      {showNavbar && activeSectionTitle && !navMenuOpen && (
        <div id="active-page" className="fixed left-4 top-[calc(4rem+env(safe-area-inset-top)+0.75rem)] sm:top-[calc(5rem+env(safe-area-inset-top)+0.75rem)] z-50 pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/70 px-4 py-2 shadow-lg backdrop-blur transition-all duration-300 ease-out translate-y-0 opacity-100 dark:border-zinc-800/60 dark:bg-zinc-950/60">
            <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
              {activeSectionTitle}
            </span>
          </div>
        </div>
      )}
      <main
        className={`flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory ${
          showNavbar
            ? 'pt-[calc(4rem+env(safe-area-inset-top))] sm:pt-[calc(5rem+env(safe-area-inset-top))]'
            : ''
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="snap-start min-h-[100svh] flex">
                  <Home />
                </section>
                <div className="snap-start">
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
        <footer className="snap-start scroll-ms-6border-t py-10 text-center opacity-70">
          © {new Date().getFullYear()} Diego Solís — All rights reserved.
        </footer>
      </main>
      <Analytics />
    </div>
  )
}