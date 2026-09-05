import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassHero from '../components/GlassHero'
import { Reveal } from '../motion'

const MOMENTS = [
  { title: 'First Rain', note: 'The kind of evening that makes everything feel softer.' },
  { title: 'Window Light', note: 'Watching the city blur behind the glass.' },
  { title: 'Quiet Walk', note: 'No plans, just the sound of it falling.' },
  { title: 'Warm Inside', note: 'Tea, blanket, and a storm outside.' },
]

const TIMELINE = [
  {
    year: '2025 — Present',
    role: 'Assistant Coordinator — JYEP',
    org: 'City Montessori School, Lucknow',
    detail:
      'Coordinate the Joyful Yatra Enabling Program: scheduling, finance tracking, and keeping student-led initiatives on course.',
  },
  {
    year: '2024',
    role: 'B.Com Graduate',
    org: 'University of Lucknow',
    detail:
      'Foundation in accounting, economics, and business administration — the analytical backbone behind my coordination work.',
  },
  {
    year: '2023 — 2024',
    role: 'Marketing & Operations Support',
    org: 'Campus Initiatives',
    detail: 'Ran outreach campaigns and helped organize events that grew program participation across departments.',
  },
]

export default function Home() {
  return (
    <>
      <GlassHero />

      {/* content lifts up over the hero */}
      <div className="home-content">
        <section className="snap-strip">
          {[
            { k: '1+', v: 'Year in Coordination' },
            { k: '200+', v: 'Students Guided' },
            { k: '5+', v: 'Programs Run' },
            { k: '10+', v: 'Events Co-led' },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08} className="snap-item">
              <div className="snap-k">{s.k}</div>
              <div className="snap-v">{s.v}</div>
            </Reveal>
          ))}
        </section>

        <section className="home-timeline">
          <Reveal>
            <span className="section-kicker">The Path So Far</span>
            <h2 className="section-title">A short, deliberate journey</h2>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.1} className="timeline-row">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-body">
                  <h3>{t.role}</h3>
                  <span className="timeline-org">{t.org}</span>
                  <p>{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="home-about-cta">
            <Link to="/about" className="link-arrow">More about me <span>&rarr;</span></Link>
          </Reveal>
        </section>

        {/* Rainy Moments — personal, rain-themed gallery */}
        <section className="moments">
          <Reveal>
            <span className="section-kicker">Rainy Moments</span>
            <h2 className="section-title">Little things she loves</h2>
          </Reveal>
          <div className="moments-grid">
            {MOMENTS.map((m, i) => (
              <motion.article
                key={m.title}
                className="moment-card"
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="moment-rain" />
                <div className="moment-inner">
                  <h3>{m.title}</h3>
                  <p>{m.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
