import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact">
      <motion.div
        className="bento-card contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.01 }}
      >
        <div>
          <span className="section-kicker" style={{ color: 'rgba(255,255,255,0.8)' }}>Let's build something</span>
          <h3 style={{ marginTop: 8 }}>Let's Connect</h3>
          <p>Open to program, operations, and marketing collaborations.</p>
        </div>
        <div className="contact-links">
          <motion.a href="mailto:hello@samanrizvi.com" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            hello@samanrizvi.com
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/saman-r-0453b2297" target="_blank" rel="noreferrer" className="contact-link" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
