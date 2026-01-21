import Section from '../components/Section'
import { useT } from '../i18n/i18n.jsx'

export default function ResumeSoftware() {
  const { t, lang } = useT()
  const pdfHref = lang === 'es' ? '/resume-software-es.pdf' : '/resume-software.pdf'
  const openLabel = lang === 'es' ? 'Abrir PDF' : 'Open PDF'
  const dlLabel = t?.download || (lang === 'es' ? 'Descargar' : 'Download')

  return (
    <Section id="resume-software" title={t?.resumes?.software || (lang === 'es' ? 'CV — Ingeniería de Software' : 'Resume — Software Engineering')}>
      <p className="opacity-80">
        {lang === 'es'
          ? 'Descarga mi CV enfocado en Ingeniería de Software:'
          : 'Download my resume focused on Software Engineering:'}
      </p>

      <div className="mt-4 flex gap-4">
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href={pdfHref} target="_blank" rel="noreferrer">
          {openLabel}
        </a>
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href={pdfHref} download>
          {dlLabel}
        </a>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">{lang === 'es' ? 'Puntos Clave' : 'Highlights'}</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm opacity-90">
          <li>Backend: Node.js & Express; RESTful API design, authentication, MVC architecture</li>
          <li>Databases: PostgreSQL & MySQL; relational schema design, joins, and optimized SQL queries</li>
          <li>Frontend: React + TailwindCSS; reusable components, responsive layouts, accessibility basics</li>
          <li>Tooling & Workflow: Git/GitHub, Docker (basics), environment variables, CI/CD fundamentals</li>
        </ul>
      </div>
    </Section>
  )
}