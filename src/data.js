export const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export const STATS = [
  { num: '3+',  label: 'Years of Experience' },
  { num: '6+',  label: 'Projects Delivered' },
  { num: '2',   label: 'Companies' },
  { num: '10+', label: 'Technologies' },
];

export const SKILLS = [
  {
    cat: 'Frontend',
    items: ['JavaScript (ES6+)', 'Vue.js', 'Vuex', 'React.js', 'TypeScript', 'jQuery', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Semantic UI'],
  },
  {
    cat: 'Backend',
    items: ['Node.js', 'Express.js', 'Nest.js', 'PHP', 'Laravel', 'WordPress'],
  },
  {
    cat: 'Database',
    items: ['MySQL', 'PostgreSQL', 'TypeORM'],
  },
  {
    cat: 'Cloud & DevOps',
    items: ['AWS S3', 'Docker', 'Git', 'GitHub'],
  },
  {
    cat: 'Practices',
    items: ['RESTful API Design', 'Socket.io', 'Agile Methodologies', 'Responsive Web Design', 'Test Case Development', 'Team Leadership'],
  },
];

export const EXPERIENCE = [
  {
    period: 'March 2023 – Present',
    role: 'Full Stack Engineer & Technical Lead',
    company: 'Annonlab · Dhaka, Bangladesh',
    projects: [
      {
        name: 'Paypipol — Payroll Management SaaS',
        role: 'Technical Lead & Full Stack Developer · June 2023–Present',
        desc: 'Led development of a multi-tenant SaaS payroll system serving multiple organisations. Architected per-branch database isolation, role-based access control, automated payslip generation with customisable templates, DSN reports, and debit file creation.',
        tech: ['Vue.js', 'Vue-Bootstrap', 'Laravel', 'MySQL'],
      },
      {
        name: 'Judicial Magistrate Project (JMP)',
        role: 'Team Lead & Backend Developer · Sep 2024–Present',
        desc: 'Secure communications platform for Bangladeshi judicial magistrates. Implemented multi-factor authentication, encrypted messaging infrastructure, and AWS S3 file storage with strict access controls. Collaborated with a React/TypeScript frontend team.',
        tech: ['Node.js', 'PostgreSQL', 'TypeScript', 'TypeORM', 'AWS S3', 'React'],
      },
      {
        name: 'OuiSkill (Filgood) — E-Learning Platform',
        role: 'Full Stack Developer · Aug 2024–Present',
        desc: 'Mental health & skills development platform with AI-powered content generation, mental health assessments, gamification, community posts, social sharing via GetLate, Stripe payments with webhooks, and real-time notifications via Socket.io.',
        tech: ['Vue.js', 'Vuex', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'Stripe API'],
      },
      {
        name: 'FBLike — Social Networking Platform',
        role: 'Full Stack Developer · May–Aug 2023',
        desc: 'Full social networking platform with posts, stories, real-time chat, push notifications, groups, and integrated course modules.',
        tech: ['WordPress'],
      },
      {
        name: 'Moolynet — Email Marketing Software',
        role: 'Frontend Developer · Mar–May 2023',
        desc: 'Task management and campaign handling interface for an email marketing platform. Built responsive UIs for complex marketing automation workflows.',
        tech: ['PHP', 'jQuery', 'Semantic UI'],
      },
    ],
  },
  {
    period: 'June 2021 – October 2021',
    role: 'Full Stack Web Developer (Contract)',
    company: 'Dreams Eye · Dhaka, Bangladesh',
    projects: [
      {
        name: 'Multi-Vendor E-Commerce Platform',
        role: 'Full Stack Developer',
        desc: 'Fashion retail e-commerce specialising in sunglasses and watches. Built vendor verification (TIN certificates & business licences), product catalogue, order tracking, and a secure payment gateway. Delivered on time within a 5-month contract.',
        tech: ['Vue.js', 'Vuex', 'Laravel', 'Bootstrap', 'MySQL'],
      },
    ],
  },
];

export const PROJECTS = [
  {
    num: '01',
    title: 'Paypipol',
    sub: 'SaaS · Payroll Management',
    desc: 'Multi-tenant payroll SaaS with per-branch database isolation, role-based access, automated payslip generation, and DSN reporting for multiple organisations.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    highlight: true,
  },
  {
    num: '02',
    title: 'OuiSkill',
    sub: 'EdTech · Mental Health Platform',
    desc: 'AI-powered e-learning platform with mental health assessments, gamification, Stripe payments, Socket.io real-time notifications, and social content sharing.',
    tech: ['Vue.js', 'Node.js', 'Socket.io', 'Stripe'],
    highlight: false,
  },
  {
    num: '03',
    title: 'JMP Platform',
    sub: 'GovTech · Secure Communications',
    desc: 'End-to-end encrypted messaging for the Bangladeshi judiciary, featuring MFA, AWS S3 secure storage, and sensitive legal correspondence workflows.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS S3'],
    highlight: false,
  },
  {
    num: '04',
    title: 'E-Commerce Platform',
    sub: 'Retail · Multi-Vendor',
    desc: 'Multi-vendor fashion e-commerce with vendor identity verification, full product catalogue, order management, and integrated payment gateway.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    highlight: false,
  },
];

export const CONTACT = [
  { icon: '✉', label: 'Email',    value: 'mshad732@gmail.com',            href: 'mailto:mshad732@gmail.com' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/msaaaad',            href: 'https://github.com/msaaaad' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/m-i-saad',      href: 'https://linkedin.com/in/m-i-saad-45b81b171' },
  { icon: '📞', label: 'Phone',    value: '+880 1521231216',               href: 'tel:+8801521231216' },
];
