import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  )
}