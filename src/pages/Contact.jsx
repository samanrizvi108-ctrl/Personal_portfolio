import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Reveal, Page } from '../motion'

// Endpoint: hits the deployed serverless function.
// Vercel:  /api/contact
// Netlify: /.netlify/functions/contact
// In dev, point to whichever you've deployed (or run a local express).
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'

export default function Contact() {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setState('sending')
    setError(null)

    const form = e.currentTarget
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      // honeypot — should stay empty
      company: form.company?.value || '',
    }

    // client-side validation
    if (!data.name || !data.email || !data.message) {
      setError('Please fill in every field.')
      setState('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError('That email looks off. Mind double-checking?')
      setState('error')
      return
    }

    try {
      const resp = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}))
        throw new Error(body.error || `Server returned ${resp.status}`)
      }

      setState('sent')
      form.reset()
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || "Something went wrong. Try emailing me directly.")
      setState('error')
    }
  }

  return (
    <Page>
      <div className="page-inner contact-page">
      <Reveal>
        <span className="section-kicker">Let's build something</span>
        <h1 className="page-title">Get in touch</h1>
        <p className="page-lede">
          Open to program, operations, and marketing collaborations. Send a note or reach me directly.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-form-wrap">
          <AnimatePresence mode="wait">
            {state === 'sent' ? (
              <motion.div
                key="sent"
                className="sent-card"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="sent-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.15 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </motion.div>
                <h3>Thank you 💌</h3>
                <p>Your message is on its way. I'll reply soon.</p>
                <button
                  type="button"
                  className="sent-another"
                  onClick={() => setState('idle')}
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                noValidate
              >
                {/* honeypot — hidden from real users, catches bots */}
                <div className="hp-field" aria-hidden="true">
                  <label>
                    Company
                    <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    disabled={state === 'sending'}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    disabled={state === 'sending'}
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we work together?"
                    disabled={state === 'sending'}
                  />
                </label>

                <AnimatePresence>
                  {state === 'error' && error && (
                    <motion.div
                      className="contact-error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={state === 'sending'}
                  whileHover={state === 'idle' ? { scale: 1.03, y: -2 } : {}}
                  whileTap={state === 'idle' ? { scale: 0.97 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {state === 'sending' ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="contact-submit-text"
                      >
                        <span className="contact-spinner" />
                        Sending…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="contact-submit-text"
                      >
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <Reveal className="contact-aside" delay={0.1}>
          <div className="contact-card">
            <h3>Direct</h3>
            <motion.a href="https://www.linkedin.com/in/saman-r-0453b2297" target="_blank" rel="noreferrer" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              LinkedIn
            </motion.a>
          </div>
        </Reveal>
      </div>
      </div>
    </Page>
  )
}
