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
      { label: 'About Profile', href: '/about-profile' },
      { label: 'Goals & Objectives', href: '/about-goalsObjectives' },
      { label: 'Vison & Mission', href: '/about-visionMission' },
      { label: 'Secretary Message', href: '/about-secretaryMessage' },
      { label: 'Principal Message', href: '/about-principalMessage' },
      { label: 'About BAMS', href: '/about-BAMS' },
      { label: 'College Council', href: '/about-collegeCouncil' },
    ],
  },
  {
    label: 'NCISM Mandates',
    href: '/ncism-mandates',
    children: [
      { label: 'Director/Dean/Principal/Medical Superintedentent', href: '/ncism-director' },
      { label: 'Staff', href: '/ncism-staff' },
      { label: 'Intake Capacity', href: '/ncism-intakeCapacity' },
      { label: 'Students List', href: '/ncism-studentsList' },
      { label: 'Research Publications & Activities', href: '/ncism-research' },
      { label: 'CME/Seminar/Webinar & Other Academic Activities', href: '/ncism-seminarWebinar' },
      { label: 'Awards & Achievement', href: '/ncism-awardsAchievement' },
      { label: 'Details of Affiliated University', href: '/ncism-affiliatedUniversity' },
      { label: 'Result', href: '/ncism-result' },
      { label: 'Status of Recognition', href: '/ncism-recognition' },
      { label: 'Clinical Material in Hospital', href: '/ncism-clinicalMaterialHospital' },
      { label: 'Important Website Link', href: '/ncism-importantWebsiteLink' },
      { label: 'Monthly Analysis Attendance', href: '/ncism-attendance' },
      { label: 'Current Time Table', href: '/ncism-timeTable' },
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
