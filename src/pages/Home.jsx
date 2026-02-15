import { useT } from '../i18n/i18n.jsx'
import hero from '../assets/hero.svg'
import LanguageToggle from '../components/LanguageToggle.jsx'

export default function Home() {
  const { t } = useT()
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="py-12 sm:py-16 lg:py-24 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src={hero}
            className="w-40 sm:w-56 md:w-72 lg:w-80"
            alt="Diego programming and waving"
          />
          <p className="opacity-80 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center sm:text-left">
            {t.hero_hi}
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">{t.hero_title}</h1>
        <p className="mt-4 text-base sm:text-lg opacity-80">{t.hero_sub}</p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#projects" className="w-full sm:w-auto px-5 py-2 border rounded-xl dark:bg-[#E6E0D4] text-black font-medium hover:opacity-90 transition">{t.cta_projects}</a>
          <a href="#contact"  className="w-full sm:w-auto px-5 py-2 border rounded-xl dark:bg-[#E6E0D4] text-black font-medium hover:opacity-90 transition">{t.cta_contact}</a>
          <LanguageToggle />
        </div>
      </div>
    </div>
  )
}