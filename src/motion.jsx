import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Shared easing curve used across the site for a cohesive editorial feel.
export const EASE = [0.22, 1, 0.36, 1]

// Page-level wrapper: each routed page animates in/out as a unit.
// Used inside <AnimatePresence mode="wait"> so the outgoing page leaves
// before the incoming one enters — gives a clean cinematic handoff.
export const pageVariants = {
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE, when: 'beforeChildren', staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: 'blur(6px)',
    transition: { duration: 0.4, ease: EASE },
  },
}

export function Page({ children, className = '' }) {
  return (
    <motion.main
      className={`page ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.main>
  )
}

// Stagger container + item variants for inside-page reveals.
export const staggerContainer = {
  initial: {},
  enter: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const revealItem = {
  initial: { opacity: 0, y: 28 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

// Reveal-on-scroll: fades + lifts children when they enter the viewport.
export function Reveal({ children, className = '', delay = 0, y = 28 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
