export default function ProjectCard({ title, description, tags, links }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{description}</p>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs border px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4">
        {links?.github && (
          <a className="underline" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {links?.demo && (
          <a className="underline" href={links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  )
}