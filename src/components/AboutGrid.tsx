import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, GraduationCap } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - Charlie Pelle's About view.
 */

const DOCKER = { src: '/icons/ai/docker.svg', name: 'Docker' }
const NODE = { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' }
const POSTGRES = { src: '/icons/ai/postgresql.svg', name: 'PostgreSQL' }
const SQLITE = { src: '/icons/ai/sqlite.svg', name: 'MySQL / SQL Server' }
const TAILWIND = { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' }
const REACT = { src: '/icons/ai/react.svg', name: 'React' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const CLOUDFLARE = { src: '/icons/ai/cloudflare.svg', name: 'Cloudflare' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Backend & System APIs (PHP, Laravel, Node.js, C# ASP.NET)',
    marks: [NODE, GITHUB],
  },
  {
    index: '02',
    title: 'Database Architecture & Query Optimization (MySQL, SQL Server)',
    marks: [POSTGRES, SQLITE],
  },
  {
    index: '03',
    title: 'Modern Frontends & UI Systems (Tailwind CSS, React, JS)',
    marks: [REACT, TAILWIND],
  },
  {
    index: '04',
    title: 'Infrastructure, Version Control & Security (Docker, Git, Cloudflare)',
    marks: [DOCKER, CLOUDFLARE, GITHUB],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About Me</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Fullstack Developer specializing in robust server-side architectures, database optimization, and high-performance web systems.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Crafting efficient, reliable digital solutions from database schema to user interface.
            <span> Driven by clean code, sound engineering, and real-world impact.</span>
          </p>

          <p className="agrid__note">
            <strong>Bago City College BSIS Graduate</strong>, currently serving as{' '}
            <span className="agrid__link" style={{ fontWeight: 600 }}>
              IT Officer at Bago City Government
            </span>{' '}
            — engineer behind the <em>Bagotizen Card Pre-Enrollment</em>, <em>City of Bago Iskolar Portal</em>, and <em>BYEA 2026 Tabulation System</em>. Awarded Developer of the Year and consistent Programmer of the Month.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <GraduationCap size={18} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Information Systems</span>
                <span className="agrid__cell-meta">Bago City College (2021-2025)</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Remote Available</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://github.com/ItsChaBTW" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/icons/ai/github.svg" alt="GitHub" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub Portfolio</span>
                <span className="agrid__cell-meta">@ItsChaBTW · Open Source & Projects</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/images/profile/pic2.jpg"
            alt="Charlie Pelle"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '1.25rem' }}
          />
        </div>
      </div>
    </section>
  )
}
