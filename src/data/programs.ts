export type Program = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  details: string;
  outcomes: string[];
};

export const programs: Program[] = [
  {
    id: 'bams',
    title: 'Bachelor of Ayurvedic Medicine and Surgery',
    duration: '5.5 years including internship',
    summary: 'Core BAMS education combining classical Ayurveda, modern medical foundations, and clinical practice.',
    details:
      'The BAMS program introduces students to samhita, Sanskrit foundations, anatomy, physiology, dravyaguna, rasashastra, kayachikitsa, shalya, shalakya, prasuti tantra, panchakarma, and community health.',
    outcomes: ['Classical text fluency', 'Clinical case-taking', 'Hospital internship readiness'],
  },
  {
    id: 'clinical-training',
    title: 'Clinical Training & Internship',
    duration: 'Rotational clinical exposure',
    summary: 'Supervised learning across OPD, IPD, specialty units, dispensary, and patient documentation.',
    details:
      'Students gain structured exposure to patient care workflows, diagnosis discussions, treatment planning, pharmacy practice, procedural observation, and case record preparation.',
    outcomes: ['OPD/IPD workflow', 'Patient communication', 'Procedure familiarity'],
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Orientation',
    duration: 'Integrated module',
    summary: 'Practical understanding of purification therapies, indications, preparation, and aftercare.',
    details:
      'The module focuses on principles, safety, preparation, observation, documentation, and responsible application of panchakarma therapies within supervised clinical settings.',
    outcomes: ['Therapy principles', 'Safety awareness', 'Clinical documentation'],
  },
  {
    id: 'research-methods',
    title: 'Ayurveda Research Methods',
    duration: 'Project-based learning',
    summary: 'Foundations of research thinking, literature review, study design, and ethical documentation.',
    details:
      'Students learn how to frame questions, review sources, document observations, understand evidence, and present research ideas in a clear academic format.',
    outcomes: ['Literature review', 'Study design basics', 'Presentation skills'],
  },
];
