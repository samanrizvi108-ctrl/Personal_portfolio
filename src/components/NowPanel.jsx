import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/*
  NowPanel — right-side editorial card
  ─────────────────────────────────────
  A modern, glassmorphic "live status" panel that fills the right side of
  the editorial hero. It animates in, has a count-up stat, an animated
  progress bar, and a subtle mouse-tilt.
*/

function CountUp({ to = 100, duration = 1.6, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 50, damping: 18 })
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])
  useEffect(() => {
    return spring.on('change', (v) => {
      const n = Math.round(v)
      setDisplay(prefix + n + suffix)
    })
  }, [spring, prefix, suffix])
  return <span ref={ref}>{display}</span>
}

function useLocalTime() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30_000)
    return () => clearInterval(t)
  }, [])
  return time
}

export default function NowPanel() {
  const ref = useRef(null)
  const [barPct, setBarPct] = useState(0)
  const [tick, setTick] = useState(0)
  const time = useLocalTime()

  // Mouse-reactive 3D tilt on the card
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 80, damping: 18 })
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 80, damping: 18 })

  // Dynamic onboarding progress — based on actual join date (2026-08-29)
  // 30-day onboarding ramp: 0% → 100%, with 4 milestones at days 7, 14, 21, 30
  const JOIN_DATE = new Date('2026-08-29T00:00:00')
  const ONBOARDING_DAYS = 30
  const MILESTONE_DAYS = [7, 14, 21, 30]   // days at which each milestone is hit
  const today = new Date()
  const daysElapsed = Math.max(0, Math.floor((today - JOIN_DATE) / (1000 * 60 * 60 * 24)))
  const targetPct = Math.min(100, Math.round((daysElapsed / ONBOARDING_DAYS) * 100))
  const currentMilestone = MILESTONE_DAYS.filter(d => daysElapsed >= d).length
  const totalMilestones = MILESTONE_DAYS.length

  // Animate bar to targetPct on mount (re-run if the value changes across days)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      if (n >= targetPct) {
        setBarPct(targetPct)
        clearInterval(id)
      } else {
        setBarPct(n)
      }
    }, 25)
    return () => clearInterval(id)
  }, [targetPct])

  // Activity ticker — cycles through current focus items
  const activities = [
    'Onboarding at NIL',
    'Drafting the new curriculum',
    'Session prep — Career Counselling',
    'Coaching first English batch',
    'Mapping next semester goals',
  ]
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % activities.length), 3000)
    return () => clearInterval(id)
  }, [activities.length])

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  const timeStr = time.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata',
  })

  return (
    <motion.aside
      ref={ref}
      className="np"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0,  y: 0  }}
      transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="np-inner">
        {/* HEADER */}
        <div className="np-head">
          <div className="np-head-l">
            <span className="np-live"><span className="np-live-dot" /> live</span>
            <span className="np-now-label">/ now</span>
          </div>
          <div className="np-head-r">
            <span className="np-time">{timeStr}</span>
            <span className="np-tz">IST</span>
          </div>
        </div>

        {/* CURRENT FOCUS */}
        <div className="np-focus">
          <span className="np-kicker">Current focus</span>
          <div className="np-focus-text-wrap">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tick}
                className="np-focus-text"
                initial={{ y: '70%', opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: '0%',  opacity: 1, filter: 'blur(0px)' }}
                exit={{    y: '-70%', opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {activities[tick]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* STATS */}
        <div className="np-stats">
          <div className="np-stat">
            <div className="np-stat-n">
              <CountUp to={1} suffix="+" />
            </div>
            <div className="np-stat-l">year in coordination</div>
          </div>
          <div className="np-stat-sep" />
          <div className="np-stat">
            <div className="np-stat-n">
              <CountUp to={200} suffix="+" />
            </div>
            <div className="np-stat-l">students guided</div>
          </div>
          <div className="np-stat-sep" />
          <div className="np-stat">
            <div className="np-stat-n">
              <CountUp to={5} suffix="+" />
            </div>
            <div className="np-stat-l">programs run</div>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="np-progress">
          <div className="np-progress-head">
            <span className="np-kicker">Current sprint</span>
            <span className="np-progress-pct">{barPct}%</span>
          </div>
          <div className="np-bar">
            <motion.div
              className="np-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${barPct}%` }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="np-bar-shine" />
          </div>
          <div className="np-progress-meta">
            <span>NIL · onboarding</span>
            <span>{currentMilestone} of {totalMilestones} milestones</span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="np-loc">
          <div className="np-loc-pulse">
            <span className="np-loc-dot" />
            <span className="np-loc-ring" />
          </div>
          <div className="np-loc-text">
            <div className="np-loc-line1">Lucknow, IN</div>
            <div className="np-loc-line2">26.85°N · 80.95°E</div>
          </div>
        </div>

        {/* CORNER TAGS */}
        <div className="np-corner-tl">SR</div>
        <div className="np-corner-br">
          <span>v 3.0</span>
          <span>·</span>
          <span>2025</span>
        </div>
      </div>
    </motion.aside>
  )
}
