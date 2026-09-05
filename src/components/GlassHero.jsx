import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import GlassRain from './GlassRain'
import GhibliCutout from './GhibliCutout'
import { OrbitalSphereBackground } from '@designcodeio/threeui/components/OrbitalSphereBackground'

const line1 = ['Precision', 'in', 'Finance']
const line2 = ['Passion', 'for', 'People']

export default function GlassHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -140])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const blur = useTransform(scrollYProgress, [0, 0.8], [0, 14])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const [flash, setFlash] = useState(false)

  // soft crimson lightning flicker
  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (Math.random() < 0.012 && !flash) {
      setFlash(true)
      setTimeout(() => setFlash(false), 220)
    }
  })

  return (
    <section id="home" className="glass-hero" ref={ref}>
      {/* crimson glow + orb behind the glass */}
      <motion.div className="glass-hero-bg" style={{ scale, filter: `blur(${0}px)` }}>
        <div className="crimson-glow" />
        <div className="orb-wrap">
          <OrbitalSphereBackground className="hero-orbit accent" />
        </div>
      </motion.div>

      {/* frosted pane with rain-on-glass — sits ABOVE the glow/orb, BELOW the portrait */}
      <motion.div className="glass-pane" style={{ y, filter: useTransform(blur, (v) => `blur(${v * 0.4}px)`) }}>
        <GlassRain opacity={0.85} />
        <motion.div className="glass-flash" animate={{ opacity: flash ? 1 : 0 }} transition={{ duration: 0.22 }} />
      </motion.div>

      {/* her Ghibli cutout — floats ABOVE the frosted pane as a soft figure */}
      <GhibliCutout />

      {/* headline + CTAs, refracted feel */}
      <motion.div className="glass-hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="dot" />
          Assistant Coordinator &middot; City Montessori School
        </motion.div>

        <motion.h1
          className="glass-headline"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
        >
          <motion.span style={{ display: 'block' }} variants={word}>
            {line1.map((w) => (
              <motion.span key={w} variants={word} style={wordStyle}>
                {w === 'Finance' ? <em>{w}</em> : w}
              </motion.span>
            ))}
          </motion.span>
          <motion.span style={{ display: 'block' }} variants={word}>
            {line2.map((w) => (
              <motion.span key={w} variants={word} style={wordStyle}>
                {w === 'People' ? <em>{w}</em> : w}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p
          className="glass-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          I'm Saman Rizvi &mdash; a B.Com graduate and Assistant Coordinator for the
          Joyful Yatra Enabling Program at City Montessori School, Lucknow.
        </motion.p>

        <motion.div
          className="cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/work" className="btn btn-primary">Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="btn btn-ghost">Get In Touch</Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span>scroll</span>
        <span className="scroll-line" />
      </motion.div>
    </section>
  )
}

const word = {
  hidden: { opacity: 0, y: 42, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const wordStyle = { display: 'inline-block', marginRight: '0.28em' }
