import Section from '../components/Section'
import { useEffect, useState } from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'

export default function DataShowcase() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data/demo.json').then(r => r.json()).then(setData).catch(() => setData([]))
  }, [])

  return (
    <Section id="data" title="Data">
      <p className="opacity-80 mb-6">
         (JSON → chart)
      </p>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  )
}