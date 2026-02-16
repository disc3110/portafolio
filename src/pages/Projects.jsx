import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import { useT } from '../i18n/i18n.jsx'

export default function Projects() {
  const { lang , t} = useT()

  return (
    <Section id="projects" title={t.sections.projects || 'Featured Projects'}>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects[lang].map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  )
}