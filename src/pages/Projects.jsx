import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/data/projects.json')
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  )
}