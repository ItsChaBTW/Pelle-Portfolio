import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This website represents the work, professional portfolio, and technical services of {profile.name}.</p>

          <h2>Work and payment</h2>
          <p>Project scopes, technical milestones, deliverables, and payment agreements are specified in mutual agreements prior to project kick-off.</p>

          <h2>Ownership</h2>
          <p>Custom client code and deployed software belong to respective clients upon project completion and contract fulfillment. Portfolio showcase remains property of {profile.name}.</p>

          <h2>Liability</h2>
          <p>All software solutions are delivered following best engineering practices with dedicated testing and warranty periods agreed upon per project.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
