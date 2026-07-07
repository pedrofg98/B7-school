// Conteúdo da Home (baseado no posicionamento real da B7 Business School).
// Depoimentos e alguns números são representativos — trocar pelos oficiais.

export const HERO = {
  eyebrow: 'B7 Business School',
  title: 'Educação executiva conectada ao mercado financeiro real.',
  highlight: 'mercado financeiro real',
  subtitle:
    'MBAs, certificações e formações desenhados por quem vive o mercado — para você conquistar, crescer e liderar no setor financeiro.',
  primaryCta: { label: 'Conheça os MBAs', href: '/mba/wealth-management' },
  secondaryCta: { label: 'Falar com um consultor', href: '/contato' },
}

// Onde nossos alunos atuam (marquee de confiança) — logos oficiais dos parceiros
export const TRUST_LOGOS: { name: string; src: string }[] = [
  { name: 'Itaú Íon', src: '/brand/banks/itau-ion.png' },
  { name: 'Bradesco', src: '/brand/banks/bradesco.png' },
  { name: 'Santander', src: '/brand/banks/santander.png' },
  { name: 'BTG Pactual', src: '/brand/banks/btg.png' },
  { name: 'XP Investimentos', src: '/brand/banks/xp.png' },
  { name: 'C6 Bank', src: '/brand/banks/c6.png' },
  { name: 'PicPay', src: '/brand/banks/picpay.webp' },
  { name: 'Sicredi', src: '/brand/banks/sicredi.png' },
]

export const STATS = [
  { value: 10000, suffix: '+', label: 'Alunos contratados e promovidos' },
  { value: 5, suffix: '', label: 'MBAs em progressão de carreira' },
  { value: 4, suffix: 'º', label: 'No ranking ANBIMA de influência em finanças' },
  { value: 20, suffix: '+', label: 'Programas e certificações' },
]

export const MBA_ITEMS = [
  {
    tag: 'Alta Renda',
    title: 'MBA Wealth Management',
    desc: 'Gestão de grandes patrimônios, planejamento e relacionamento com clientes de alta renda.',
    href: '/mba/wealth-management',
  },
  {
    tag: 'Investimentos',
    title: 'MBA Investments & Asset Allocation',
    desc: 'Alocação de ativos, construção de portfólios e assessoria de investimentos.',
    href: '/mba/investments-asset-allocation',
  },
  {
    tag: 'Corporate',
    title: 'MBA Middle & Corporate Banking',
    desc: 'Crédito, produtos e relacionamento bancário com empresas de médio e grande porte.',
    href: '/mba/middle-corporate-banking',
  },
  {
    tag: 'Private & Offshore',
    title: 'MBA Private Banking & Offshore',
    desc: 'Private banking, estruturas internacionais e investimentos offshore.',
    href: '/mba/private-banking-offshore',
  },
  {
    tag: 'Serviços Financeiros',
    title: 'MBA Business & Financial Services',
    desc: 'Negócios bancários, serviços financeiros e visão de gestão para o setor.',
    href: '/mba/business-financial-services',
  },
]

export const PROGRAMS = [
  { title: 'Certificações ANBIMA', desc: 'CPA, CEA e as principais provas do mercado.', href: '/cursos/cpa' },
  { title: 'CFP®', desc: 'A certificação máxima do planejamento financeiro.', href: '/cursos/cfp' },
  { title: 'PQO Operacional', desc: 'Preparatório para a certificação PQO.', href: '/cursos/pqo-operacional' },
  { title: 'Partiu Banco', desc: 'O ponto de partida para entrar no mercado financeiro.', href: '/partiu-banco' },
  { title: "Bionic's", desc: 'Ferramentas de IA integradas à sua jornada de estudo.', href: '/bionics' },
  { title: 'War Room', desc: 'Experiência imersiva de evolução e networking.', href: '/war-room' },
]

export const INTERNATIONAL = {
  eyebrow: 'EMB University — US',
  title: 'Sua carreira sem fronteiras.',
  desc: 'Imersões internacionais em Miami e Nova York para conectar você às oportunidades do mercado financeiro global.',
  items: [
    { title: 'Imersão Miami', href: '/emb-university/miami' },
    { title: 'Imersão New York', href: '/emb-university/new-york' },
  ],
}

export const MANIFESTO = {
  tape: 'Sem atalho',
  before: 'No mercado financeiro, ',
  highlight: 'quem se prepara',
  after: ' ocupa as melhores cadeiras.',
  desc: 'Aqui a gente não vende sonho. Vende método, conteúdo de quem vive o mercado e a rede certa para você crescer de verdade.',
}

// "Quem faz acontecer" — exalta a jovialidade e a autoridade do time/mentores.
// Substituir os `photo` pelos retratos oficiais (fundo escuro, estilo Conquer).
export const PEOPLE = {
  eyebrow: 'Quem faz acontecer',
  title: 'Aprenda com quem vive o mercado',
  highlight: 'todos os dias',
  members: [
    { name: 'Fábio Louzada', role: 'CEO & Fundador', initials: 'FL' },
    { name: 'Mentor B7', role: 'Especialista em Investimentos', initials: 'MB' },
    { name: 'Mentora B7', role: 'Private Banking & Offshore', initials: 'MB' },
    { name: 'Convidado', role: 'Executivo do mercado', initials: '+' },
  ],
  topics: ['Alta Renda', 'Investimentos', 'Corporate', 'Carreira', 'Offshore'],
}

export const TESTIMONIALS = [
  {
    quote:
      'Saí do varejo para a área de investimentos em menos de um ano. A B7 me deu método, conteúdo e a rede certa.',
    name: 'Aluno B7',
    role: 'Assessor de Investimentos',
  },
  {
    quote:
      'A conexão com o mercado real faz toda a diferença. Cada aula tinha aplicação direta no meu dia a dia no banco.',
    name: 'Aluna B7',
    role: 'Gerente Alta Renda',
  },
  {
    quote:
      'Estudei para o CFP® com a B7 e passei. O preparo foi muito além da prova — mudou minha carreira.',
    name: 'Aluno B7',
    role: 'Planejador Financeiro',
  },
]
