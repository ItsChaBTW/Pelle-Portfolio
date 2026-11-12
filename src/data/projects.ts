export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * Mobile and specialized systems by Charlie Pelle.
 */
export const mobileApps: MobileApp[] = [
  {
    name: 'BYEA Tabulation System 2026',
    tagline: 'Real-time jury scoring and awards tabulation system.',
    description:
      'Official judging and score tabulation platform for the Bagonhon Youth for Excellence Awards 2026. Features secure jury authentication, mathematical criteria weighting, tie-breaking algorithms, and instant final ranking calculation.',
    imageSrc: '/images/projects/byea-tabulation.jpg',
    imagePosition: '50% 20%',
    accentColor: '#0EA5E9',
    stats: [
      { value: 'BYEA 2026', label: 'Youth Awards' },
      { value: 'Jury Auth', label: 'Secure Scoring' },
      { value: 'Real-time', label: 'Tabulation' },
    ],
    badge: 'Youth Awards 2026',
  },
  {
    name: 'BCC Time Attendance Platform',
    tagline: 'QR code-based faculty & staff attendance system.',
    description:
      'A secure QR code-based time-tracking attendance system built for Bago City College. It features instant QR scanning, logs entry/exit timestamps, and computes monthly attendance metrics.',
    imageSrc: '/images/projects/bcctap-preview.png',
    imagePosition: '50% 20%',
    accentColor: '#8B5CF6',
    stats: [
      { value: 'QR Engine', label: 'Real-time Scan' },
      { value: 'PHP/MySQL', label: 'Backend Core' },
      { value: 'Instant', label: 'Attendance Logs' },
    ],
    badge: 'Live Web',
  },
  {
    name: 'Bago City EDUGRANT Portal',
    tagline: 'Integrated scholarship & automated examination platform.',
    description:
      'Streamlines student scholarship applications, document verification, applicant tracking, and features automated exam scheduling, question management, and real-time grading.',
    imageSrc: '/images/projects/lydoportal.png',
    accentColor: '#10B981',
    stats: [
      { value: 'PHP/Laravel', label: 'Backend Stack' },
      { value: 'Online Exams', label: 'Grading Engine' },
      { value: 'Scholarships', label: 'Applicant Flow' },
    ],
    badge: 'Featured Live',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Bagotizen Card Online Pre-Enrollment',
    tagline: 'Verified digital pre-enrollment for Iskolar Bago beneficiaries.',
    description:
      'Municipal pre-enrollment platform for 850+ Iskolar Bago beneficiaries. Verified against the official masterlist with duplicate prevention, automated reference codes (BAGO-2026-XXXXX), QR-code printouts, GCash verification, and on-site encoding payout stations.',
    imageSrc: '/images/projects/bagotizen-card.jpg',
    accentColor: '#2563EB',
    stats: [
      { value: '850+ Scholars', label: 'Beneficiaries' },
      { value: 'QR Codes', label: 'Reference Engine' },
      { value: 'PHP / MySQL', label: 'Stack' },
    ],
    badge: 'Municipal System',
  },
  {
    name: 'City of Bago Iskolar Portal',
    tagline: 'Official municipal scholarship application & tracking portal.',
    description:
      'Official government portal for City of Bago scholarships. Offers full applicant registration, eligibility verification, transparency bulletins, downloadable forms, application tracking, and integrated chatbot support.',
    imageSrc: '/images/projects/iskolar-bago.jpg',
    accentColor: '#EA580C',
    stats: [
      { value: 'BAGO.GOV', label: 'Official Portal' },
      { value: 'Real-time', label: 'Status Tracking' },
      { value: 'Chatbot', label: 'Applicant Support' },
    ],
    badge: 'Government Web',
  },
  {
    name: 'Web Based Event Management System',
    tagline: 'QR-powered attendance and live competition tabulation.',
    description:
      'A secure, efficient event operations system featuring QR attendance tracking, separate judge scoring and student credentials, and real-time competition tabulation.',
    imageSrc: '/images/projects/web-based-ems.png',
    accentColor: '#16A34A',
    stats: [
      { value: 'QR Attendance', label: 'Scanner' },
      { value: 'Judge Portal', label: 'Live Scoring' },
      { value: 'Production', label: 'Active Deployment' },
    ],
    badge: 'Live Deployment',
  },
  {
    name: 'ITech Student Clearance System',
    tagline: 'Modernized multi-department student clearance dashboard.',
    description:
      'Streamlined campus clearance system for students and faculty. Tracks academic accountabilities across University Library, Finance Office, and Registrar with live status indicators and document approval workflows.',
    imageSrc: '/images/projects/itech-clearance.jpg',
    accentColor: '#6366F1',
    stats: [
      { value: '3+ Offices', label: 'Workflow Sync' },
      { value: 'Live Badges', label: 'Status Tracking' },
      { value: 'Paperless', label: 'Digital Pipeline' },
    ],
    badge: 'University Platform',
  },
  {
    name: 'THYNK Disaster Response Network',
    tagline: 'Emergency coordination & resource distribution platform.',
    description:
      'A comprehensive disaster management and rapid emergency coordination platform. Enables relief organizations, emergency responders, and local authorities to coordinate relief materials, logistics, and resource maps in real time during crises.',
    imageSrc: '/images/projects/thynk-preview.png',
    accentColor: '#0284C7',
    stats: [
      { value: 'C# ASP.NET', label: 'Core Platform' },
      { value: 'SQL Server', label: 'Data Management' },
      { value: 'Live System', label: 'Production URL' },
    ],
    badge: 'Featured Live',
  },
  {
    name: 'Busay Health Center Portal',
    tagline: 'Community healthcare appointment & records platform.',
    description:
      'Dedicated health center portal for Barangay Busay providing online consultation appointments, healthcare services directory, patient queue management, and digital clinic records.',
    imageSrc: '/images/projects/busay-health.jpg',
    accentColor: '#0284C7',
    stats: [
      { value: 'Appointments', label: 'Online Booking' },
      { value: 'Community', label: 'Healthcare Tech' },
      { value: 'PHP/MySQL', label: 'Backend Stack' },
    ],
    badge: 'Health Service',
  },
]
