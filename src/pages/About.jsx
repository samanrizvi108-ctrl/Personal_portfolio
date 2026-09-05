import { motion } from 'framer-motion'
import { ParticleDrift } from '@designcodeio/threeui/components/ParticleDrift'
import { Reveal, Page } from '../motion'

const VALUES = [
  { t: 'Order', d: 'Finance discipline and clear systems so nothing falls through the cracks.' },
  { t: 'People', d: 'Coordination is really about people — I keep students and teams moving together.' },
  { t: 'Care', d: 'Small details in comms and logistics are what make a program feel effortless.' },
]

const SKILLS = ['Finance Coordination', 'Marketing', 'Event Management', 'Operations', 'Student Engagement', 'Communications', 'Reporting', 'Scheduling']

export default function About() {
  return (
    <Page>
      <div className="page-inner about-page">
      <ParticleDrift className="page-field alt" />

      <Reveal>
        <span className="section-kicker">About</span>
        <h1 className="page-title">Saman Rizvi</h1>
        <p className="page-lede">
          B.Com graduate and Assistant Coordinator for the Joyful Yatra Enabling Program at
          City Montessori School, Lucknow. I sit at the intersection of finance and people —
          the person who makes sure the plan is funded, the message lands, and the day runs smooth.
        </p>
      </Reveal>

      <div className="about-split">
        <Reveal className="about-bio">
          <h2 className="section-title">How I work</h2>
          <p>
            My background in commerce gives me the analytical backbone; my coordination role gives
            me the people muscle. I like turning loose ideas into scheduled, budgeted, communicated
            reality — and I care about the experience of everyone involved.
          </p>
          <p>
            Outside program work, I'm drawn to design and thoughtful communication, which is partly
            why this little site exists — to present the professional me with the same care I bring
            to a program.
          </p>
        </Reveal>

        <Reveal className="about-values" delay={0.1}>
          {VALUES.map((v) => (
            <div className="value-card" key={v.t}>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="about-skills">
        <span className="section-kicker">Focus Areas</span>
        <div className="skill-tags">
          {SKILLS.map((s) => (
            <motion.span key={s} className="skill-tag" whileHover={{ backgroundColor: 'var(--crimson)', color: 'var(--white)' }}>
              {s}
            </motion.span>
          ))}
        </div>
      </Reveal>
      </div>
    </Page>
  )
}
