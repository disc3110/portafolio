import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'MatchMate — Multiplayer Matchmaking Backend',
    description: 'Python + MySQL + Docker. REST API para matchmaking, persistencia y rating.',
    tags: ['Python','MySQL','Docker','REST API'],
    links: { github: 'https://github.com/<tu-usuario>/matchmate' }
  },
  {
    title: 'Portfolio Website',
    description: 'React + Tailwind + Vite. Sitio limpio y responsivo para mostrar proyectos y skills.',
    tags: ['React','Tailwind','Vite'],
    links: { github: 'https://github.com/<tu-usuario>/diego-portfolio' }
  },
  {
    title: 'Dataset Analysis — EDA & Viz',
    description: 'Python (Pandas/Matplotlib). Limpieza, EDA y gráficas; notebook en GitHub.',
    tags: ['Python','Pandas','Matplotlib','EDA'],
    links: { github: 'https://github.com/<tu-usuario>/eda-demo' }
  }
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  )
}