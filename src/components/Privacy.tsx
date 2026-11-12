import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This privacy policy applies to the personal portfolio website of {profile.name}.</p>

          <h2>What is collected</h2>
          <p>When you contact me through the contact form, your name, email address, and message content are received strictly to reply to your inquiry.</p>

          <h2>How it is used</h2>
          <p>Your information is used solely for professional communication and project discussions. It is never sold, shared, or distributed to third parties.</p>

          <h2>How long it is kept</h2>
          <p>Communication records are kept only as long as needed for correspondence. You can request deletion at any time by emailing {profile.email}.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
