import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'

/*
  ThemedBackdrop — animated background layer for the hero
  ───────────────────────────────────────────────────────
  Renders the active theme's background animation:
    A1 Botanical → drifting petals
    A2 Aurora    → drifting orbs + stars
    A4 Sunrise   → vertical gradient + sun + dust motes rising
    A5 Bokeh     → pulsing blurred orbs
*/

export default function ThemedBackdrop() {
  const { theme } = useTheme()

  if (theme === 'A1') return <BotanicalBg />
  if (theme === 'A2') return <AuroraBg />
  if (theme === 'A4') return <SunriseBg />
  if (theme === 'A5') return <BokehBg />
  return null
}

function BotanicalBg() {
  return (
    <div className="tb tb-botanical">
      <div className="tb-botanical-tint" />
      <div className="tb-petals">
        {Array.from({ length: 16 }).map((_, i) => {
          const isLeaf = i % 3 === 0
          const dur = 11 + (i % 5) * 2.5
          const delay = i * 0.7
          const sizeJitter = 0.9 + (i % 4) * 0.15
          // spread evenly across the full width
          const col = (i / 16) * 100
          return (
            <motion.div
              key={i}
              className={isLeaf ? 'tb-petal tb-leaf' : 'tb-petal'}
              style={{
                position: 'absolute',
                left: `${col}%`,
                top: 0,
              }}
              initial={{ y: -60, rotate: 0, opacity: 0 }}
              animate={{
                y: ['-60px', '110vh'],
                rotate: [0, 360],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                y: { duration: dur, repeat: Infinity, delay, ease: 'linear' },
                rotate: { duration: dur, repeat: Infinity, delay, ease: 'linear' },
                opacity: { duration: dur, repeat: Infinity, delay, times: [0, 0.1, 0.9, 1] },
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                transform: `scale(${sizeJitter})`,
                transformOrigin: 'center',
              }} />
            </motion.div>
          )
        })}
      </div>
      <div className="tb-vignette" />
    </div>
  )
}

function AuroraBg() {
  return (
    <div className="tb tb-aurora">
      <div className="tb-aurora-a" />
      <div className="tb-aurora-b" />
      <div className="tb-aurora-c" />
      <div className="tb-stars" />
      {/* falling stars — bright streaks that shoot across the screen */}
      <div className="tb-shooting-stars">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="tb-shooting-star"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, 1800],
              y: [0, 1200],
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 2.2 + (i % 4) * 0.5,
              repeat: Infinity,
              delay: i * 1.6 + (i % 3) * 0.8,
              ease: 'easeIn',
              times: [0, 0.15, 0.85, 1],
            }}
            style={{
              top: `${(i * 9) % 85}%`,
              left: 0,
            }}
          />
        ))}
      </div>
      <div className="tb-vignette" />
    </div>
  )
}

function SunriseBg() {
  return (
    <div className="tb tb-sunrise">
      <div className="tb-sun" />
      <div className="tb-rays" />
      <div className="tb-dust">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            className="tb-mote"
            initial={{ y: '110%', x: `${(i * 4.5) % 100}%`, opacity: 0 }}
            animate={{ y: '-10%', opacity: [0, 0.7, 0.7, 0] }}
            transition={{ duration: 14 + (i % 4) * 2, repeat: Infinity, delay: i * 0.4, ease: 'linear' }}
          />
        ))}
      </div>
      <div className="tb-vignette tb-vignette-light" />
    </div>
  )
}

function BokehBg() {
  return (
    <div className="tb tb-bokeh">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="tb-orb"
          initial={{ scale: 0.8, opacity: 0.15 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
            width: `${40 + (i % 4) * 30}px`,
            height: `${40 + (i % 4) * 30}px`,
          }}
        />
      ))}
      <div className="tb-vignette" />
    </div>
  )
}
