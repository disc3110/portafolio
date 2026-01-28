import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Drive Clone — File Storage & Sharing App',
    description: 'Google Drive–style file storage application built with Node.js and Express. Users can upload files to cloud storage, organize them into folders, and share folders via public, expiring links. Includes authentication, session-based access, and UX improvements such as flash messages and copyable share links.',
    tags: ['Node.js','Express','PostgreSQL','Prisma','Passport.js','Cloudinary','EJS','Tailwind','MVC','Railway'],
    links: {
      github: 'https://github.com/disc3110/drive-clone',
      demo: 'https://drive-clone-production.up.railway.app'
    }
  },
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