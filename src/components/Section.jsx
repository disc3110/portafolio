export default function Section({ id, title, className, children }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 py-16 ${className || ''}`}>
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      {children}
    </section>
  )
}