// Contenu des CV (FR / EN). Modifier ici puis lancer `npm run cv`.
// Les mêmes données alimentent la version design (photo, 2 colonnes) et la version ATS (texte seul).

export const contact = {
  name: 'Gédéon Mutikanga',
  phone: '+33 6 05 57 36 65',
  email: 'gedeonmutikanga@gmail.com',
  linkedin: 'linkedin.com/in/mutikanga-gedeon-901307205',
  linkedinUrl: 'https://www.linkedin.com/in/mutikanga-gedeon-901307205/',
  github: 'github.com/gmuti',
  githubUrl: 'https://github.com/gmuti',
  site: 'gmuti.github.io',
  siteUrl: 'https://gmuti.github.io/',
}

export const cv = {
  fr: {
    lang: 'fr',
    title: 'Software Engineer Full Stack',
    years: '4 ans d’expérience',
    search: 'Recherche un CDI à Lille ou en Belgique, disponible rapidement',
    headings: {
      profile: 'Profil', experience: 'Expérience professionnelle', skills: 'Compétences techniques',
      education: 'Formation', languages: 'Langues', contact: 'Contact', env: 'Environnement', projects: 'Projets personnels', interests: 'Loisirs', soft: 'Savoir-être',
    },
    profile:
      'Ingénieur logiciel full stack, 4 ans d’expérience sur des applications métier. ' +
      'Java et Spring Boot côté serveur, Angular côté client ; également Laravel, NestJS et Next.js selon les projets. ' +
      'Je mène mes applications jusqu’en production avec Docker Swarm et l’intégration continue.',
    experience: [
      {
        role: 'Développeur Full Stack', org: 'Conserto', logo: 'conserto.svg', client: 'en mission chez Safireo',
        place: 'Nantes', dates: 'Oct. 2025 – aujourd’hui',
        bullets: [
          'Conception de webservices OData pour l’échange de données entre les applications métier.',
          'Intégration de Power BI Embedded et travail sur ses performances.',
          'Mise en place de la chaîne CI/CD du projet.',
        ],
        env: 'Java, Spring Boot, OData, Angular, Power BI, Docker',
      },
      {
        role: 'Co-fondateur, Développeur Full Stack', org: 'Walsia', logo: 'walsia.png', client: 'ESN, Kinshasa · Paris · Nairobi',
        place: '', dates: 'Juin 2025 – aujourd’hui',
        bullets: [
          'Direction technique de 7 projets (produits SaaS, marketplace, sites web) pour des clients en RDC, au Canada et en Belgique.',
          'Déploiement de l’ensemble des projets en CI/CD sur Docker Swarm.',
        ],
        env: 'Angular, Spring Boot, Laravel, NestJS, Next.js, Docker Swarm',
      },
      {
        role: 'Développeur Full Stack', org: 'Cedreo', logo: 'cedreo.png', client: '',
        place: 'Nantes', dates: 'Sept. 2024 – Sept. 2025',
        bullets: [
          'Développement d’API REST, couvertes par des tests unitaires.',
          'Refonte du contrat d’API pour améliorer la maintenabilité et les performances.',
          'Gestion de l’état applicatif côté Angular avec NgRx.',
        ],
        env: 'Java 17, Spring Boot, JUnit, Angular, NgRx, MongoDB',
      },
      {
        role: 'Technicien informatique', org: 'CCS, Crédit Mutuel – CIC', logo: 'creditmutuel.png', client: '',
        place: 'Nantes', dates: 'Oct. 2023 – Oct. 2024',
        bullets: ['Support niveau 2 et développement d’un tableau de bord de suivi des incidents.'],
        env: '',
      },
      {
        role: 'Développeur web indépendant', org: 'Freelance', client: '',
        place: '', dates: 'Nov. 2022 – Janv. 2024',
        bullets: ['Conception et mise en ligne de sites vitrines pour des indépendants et des PME.'],
        env: '',
      },
    ],
    projects: 'Je conçois et déploie mes propres produits SaaS sur mon temps libre, notamment Skolano (gestion scolaire, en pilote) et Kupanga (gestion locative).',
    interests: 'Basketball, football, randonnée, voyages',
    soft: 'Autonomie, adaptabilité, esprit d’équipe, créativité',
    qr: 'Projets, captures et démos sur le portfolio',
    skills: [
      ['Back-end', 'Java, Spring Boot, PHP, Laravel, Node.js, NestJS, API REST, OData'],
      ['Front-end', 'Angular, NgRx, TypeScript, React, Next.js'],
      ['Données', 'PostgreSQL, MySQL, MongoDB, Redis, Power BI Embedded'],
      ['DevOps', 'Docker, Docker Swarm, GitHub Actions, Jenkins, Maven, Grafana, Git'],
      ['Pratiques', 'Scrum, tests unitaires, conception d’API'],
    ],
    education: [
      { t: 'Master Architecture des logiciels', s: 'ESGI, Nantes', d: '2025 – 2027', logo: 'esgi.png' },
      { t: 'Bachelor Architecture des logiciels', s: 'ESGI, Nantes', d: '2023 – 2025', logo: 'esgi.png' },
      { t: 'Licence 1 Mathématiques et Informatique', s: 'Université d’Angers', d: '2021 – 2023', logo: 'angers.png' },
    ],
    languages: [['Français', 'bilingue'], ['Anglais', 'B2, professionnel']],
  },

  en: {
    lang: 'en',
    title: 'Full Stack Software Engineer',
    years: '4 years of experience',
    search: 'Seeking a permanent role in Lille or Belgium, available at short notice',
    headings: {
      profile: 'Profile', experience: 'Professional experience', skills: 'Technical skills',
      education: 'Education', languages: 'Languages', contact: 'Contact', env: 'Stack', projects: 'Personal projects', interests: 'Interests', soft: 'Soft skills',
    },
    profile:
      'Full stack software engineer with 4 years of experience on business applications. ' +
      'Java and Spring Boot on the server, Angular on the client; also Laravel, NestJS and Next.js depending on the project. ' +
      'I take my applications all the way to production with Docker Swarm and continuous integration.',
    experience: [
      {
        role: 'Full Stack Developer', org: 'Conserto', logo: 'conserto.svg', client: 'on assignment at Safireo',
        place: 'Nantes, France', dates: 'Oct 2025 – present',
        bullets: [
          'Designed OData web services for data exchange between business applications.',
          'Integrated Power BI Embedded and worked on its performance.',
          'Set up the project’s CI/CD pipeline.',
        ],
        env: 'Java, Spring Boot, OData, Angular, Power BI, Docker',
      },
      {
        role: 'Co-founder, Full Stack Developer', org: 'Walsia', logo: 'walsia.png', client: 'software company, Kinshasa · Paris · Nairobi',
        place: '', dates: 'Jun 2025 – present',
        bullets: [
          'Technical lead on 7 projects (SaaS products, marketplace, websites) for clients in the DRC, Canada and Belgium.',
          'Deploy every project through CI/CD on Docker Swarm.',
        ],
        env: 'Angular, Spring Boot, Laravel, NestJS, Next.js, Docker Swarm',
      },
      {
        role: 'Full Stack Developer', org: 'Cedreo', logo: 'cedreo.png', client: '',
        place: 'Nantes, France', dates: 'Sep 2024 – Sep 2025',
        bullets: [
          'Built REST APIs covered by unit tests.',
          'Redesigned the API contract to improve maintainability and performance.',
          'Managed Angular application state with NgRx.',
        ],
        env: 'Java 17, Spring Boot, JUnit, Angular, NgRx, MongoDB',
      },
      {
        role: 'IT Technician', org: 'CCS, Crédit Mutuel – CIC', logo: 'creditmutuel.png', client: '',
        place: 'Nantes, France', dates: 'Oct 2023 – Oct 2024',
        bullets: ['Level 2 support and development of an incident-tracking dashboard.'],
        env: '',
      },
      {
        role: 'Freelance Web Developer', org: 'Self-employed', client: '',
        place: '', dates: 'Nov 2022 – Jan 2024',
        bullets: ['Designed and launched showcase websites for independent professionals and small businesses.'],
        env: '',
      },
    ],
    projects: 'I design and ship my own SaaS products in my spare time, including Skolano (school management, in pilot) and Kupanga (rental management).',
    interests: 'Basketball, football, hiking, travel',
    soft: 'Autonomy, adaptability, teamwork, creativity',
    qr: 'Projects, screenshots and demos on my portfolio',
    skills: [
      ['Back-end', 'Java, Spring Boot, PHP, Laravel, Node.js, NestJS, REST APIs, OData'],
      ['Front-end', 'Angular, NgRx, TypeScript, React, Next.js'],
      ['Data', 'PostgreSQL, MySQL, MongoDB, Redis, Power BI Embedded'],
      ['DevOps', 'Docker, Docker Swarm, GitHub Actions, Jenkins, Maven, Grafana, Git'],
      ['Practices', 'Scrum, unit testing, API design'],
    ],
    education: [
      { t: 'Master’s in Software Architecture', s: 'ESGI, Nantes, France', d: '2025 – 2027', logo: 'esgi.png' },
      { t: 'Bachelor’s in Software Architecture', s: 'ESGI, Nantes, France', d: '2023 – 2025', logo: 'esgi.png' },
      { t: 'Mathematics and Computer Science, first year', s: 'University of Angers, France', d: '2021 – 2023', logo: 'angers.png' },
    ],
    languages: [['French', 'fluent'], ['English', 'B2, professional']],
  },
}
