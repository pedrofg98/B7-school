// ─────────────────────────────────────────────────────────────
// Dados 1:1 das 5 LPs de MBA (extraídos do site atual b7school.com.br)
// Preços/datas são os capturados — confirmar antes do go-live.
// ─────────────────────────────────────────────────────────────

export type Module = { n?: string; title: string; desc?: string }
export type Faculty = { name: string; role: string }
export type Differential = { title: string; desc?: string }
export type MbaTestimonial = { name: string; quote: string }

export type Faq = { q: string; a: string }

export type Mba = {
  slug: string
  name: string
  title: string
  subtitle: string
  promise?: string // frase-promessa curta para o hero da LP
  audience: string[]
  pains?: string[] // "você se identifica?"
  results?: string[] // "o que você conquista"
  format: { duracao: string; carga: string; formato: string; inicio?: string }
  enrollment?: { turma?: string; vagas?: string }
  pillars: string[]
  modules: Module[]
  marketRooms?: string[]
  faculty: Faculty[]
  differentials: Differential[]
  certification?: string
  testimonials?: MbaTestimonial[]
  pricing: { from?: string; price: string; installments?: string; cash?: string; savings?: string; note?: string }
  cta: string
}

// FAQ padrão (compartilhado entre as LPs de MBA)
export const MBA_FAQ: Faq[] = [
  { q: 'O MBA é reconhecido pelo MEC?', a: 'Sim. É uma pós-graduação lato sensu reconhecida, com certificado válido em todo o território nacional.' },
  { q: 'As aulas são online ou presenciais?', a: 'O programa é predominantemente online e ao vivo, com encontros presenciais (Immersion Bootcamp) ao longo da jornada.' },
  { q: 'Preciso já atuar no mercado financeiro?', a: 'Não é obrigatório. O programa atende tanto quem já atua quanto quem está em transição de carreira para o setor.' },
  { q: 'E se eu perder uma aula ao vivo?', a: 'Todas as aulas ficam gravadas e disponíveis na plataforma durante todo o período de acesso.' },
  { q: 'Como funciona o processo de entrada?', a: 'É simples: aplicação/entrevista, aprovação do perfil e acesso imediato à plataforma.' },
  { q: 'Quais são as formas de pagamento?', a: 'Cartão de crédito parcelado, à vista com desconto e demais condições apresentadas na etapa de matrícula.' },
]

// Os 7 pilares são comuns à maioria dos programas
const PILLARS_7 = [
  'Habilidades Comerciais',
  'Conhecimento Técnico',
  'Habilidades Interpessoais',
  'Real Market Performance',
  'Collective Intelligence',
  'Street Smarts',
  'AI-First Mindset',
]

