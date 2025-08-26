import { useT } from '../i18n/i18n'

export default function LanguageToggle() {
  const { lang, setLang } = useT()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      className="px-3 py-1 border rounded-md"
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}