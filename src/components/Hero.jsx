import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'

const line1 = ['Precision', 'in', 'Finance']
const line2 = ['Passion', 'for', 'People']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // hero parallaxes up + fades as the user scrolls past it
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const wordContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  }
  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div style={{ y, opacity }}>
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
          variants={wordContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span style={{ display: 'block' }}>
            {line1.map((w) => (
              <motion.span
                key={w}
                variants={wordVariant}
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
                variants={wordVariant}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
              >
                {w === 'People' ? <em>{w}</em> : w}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeUp} custom={0.4} initial="hidden" animate="visible">
          I'm Saman Rizvi &mdash; a B.Com graduate and Assistant Coordinator for the
          Joyful Yatra Enabling Program at City Montessori School, Lucknow. I work
          across finance coordination, marketing, and operations to keep student
          initiatives running smoothly.
        </motion.p>

        <motion.div className="cta-group" variants={fadeUp} custom={0.55} initial="hidden" animate="visible">
          <motion.a href="#work" className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            Explore My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </motion.a>
          <motion.a href="#contact" className="btn btn-secondary" whileHover={{ scale: 1.04, borderColor: 'var(--crimson)', color: 'var(--crimson)' }} whileTap={{ scale: 0.97 }}>
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-portrait"
        initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        whileHover={{ scale: 1.03, rotate: -1.5 }}
      >
        <span className="corner-accent" />
        <span className="initials">SR</span>
      </motion.div>
    </section>
  )
}
