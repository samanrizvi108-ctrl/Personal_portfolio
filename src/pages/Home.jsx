import { Link } from 'react-router-dom'
import EditorialHero from '../components/EditorialHero'
import { Reveal } from '../motion'

const TIMELINE = [
  {
    year: '2025',
    role: 'Career Counsellor & English Trainer',
    org: 'National Institute of Language (NIL)',
    detail:
      'New role — guiding students on careers and training them in English communication, lesson design, and 1:1 mentorship.',
  },
  {
    year: '2024 — 2025',
    role: 'Assistant Coordinator — JYEP',
    org: 'City Montessori School, Lucknow',
    detail:
      'Coordinated the Junior Youth Empowerment Programme: scheduling, finance tracking, and keeping student-led initiatives on course.',
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
      <EditorialHero />

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

        </div>
    </>
  )
}