export const MBAS_DATA: Record<string, Mba> = {
  'wealth-management': {
    slug: 'wealth-management',
    name: 'MBA Wealth Management',
    title: 'MBA Wealth Management',
    promise: 'Domine o alta renda e ocupe as melhores cadeiras do mercado.',
    subtitle:
      'Programa direcionado a Gerentes Alta Renda, Consultores, Assessores e Especialistas de Investimentos que atuam no atendimento de clientes com patrimônio investido até R$ 15 milhões e buscam ampliar performance.',
    audience: [
      'Gerentes de Relacionamento Alta Renda',
      'Consultores de Investimentos',
      'Assessores Financeiros',
      'Especialistas em Investimentos',
    ],
    pains: [
      'Você domina o produto, mas trava na hora de prospectar e captar patrimônio.',
      'Sente que falta repertório para conversar de igual para igual com o cliente alta renda.',
      'Vê colegas sendo promovidos enquanto sua carteira não evolui.',
      'Estuda muito na teoria, mas não sabe aplicar no atendimento do dia a dia.',
    ],
    results: [
      'Construir e defender portfólios sofisticados com segurança técnica.',
      'Prospectar e captar usando o método 93/7.',
      'Dominar wealth planning: fiscal, sucessório e estruturas offshore.',
      'Se posicionar para as promoções e vagas do segmento alta renda.',
    ],
    enrollment: { turma: 'Turma 27/07/2026', vagas: 'Vagas limitadas' },
    format: { duracao: '12 meses + 6 de bônus', carga: '1.000h ao vivo', formato: '100% Online + Presencial', inicio: '27/07/2026' },
    pillars: PILLARS_7,
    modules: [
      { n: '01', title: 'Macroeconomia para resultado', desc: 'Macroeconomia prática para o profissional do mercado financeiro.' },
      { n: '02', title: 'Estruturas de produtos de investimentos', desc: 'Arquitetura profunda dos produtos de investimento.' },
      { n: '03', title: 'Construção de asset allocation e sofisticação de portfólio', desc: 'Construção estratégica de portfólios.' },
      { n: '04', title: 'Estratégias de Wealth Planning', desc: 'Planejamento fiscal, sucessório e estruturas offshore.' },
      { n: '05', title: 'Construção de repertório para relacionamento', desc: 'Inteligência de cliente e construção de relacionamento.' },
      { n: '06', title: 'Metodologia 93/7', desc: 'Metodologia de prospecção e captação.' },
    ],
    marketRooms: ['Macroeconomia e Estratégia de Portfólio', 'Prospecção e Abordagens de Investimentos', 'Wealth Planning', 'Estrutura de Produtos de Investimentos'],
    faculty: [
      { name: 'Jerson Zanlorenzi', role: 'Partner — BTG Pactual' },
      { name: 'Roberto Motta', role: 'Estrategista Líder — Genial' },
      { name: 'Shirley Ambrosio', role: 'Wealth Planning — Bradesco Private' },
      { name: 'Caio Camargo', role: 'Estrategista Líder — Santander' },
      { name: 'Luiz Zordan', role: 'Superintendente — Safra' },
      { name: 'Wanessa Dermendjian', role: 'Criadora do Método 93/7' },
    ],
    differentials: [
      { title: 'Bionics (IA)', desc: '4 agentes de IA exclusivos: Eagle, Work, Advisor e Simuladores.' },
      { title: 'Talent Hub', desc: 'Vagas exclusivas e conexão direta com recrutadores.' },
      { title: 'Hiring Prep', desc: 'Suporte 1:1 via WhatsApp para entrevistas.' },
      { title: 'Certificação PWM', desc: 'Selo prático validado em banca War Room.' },
      { title: 'Mentoria individual', desc: '1h com líderes do alta renda.' },
    ],
    certification: 'PWM — validação prática em banca War Room',
    testimonials: [
      { name: 'Luana Bertol', quote: 'Promovida para Investment Advisor Analyst III.' },
      { name: 'Gracieli Figueiredo', quote: 'Promovida para Especialista II no Itaú Íon.' },
      { name: 'Leandro Aires', quote: 'Contratado para atuar com Offshore na XP Investimentos.' },
    ],
    pricing: { from: 'R$ 59.997', price: 'R$ 29.997', installments: '24× R$ 1.851', savings: 'R$ 30.000', note: 'Início em 27/07/2026' },
    cta: 'Garantir minha vaga',
  },

  'investments-asset-allocation': {
    slug: 'investments-asset-allocation',
    name: 'MBA Investments & Asset Allocation',
    title: 'MBA Investments & Asset Allocation',
    subtitle:
      'Um programa, dois MBAs e duas certificações de referência: PAAP® e PARB®. Formação intensiva para dominar a gestão de portfólios e o atendimento ao cliente de alta renda.',
    audience: [
      'Profissionais do mercado financeiro de alta renda',
      'Assessores e gestores que atendem clientes high-net-worth',
      'Quem busca crescimento estratégico de carreira',
    ],
    format: { duracao: '18 meses (6 + 12 bônus)', carga: '1.440h ao vivo', formato: '100% Online + Presencial' },
    pillars: PILLARS_7,
    modules: [
      { n: '01', title: 'Visão de Mercado e Inteligência' },
      { n: '02', title: 'Interpretação de Cenário Econômico' },
      { n: '03', title: 'O Cliente Alta Renda' },
      { n: '04', title: 'Curvas, Juros e Renda Fixa' },
      { n: '05', title: 'Mercado de Capitais e Ofertas' },
      { n: '06', title: 'Operações Estruturadas (COE)' },
      { n: '07', title: 'Fundos e Veículos de Investimento' },
      { n: '08', title: 'Previdência e Longo Prazo' },
      { n: '09', title: 'Asset Allocation na Prática' },
      { n: '10', title: 'Planejamento Patrimonial e Sucessório' },
      { n: '11', title: 'Proteção e Blindagem Patrimonial' },
      { n: '12', title: 'Crédito e Soluções Financeiras' },
      { n: '13', title: 'Liderança e Carreira' },
      { n: '14', title: 'Metodologia 93×7' },
      { n: '15', title: 'Avaliação Final' },
    ],
    marketRooms: ['Investment Strategy', 'Client Solutions', 'Portfolio & Acquisition', 'Career Strategy', 'Market Masterclass'],
    faculty: [
      { name: 'Wanessa Dermendjian', role: 'Criadora do Método 93/7' },
      { name: 'Corpo docente', role: 'Executivos de Santander, Itaú, Bradesco, BTG e XP' },
    ],
    differentials: [
      { title: 'Dois MBAs, duas certificações', desc: 'PAAP® e PARB® num só programa.' },
      { title: 'Bionics (IA)', desc: 'Eagle, Work, Advisor e Simuladores.' },
      { title: 'Talent Hub', desc: 'Vagas exclusivas e recrutadores.' },
      { title: 'Mentoria 1:1', desc: '3 meses de acompanhamento individual.' },
    ],
    certification: 'PAAP® + PARB® — validação em banca War Room',
    testimonials: [
      { name: 'João Igor', quote: 'Da Uber para investimentos no Bradesco.' },
      { name: 'Nayara Rodrigues', quote: 'Da farmácia para o Itaú Personnalité.' },
      { name: 'Emily Yukari', quote: 'De professora de inglês para investimentos no C6 Bank.' },
    ],
    pricing: { from: 'R$ 32.000', price: 'R$ 17.997', installments: '21× R$ 857', cash: 'R$ 16.197 à vista', savings: 'R$ 5.800' },
    cta: 'Candidatar-me agora',
  },

  'middle-corporate-banking': {
    slug: 'middle-corporate-banking',
    name: 'MBA Middle & Corporate Banking',
    title: 'MBA Middle & Corporate Banking',
    subtitle:
      'Programa desenvolvido para potencializar profissionais da PJ, com foco em performance e transição para o Atacado — Middle, Corporate Banking e Agronegócio.',
    audience: [
      'Profissionais PJ em busca de performance',
      'Quem faz a transição para o Atacado',
      'Foco em Middle e Corporate Banking',
      'Profissionais do Agronegócio',
    ],
    format: { duracao: '24 meses (12 + 12 bônus)', carga: '1.000h ao vivo', formato: '100% Online + Presencial', inicio: '29/06/2026' },
    pillars: PILLARS_7,
    modules: [
      { n: 'I', title: 'Crédito' },
      { n: 'II', title: 'Comex & Trade Finance' },
      { n: 'III', title: 'Produtos Middle & Corporate' },
      { n: 'IV', title: 'Cash Management & Financial Services' },
      { n: 'V', title: 'Gestão de Relacionamento Comercial' },
      { n: 'VI', title: 'Capital Markets (DCM, M&A, ECM)' },
      { n: 'VII', title: 'Agronegócio' },
      { n: 'VIII', title: 'Carreiras' },
    ],
    marketRooms: ['Crédito', 'Gestão de Relacionamento', 'Cash / Trade / Produtos', 'Capital Markets & Agro'],
    faculty: [
      { name: 'Fernando Vazquez', role: 'Vice-Presidente — Athena Banco' },
      { name: 'Thiago Vila', role: 'Superintendente Middle & Corporate — Sofisa' },
      { name: 'Pedro Lippi', role: 'Superintendente Executivo — Banco Fibra' },
      { name: 'Max Marchon', role: 'Superintendente Executivo — Daycoval' },
      { name: 'Rodrigo Zago', role: 'Gerente Regional Agro — Itaú BBA' },
      { name: 'André Cestari', role: 'Founder — Affa Capital' },
    ],
    differentials: [
      { title: 'Foco em Atacado e Agro', desc: 'Middle, Corporate e Agronegócio na prática.' },
      { title: 'Selo PECB', desc: 'Validação prática em banca War Room.' },
      { title: 'Bionics (IA)', desc: '4 agentes de IA disponíveis 24/7.' },
      { title: 'Talent Hub', desc: 'Vagas exclusivas no Atacado.' },
      { title: 'Mentoria 1:1', desc: '3 meses via WhatsApp e calls.' },
    ],
    certification: 'PECB — Profissional Empresas e Corporate Banking',
    pricing: { from: 'R$ 51.997', price: 'R$ 24.997', installments: '24× R$ 1.586', savings: 'R$ 33.000', note: 'Início em 29/06/2026' },
    cta: 'Quero me candidatar',
  },

  'private-banking-offshore': {
    slug: 'private-banking-offshore',
    name: 'MBA Private Banking & Offshore',
    title: 'MBA em Private Banking & Offshore',
    subtitle:
      'Especialização prática em mercados onshore e offshore, com networking estratégico junto a profissionais de destaque nos EUA e no Brasil.',
    audience: [
      'Gerentes High, Assessores e Private Bankers com foco global',
      'Quem quer ser referência em produtos internacionais',
      'Profissionais que buscam atuar nos EUA',
    ],
    format: { duracao: '12 meses + 6 de bônus', carga: 'Online e Ao Vivo', formato: 'Online + Imersão internacional', inicio: 'Imediato' },
    pillars: [],
    modules: [
      { n: '01', title: 'Análise Quantitativa' },
      { n: '02', title: 'Finanças Corporativas' },
      { n: '03', title: 'Mercado Financeiro Americano' },
      { n: '04', title: 'Private Equity & Real Estate' },
      { n: '05', title: 'Asset & Wealth Management' },
    ],
    marketRooms: ['Produtos Private Offshore', 'Produtos Private Onshore', 'Estratégia Wealth Management', 'Investment Banking & Asset Management', 'Carreiras e Tech'],
    faculty: [
      { name: 'Will Castro', role: 'Chief Strategist — Avenue' },
      { name: 'Diego Ortellado', role: 'Head of Relationship Mgmt — BNY Mellon' },
      { name: 'Marco Saravalle', role: 'Sócio & CIO — MSX Invest' },
      { name: 'Fernando Moscoso', role: 'Portfolio Solutions — Bradesco Bank Miami' },
      { name: 'Wanessa Dermendjian', role: 'Autora da técnica 93/7' },
      { name: 'Pedro Zava', role: 'Head of Global Mobility — AG Immigration' },
    ],
    differentials: [
      { title: 'Mentoria com o CEO', desc: 'Mentoria individual com Fábio Louzada.' },
      { title: 'Imersão internacional', desc: 'Miami (mai/26) ou New York (set/26).' },
      { title: 'Suporte a vistos nos EUA', desc: 'Assessoria via AG Immigration.' },
      { title: 'Certificação SIE', desc: 'Preparatório para o mercado americano.' },
      { title: 'Parcerias globais', desc: 'JP Morgan, BlackRock, BNY Mellon e mais.' },
      { title: 'Assessoria de PR', desc: 'Relações públicas para posicionamento.' },
    ],
    certification: 'Preparatório CFP® e SIE',
    pricing: { price: 'Sob consulta', note: 'Vagas por lote — faça sua pré-aplicação.' },
    cta: 'Fazer pré-aplicação',
  },

  'business-financial-services': {
    slug: 'business-financial-services',
    name: 'MBA Business & Financial Services',
    title: 'MBA Business Banking & Financial Services',
    subtitle:
      'O método criado para desenvolver todas as dimensões que você precisa para ser um gerente PJ de alto nível.',
    audience: [
      'Profissionais do segmento PJ',
      'Gerentes de relacionamento',
      'Especialistas em crédito corporativo',
      'Profissionais de negócios bancários',
    ],
    format: { duracao: '18 meses (6 + 12 bônus)', carga: '1.296h ao vivo', formato: '100% Online + Presencial' },
    pillars: PILLARS_7,
    modules: [
      { n: '01', title: 'Fundamentos e Contexto de Mercado' },
      { n: '02', title: 'Finanças Corporativas e Análise de Balanço' },
      { n: '03', title: 'Crédito e Financiamento PJ' },
      { n: '04', title: 'Produtos PJ' },
      { n: '05', title: 'Prospecção, Abertura de Conta e Retenção' },
      { n: '06', title: 'Gestão de Carteira, NPS e Experiência do Cliente' },
      { n: '07', title: 'Desenvolvimento Comercial' },
      { n: '08', title: 'Carreira e Visão de Mercado' },
    ],
    marketRooms: ['Segunda a quinta — Market Rooms', 'Sábado — Immersion Bootcamp'],
    faculty: [
      { name: 'Fabio Donizete', role: 'Officer — Banco Safra' },
      { name: 'Fernanda Milena', role: 'Especialista em Crédito — Santander' },
      { name: 'Thiago Pereira', role: 'Líder Empresas — Santander' },
      { name: 'Gabrielle Fernandes', role: 'Gerente Middle Market — Banco Inter' },
      { name: 'Wallace Carvalho', role: 'Especialista Cash Management' },
      { name: 'Murilo Silva', role: 'Especialista Agronegócios / Crédito Rural' },
    ],
    differentials: [
      { title: 'Selo PEPJ', desc: 'Validação prática do gerente PJ.' },
      { title: 'Bionics (IA)', desc: '4 agentes de IA integrados.' },
      { title: '6 encontros presenciais', desc: 'Immersion Bootcamp ao longo do programa.' },
      { title: 'Talent Hub', desc: 'Vagas exclusivas no segmento PJ.' },
      { title: 'Mentoria 1:1', desc: '3 meses de acompanhamento.' },
    ],
    certification: 'PEPJ — validação prática em banca',
    testimonials: [
      { name: 'Murilo Costa', quote: 'De catador de latinhas ao segmento PJ no Bradesco.' },
      { name: 'Victor Barros', quote: 'Do McDonald’s direto para o segmento PJ do Itaú.' },
    ],
    pricing: { from: 'R$ 17.997', price: 'R$ 14.997', installments: '21× R$ 714,14', cash: 'R$ 13.497,30 à vista', savings: 'R$ 4.499,70' },
    cta: 'Quero me candidatar',
  },
}

export const MBA_LIST = Object.values(MBAS_DATA)
