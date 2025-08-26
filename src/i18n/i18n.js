import en from './en.json'
import es from './es.json'
import { createContext, useContext, useMemo, useState } from 'react'

const dict = { en, es }

const LangContext = createContext({
  lang: 'en',
  t: en,
  setLang: () => {}
})

// Provider component
export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(() => ({ lang, t: dict[lang], setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useT() {
  return useContext(LangContext)
}