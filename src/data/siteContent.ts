import type { LucideIcon } from 'lucide-react';
import { BookOpen, FlaskConical, HeartPulse, Leaf, Microscope, Users } from 'lucide-react';

export const site = {
  name: 'Bharat Ayurvedic Medical College',
  fullName: 'Bharat Ayurvedic Medical College, Hospital & Research Center',
  shortName: 'BAMCHRC',
  logo: '/logo.png',
  location: 'Bharat Ayurvedic Medical College, Hospital & Research Center, 10 KM. Mile Stone, Roorkee Rd, Muzaffarnagar, Uttar Pradesh 251307',
  phone: '8191000501',
  email: 'info@bamchrc.com',
  tagline: 'Classical Ayurveda, clinical confidence, and research-minded care.',
};

export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Profile', href: '' },
      { label: 'Goals & Objectives', href: '' },
      { label: 'Vison & Mission', href: '' },
      { label: 'Secretary Message', href: '' },
      { label: 'Principal Message', href: '' },
      { label: 'About BAMS', href: '' },
      { label: 'College Council', href: '' },
    ],
  },
  {
    label: 'NCISM Mandates',
    href: '/ncism-mandates',
    children: [
      { label: 'Director/Dean/Principal/Medical Superintedentent', href: '' },
      { label: 'Staff', href: '' },
      { label: 'Intake Capacity', href: '' },
      { label: 'Students List', href: '' },
      { label: 'Research Publications & Activities', href: '' },
      { label: 'CME/Seminar/Webinar & Other Academic Activities', href: '' },
      { label: 'Awards & Achievement', href: '' },
      { label: 'Details of Affiliated University', href: '' },
      { label: 'Result', href: '' },
      { label: 'Status of Recognition', href: '' },
      { label: 'Clinical Material in Hospital', href: '' },
      { label: 'Important Website Link', href: '' },
      { label: 'Monthly Analysis Attendance', href: '' },
      { label: 'Current Time Table', href: '' },
    ],
  },
  {
    label: 'Campus',
    href: '/facilities',
    children: [
      { label: 'Facilities', href: '/facilities' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  { label: 'Hospital', href: '/hospital' },
  { label: 'Contact', href: '/contact' },
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
