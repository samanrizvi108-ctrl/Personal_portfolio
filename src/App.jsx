import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import PillNav from './components/PillNav'
import RainCanvas from './components/RainCanvas'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'var(--crimson)',
          transformOrigin: '0%',
          scaleX: progress,
          zIndex: 2000,
        }}
      />

      <PillNav />

      <ScrollToTop />

      {/* global atmospheric rain across the whole site */}
      <RainCanvas opacity={0.5} zIndex={900} density={1} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <footer className="footer">
        © {new Date().getFullYear()} Saman Rizvi — Crafted with Motion
      </footer>
    </>
  )
}
