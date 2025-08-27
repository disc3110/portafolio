import Section from '../components/Section'
import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from 'recharts'

export default function DataShowcase() {
  const [data, setData] = useState([])
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    fetch('/data/demo.json').then(r => r.json()).then(setData).catch(() => setData([]))
  }, [])

  // Watch for dark mode on <html class="dark">
  useEffect(() => {
    const root = document.documentElement
    const checkDark = () => setIsDark(root.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="data" title="Data">
      <p className="opacity-80 mb-6">EDA quick demo (JSON → chart). Replace with your own export.</p>
      <div className="h-64 sm:h-72 md:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#555' : '#ccc'} />
            <XAxis dataKey="label" stroke={isDark ? '#ccc' : '#333'} />
            <YAxis stroke={isDark ? '#ccc' : '#333'} />
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
    </Section>
  )
}