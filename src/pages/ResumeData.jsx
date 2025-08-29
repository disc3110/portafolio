import Section from '../components/Section'
import { useT } from '../i18n/i18n.jsx'

export default function ResumeData() {
  const { t, lang } = useT()
  const pdfHref = lang === 'es' ? '/resume-data-es.pdf' : '/resume-data.pdf'
  const openLabel = lang === 'es' ? 'Abrir PDF' : 'Open PDF'
  const dlLabel = t?.download || (lang === 'es' ? 'Descargar' : 'Download')

  return (
    <Section id="resume-data" title={t?.resumes?.data || (lang === 'es' ? 'CV — Análisis de Datos' : 'Resume — Data Analysis')}>
      <p className="opacity-80">
        {lang === 'es'
          ? 'Descarga mi CV enfocado en Análisis de Datos:'
          : 'Download my resume focused on Data Analysis:'}
      </p>
      <div className="mt-4 flex gap-4">
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href={pdfHref} target="_blank" rel="noreferrer">
          {openLabel}
        </a>
        <a className="px-4 py-2 border rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800" href={pdfHref} download>
          {dlLabel}
        </a>
      </div>
    </Section>
  )
}