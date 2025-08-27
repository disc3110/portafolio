import Section from '../components/Section'
import SkillPill from '../components/SkillPill'
import { useEffect, useState } from 'react'

export default function Skills() {
  const [skills, setSkills] = useState(null)

  useEffect(() => {
    fetch('/data/skills.json')
      .then(r => r.json())
      .then(setSkills)
      .catch(() => setSkills(null))
  }, [])

  if (!skills) return <Section id="skills" title="Skills"><p>Loading…</p></Section>

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group}>
            <h3 className="font-semibold capitalize">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {list.map(s => <SkillPill key={s} label={s} />)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}