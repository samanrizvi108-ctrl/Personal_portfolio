import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 1, suffix: '+', label: 'Year in Coordination' },
  { value: 200, suffix: '+', label: 'Students Guided' },
  { value: 5, suffix: '+', label: 'Programs Run' },
  { value: 10, suffix: '+', label: 'Events Co-led' },
]

function useCountUp(target, run, duration = 1.4) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return val
}

function StatCard({ stat, run }) {
  const n = useCountUp(stat.value, run)
  return (
    <motion.div className="stat-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <div className="stat-number">
        {n}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  }
  return (
    <section id="stats" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
        <span className="section-kicker">By the numbers</span>
        <h2 className="section-title">A track record of shipped work</h2>
      </motion.div>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <motion.div key={s.label} custom={i} variants={cardVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <StatCard stat={s} run={inView} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
