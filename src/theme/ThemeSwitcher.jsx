import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, THEMES } from './ThemeContext'

/*
  ThemeSwitcher — floating widget
  ──────────────────────────────
  Bottom-left, a small dot that opens a panel with all 4 themes.
  Active theme is highlighted. Selection is instant + persistent.
*/

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="tsw">
      <AnimatePresence>
        {open && (
          <motion.div
            className="tsw-panel"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="tsw-head">
              <span>Theme</span>
              <span className="tsw-head-meta">choose your mood</span>
            </div>
            <div className="tsw-list">
              {THEMES.map(t => (
                <button
                  key={t.k}
                  className={`tsw-item ${theme === t.k ? 'is-active' : ''}`}
                  onClick={() => { setTheme(t.k); setOpen(false) }}
                >
                  <div className="tsw-swatches">
                    {t.swatch.map((c, i) => (
                      <span key={i} className="tsw-swatch" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="tsw-item-text">
                    <div className="tsw-item-name">{t.name}</div>
                    <div className="tsw-item-sub">{t.sub}</div>
                  </div>
                  {theme === t.k && (
                    <motion.div
                      className="tsw-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
            <div className="tsw-foot">
              <kbd>esc</kbd> to close · saved to this device
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="tsw-btn"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Theme switcher"
        title="Switch theme"
      >
        <motion.span
          className="tsw-btn-icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0 0 18 5 5 0 0 0 0-10 4 4 0 0 1 0-8z" fill="currentColor" stroke="none" />
          </svg>
        </motion.span>
        <span className="tsw-btn-text">Theme</span>
        <span className="tsw-btn-current">{THEMES.find(t => t.k === theme)?.name}</span>
      </motion.button>
    </div>
  )
}
