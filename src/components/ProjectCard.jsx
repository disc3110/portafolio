import { FaGithub } from "react-icons/fa"

export default function ProjectCard({ title, subtitle, description, tags, links }) {
  return (
    <div className="border border-[#2a2a2a] bg-[#0B0B0B] rounded-2xl p-6 flex flex-col h-full hover:shadow-lg transition duration-300">
      
      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-[#E6E0D4]">
          {title}
        </h3>

        <h5 className="text-sm opacity-70 mb-2 text-[#E6E0D4]">
          {subtitle}
        </h5>

        <p className="mt-3 text-sm opacity-80 text-[#E6E0D4]">
          {description}
        </p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs border border-[#2a2a2a] px-3 py-1 rounded-full text-[#E6E0D4]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer (sticks to bottom) */}
      <div className="mt-auto pt-6 flex items-center justify-between">
        
        {/* GitHub icon left */}
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-[#E6E0D4] hover:opacity-70 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        )}

        {/* Demo button right */}
        {links?.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-xl bg-[#E6E0D4] text-black font-medium hover:opacity-90 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}