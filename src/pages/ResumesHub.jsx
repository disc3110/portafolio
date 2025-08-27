import Section from '../components/Section'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/i18n.jsx'

export default function ResumesHub() {
  const { t } = useT()
  return (
    <Section id="resumes" title={t.nav?.resumes || 'Resumes'}>
      <p className="opacity-80 mb-6">
        {t.nav?.resumes ? 'Choose a resume to view or download:' : 'Choose a resume to view or download:'}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" to="/resumes/data">
          {t.resumes?.data || 'Resume — Data Analysis'}
        </Link>
        <Link className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" to="/resumes/software">
          {t.resumes?.software || 'Resume — Software Engineering'}
        </Link>
      </div>
    </Section>
  )
}