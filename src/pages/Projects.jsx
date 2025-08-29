import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Airbnb Market Analysis — Vancouver',
    description: 'Data analysis project using Python (Pandas, Matplotlib, Seaborn) and PostgreSQL. Performed EDA, visualization, and insights on Airbnb market trends in Vancouver.',
    tags: ['Python','Pandas','PostgreSQL','Matplotlib','Data Analysis'],
    links: { github: 'https://github.com/disc3110/airbnb-market-analysis' }
  },
  {
    title: 'MatchMate — Multiplayer Matchmaking Backend',
    description: 'Backend system built with Python and MySQL to handle matchmaking, persistence, and rating logic. Includes REST API endpoints and optional Docker/Kubernetes setup.',
    tags: ['Python','MySQL','Docker','REST API'],
    links: { github: 'https://github.com/disc3110/matchmate' }
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive personal portfolio built with React, Vite, and Tailwind CSS. Includes bilingual support (EN/ES), dark/light mode, and PDF resume downloads.',
    tags: ['React','Tailwind','Vite'],
    links: { github: 'https://github.com/disc3110/portafolio' }
  },
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