import Section from '../components/Section'
import { useT } from '../i18n/i18n'

export default function About() {
  const { t } = useT()
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl opacity-80">{t.about_text}</p>
    </Section>
  )
}