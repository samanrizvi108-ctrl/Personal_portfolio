import { motion } from 'framer-motion'
import { useState } from 'react'
import { Reveal, Page } from '../motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
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
          {sent ? (
            <motion.div
              className="sent-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Thank you 💌</h3>
              <p>Your message is on its way. I'll reply soon.</p>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} required placeholder="How can we work together?" />
              </label>
              <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Send Message
              </motion.button>
            </form>
          )}
        </Reveal>

        <Reveal className="contact-aside" delay={0.1}>
          <div className="contact-card">
            <h3>Direct</h3>
            <motion.a href="mailto:hello@samanrizvi.com" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              hello@samanrizvi.com
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/saman-r-0453b2297" target="_blank" rel="noreferrer" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              LinkedIn
            </motion.a>
            <motion.a href="https://wa.me/" target="_blank" rel="noreferrer" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              WhatsApp
            </motion.a>
          </div>
        </Reveal>
      </div>
      </div>
    </Page>
  )
}
