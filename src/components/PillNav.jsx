import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function PillNav() {
  return (
    <nav className="pill-nav">
      {LINKS.map((l) => (
        <motion.div key={l.to} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
          <NavLink
            to={l.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={l.to === '/'}
          >
            {l.label}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  )
}
