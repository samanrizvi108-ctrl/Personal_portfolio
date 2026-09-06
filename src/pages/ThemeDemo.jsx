import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame, AnimatePresence } from 'framer-motion'
import { Page } from '../motion'

/*
  Theme Demo — 6 alternative hero themes
  ───────────────────────────────────────
  A1 · Botanical     — floating petals/leaves, terracotta + sage
  A2 · Aurora Sky    — slow color-shifting gradient (greens, pinks, golds)
  A3 · Paper Studio  — paper scraps + ink dots, ivory + ink + crimson
  A4 · Sunrise       — vertical gradient (crimson→amber→cream) + dust motes
  A5 · Bokeh Gold    — soft blurred light circles, crimson + gold
  A6 · Editorial Sun — bright cream magazine look, no effects

  Toggle at the top, each is a real working hero.
*/

// 1 — BOTANICAL ──────────────────────────────────────────────
function Botanical() {
  return (
    <div className="td-hero td-botanical">
      <div className="td-botanical-bg" />
      <div className="td-petals">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="td-petal"
            initial={{ y: '-10%', x: `${(i * 5.5) % 100}%`, rotate: 0, opacity: 0 }}
            animate={{
              y: '110%',
              rotate: 360,
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 12 + (i % 5) * 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      <div className="td-botanical-vignette" />
      <ThemeCopy
        kicker="Available · Lucknow"
        headline={['Warm,', 'thoughtful,', <em key="e">growing.</em>]}
        accent="terracotta + sage + cream"
        body="Sunlight through leaves, a slower kind of work. Career counselling, English training, and the small details that help people find their footing."
        cta="Explore My Work"
      />
    </div>
  )
}

// 2 — AURORA SKY ─────────────────────────────────────────────
function AuroraSky() {
  return (
    <div className="td-hero td-aurora">
      <div className="td-aurora-a" />
      <div className="td-aurora-b" />
      <div className="td-aurora-c" />
      <div className="td-stars" />
      <div className="td-aurora-vignette" />
      <ThemeCopy
        kicker="Available · Lucknow"
        headline={['A sky that', 'keeps', <em key="e">shifting.</em>]}
        accent="navy + teal + magenta + gold"
        body="A color-shifting aurora behind the type. Calm, premium, modern — pairs with the rotating headline and the rain-to-aurora swap-out without changing layout."
        cta="Explore My Work"
      />
    </div>
  )
}

// 3 — PAPER STUDIO ───────────────────────────────────────────
function PaperStudio() {
  return (
    <div className="td-hero td-paper">
      <div className="td-paper-grain" />
      <div className="td-paper-scraps">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="td-scrap"
            initial={{ y: '-15%', x: `${(i * 11) % 100}%`, rotate: (i % 2 ? 8 : -12) }}
            animate={{ y: '115%', rotate: (i % 2 ? 18 : -20) }}
            transition={{ duration: 18 + (i % 4) * 2, repeat: Infinity, delay: i * 0.8, ease: 'linear' }}
            style={{ '--rot': `${(i % 2 ? 12 : -16)}deg` }}
          />
        ))}
      </div>
      <div className="td-paper-vignette" />
      <div className="td-paper-copy">
        <div className="td-paper-kicker">A · EDITORIAL</div>
        <h1 className="td-paper-head">
          <span>Quietly</span>
          <span>printed,</span>
          <em>carefully</em>
          <span>made.</span>
        </h1>
        <p className="td-paper-body">
          Paper scraps drift down. Type is the centerpiece. The whole site reads like a hand-bound
          magazine — warm, considered, professional.
        </p>
        <div className="td-paper-cta">Explore the work →</div>
      </div>
    </div>
  )
}

// 4 — SUNRISE ────────────────────────────────────────────────
function Sunrise() {
  return (
    <div className="td-hero td-sunrise">
      <div className="td-sun-sun" />
      <div className="td-sun-rays" />
      <div className="td-sun-dust">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            className="td-sun-mote"
            initial={{ y: '110%', x: `${(i * 4.5) % 100}%`, opacity: 0 }}
            animate={{ y: '-10%', opacity: [0, 0.7, 0.7, 0] }}
            transition={{ duration: 14 + (i % 4) * 2, repeat: Infinity, delay: i * 0.4, ease: 'linear' }}
          />
        ))}
      </div>
      <div className="td-sun-vignette" />
      <ThemeCopy
        kicker="Available · Lucknow"
        headline={['A new', 'chapter,', <em key="e">rising.</em>]}
        accent="crimson + amber + cream"
        body="Vertical gradient from deep crimson to warm amber to cream — like sunrise. Soft dust motes float up. Pairs perfectly with a new job reveal and 'growing into a role' energy."
        cta="Explore My Work"
        bgText="light"
      />
    </div>
  )
}

