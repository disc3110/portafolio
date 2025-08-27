export default function Section({ id, title, className, children }) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className || ''}`}
    >
      {title && <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{title}</h2>}
      {children}
    </section>
  )
}