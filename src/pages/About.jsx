import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ParticleDrift } from '@designcodeio/threeui/components/ParticleDrift'
import { Reveal, Page } from '../motion'

const VALUES = [
  { t: 'Order', d: 'Finance discipline and clear systems so nothing falls through the cracks.' },
  { t: 'People', d: 'Coordination is really about people — I keep students and teams moving together.' },
  { t: 'Care', d: 'Small details in comms and logistics are what make a program feel effortless.' },
]

const SKILLS = ['Finance Coordination', 'Marketing', 'Event Management', 'Operations', 'Student Engagement', 'Communications', 'Reporting', 'Scheduling']

const FACTS = [
  { k: 'Role', v: 'Assistant Coordinator' },
  { k: 'Program', v: 'Joyful Yatra Enabling' },
  { k: 'Education', v: 'B.Com Graduate' },
  { k: 'Based in', v: 'Lucknow, India' },
]

// Squircle portrait with a "half-cutout" — a transparent PNG (background removed,
// subject's head extending above the frame) breaks out of the rounded-square top.
// Falls back to the plain JPG inside the squircle if the cutout isn't present.
function AboutPortrait() {
  const ref = useRef(null)
  const [cutout, setCutout] = useState(false)
  useEffect(() => {
    const img = ref.current
    if (!img) return
    img.onload = () => {
      // a real cutout is a PNG with transparency; treat load as cutout-ready
      if (img.getAttribute('src')?.endsWith('.png')) setCutout(true)
    }
    img.onerror = () => { if (img.getAttribute('src')?.endsWith('.png')) { img.src = '/saman.jpg'; setCutout(false) } }
  }, [])
  return (
    <div className={'about-portrait' + (cutout ? ' is-cutout' : '')}>
      <img ref={ref} src="/saman-cutout.png" alt="Saman Rizvi" className="portrait-img-el" />
      {!cutout && <div className="about-portrait-duotone" />}
    </div>
  )
}

export default function About() {
  return (
    <Page>
      <div className="page-inner about-page">
      <ParticleDrift className="page-field alt" />

      {/* intro: text + facts on the left, photo on the right (above "How I work") */}
      <div className="about-intro">
        <Reveal className="about-intro-text">
          <span className="section-kicker">About</span>
          <h1 className="page-title">Saman Rizvi</h1>
          <p className="page-lede">
            I'm a B.Com graduate and Assistant Coordinator for the Joyful Yatra Enabling Program at
            City Montessori School, Lucknow — where I live at the intersection of finance and people.
            I'm the person who makes sure a program is funded, the message lands clearly, and the day
            runs smoothly for everyone involved. Calm under logistics, warm with people, and quietly
            obsessed with the details that make an experience feel effortless.
          </p>
          <ul className="about-facts">
            {FACTS.map((f) => (
              <li key={f.k}>
                <span className="fact-k">{f.k}</span>
                <span className="fact-v">{f.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="about-photo" delay={0.05}>
          <AboutPortrait />
        </Reveal>
      </div>

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
