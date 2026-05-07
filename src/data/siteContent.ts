import type { LucideIcon } from 'lucide-react';
import { BookOpen, FlaskConical, HeartPulse, Leaf, Microscope, Users } from 'lucide-react';

export const site = {
  name: 'Bharat Ayurvedic Medical College',
  fullName: 'Bharat Ayurvedic Medical College, Hospital & Research Center',
  shortName: 'BAMCHRC',
  logo: '/logo.png',
  location: 'Muzaffarnagar, Uttar Pradesh',
  tagline: 'Classical Ayurveda, clinical confidence, and research-minded care.',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Hospital', href: '/hospital' },
  { label: 'Research', href: '/research' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Alumni', href: '/alumni' },
];

export const highlights: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
}> = [
  {
    title: 'BAMS Learning',
    text: 'A structured Ayurveda curriculum with anatomy, samhita, dravyaguna, panchakarma, and clinical exposure.',
    icon: BookOpen,
  },
  {
    title: 'Attached Hospital',
    text: 'Patient-facing training across OPD, IPD, pharmacy, procedure rooms, and community health activity.',
    icon: HeartPulse,
  },
  {
    title: 'Research Culture',
    text: 'Student projects and faculty inquiry focused on evidence-aware Ayurveda practice.',
    icon: Microscope,
  },
];

export const values = [
  { label: 'Ayurveda First', icon: Leaf },
  { label: 'Clinical Discipline', icon: HeartPulse },
  { label: 'Research Mindset', icon: FlaskConical },
  { label: 'Community Care', icon: Users },
];

export const timeline = [
  {
    year: 'Foundation',
    title: 'A campus shaped around Ayurveda education',
    body: 'The institution is envisioned as a focused center for BAMS learning, hospital practice, and research orientation.',
  },
  {
    year: 'Training',
    title: 'Classroom to clinical pathway',
    body: 'Students build conceptual clarity in classical texts and apply it through supervised hospital exposure.',
  },
  {
    year: 'Care',
    title: 'Hospital-led learning',
    body: 'The hospital environment supports patient care, case observation, preventive health work, and procedure familiarity.',
  },
  {
    year: 'Future',
    title: 'Research and community health',
    body: 'The next phase expands documentation, field engagement, alumni pathways, and student-led inquiry.',
  },
];
