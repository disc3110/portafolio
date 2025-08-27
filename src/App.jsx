import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import DataShowcase from './pages/DataShowcase'
import Contact from './pages/Contact'
import ResumesHub from './pages/ResumesHub'
import ResumeData from './pages/ResumeData'
import ResumeSoftware from './pages/ResumeSoftware'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <About />
                <Projects />
                <Skills />
                <DataShowcase />
                <Contact />
              </>
            }
          />

          <Route path="/resumes" element={<ResumesHub />} />
          <Route path="/resumes/data" element={<ResumeData />} />
          <Route path="/resumes/software" element={<ResumeSoftware />} />
        </Routes>
      </main>
      <footer className="border-t py-10 text-center opacity-70">
        © {new Date().getFullYear()} Diego Solís — All rights reserved.
      </footer>
    </div>
  )
}