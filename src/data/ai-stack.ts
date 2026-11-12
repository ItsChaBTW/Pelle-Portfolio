import {
  Sparkle,
  Database,
  Cpu,
  Browsers,
  QrCode,
  ShieldCheck,
  Terminal,
  Clock,
  Stack,
  Heartbeat,
  GraduationCap,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a non-technical client understands. */
  what: string
  /** Real stack / model / where it runs. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const PHP_STACK = 'PHP 8.x • Laravel • RESTful APIs'
const ASP_STACK = 'C# ASP.NET Core • Entity Framework • SQL Server'
const MYSQL_STACK = 'MySQL • Database Normalization • Query Optimization'
const FRONT_STACK = 'TypeScript / JS • Tailwind CSS • Bootstrap 5'

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Fullstack web systems, resilient backend APIs, and mission-critical database architectures.',
  stack: FRONT_STACK,
  children: [
    {
      id: 'government-systems',
      Icon: Terminal,
      name: 'Municipal & Government Tech',
      what: 'Live civic platforms engineered for City Government of Bago.',
      children: [
        {
          id: 'bagotizen-card',
          Icon: QrCode,
          name: 'Bagotizen Card Pre-Enrollment',
          what: 'Verified online pre-enrollment with GCash validation and automated QR reference codes for 850+ scholars.',
          stack: 'PHP • MySQL • GCash Payout Flow • QR Engine',
          status: 'Live',
        },
        {
          id: 'iskolar-bago',
          Icon: Browsers,
          name: 'City of Bago Iskolar Portal',
          what: 'Official municipal scholarship portal with applicant workflows, status tracking, and assistance.',
          stack: 'BAGO.GOV • PHP • Relational Database',
          status: 'Live',
        },
        {
          id: 'thynk-system',
          Icon: Cpu,
          name: 'THYNK Disaster Response Network',
          what: 'Emergency management & resource coordination platform for relief operations.',
          stack: ASP_STACK,
          status: 'Live',
        },
      ],
    },
    {
      id: 'campus-platforms',
      Icon: GraduationCap,
      name: 'Higher Ed & Campus Systems',
      what: 'Digital infrastructure for colleges, student affairs, and academic administration.',
      children: [
        {
          id: 'itech-clearance',
          Icon: ShieldCheck,
          name: 'ITech Student Clearance System',
          what: 'Multi-office student clearance tracking across Library, Finance, and Registrar with live status indicators.',
          stack: 'PHP • MySQL • Multi-Department Workflows',
          status: 'Live',
        },
        {
          id: 'event-management',
          Icon: QrCode,
          name: 'Web Based Event Management System',
          what: 'QR-powered student attendance scanning, credentialing, and live event tabulation.',
          stack: 'itechbsis4c.com • PHP / MySQL • QR Engine',
          status: 'Live',
        },
        {
          id: 'bcctap-attendance',
          Icon: Clock,
          name: 'BCC Time Attendance Platform',
          what: 'Campus QR scanning attendance system for faculty and administrative staff.',
          stack: 'bcctap.bccbsis.com • PHP • Vanilla JS',
          status: 'Live',
        },
        {
          id: 'edugrant-portal',
          Icon: Database,
          name: 'EDUGRANT Examination Portal',
          what: 'Automated scholarship testing portal with online grading algorithms.',
          stack: PHP_STACK,
          status: 'Live',
        },
      ],
    },
    {
      id: 'scoring-engines',
      Icon: Stack,
      name: 'Tabulation & Community Services',
      what: 'Specialized tabulation engines and public healthcare portals.',
      children: [
        {
          id: 'byea-tabulation',
          Icon: ShieldCheck,
          name: 'BYEA Tabulation System 2026',
          what: 'Jury scoring and instant awards tabulation platform for Bagonhon Youth for Excellence Awards 2026.',
          stack: 'PHP • Real-time Scoring • Mathematical Weighing',
          status: 'Live',
        },
        {
          id: 'busay-health',
          Icon: Heartbeat,
          name: 'Busay Health Center Portal',
          what: 'Online consultation appointments, health services directory, and clinic queue management.',
          stack: MYSQL_STACK,
          status: 'Live',
        },
      ],
    },
  ],
}
