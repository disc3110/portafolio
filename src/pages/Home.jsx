import { useT } from '../i18n/i18n'

export default function Home() {
  const { t } = useT()
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 pb-10">
      <div className="py-20 text-center">
        <p className="opacity-80">{t.hero_hi}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{t.hero_title}</h1>
        <p className="mt-4 text-lg opacity-80">{t.hero_sub}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-5 py-2 border rounded-xl">{t.cta_projects}</a>
          <a href="#contact" className="px-5 py-2 border rounded-xl">{t.cta_contact}</a>
        </div>
      </div>
    </div>
  )
}