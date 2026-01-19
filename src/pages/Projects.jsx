import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Members Only — Authentication & Roles App',
    description: 'Full-stack Node.js application where users can post anonymous messages publicly, while club members can see authors, comment, and interact inside a private area. Includes authentication, role-based authorization (member/admin), comments, and PostgreSQL relational constraints.',
    tags: ['Node.js','Express','PostgreSQL','Passport.js','EJS','Tailwind','MVC'],
    links: {
      github: 'https://github.com/disc3110/express-members-only',
      demo: 'https://express-members-only-production-ddef.up.railway.app/'
    }
  },
  {
    title: 'Gym Inventory Manager',
    description: 'Full-stack CRUD web application to manage gym equipment and categories. Built with Node.js, Express, PostgreSQL, and EJS following MVC architecture. Includes admin-protected edit/delete actions and is deployed with a live PostgreSQL database on Railway.',
    tags: ['Node.js','Express','PostgreSQL','EJS','MVC','Railway'],
    links: {
      github: 'https://github.com/disc3110/gym-inventory',
      demo: 'https://gym-inventory-production.up.railway.app/'
    }
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive personal portfolio built with React, Vite, and Tailwind CSS. Includes bilingual support (EN/ES), dark/light mode, and PDF resume downloads.',
    tags: ['React','Tailwind','Vite'],
    links: { github: 'https://github.com/disc3110/portafolio' }
  },
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