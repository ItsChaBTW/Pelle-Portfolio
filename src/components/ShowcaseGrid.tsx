import Flagship from '@/components/Flagship'

/**
 * ShowcaseGrid - the /showcase view on one glass sheet.
 *
 * A page head with a badge card on the right, then the Flagship build: the
 * five-tab product mock, the copy, the CTA, and the testimonial marquee that
 * runs under it. Same head and glass as Projects and Services, so the shell
 * reads as one system. Styles live in src/styles/showcase.css (.ktools).
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Municipal Flagship</span>
          <h1 className="pgrid__title" id="showcase-title">
            Bagotizen Card Pre-Enrollment Platform
          </h1>
          <p className="pgrid__lede">
            Fast, verified, and secure digital pre-enrollment for 850+ Iskolar Bago beneficiaries in City of Bago. Features duplicate checking, automated QR reference codes (BAGO-2026-XXXXX), and GCash validation for rapid payout card issuance.
          </p>
        </div>

        {/* Badge slot */}
        <div className="ktools__vote">
          <p className="ktools__vote-label">
            City of Bago
            <span aria-hidden="true" className="ktools__vote-dot" />
            <span className="ktools__vote-ask">Live Deployment</span>
          </p>
          <a className="ktools__vote-frame ktools__vote-card" href="https://lydo.bccbsis.com/qwerty12345/" target="_blank" rel="noopener noreferrer">
            <img src="/images/projects/bagotizen-card.jpg" alt="" width="42" height="42" style={{ borderRadius: '8px', objectFit: 'cover' }} />
            <span className="ktools__vote-text">
              Open Bagotizen Live Portal
            </span>
          </a>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Flagship build" />
      </div>
    </section>
  )
}
