import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/*
  Modern Parallax Depth Hero
  ─────────────────────────
  - Full-bleed editorial split: text on left, layered portrait on right
  - True 3D depth via CSS perspective on the stage + layered z-translate
  - Cursor drives 3D tilt of the whole stage (subtle, eased)
  - Cursor also drives per-layer parallax (foreground moves more than background)
  - Scroll-driven: portrait lifts, headline drifts, atmospheric layer zooms
  - 4 layers:
      0. Atmosphere:  very blurred, dim, large (deep depth)
      1. Backdrop:    blurred mid, slightly desaturated (mid depth)
      2. Subject:     saman.jpg — sharp, full color, glassmorphism card
      3. Accent:      Ghibli cutout, small, decorative, near foreground
  - Idle motion: gentle 3D float on the subject (subtle breath)
  - Mount: layers reveal in sequence, headline staggers in
  - Rain overlay across the whole stage (tied to the rain theme)
*/

const HERO_H = 'min(100vh, 880px)'
const PH = 'min(78vh, 700px)'
const PW = `calc(${PH} * 0.5626)`   // aspect of saman.jpg = 665/1182

export default function ParallaxHero() {
  const ref = useRef(null)
  const stage = useRef(null)

  // Cursor → 3D tilt of the whole stage
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 90, damping: 18 })
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 90, damping: 18 })

  // Cursor → per-layer translate (parallax)
  const p1x = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 70, damping: 16 })
  const p1y = useSpring(useTransform(my, [-0.5, 0.5], [-8,  8]),  { stiffness: 70, damping: 16 })
  const p2x = useSpring(useTransform(mx, [-0.5, 0.5], [-26, 26]), { stiffness: 70, damping: 16 })
  const p2y = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 70, damping: 16 })
  const p3x = useSpring(useTransform(mx, [-0.5, 0.5], [-44, 44]), { stiffness: 70, damping: 16 })
  const p3y = useSpring(useTransform(my, [-0.5, 0.5], [-22, 22]), { stiffness: 70, damping: 16 })
  const p4x = useSpring(useTransform(mx, [-0.5, 0.5], [-72, 72]), { stiffness: 70, damping: 16 })
  const p4y = useSpring(useTransform(my, [-0.5, 0.5], [-36, 36]), { stiffness: 70, damping: 16 })

  // Scroll-driven
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], [0,  -120])
  const copyY       = useTransform(scrollYProgress, [0, 1], [0,   -60])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const subjectY    = useTransform(scrollYProgress, [0, 1], [0,   -90])
  const atmosScale  = useTransform(scrollYProgress, [0, 1], [1.0, 1.18])
  const atmosBlur   = useTransform(scrollYProgress, [0, 1], [22, 36])

  // Soft crimson lightning flicker on idle
  const [flash, setFlash] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (Math.random() < 0.010 && !flash) {
      setFlash(true)
      setTimeout(() => setFlash(false), 220)
    }
  })

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <section
      id="home"
      className="px-hero"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ height: HERO_H }}
    >
      {/* ambient crimson glow behind everything */}
      <div className="px-ambient" />
      <div className="px-grain" />

      {/* 3D stage — everything inside tilts with cursor */}
      <motion.div
        ref={stage}
        className="px-stage"
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1400 }}
      >
        {/* ── LAYER 0 — atmosphere (deepest, far back) ── */}
        <motion.div
          className="px-layer px-atmos"
          style={{ x: p1x, y: p1y, filter: useTransform(atmosBlur, (v) => `blur(${v}px)`) }}
        >
          <motion.img
            src="/saman.jpg"
            alt=""
            aria-hidden
            draggable={false}
            style={{ scale: atmosScale, transformOrigin: 'center center' }}
          />
          <div className="px-atmos-tint" />
        </motion.div>

        {/* ── LAYER 1 — backdrop (mid depth) ── */}
        <motion.div
          className="px-layer px-back"
          style={{ x: p2x, y: p2y }}
        >
          <img src="/saman.jpg" alt="" aria-hidden draggable={false} />
          <div className="px-back-tint" />
        </motion.div>

        {/* ── LAYER 2 — subject (sharp portrait) ── */}
        <motion.div
          className="px-layer px-subject"
          style={{ x: p3x, y: p3y }}
        >
          <motion.div style={{ y: subjectY }}>
            <motion.div
              className="px-card"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
            {/* gentle 3D float on the card itself */}
            <motion.div
              className="px-card-inner"
              animate={{ y: [0, -6, 0], rotateZ: [0, 0.4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/saman.jpg" alt="Saman Rizvi" draggable={false} />
              <div className="px-card-rim" />
              <div className="px-card-flash" style={{ opacity: flash ? 1 : 0 }} />
            </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── LAYER 3 — ghibli accent (foreground) ── */}
        <motion.div
          className="px-layer px-accent"
          style={{ x: p4x, y: p4y }}
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/saman-ghibli.png"
            alt=""
            aria-hidden
            draggable={false}
            animate={{ y: [0, -10, 0], rotate: [-4, 2, -4] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* rain across the stage */}
        <div className="px-rain" />
        <div className="px-vignette" />
      </motion.div>

      {/* ── COPY (left side, doesn't tilt with stage) ── */}
      <motion.div
        className="px-copy"
        style={{ y: copyY, opacity: copyOpacity }}
      >
        <motion.div
          className="px-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="px-dot" />
          Assistant Coordinator · City Montessori School
        </motion.div>

        <motion.h1
          className="px-headline"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
        >
          <motion.span variants={word} style={wS}>
            Precision
          </motion.span>
          <motion.span variants={word} style={wS}>
            in <em>Finance.</em>
          </motion.span>
          <br />
          <motion.span variants={word} style={wS}>
            Passion
          </motion.span>
          <motion.span variants={word} style={wS}>
            for <em>People.</em>
          </motion.span>
        </motion.h1>

        <motion.p
          className="px-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          I'm <strong>Saman Rizvi</strong> — a B.Com graduate and Assistant Coordinator
          for the Joyful Yatra Enabling Program at City Montessori School, Lucknow.
        </motion.p>

        <motion.div
          className="px-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/work" className="px-btn px-btn-primary">
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="px-btn px-btn-ghost">Get In Touch</Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        className="px-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span>scroll</span>
        <span className="px-cue-line" />
      </motion.div>
    </section>
  )
}

const word = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}
const wS = { display: 'inline-block', marginRight: '0.28em' }
