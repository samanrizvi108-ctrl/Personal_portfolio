import { motion } from 'framer-motion'

const SKILLS = ['Finance Coordination', 'Marketing', 'Event Management', 'Operations', 'Student Engagement', 'Communications']

export default function WorkSection() {
  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  }

  return (
    <section id="work">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
        <span className="section-kicker">What I Do</span>
        <h2 className="section-title">Coordination, finance &amp; outreach</h2>
      </motion.div>

      <div className="tri-grid">
        <motion.div
          className="bento-card work-card"
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <span className="work-tag">Program Coordination</span>
          <h3>Joyful Yatra Enabling Program</h3>
          <p>As Assistant Coordinator at City Montessori School, I help keep student initiatives organized, funded, and running on schedule.</p>
        </motion.div>

        <motion.div
          className="bento-card skills-card"
          custom={0.15}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3>Focus Areas</h3>
          <p style={{ color: 'var(--charcoal-light)', fontSize: 15 }}>
            Blending finance discipline with people-facing coordination to deliver programs that land.
          </p>
          <div className="skill-tags">
            {SKILLS.map((s) => (
              <motion.span key={s} className="skill-tag" whileHover={{ backgroundColor: 'var(--crimson)', color: 'var(--white)' }}>
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
