import { motion } from 'framer-motion'
import { useState } from 'react'
import { ConstellationField } from '@designcodeio/threeui/components/ConstellationField'
import { Reveal, Page } from '../motion'

const PROJECTS = [
  {
    tag: 'Program Coordination',
    title: 'Joyful Yatra Enabling Program',
    desc: 'As Assistant Coordinator at City Montessori School, I keep student initiatives organized, funded, and on schedule — from planning decks to day-of logistics.',
    span: 'wide',
  },
  {
    tag: 'Finance',
    title: 'Budget & Expense Tracking',
    desc: 'Built lightweight tracking for program spend so every rupee is accountable and reporting takes minutes, not hours.',
    span: 'tall',
  },
  {
    tag: 'Marketing',
    title: 'Outreach Campaigns',
    desc: 'Designed and ran awareness drives across campus that lifted participation across departments.',
    span: 'normal',
  },
  {
    tag: 'Events',
    title: 'Event Operations',
    desc: 'Co-led 10+ events end-to-end: scheduling, vendors, volunteers, and run-of-show.',
    span: 'normal',
  },
  {
    tag: 'Communications',
    title: 'Reporting & Storytelling',
    desc: 'Turned program outcomes into clear updates for coordinators, students, and stakeholders.',
    span: 'wide',
  },
]

const FILTERS = ['All', 'Finance', 'Marketing', 'Events', 'Communications', 'Program Coordination']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = PROJECTS.filter((p) => filter === 'All' || p.tag === filter)

  return (
    <Page>
      <div className="page-inner work-page">
      <ConstellationField className="page-field" variant="constellation-field" />

      <Reveal>
        <span className="section-kicker">Selected Work</span>
        <h1 className="page-title">Coordination, finance &amp; outreach</h1>
        <p className="page-lede">
          A focused body of work across program coordination, finance, and people-facing operations —
          the kind of behind-the-scenes effort that makes programs land.
        </p>
      </Reveal>

      <div className="filter-row">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="work-grid">
        {shown.map((p) => (
          <motion.article
            layout
            key={p.title}
            className={`bento-card work-card ${p.span}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <span className="work-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.article>
        ))}
      </motion.div>
      </div>
    </Page>
  )
}
