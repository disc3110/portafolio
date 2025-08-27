import Section from '../components/Section'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useT } from '../i18n/i18n' // para saber en qué idioma estás

export default function Contact() {
  const formRef = useRef(null)
  const { lang } = useT()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Anti-spam: si el honeypot trae valor, ignoramos
    if (formRef.current?.website && formRef.current.website.value) return

    const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const TMPL_USER = lang === 'es'
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
      : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN
    const TMPL_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NOTIFY

    try {
      setLoading(true)

      // 1) Auto-reply al usuario (usa los campos del <form>)
      await emailjs.sendForm(SERVICE, TMPL_USER, formRef.current, PUBLIC)

      // 2) Notificación para ti (puedes usar sendForm o send con params)
      const formData = new FormData(formRef.current)
      const params = {
        from_name: formData.get('from_name'),
        reply_to: formData.get('reply_to'),
        message: formData.get('message'),
      }
      await emailjs.send(SERVICE, TMPL_OWNER, params, PUBLIC)

      setSent(true)
      formRef.current.reset()
    } catch (err) {
      setError('No se pudo enviar. Intenta de nuevo en unos minutos.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" title="Contact">
      {sent && <p className="mb-4 text-green-600">Message sent. Thank you!</p>}
      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form ref={formRef} onSubmit={onSubmit} className="max-w-xl grid gap-4">
        {/* Honeypot invisible (anti-bots) */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px' }}
          aria-hidden="true"
        />

        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input className="border p-3 rounded-xl" name="from_name" placeholder="Your name" required />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input className="border p-3 rounded-xl" type="email" name="reply_to" placeholder="Email" required />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea className="border p-3 rounded-xl" name="message" placeholder="Message" rows="5" required />
        </label>

        <button disabled={loading} className="px-5 py-2 border rounded-xl">
          {loading ? 'Sending…' : 'Send'}
        </button>
      </form>
    </Section>
  )
}