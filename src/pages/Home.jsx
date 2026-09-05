import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { OrbitalSphereBackground } from '@designcodeio/threeui/components/OrbitalSphereBackground'
import { Reveal, Page } from '../motion'

const line1 = ['Precision', 'in', 'Finance']
const line2 = ['Passion', 'for', 'People']

const TIMELINE = [
  {
    year: '2025 — Present',
    role: 'Assistant Coordinator — JYEP',
    org: 'City Montessori School, Lucknow',
    detail:
      'Coordinate the Joyful Yatra Enabling Program: scheduling, finance tracking, and keeping student-led initiatives on course.',
  },
  {
    year: '2024',
    role: 'B.Com Graduate',
    org: 'University of Lucknow',
    detail:
      'Built a foundation in accounting, economics, and business administration — the analytical backbone behind my coordination work.',
  },
  {
    year: '2023 — 2024',
    role: 'Marketing & Operations Support',
    org: 'Campus Initiatives',
    detail:
      'Ran outreach campaigns and helped organize events that grew program participation across departments.',
  },
]

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.85) setActive(1)
  })

  return (
    <Page>
      {/* ---------- HERO ---------- */}
      <section id="home" className="hero" ref={ref}>
        <motion.div style={{ y, opacity }} className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="dot" />
            Assistant Coordinator &middot; City Montessori School
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          >
            <motion.span style={{ display: 'block' }}>
              {line1.map((w) => (
                <motion.span
                  key={w}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {w === 'Finance' ? <em>{w}</em> : w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span style={{ display: 'block' }}>
              {line2.map((w) => (
                <motion.span
                  key={w}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {w === 'People' ? <em>{w}</em> : w}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm Saman Rizvi &mdash; a B.Com graduate and Assistant Coordinator for the
            Joyful Yatra Enabling Program at City Montessori School, Lucknow. I work
            across finance coordination, marketing, and operations to keep student
            initiatives running smoothly.
          </motion.p>

          <motion.div
            className="cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link to="/work" className="btn btn-primary">
                Explore My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          whileHover={{ scale: 1.03, rotate: -1.5 }}
        >
          <OrbitalSphereBackground className="hero-orbit" />
          <span className="corner-accent" />
          <span className="initials">SR</span>
        </motion.div>
      </section>

      {/* ---------- SNAPSHOT STRIP ---------- */}
      <section className="snap-strip">
        {[
          { k: '1+', v: 'Year in Coordination' },
          { k: '200+', v: 'Students Guided' },
          { k: '5+', v: 'Programs Run' },
          { k: '10+', v: 'Events Co-led' },
        ].map((s, i) => (
          <Reveal key={s.v} delay={i * 0.08} className="snap-item">
            <div className="snap-k">{s.k}</div>
            <div className="snap-v">{s.v}</div>
          </Reveal>
        ))}
      </section>

      {/* ---------- TIMELINE TEASER ---------- */}
      <section className="home-timeline">
        <Reveal>
          <span className="section-kicker">The Path So Far</span>
          <h2 className="section-title">A short, deliberate journey</h2>
        </Reveal>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1} className="timeline-row">
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-body">
                <h3>{t.role}</h3>
                <span className="timeline-org">{t.org}</span>
                <p>{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="home-about-cta">
          <Link to="/about" className="link-arrow">More about me <span>&rarr;</span></Link>
        </Reveal>
      </section>
    </Page>
  )
}
