export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
}

export const gymFunnel: Funnel[] = [
  {
    file: 'bagotizen-card.html',
    label: 'Bagotizen Card Pre-Enrollment',
    tag: 'Lead Capture',
    desc: 'Verified municipal pre-enrollment platform for 850+ Iskolar Bago beneficiaries with GCash & QR.',
    dir: 'samples',
  },
  {
    file: 'iskolar-bago.html',
    label: 'City of Bago Iskolar Portal',
    tag: 'Website',
    desc: 'Official government portal (BAGO.GOV) for city scholarship applications & tracking.',
    dir: 'samples',
  },
  {
    file: 'web-based-ems.html',
    label: 'Web Based EMS',
    tag: 'Booking',
    desc: 'QR-powered event attendance and live competition judging tabulation platform.',
    dir: 'samples',
  },
]

export const bookingFunnel: Funnel[] = [
  {
    file: 'itech-clearance.html',
    label: 'ITech Student Clearance System',
    tag: 'Checkout',
    desc: 'University student clearance dashboard tracking Library, Finance, and Registrar accountabilities.',
    dir: 'samples',
  },
  {
    file: 'byea-tabulation.html',
    label: 'BYEA Tabulation 2026',
    tag: 'Website',
    desc: 'Real-time scoring and tabulation system for Bagonhon Youth for Excellence Awards 2026.',
    dir: 'samples',
  },
  {
    file: 'busay-health.html',
    label: 'Busay Health Center Portal',
    tag: 'Booking',
    desc: 'Community healthcare consultation appointment booking and patient records platform.',
    dir: 'samples',
  },
]

export const websiteFunnel: Funnel[] = [
  {
    file: 'bagotizen-card.html',
    label: 'Bagotizen Card Online Pre-Enrollment',
    tag: 'Website',
    desc: 'Municipal student data collection, automated QR codes, and GCash payout integration.',
    dir: 'samples',
  },
  {
    file: 'iskolar-bago.html',
    label: 'City of Bago Iskolar Portal',
    tag: 'Website',
    desc: 'Official BAGO.GOV scholarship portal with applicant tracking and virtual assistant.',
    dir: 'samples',
  },
  {
    file: 'web-based-ems.html',
    label: 'Web Based Event Management System',
    tag: 'Website',
    desc: 'QR-powered event attendance and real-time tabulation platform.',
    dir: 'samples',
  },
  {
    file: 'itech-clearance.html',
    label: 'ITech Student Clearance System',
    tag: 'Website',
    desc: 'Multi-office student clearance tracking and document approval platform.',
    dir: 'samples',
  },
  {
    file: 'byea-tabulation.html',
    label: 'BYEA Tabulation System 2026',
    tag: 'Website',
    desc: 'Jury judging platform and mathematical ranking tabulation for youth excellence awards.',
    dir: 'samples',
  },
  {
    file: 'busay-health.html',
    label: 'Busay Health Center Community Portal',
    tag: 'Website',
    desc: 'Barangay healthcare appointment scheduling and consultation records system.',
    dir: 'samples',
  },
]

export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#2563eb',
  Booking: '#16a34a',
  Checkout: '#8b5cf6',
  Website: '#ea580c',
}
