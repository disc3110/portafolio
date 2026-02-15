import Section from '../components/Section'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
        subject: formData.get('subject'),
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
      {sent && <p className="mb-6 text-green-400">Message sent. Thank you!</p>}
      {error && <p className="mb-6 text-red-400">{error}</p>}

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Left: Say Hi card */}
        <div className="bg-[#E6E0D4] text-black rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[420px]">
          <div>
            <h3 className="text-3xl font-light mb-6">Say Hi!</h3>
            <p className="leading-relaxed opacity-80 mb-8">
              Currently open for new opportunities and collaborations. If you want
              to work together or just say hi, feel free to reach out!
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-[#E6E0D4] px-6 py-2 rounded-md hover:opacity-80 transition"
            >
              View Resume
            </a>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm opacity-70">Contact me at</p>
              <a
                href="mailto:disc3110@gmail.com"
                className="underline underline-offset-4 hover:opacity-70 transition"
              >
                disc3110@gmail.com
              </a>
            </div>

            <div className="text-right">
              <p className="text-sm opacity-70 mb-2">Or find me here</p>
              <div className="flex gap-4 text-2xl justify-end">
                <a
                  href="https://github.com/disc3110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/disc3110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full bg-[#0B0B0B] border border-[#1a1a1a] rounded-2xl p-8 sm:p-10 grid gap-4"
        >
          {/* Honeypot invisible (anti-bots) */}
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px' }}
            aria-hidden="true"
          />

          <h3 className="text-3xl font-light tracking-wide text-[#E6E0D4] mb-2">
            Send me a message!
          </h3>

          
          <label className="grid gap-1">
            <span className="text-sm text-[#E6E0D4]/80">Name</span>
            <input
              className="bg-[#E6E0D4] text-black placeholder-black/50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E6E0D4]/40"
              name="from_name"
              placeholder="Your name"
              required
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-[#E6E0D4]/80">Email</span>
            <input
              className="bg-[#E6E0D4] text-black placeholder-black/50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E6E0D4]/40"
              type="email"
              name="reply_to"
              placeholder="Your email"
              required
            />
          </label>
          

          <label className="grid gap-1">
            <span className="text-sm text-[#E6E0D4]/80">Message</span>
            <textarea
              className="bg-[#E6E0D4] text-black placeholder-black/50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E6E0D4]/40"
              name="message"
              placeholder="Your message..."
              rows="7"
              required
            />
          </label>

          <button
            disabled={loading}
            className="mt-2 w-full px-5 py-3 rounded-xl bg-[#E6E0D4] text-black hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  )
}