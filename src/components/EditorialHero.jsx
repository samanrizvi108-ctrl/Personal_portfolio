import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent, useAnimationFrame, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NowPanel from './NowPanel'
import ThemedBackdrop from '../theme/ThemedBackdrop'

/*
  Editorial Hero — no photo, modern text-first
  ─────────────────────────────────────────────
  Reference patterns from 21st.dev (modern text + motion):
  - Big editorial type with staggered word reveal (mask from below)
  - Rotating "what I do" word cycle in italic (gradient + y-rotate)
  - Letter-by-letter role label
  - Subtle aurora background (CSS gradient + drift)
  - Pinned horizontal scroll section that scrubs as you scroll
  - Animated marquee strip of tags
  - Mouse-reactive subtle tilt on the big type
  - Scroll-driven: type shrinks + drifts; copy fades up
*/

// 1) Rotating word cycle in the headline
const ROLES = [
  'Finance.',
  'Operations.',
  'Coordination.',
  'Programs.',
  'People.',
  'Detail.',
]

function RotatingWord({ words, interval = 2400 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  return (
    <span className="eh-rot-wrap" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="eh-rot-word"
          initial={{ y: '60%', opacity: 0, rotateX: -60, filter: 'blur(10px)' }}
          animate={{ y: '0%',   opacity: 1, rotateX: 0,  filter: 'blur(0px)' }}
          exit={{    y: '-60%', opacity: 0, rotateX: 60,  filter: 'blur(10px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// tiny re-export note removed — AnimatePresence is imported above

// 2) Letter-by-letter staggered text
function SplitText({ text, delay = 0, className = '', stagger = 0.022 }) {
  return (
    <span className={className}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="eh-split-ch"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%',   opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  )
}

// 3) Infinite marquee — proper measure-based loop so the track
//    always covers the full viewport width, no matter how long items are.
function Marquee({ items, duration = 32, reverse = false }) {
  const trackRef = useRef(null)
  const [loopWidth, setLoopWidth] = useState(0)
  const x = useMotionValue(0)
  const baseVelocity = reverse ? -1 : 1

  // Measure the width of ONE full set of items + gaps, then duplicate
  // enough sets to cover the widest viewport (~2.5x covers up to 4K).
  useEffect(() => {
    if (!trackRef.current) return
    // The track currently contains one set of items. Measure half the
    // track (one set + half a gap), which we'll use as the loop distance.
    const half = trackRef.current.scrollWidth / 2
    setLoopWidth(half)
  }, [items])

  useAnimationFrame((_, delta) => {
    if (!loopWidth) return
    const speed = baseVelocity * (delta / 1000) * 60   // 60 px/sec base
    let next = x.get() + speed
    // wrap so the track loops seamlessly
    if (next > 0) next -= loopWidth
    if (next < -loopWidth) next += loopWidth
    x.set(next)
  })

  // Render enough copies so the track is wider than any viewport
  // (8 sets is enough for screens up to ~8K at our item widths)
  const copies = Array.from({ length: 8 }, (_, i) => i)

  return (
    <div className="eh-marquee">
      <motion.div className="eh-marquee-track" ref={trackRef} style={{ x }}>
        {copies.map((copy) => (
          <div key={copy} className="eh-marquee-set" aria-hidden={copy > 0}>
            {items.map((t, i) => (
              <span key={`${copy}-${i}`} className="eh-marquee-item">
                {t} <span className="eh-marquee-dot">◆</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function EditorialHero() {
  const ref = useRef(null)

  // Subtle cursor-driven tilt on the big type
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 80, damping: 18 })
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), { stiffness: 80, damping: 18 })

  // Scroll-driven
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const headY     = useTransform(scrollYProgress, [0, 1], [0,  -90])
  const headScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const headBlur  = useTransform(scrollYProgress, [0, 0.8], [0, 8])
  const copyY     = useTransform(scrollYProgress, [0, 1], [0, -50])
  const copyOp    = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const auroraY   = useTransform(scrollYProgress, [0, 1], [0,  120])
  const auroraS   = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  // Mouse-move on the section
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  // Lightning flicker (same as before, keeps continuity with site)
  const [flash, setFlash] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (Math.random() < 0.012 && !flash) {
      setFlash(true); setTimeout(() => setFlash(false), 220)
    }
  })

  return (
    <section
      id="home"
      className="eh"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* ── BACKGROUND ────────────────────────────────────── */}
      <motion.div className="eh-bg" style={{ y: auroraY, scale: auroraS }}>
        <ThemedBackdrop />
      </motion.div>

      {/* ── LEFT (text) ────────────────────────────────────── */}
      <div className="eh-left">
      {/* ── META STRIP (top) ──────────────────────────────── */}
      <motion.div
        className="eh-meta"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="eh-meta-l">
          <span className="eh-dot" />
          <SplitText text="Available · Lucknow, IN" className="eh-meta-text" delay={0.2} stagger={0.018} />
        </div>
        <div className="eh-meta-r">
          <SplitText text="Career Counsellor & English Trainer · NIL" className="eh-meta-text" delay={0.3} stagger={0.016} />
        </div>
      </motion.div>

      {/* ── HEADLINE ──────────────────────────────────────── */}
      <motion.div
        className="eh-head-wrap"
        style={{
          y: headY, scale: headScale,
          filter: useTransform(headBlur, (v) => `blur(${v}px)`),
          rotateX: tiltX, rotateY: tiltY, transformPerspective: 1600,
        }}
      >
        <h1 className="eh-head" aria-label="Precision in Finance. Passion for People.">
          <span className="eh-head-row">
            <span className="eh-mask">
              <motion.span
                className="eh-pull"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                Precision
              </motion.span>
            </span>{' '}
            <span className="eh-mask">
              <motion.span
                className="eh-pull"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                in
              </motion.span>
            </span>{' '}
            <span className="eh-mask">
              <motion.span
                className="eh-pull eh-emph"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <RotatingWord words={ROLES} />
              </motion.span>
            </span>
          </span>
          <span className="eh-head-row eh-head-row-2">
            <span className="eh-mask">
              <motion.span
                className="eh-pull"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Passion
              </motion.span>
            </span>{' '}
            <span className="eh-mask">
              <motion.span
                className="eh-pull"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                for
              </motion.span>
            </span>{' '}
            <span className="eh-mask">
              <motion.span
                className="eh-pull eh-emph-2"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.95, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                People.
              </motion.span>
            </span>
          </span>
        </h1>
      </motion.div>

      {/* ── SUB COPY + CTAs ────────────────────────────────── */}
      <motion.div
        className="eh-copy"
        style={{ y: copyY, opacity: copyOp }}
      >
        <motion.p
          className="eh-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
        >
          I'm <strong>Saman Rizvi</strong> — a B.Com graduate, career counsellor, and
          English trainer. Just joined the <strong>National Institute of Language (NIL)</strong>,
          after a year coordinating the <strong>Junior Youth Empowerment Programme (JYEP)</strong>
          at City Montessori School.
        </motion.p>

        <motion.div
          className="eh-ctas"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/work" className="eh-btn eh-btn-primary">
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="eh-btn eh-btn-ghost">Get In Touch</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="eh-btn eh-btn-resume"
              aria-label="Open resume in a new tab"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
              <svg className="eh-btn-external" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>{/* end .eh-left */}

      {/* ── RIGHT (now panel) ──────────────────────────────── */}
      <div className="eh-right">
        <NowPanel />
      </div>

      {/* ── MARQUEE ───────────────────────────────────────── */}
      <motion.div
        className="eh-marquee-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.55 }}
      >
        <Marquee
          items={[
            'Finance', 'Operations', 'Coordination', 'Marketing',
            'Event Ops', 'Student Programs', 'B.Com', 'CMS Lucknow',
            'Programs', 'Detail', 'Communication',
          ]}
        />
        <Marquee
          items={[
            'JYEP', 'Coordination', 'Operations', 'Event Ops',
            'Finance', 'Marketing', 'Detail', 'B.Com', 'CMS',
          ]}
          duration={42}
          reverse
        />
      </motion.div>

      {/* scroll cue */}
      <motion.div
        className="eh-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span>scroll</span>
        <span className="eh-cue-line" />
      </motion.div>

      {/* lightning flash overlay */}
      <div className="eh-flash" style={{ opacity: flash ? 1 : 0 }} />
    </section>
  )
}
