import Section from '../components/Section'
import { useT } from '../i18n/i18n.jsx'

export default function ResumeData() {
  const { t } = useT()
  return (
    <Section id="resume-data" title={t?.resumes?.data || 'Resume — Data Analysis'}>
      <p className="opacity-80">
        {t?.resumes?.data
          ? 'Download my resume focused on Data Analysis:'
          : 'Download my resume focused on Data Analysis:'}
      </p>
      <div className="mt-4 flex gap-4">
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href="/resume-data.pdf" target="_blank" rel="noreferrer">
          Open PDF
        </a>
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href="/resume-data.pdf" download>
          {t?.download || 'Download'}
        </a>
      </div>
    </Section>
  )
}