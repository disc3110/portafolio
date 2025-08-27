import Section from '../components/Section'
import { useT } from '../i18n/i18n.jsx'

export default function ResumeSoftware() {
  const { t } = useT()
  return (
    <Section id="resume-software" title={t?.resumes?.software || 'Resume — Software Engineering'}>
      <p className="opacity-80">
        {t?.resumes?.software
          ? 'Download my resume focused on Software Engineering:'
          : 'Download my resume focused on Software Engineering:'}
      </p>

      <div className="mt-4 flex gap-4">
        <a
          className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800"
          href="/resume-software.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
        </a>
        <a
          className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800"
          href="/resume-software.pdf"
          download
        >
          {t?.download || 'Download'}
        </a>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Highlights</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm opacity-90">
          <li>Backend: Python (Flask/Django basics), Java (Spring Boot basics), REST APIs</li>
          <li>Databases: MySQL, PostgreSQL; schema design & SQL queries</li>
          <li>Tooling: Git/GitHub, Docker, Vite, CI basics</li>
          <li>Frontend: React + Tailwind (component-driven, responsive UI)</li>
        </ul>
      </div>
    </Section>
  )
}