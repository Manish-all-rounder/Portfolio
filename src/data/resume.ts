export const profile = {
  name: 'Atharva Pathak',
  title: 'Power BI Developer',
  tagline: 'Turning business requirements into data-driven insights',
  email: 'atharvapathak107@gmail.com',
  phone: '+91-9172822138',
  location: 'Nagpur, Maharashtra',
  linkedin: 'https://www.linkedin.com/in/atharva-pathak-75563a2a4',
  github: 'https://github.com/AP107-CTRL',
  summary:
    'Business Intelligence and Data Analyst with hands-on experience in Power BI dashboard development and KPI reporting. Skilled in translating business requirements into data-driven insights using DAX, Power Query, and data modeling. Experienced in end-to-end analytics projects, stakeholder collaboration, and building automated reports using Excel, SQL, and Google Sheets. Strong in data storytelling, problem-solving, and business analysis.',
};

export function getNameParts(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ?? '';
  const last = parts.slice(1).join(' ');
  const initials = parts
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return { first, last, initials, full: fullName.trim() };
}

export const skills = {
  tools: [
    'Power BI',
    'Microsoft Fabric',
    'Advanced Excel',
    'SQL',
    'Google Sheets',
    'MS Office',
    'Jira (Basic)',
    'ChatGPT',
    'Claude AI',
  ],
  technical: [
    'DAX',
    'Power Query',
    'Data Modeling',
    'ETL (Google Sheet–Excel)',
    'Data Visualization',
    'Dashboard Development',
    'Reporting Automation',
    'KPI Tracking',
    'Agile Methodology',
  ],
  soft: [
    'Stakeholder Management',
    'Requirement Gathering',
    'Analytical Thinking',
    'Problem Solving',
    'Data Storytelling',
    'Client Relationship Management',
    'Presentation Skills',
    'Cross-functional Collaboration',
  ],
};

export const experience = [
  {
    company: 'Purple Squirrel Eduventures Pvt. Ltd. (Raisoni Group)',
    role: 'Power BI Developer',
    location: 'Nagpur, Maharashtra',
    current: true,
    highlights: [
      'Built interactive Power BI dashboards for data visualization and decision-making.',
      'Developed KPI dashboards and performance tracking reports.',
      'Managed end-to-end dashboard development lifecycle from requirements to data, visualization, and delivery.',
      'Gathered and translated business requirements into technical solutions.',
      'Performed data extraction and transformation from Excel and Google Sheets.',
      'Created and optimized data models, including relationships and schema design.',
      'Used DAX and Power Query for data transformation and calculations.',
      'Collaborated with stakeholders for requirement validation, reporting, and insights delivery.',
    ],
  },
  {
    company: 'Arihant Adroit Infosystems Pvt. Ltd. (AAIS GLOBAL)',
    role: 'Assistant Sales Manager',
    location: 'Pune, Maharashtra',
    current: false,
    highlights: [
      'Managed corporate client relationships and stakeholder communication.',
      'Generated and qualified B2B leads through market research and outreach.',
      'Pitched Oracle ERP solutions (EBS & Fusion) to international clients based on business requirements.',
      'Analyzed client business models and requirements for solution mapping.',
      'Supported pre-sales activities, demos, and presentations.',
      'Participated in Oracle Cloud World (Mumbai), engaging with a broad client base.',
    ],
  },
];

export const projects = [
  {
    title: 'Real Power BI Dashboard Projects',
    url: 'https://github.com/AP107-CTRL?tab=projects',
    description:
      'Interactive dashboards for multiple business performance tracking and reporting use cases.',
    highlights: [
      'Built interactive dashboards for multiple dashboard projects.',
      'Business performance tracking and reporting.',
      'Applied data visualization techniques to present insights effectively.',
      'Worked on data cleaning, transformation, and modeling using Power BI.',
    ],
  },
];

export const education = [
  {
    institution: 'MIT World Peace University',
    degree: 'MBA – International Business',
    location: 'Pune, Maharashtra',
    score: 'CGPA 7.32 / 10',
  },
  {
    institution: 'R.S. Mundle Dharampeth College of Commerce and Economics',
    degree: 'Bachelor of Commerce',
    location: 'Nagpur, Maharashtra (RTMNU)',
    score: 'CGPA 9.42 / 10',
  },
];

export const certifications = [
  {
    name: 'Google Agile Project Management',
    provider: 'Google (Coursera)',
  },
  {
    name: 'Microsoft Excel: Beginner to Advanced in Animation 2026 + AI',
    provider: 'KulTureHire (Udemy)',
  },
  {
    name: 'Data Visualization with Power BI',
    provider: 'Skill Nation (Jatan Shah – Microsoft certified trainer)',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
