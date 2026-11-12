import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot from '@/components/Autopilot'

/**
 * ServicesGrid - Charlie Pelle's Services view.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Architecture & Schema',
    body: 'We map out user flows, relational database schemas, and RESTful API specifications for maximum efficiency.',
    Icon: MagnetStraight,
    chips: ['Requirements', 'DB Normalization', 'API Contracts', 'Security'],
  },
  {
    index: '02',
    label: 'Agile Fullstack Build',
    body: 'Rapid backend and frontend development with iterative testing, clean code, and regular check-ins.',
    Icon: Timer,
    chips: ['PHP / Laravel', 'C# ASP.NET', 'TypeScript', 'Tailwind'],
  },
  {
    index: '03',
    label: 'Production Deployment',
    body: 'Automated deployment, query tuning, security audits, and hands-on maintenance for rock-solid reliability.',
    Icon: Trophy,
    chips: ['Query Tuning', 'SSL & Auth', 'Live Testing', 'Monitoring'],
  },
]

/* ---------- The services ---------- */

const DOCKER = '/icons/ai/docker.svg'
const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const VITE = '/icons/ai/vite.svg'
const CLOUDFLARE = '/icons/ai/cloudflare.svg'
const NODE = '/icons/ai/nodedotjs.svg'
const POSTGRES = '/icons/ai/postgresql.svg'
const SQLITE = '/icons/ai/sqlite.svg'
const GITHUB = '/icons/ai/github.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Fullstack Web Applications',
    description: 'End-to-end custom systems built with modern PHP, Laravel, or ASP.NET with responsive frontends.',
    chip: 'Core Expertise',
    logos: [REACT, TAILWIND, VITE],
    bullets: ['Laravel & ASP.NET solutions', 'Responsive, mobile-first design', 'High-performance execution'],
  },
  {
    index: '02',
    title: 'Database Architecture & Tuning',
    description: 'Relational database schema design, indexing, and advanced query optimization for minimal latency.',
    chip: 'Performance',
    logos: [POSTGRES, SQLITE],
    bullets: ['Normalized schema design', 'Query speed optimization', 'Data migration & integrity'],
  },
  {
    index: '03',
    title: 'RESTful API & System Integration',
    description: 'Robust API endpoints with JWT authentication, role-based access control, and third-party sync.',
    chip: 'Backend & APIs',
    logos: [NODE, GITHUB],
    bullets: ['Secure authentication flows', 'Clean OpenAPI specifications', 'Third-party API bridging'],
  },
  {
    index: '04',
    title: 'Institutional & Government Systems',
    description: 'Specialized enterprise portals for examination, QR attendance, and municipal records management.',
    chip: 'Public Sector',
    logos: [DOCKER, CLOUDFLARE],
    bullets: ['QR attendance engine', 'Automated exam portals', 'Department workflow sync'],
  },
  {
    index: '05',
    title: 'Code Audits & Optimization',
    description: 'Refactoring legacy codebases, strengthening backend security, and reducing application load times.',
    chip: 'Optimization',
    logos: [GITHUB, CLOUDFLARE],
    bullets: ['30%+ load time reduction', 'Security vulnerability patching', 'Maintainability upgrades'],
  },
]

/** The tool marks, stacked horizontally on white tiles */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Engineering Scalable Solutions
        </h1>
        <p className="pgrid__lede">
          From robust backend architectures to modern, intuitive user interfaces, here is how I help bring your vision to production.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* The 3-stage method */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Development Lifecycle</span>
            <h2 className="sgrid__method-title" id="method-title">
              Precision. Velocity.
              <br />
              <span>Built to last.</span>
            </h2>
            <p className="sgrid__method-sub">
              Every system is engineered with strong foundations, ensuring high availability and seamless maintainability.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Specialized Services</h2>
            <p className="sgrid__offers-sub">Tailored engineering for startups, organizations, and institutions.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <Marks logos={s.logos} />
                  <span className="bento__chip" data-status="Live">
                    {s.chip}
                  </span>
                </span>
                <div className="sgrid__service-body">
                  <h3 className="sgrid__service-title">{s.title}</h3>
                  <p className="sgrid__service-desc">{s.description}</p>
                  <ul className="sgrid__bullets" role="list">
                    {s.bullets.map((b) => (
                      <li key={b} className="sgrid__bullet">
                        <CheckCircle size={14} weight="fill" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* The Autopilot section */}
        <div className="sgrid__autopilot">
          <Autopilot />
        </div>
      </div>
    </section>
  )
}
