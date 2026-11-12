import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Charlie Pelle',
  firstName: 'Charlie',
  handle: '@ItsChaBTW',
  role: 'Fullstack Developer',
  avatarSrc: '/images/profile/pic2.jpg',
  verifiedLabel: 'BS in Information Systems • Fullstack Developer',
  email: 'charlied.pelle@gmail.com',
  location: 'Bago City, Philippines (GMT+8)',
  stats: [
    { value: '2+ yrs', label: 'Development', Icon: Briefcase },
    { value: '5+', label: 'Live Deployments', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: { line1: 'Fullstack solutions.', line2: 'Scalable & robust.' },
  hero: {
    body: 'Passionate Fullstack Developer specializing in PHP, Laravel, Node.js, and C# ASP.NET, crafting efficient web systems and robust APIs.',
    portraitSrc: '/images/profile/pic2.jpg',
    portraitAlt: 'Charlie Pelle - Fullstack Developer',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/ItsChaBTW', iconPath: '/icons/ai/github.svg' },
    { label: 'Email Charlie', href: 'mailto:charlied.pelle@gmail.com', iconPath: '/icons/discord.svg' },
    { label: 'LinkedIn profile', href: 'https://linkedin.com', iconPath: '/icons/linkedin.svg' },
  ],
}
