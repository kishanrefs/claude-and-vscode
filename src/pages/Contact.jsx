import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMail, HiOutlineClock, HiOutlineCheckCircle } from 'react-icons/hi'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import Reveal from '../components/Reveal.jsx'
import VideoBackground from '../components/VideoBackground.jsx'

const CONTACT_EMAIL = 'hello@claudeandvscode.com'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "That email doesn't look right."
    }
    if (!form.message.trim()) next.message = 'Tell us a little about what you need.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    setSent(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="page-hero">
        <VideoBackground />
        <div className="container">
          <Reveal className="page-hero-inner">
            <span className="eyebrow">Contact</span>
            <h1>
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p>Questions, corrections, or just want to say the setup guide saved you an hour? We'd love to hear it.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal direction="right" className="contact-info">
            <div className="card contact-card">
              <div className="why-card-icon">
                <HiOutlineMail size={22} />
              </div>
              <h3>Email us directly</h3>
              <p>For anything at all — this inbox is read by a real person.</p>
              <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="card contact-card">
              <div className="why-card-icon">
                <HiOutlineClock size={22} />
              </div>
              <h3>Response time</h3>
              <p>We typically reply within 1–2 business days.</p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="contact-form-wrap">
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <HiOutlineCheckCircle size={48} />
                    <h3>Your email app should be open</h3>
                    <p>
                      We pre-filled a message to {CONTACT_EMAIL} — just hit send from there. Didn't
                      pop up?{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`}>Click here instead</a>.
                    </p>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSent(false)}>
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Ada Lovelace"
                          value={form.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="subject">Subject (optional)</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Setup question about MCP servers"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="How can we help?"
                        value={form.message}
                        onChange={handleChange}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary contact-submit"
                      whileTap={{ scale: 0.97 }}
                    >
                      Send message <HiOutlinePaperAirplane size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
