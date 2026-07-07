// ─────────────────────────────────────────────────────────────
// B7 Business School — estrutura de navegação (espelha o menu oficial)
// ─────────────────────────────────────────────────────────────

export type NavLink = { label: string; href: string; external?: boolean }
export type NavColumn = { title: string; links: NavLink[] }
export type NavItem = {
  label: string
  href?: string
  columns?: NavColumn[]
  links?: NavLink[]
}

export const MBAS: NavLink[] = [
  { label: 'MBA Wealth Management', href: '/mba/wealth-management' },
  { label: 'MBA Investments & Asset Allocation', href: '/mba/investments-asset-allocation' },
  { label: 'MBA Middle & Corporate Banking', href: '/mba/middle-corporate-banking' },
  { label: 'MBA Private Banking & Offshore', href: '/mba/private-banking-offshore' },
  { label: 'MBA Business & Financial Services', href: '/mba/business-financial-services' },
]

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Sobre',
    links: [
      { label: 'Quem Somos', href: '/quem-somos' },
      { label: 'Depoimentos', href: '/depoimentos' },
    ],
  },
  {
    label: 'Programas',
    columns: [
      { title: 'MBAs', links: MBAS },
      {
        title: 'Graduação',
        links: [
          { label: 'Administração — ênfase Mercado Financeiro', href: '/graduacao-administracao' },
        ],
      },
    ],
  },
  {
    label: 'Cursos',
    columns: [
      {
        title: 'Certificações',
        links: [
          { label: 'CPA', href: '/cursos/cpa' },
          { label: 'CPRO-R', href: '/cursos/cpro-r' },
          { label: 'CPRO-I', href: '/cursos/cpro-i' },
          { label: 'PQO Operacional', href: '/cursos/pqo-operacional' },
          { label: 'CFP®', href: '/cursos/cfp' },
        ],
      },
      {
        title: 'Ponto de Partida',
        links: [{ label: 'Partiu Banco', href: '/partiu-banco' }],
      },
      {
        title: 'Desenvolvimento Aplicado',
        links: [
          { label: "Bionic's", href: '/bionics' },
          { label: 'EMB Pro — Hub de cursos', href: '/emb-pro' },
        ],
      },
      {
        title: 'Experiências de Evolução',
        links: [
          { label: 'One-o-One', href: '/mentores' },
          { label: 'War Room', href: '/war-room' },
        ],
      },
    ],
  },
  {
    label: 'EMB University — US',
    links: [
      { label: 'Imersão Miami', href: '/emb-university/miami' },
      { label: 'Imersão New York', href: '/emb-university/new-york' },
    ],
  },
  {
    label: 'Conteúdos',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Agenda EMB', href: '/agenda' },
      { label: 'Materiais Gratuitos', href: '/materiais' },
    ],
  },
  { label: 'Contato', href: '/contato' },
]

export const CTA = { label: 'Meus Cursos', href: 'https://sala.fbnf.edu.br/', external: true }

export const SITE = {
  name: 'B7 Business School',
  whatsapp: 'https://wa.me/5511949442381',
  instagram: 'https://www.instagram.com/b7businessschool/',
  linkedin: 'https://www.linkedin.com/company/b7businessschool',
  youtube: 'https://www.youtube.com/@b7businessschool',
}
