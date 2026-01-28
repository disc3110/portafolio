import Section from '../components/Section'
import { useEffect, useMemo, useState } from 'react'
import {
  ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar
} from 'recharts'
import { useT } from '../i18n/i18n.jsx' 

export default function DataShowcase() {
  const { lang } = useT?.() ?? { lang: 'en' }

  const [active, setActive] = useState('skills') 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isDark, setIsDark] = useState(false)

  // i18n labels for buttons and title/description
  const labels = useMemo(() => ({
    title: lang === 'es' ? 'Datos' : 'Data',
    buttons: {
      skills: lang === 'es' ? 'Habilidades' : 'Skills',
      projects: lang === 'es' ? 'Proyectos' : 'Projects',
      impact: lang === 'es' ? 'Impacto' : 'Impact'
    },
    desc: {
      skills: lang === 'es'
        ? 'Nivel de dominio por tecnología (escala 1–10).'
        : 'Proficiency per technology (1–10 scale).',
      projects: lang === 'es'
        ? 'Distribución de stacks usados en proyectos.'
        : 'Distribution of stacks used across projects.',
      impact: lang === 'es'
        ? 'Métricas de impacto: completados, en equipo, individuales, OSS.'
        : 'Impact metrics: completed, team, solo, OSS.'
    },
    empty: lang === 'es'
      ? 'No hay datos para mostrar.'
      : 'No data to display.',
    failed: lang === 'es'
      ? 'No se pudieron cargar los datos.'
      : 'Failed to load data.'
  }), [lang])

  // dark-mode detection (Tailwind toggles the "dark" class on <html>)
  useEffect(() => {
    const root = document.documentElement
    const checkDark = () => setIsDark(root.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Map dataset -> file path (BASE_URL safe)
  const base = import.meta.env.BASE_URL || '/'
  const fileMap = {
    skills: `${base}data/skillsgraph.json`,
    projects: `${base}data/projects.json`,
    impact: `${base}data/impact.json`,
  }

  // Fetch whenever active changes
  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(null)
    fetch(fileMap[active])
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(json => { if (alive) setData(Array.isArray(json) ? json : []) })
      .catch(err => { if (alive) { console.error(err); setError(err) } })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [active])

  return (
    <Section id="data" title={labels.title}>
      {/* Switcher */}
      <div className="mb-4 flex flex-wrap gap-2">
        {(['skills','projects','impact']).map(key => (
          <button
            key={key}
            onClick={() => setActive(key)}
            aria-pressed={active === key}
            className={`px-3 py-1.5 rounded-xl border transition
              ${active === key
                ? 'font-semibold bg-zinc-100 dark:bg-zinc-800'
                : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/60'}`}
          >
            {labels.buttons[key]}
          </button>
        ))}
      </div>

      <p className="opacity-80 mb-4">{labels.desc[active]}</p>

      {/* States */}
      {loading && (
        <div className="h-40 grid place-items-center opacity-70">
          {lang === 'es' ? 'Cargando…' : 'Loading…'}
        </div>
      )}

      {!loading && error && (
        <div className="h-40 grid place-items-center text-red-600">
          {labels.failed}
        </div>
      )}

      {!loading && !error && (!data || data.length === 0) && (
        <div className="h-40 grid place-items-center opacity-70">
          {labels.empty}
        </div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <div className="h-64 sm:h-72 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#555' : '#ccc'} />
              <XAxis dataKey="label" stroke={isDark ? '#ccc' : '#333'} />
              <YAxis stroke={isDark ? '#ccc' : '#333'} domain={[0, 10]}  allowDecimals={false}/>
              <Tooltip
                contentStyle={{
                  background: isDark ? '#1f2937' : '#fff',
                  color: isDark ? '#fff' : '#000',
                  border: '1px solid #555'
                }}
              />
              <Bar dataKey="value" fill={isDark ? '#ffffff' : '#000000'} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </Section>
  )
}