// 5 — BOKEH GOLD ─────────────────────────────────────────────
function Bokeh() {
  return (
    <div className="td-hero td-bokeh">
      <div className="td-bokeh-bgs">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="td-bokeh-orb"
            initial={{ scale: 0.8, opacity: 0.15 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              width: `${40 + (i % 4) * 30}px`,
              height: `${40 + (i % 4) * 30}px`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(241,196,198,0.7) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(193,154,79,0.5) 0%, transparent 70%)',
            }}
          />
        ))}
      </div>
      <div className="td-bokeh-vignette" />
      <ThemeCopy
        kicker="Available · Lucknow"
        headline={['Golden', 'hour,', <em key="e">soft focus.</em>]}
        accent="crimson + warm gold"
        body="Soft blurred light circles float like out-of-focus highlights in a sunny photo. The same crimson palette, warmed with gold. Warm + polished + premium."
        cta="Explore My Work"
      />
    </div>
  )
}

// 6 — EDITORIAL SUN (bright cream) ───────────────────────────
function EditorialSun() {
  return (
    <div className="td-hero td-sun">
      <div className="td-sun-paper" />
      <div className="td-sun-rule td-sun-rule-1" />
      <div className="td-sun-rule td-sun-rule-2" />
      <div className="td-sun-mark td-sun-mark-1" />
      <div className="td-sun-mark td-sun-mark-2" />
      <div className="td-sun-content">
        <div className="td-sun-kicker-row">
          <span className="td-sun-kicker">N° 003 — A Saman Rizvi Editorial</span>
          <span className="td-sun-date">Vol. 03 · 2025</span>
        </div>
        <h1 className="td-sun-head">
          <span>Hello,</span>
          <span>I&rsquo;m <em>Saman</em>.</span>
          <span>Career counsellor,</span>
          <span>English trainer,</span>
          <em>based in Lucknow.</em>
        </h1>
        <p className="td-sun-body">
          A bright, magazine-style spread — ivory paper, ink type, a single crimson accent. No rain,
          no aurora, no effects. Just considered typography doing all the work.
        </p>
        <div className="td-sun-cta-row">
          <span className="td-sun-cta td-sun-cta-primary">Explore the work →</span>
          <span className="td-sun-cta td-sun-cta-ghost">Get in touch</span>
        </div>
      </div>
    </div>
  )
}

// shared copy block for the "feel"-based themes
function ThemeCopy({ kicker, headline, body, cta, accent, bgText = 'dark' }) {
  return (
    <div className={`td-copy ${bgText === 'light' ? 'td-copy-light' : ''}`}>
      <div className="td-meta">
        <span className="td-dot" /> {kicker}
      </div>
      <h1 className="td-head">
        {headline.map((line, i) => (
          <span key={i} className="td-head-line">{line}</span>
        ))}
      </h1>
      <p className="td-body">{body}</p>
      <div className="td-cta-row">
        <span className="td-cta td-cta-primary">{cta} →</span>
      </div>
      {accent && <div className="td-accent-note">palette: {accent}</div>}
    </div>
  )
}

const THEMES = [
  { k: 'botanical',  name: 'A1 · Botanical',    sub: 'sunlight + leaves',          Comp: Botanical,   bg: '#3a1e1a' },
  { k: 'aurora',     name: 'A2 · Aurora Sky',   sub: 'color-shifting gradient',    Comp: AuroraSky,   bg: '#0c0a18' },
  { k: 'paper',      name: 'A3 · Paper Studio', sub: 'paper scraps + ivory',       Comp: PaperStudio, bg: '#f1e9d8' },
  { k: 'sunrise',    name: 'A4 · Sunrise',      sub: 'gradient + dust motes',      Comp: Sunrise,     bg: '#4a1410' },
  { k: 'bokeh',      name: 'A5 · Bokeh Gold',   sub: 'soft floating light orbs',   Comp: Bokeh,       bg: '#2a0a10' },
  { k: 'sun',        name: 'A6 · Editorial Sun',sub: 'bright cream magazine',      Comp: EditorialSun,bg: '#f4ecdc' },
]

export default function ThemeDemo() {
  const [mode, setMode] = useState('botanical')
  const current = THEMES.find(t => t.k === mode)
  const Comp = current.Comp
  return (
    <Page>
      <section style={{ padding: '120px 0 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 28, textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.6, marginBottom: 8, color: '#f6f1ea' }}>
              THEME A/B
            </div>
            <h1 style={{
              fontFamily: 'serif', fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.1, margin: 0, fontWeight: 500, color: '#f6f1ea',
            }}>
              Six directions for the home hero
            </h1>
            <p style={{ opacity: 0.7, marginTop: 10, color: '#f6f1ea' }}>
              Each is a real working hero. Click to preview.
            </p>
          </div>

          {/* Toggle grid */}
          <div className="td-toggle-grid">
            {THEMES.map(t => (
              <button
                key={t.k}
                onClick={() => setMode(t.k)}
                className={`td-toggle ${mode === t.k ? 'is-active' : ''}`}
                style={{ background: t.bg }}
              >
                <div className="td-toggle-name">{t.name}</div>
                <div className="td-toggle-sub">{t.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview frame */}
        <div className="td-frame">
          <Comp />
        </div>

        <div style={{ maxWidth: 1280, margin: '24px auto 0', padding: '0 24px' }}>
          <p style={{ color: '#f6f1ea', opacity: 0.55, fontSize: 13, textAlign: 'center' }}>
            ↑ live preview — same hero slot, six different feels.
          </p>
        </div>
      </section>
    </Page>
  )
}
