export default function Section({ id, title, className, children }) {
  return (
    <section
      id={id}
      data-section-title={title || ''}
      className={`snap-start scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className || ''}`}
    >
      {title && (
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent dark:via-zinc-600/60" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-white">
              {title}
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent dark:via-zinc-600/60" />
          </div>
        </div>
      )}
      {children}
    </section>
  )
}