# MEGA PROMPT — Site B7 Business School (colar no Lovable)

> Cole este documento **inteiro** no chat do Lovable. Se ele pedir para dividir,
> construa na ordem: (1) setup + tokens + layout, (2) Home, (3) Quem Somos,
> (4) LP Wealth Management, (5) demais LPs de MBA.

---

## 0) O QUE CONSTRUIR
Site institucional + landing pages da **B7 Business School** (educação executiva
para o mercado financeiro). Estilo **editorial ousado e premium** (referência:
Conquer/@escolaconquer), profissional, com a paleta da B7. Idioma: **português-BR**.

**Stack:** React + Vite + TypeScript + Tailwind + shadcn/ui + **react-router-dom**.
Animações: **framer-motion**. Smooth scroll: **lenis**. Ícones: **lucide-react**.

---

## 1) SETUP — tokens, fontes e assets

### 1.1 Tailwind (`tailwind.config.ts` → theme.extend)
```ts
colors: {
  marinho: '#0A2342',      // primária (~70% das telas)
  'meia-noite': '#04152B', // fundos escuros / quase preto
  'azul-detalhe': '#123E75',
  nevoa: '#E8EBF0',        // neutro claro / texto sobre escuro
  ouro: '#EBB318',         // acento (~5%): CTAs, destaques, highlighter
},
fontFamily: {
  sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
  serif: ['"Source Serif 4"', 'Georgia', 'serif'],
},
keyframes: {
  'shimmer-x': { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
  marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-100%)' } },
  'float-slow': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
},
animation: {
  marquee: 'marquee 30s linear infinite',
  'float-slow': 'float-slow 9s ease-in-out infinite',
},
```

### 1.2 Fontes (index.html ou CSS)
```
https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap
```
Títulos: `font-sans font-extrabold uppercase tracking-tight`. Corpo: `font-sans`.
Acentos editoriais/citações: `font-serif italic`.

### 1.3 Assets (use estas URLs diretamente)
- **Logo (branca, p/ fundo escuro):** `https://onboardb7.lovable.app/__l5e/assets-v1/30777212-9121-4970-b5ac-260205438835/logo-b7-branca.png`
- **Logos de bancos** (faixa de confiança):
  - Itaú Íon — `https://b7school.com.br/wp-content/uploads/2026/04/logo_ion1-scaled-1-300x169.png`
  - Bradesco — `https://b7school.com.br/wp-content/uploads/2024/05/logbradesco.png`
  - Santander — `https://b7school.com.br/wp-content/uploads/2024/02/logosantanderaaapreto2.png`
  - BTG Pactual — `https://b7school.com.br/wp-content/uploads/2024/02/logobtg.png`
  - XP — `https://b7school.com.br/wp-content/uploads/2024/02/logoxpinvestimentos.png`
  - C6 Bank — `https://b7school.com.br/wp-content/uploads/2026/04/logo-C6-300x100.png`
  - PicPay — `https://b7school.com.br/wp-content/uploads/2026/04/logo-picpay-300x107.webp`
  - Sicredi — `https://b7school.com.br/wp-content/uploads/2026/04/logo-sicredi-300x300.png`

---

## 2) LINGUAGEM VISUAL (regras)
- **Fundo escuro dominante** (marinho/meia-noite); ouro só como acento.
- **Títulos mistos** (a assinatura do design): combine **sans CAIXA-ALTA extrabold** + **serifada itálica** + uma palavra-chave com **marca-texto ouro** atrás (levemente torto, `-rotate-1`, texto escuro sobre o ouro). Ex.: “EDUCAÇÃO EXECUTIVA *conectada ao* **MERCADO REAL**”.
- **Textura de grão** sutil sobre seções escuras (SVG feTurbulence, `mix-blend-overlay`, opacity ~0.1).
- **Fitas (tape)** rotacionadas e **molduras tracejadas** como elementos editoriais.
- Muito **respiro**; cantos `rounded-2xl`; seções com `py-24`.
- **Alternar ritmo** de fundo: escuro → ouro → claro → escuro…

---

## 3) EFEITOS (o diferencial — implemente todos)

1. **Smooth scroll (lenis)** global. Init com `new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - 2**(-10*t)) })` + loop `requestAnimationFrame`. Âncoras `#id` rolam suave. Respeite `prefers-reduced-motion` (não ativa).
2. **Intro de carregamento:** overlay `meia-noite` cobrindo a tela, com a **logo** ao centro (fade+scale) e uma **linha ouro** crescendo embaixo; depois o overlay **sobe (y: -100%)** revelando a página (~0.9s, easing `[0.76,0,0.24,1]`). Total ~1.6s. Mostra a cada carregamento/refresh (monta 1× na raiz; não repete em navegação interna).
3. **Barra de progresso** ouro fina no topo (`useScroll` → `scaleX`, `transform-origin: left`, `position: fixed; top:0; height:3px; z-50`).
4. **Scroll STICKY** (framer-motion): container alto (`height: itens*90vh`) com painel interno `sticky top-0 h-screen`. Use `useScroll({ target, offset:['start start','end end'] })` → índice ativo = `floor(progress*itens)`. Mostra contador grande “01 / 0X”, barra de progresso e **crossfade** (`AnimatePresence`) do item ativo. Texto “role para continuar ↓”.
5. **Reveal on scroll:** wrapper com `whileInView` (fade + `y:28→0`, `once:true`); versão com **stagger** nos filhos.
6. **Botões:**
   - *Shimmer* — fundo `ouro`, texto `meia-noite`, pill; uma faixa `via-white/50` que **atravessa** no hover (`-translate-x-full → translate-x-full`, duration 700).
   - *Gradient-border* — pill com borda ouro animada (bg gradient `[length:200%] animate-[shimmer-x]`), interior `marinho`, texto vira ouro no hover.
7. **Cards spotlight:** brilho radial ouro que **segue o mouse** (`radial-gradient at var(--mx) var(--my)`), borda ouro no hover + `-translate-y-1`.
8. **Marquee** infinito (2 faixas duplicadas, `animate-marquee`, `pause on hover`, máscara lateral fade).
9. **Contadores** (number ticker): animam 0→valor quando entram na viewport (`useInView` + `animate`), formato pt-BR.

---

## 4) LAYOUT GLOBAL

### Navbar (escura, `sticky top-0`, `bg-marinho/90 backdrop-blur`, texto névoa)
Logo à esquerda. Itens (uppercase, hover ouro):
- **Home** → `/`
- **Sobre** ▾ : Quem Somos (`/quem-somos`), Depoimentos (`/depoimentos`)
- **Programas** ▾ : os 5 MBAs + Graduação (Administração — ênfase Mercado Financeiro)
- **Cursos** ▾ (MEGA-MENU, 4 colunas):
  - *Certificações:* CPA · CPRO-R · CPRO-I · PQO Operacional · CFP®
  - *Ponto de Partida:* Partiu Banco
  - *Desenvolvimento Aplicado:* Bionic’s · EMB Pro — Hub de cursos
  - *Experiências de Evolução:* One-o-One · War Room
- **EMB University – US** ▾ : Imersão Miami, Imersão New York
- **Conteúdos** ▾ : Blog, Agenda EMB, Materiais Gratuitos
- **Contato** → `/contato`
- Botão ouro à direita: **“Meus Cursos”**. Menu mobile em drawer.

### Footer (escuro, `bg-meia-noite`)
Logo + tagline “Educação executiva conectada ao mercado financeiro real.”; ícones sociais (WhatsApp, Instagram, LinkedIn, YouTube); colunas de links do menu; rodapé legal (© ano · Política de Privacidade · Termos de Uso).

### LpLayout (para as LPs de MBA)
**Sem** menu completo — só **logo + botão “Garantir minha vaga”** (âncora `#oferta`). Rodapé slim. **Barra de CTA fixa** no rodapé que aparece ao rolar (>700px): nome do MBA + preço + botão.

---

## 5) HOME (10 seções, em ordem)

1. **Hero** (meia-noite; grão + grade sutil + brilhos flutuantes; “?” serifado e “↗” espalhados): eyebrow “B7 BUSINESS SCHOOL”; título misto **“EDUCAÇÃO EXECUTIVA / *conectada ao* / MERCADO REAL”** (última com highlighter ouro); subtítulo “MBAs, certificações e formações desenhados por quem vive o mercado — para você conquistar, crescer e liderar no setor financeiro.”; botões: shimmer **“Conheça os MBAs”** + gradient **“Falar com um consultor”**. (Sem degradê no rodapé da seção — corte seco.)
2. **Faixa de confiança** (marquee): título “NOSSOS ALUNOS ATUAM NAS PRINCIPAIS INSTITUIÇÕES DO MERCADO”; **logos dos bancos** (seção 1.3) em **células de tamanho igual** (h-16 w-44, `object-contain`, `max-h-11 max-w-[140px]`), **grayscale + opacity → cor no hover**.
3. **Números** (contadores, fundo claro): `10.000+` Alunos contratados e promovidos · `5` MBAs em progressão de carreira · `4º` No ranking ANBIMA de influência em finanças · `20+` Programas e certificações.
4. **MBAs** (meia-noite): eyebrow “Programas MBA”; título “5 MBAs como uma *trilha de carreira*”; subtítulo “Do varejo ao private banking — escolha o caminho que acelera sua evolução no mercado financeiro.” 5 **cards spotlight** (tag + título + descrição + “Ver programa →”), linkando para cada LP:
   - *Alta Renda* — **MBA Wealth Management** — Gestão de grandes patrimônios, planejamento e relacionamento com clientes de alta renda.
   - *Investimentos* — **MBA Investments & Asset Allocation** — Alocação de ativos, construção de portfólios e assessoria de investimentos.
   - *Corporate* — **MBA Middle & Corporate Banking** — Crédito, produtos e relacionamento bancário com empresas.
   - *Private & Offshore* — **MBA Private Banking & Offshore** — Private banking, estruturas internacionais e investimentos offshore.
   - *Serviços Financeiros* — **MBA Business & Financial Services** — Negócios bancários, serviços financeiros e visão de gestão.
5. **Manifesto** (seção **FULL OURO**, texto meia-noite, grão `mix-blend-multiply`): fita “SEM ATALHO”; frase grande “No mercado financeiro, *quem se prepara* ocupa as melhores cadeiras.”; apoio “Aqui a gente não vende sonho. Vende método, conteúdo de quem vive o mercado e a rede certa para você crescer de verdade.”
6. **Certificações & Programas** (fundo claro): eyebrow; título “Do início *ao topo*”. 6 cards (hover elevação/borda ouro): **Certificações ANBIMA** (CPA, CEA e as principais provas) · **CFP®** (a certificação máxima do planejamento financeiro) · **PQO Operacional** · **Partiu Banco** (o ponto de partida para entrar no mercado) · **Bionic’s** (ferramentas de IA na jornada) · **War Room** (experiência imersiva de evolução).
7. **Quem faz acontecer** (marinho, grão): eyebrow; título “Aprenda com quem vive o mercado *todos os dias*”. 4 cards de retrato (fundo escuro em gradiente, nome extrabold + cargo em serifada itálica): **Fábio Louzada — CEO & Fundador**; **Mentor B7 — Especialista em Investimentos**; **Mentora B7 — Private Banking & Offshore**; **Convidado — Executivo do mercado**. Abaixo, **moldura tracejada** “Temas que movem o mercado”: Alta Renda · Investimentos · Corporate · Carreira · Offshore.
8. **Depoimentos** (fundo névoa): 3 cards, citação em **serifada itálica** + nome + cargo. Ex.: “Saí do varejo para a área de investimentos em menos de um ano. A B7 me deu método, conteúdo e a rede certa.” — *Assessor de Investimentos*.
9. **EMB University – US** (marinho): eyebrow “EMB University — US”; “Sua carreira sem fronteiras.”; “Imersões internacionais em Miami e Nova York para conectar você às oportunidades do mercado financeiro global.” 2 cards: **Imersão Miami**, **Imersão New York**.
10. **CTA final**: bloco marinho arredondado, grão + brilhos: “Pronto para dar o próximo passo na sua carreira?” + subtítulo + botões shimmer “Falar com um consultor” e gradient “Conhecer a B7”.

---

## 6) QUEM SOMOS (unifica Quem Somos + Nossa História — 8 seções)

1. **Hero** (meia-noite): eyebrow “Quem Somos”; título **“NÃO É UM CURSO. / *É um* ECOSSISTEMA”** (ECOSSISTEMA com highlighter); subtítulo “A B7 Business School forma profissionais para o mercado financeiro real — do primeiro emprego no banco ao topo do private banking.”
2. **Intro** (2 colunas): título “Feita por quem *vive o mercado*”; frase serifada “Educação executiva feita por quem vive o mercado, para quem quer viver dele.”; 2 parágrafos: (a) “Nascemos com uma convicção simples: teoria sem mercado não muda carreira. Por isso cada formação da B7 é desenhada com quem está na linha de frente do setor financeiro.” (b) “Hoje somos um ecossistema de educação — MBAs, certificações, imersões internacionais e ferramentas de IA — com um único objetivo: acelerar a evolução de quem trabalha com dinheiro.”
3. **Números** (mesmos contadores da Home).
4. **Nossa História — timeline vertical** (meia-noite, marcadores ouro, alterna lados no desktop): *Fundação* — “O começo, sem atalho”. *Expansão* — “Certificações e primeiras turmas”. *Consolidação* — “Uma trilha de 5 MBAs”. *Reconhecimento* — “Entre as mais influentes em finanças” (ranking ANBIMA). *Hoje* — “Campus, ecossistema e mundo” (Campus Paulista, EMB School, EMB University, Bionic’s).
5. **Ecossistema** (4 cards): **B7 Business School** — a escola, MBAs e formações executivas. **EMB School** — centenas de cursos de soft skills que multiplicam sua evolução. **EMB University** — o braço internacional (Miami/NY). **Bionic’s** — ferramentas de IA integradas à jornada.
6. **Princípios** (4 spotlight cards, marinho): **Mercado real** · **Sem atalho** · **Comunidade** · **Evolução** (cada um com número 01–04 em serifada ouro + descrição curta).
7. **Liderança**: retrato + fita ouro “Liderança” + **Fábio Louzada, CEO & Fundador** + citação serifada “A gente não vende sonho. Vende o preparo que faz o profissional ocupar as melhores cadeiras do mercado.”
8. **CTA final**: “Faça parte da *próxima geração* do mercado financeiro” + botões.

---

## 7) LANDING PAGES DE MBA — template de conversão

Use o **LpLayout**. Cada LP segue esta ordem (personalizando com os dados da seção 8):

1. **Hero**: selos de turma/vagas; nome do MBA; **promessa** (headline forte); subtítulo; **cartão de oferta** (carga · duração · formato · preço De→por · parcelas) + botão CTA.
2. **Você se identifica?** (4 dores).
3. **Para quem é** (lista do público).
4. **O que você conquista** (4 resultados).
5. **A Jornada — SCROLL STICKY** (01/05): Market Rooms → War Room → Immersion Bootcamp → Bionic’s (IA) → Talent Hub.
6. **O que está incluso** (stack de entregas com checks).
7. **Grade** (módulos do MBA + chips das Market Rooms).
8. **Faixa de CTA** (ouro).
9. **Corpo docente** (grid de mentores: nome + cargo, com iniciais).
10. **Depoimentos** (se houver).
11. **Mentor** (Fábio Louzada, CEO).
12. **Oferta** (âncora `#oferta`): preço De→por + parcelas + selo de certificação (fita ouro) + botão. Nota: “processo por entrevista · vagas limitadas”.
13. **FAQ** (accordion): MEC; online/presencial; precisa já atuar?; aulas gravadas; processo de entrada; formas de pagamento.

**FAQ padrão (todas as LPs):**
- *O MBA é reconhecido pelo MEC?* Sim. Pós lato sensu reconhecida, certificado válido nacionalmente.
- *As aulas são online ou presenciais?* Predominantemente online e ao vivo, com encontros presenciais (Immersion Bootcamp).
- *Preciso já atuar no mercado financeiro?* Não é obrigatório — atende quem atua e quem está em transição.
- *E se eu perder uma aula ao vivo?* Todas ficam gravadas na plataforma.
- *Como funciona a entrada?* Aplicação/entrevista → aprovação do perfil → acesso imediato.
- *Formas de pagamento?* Cartão parcelado, à vista com desconto e demais condições na matrícula.

---

## 8) DADOS COMPLETOS DAS 5 LPs (1:1)

### 8.1 MBA Wealth Management — rota `/mba/wealth-management`
- **Promessa:** “Domine o alta renda e ocupe as melhores cadeiras do mercado.”
- **Subtítulo:** Programa para Gerentes Alta Renda, Consultores, Assessores e Especialistas de Investimentos que atendem clientes com patrimônio investido até R$ 15 milhões e buscam ampliar performance.
- **Turma/vagas:** Turma 27/07/2026 · Vagas limitadas
- **Formato:** 1.000h ao vivo · 12 meses + 6 de bônus · 100% Online + Presencial
- **Público:** Gerentes de Relacionamento Alta Renda · Consultores de Investimentos · Assessores Financeiros · Especialistas em Investimentos
- **Dores:** domina o produto mas trava na prospecção/captação; falta repertório para conversar de igual com o cliente alta renda; vê colegas promovidos e a carteira não evolui; estuda teoria mas não aplica no atendimento.
- **Resultados:** construir e defender portfólios sofisticados; prospectar/captar com o método 93/7; dominar wealth planning (fiscal, sucessório, offshore); se posicionar para promoções e vagas do alta renda.
- **Módulos (6):** 01 Macroeconomia para resultado · 02 Estruturas de produtos de investimentos · 03 Construção de asset allocation e sofisticação de portfólio · 04 Estratégias de Wealth Planning · 05 Construção de repertório para relacionamento · 06 Metodologia 93/7.
- **Market Rooms:** Macroeconomia e Estratégia de Portfólio · Prospecção e Abordagens · Wealth Planning · Estrutura de Produtos.
- **Docentes:** Jerson Zanlorenzi (Partner — BTG) · Roberto Motta (Estrategista Líder — Genial) · Shirley Ambrosio (Wealth Planning — Bradesco Private) · Caio Camargo (Estrategista Líder — Santander) · Luiz Zordan (Superintendente — Safra) · Wanessa Dermendjian (criadora do Método 93/7).
- **Diferenciais:** Bionic’s (4 IAs) · Talent Hub · Hiring Prep 1:1 · Certificação PWM · Mentoria individual.
- **Certificação:** PWM (banca War Room).
- **Depoimentos:** Luana Bertol — “Promovida para Investment Advisor Analyst III.” · Gracieli Figueiredo — “Promovida para Especialista II no Itaú Íon.” · Leandro Aires — “Contratado para Offshore na XP Investimentos.”
- **Preço:** De R$ 59.997 por **R$ 29.997** · 24× R$ 1.851 · economia R$ 30.000. CTA “Garantir minha vaga”.

### 8.2 MBA Investments & Asset Allocation — `/mba/investments-asset-allocation`
- **Promessa:** “Dois MBAs, duas certificações: domine a gestão de portfólios do alta renda.”
- **Subtítulo:** Um programa, dois MBAs e duas certificações de referência: **PAAP® e PARB®**. Formação intensiva para dominar gestão de portfólios e atendimento ao cliente de alta renda.
- **Formato:** 1.440h ao vivo · 18 meses (6 + 12 bônus) · 100% Online + Presencial
- **Público:** profissionais do mercado financeiro de alta renda; assessores/gestores que atendem high-net-worth; quem busca crescimento estratégico.
- **Dores:** sabe teoria mas insegurança para montar portfólio real; não consegue explicar alocação ao cliente; quer PAAP/PARB e não sabe por onde; carreira estagnada no varejo.
- **Resultados:** montar asset allocation na prática; conquistar PAAP® e PARB®; atender high-net-worth com segurança; crescer no alta renda.
- **Módulos (15):** 01 Visão de Mercado e Inteligência · 02 Interpretação de Cenário Econômico · 03 O Cliente Alta Renda · 04 Curvas, Juros e Renda Fixa · 05 Mercado de Capitais e Ofertas · 06 Operações Estruturadas (COE) · 07 Fundos e Veículos · 08 Previdência e Longo Prazo · 09 Asset Allocation na Prática · 10 Planejamento Patrimonial e Sucessório · 11 Proteção e Blindagem Patrimonial · 12 Crédito e Soluções Financeiras · 13 Liderança e Carreira · 14 Metodologia 93×7 · 15 Avaliação Final.
- **Market Rooms:** Investment Strategy · Client Solutions · Portfolio & Acquisition · Career Strategy · Market Masterclass.
- **Docentes:** Wanessa Dermendjian (Método 93/7) + executivos de Santander, Itaú, Bradesco, BTG e XP.
- **Diferenciais:** 2 MBAs + 2 certificações (PAAP®/PARB®) · Bionic’s · Talent Hub · Mentoria 1:1 (3 meses).
- **Certificação:** PAAP® + PARB® (banca War Room).
- **Depoimentos:** João Igor — “Da Uber para investimentos no Bradesco.” · Nayara Rodrigues — “Da farmácia para o Itaú Personnalité.” · Emily Yukari — “De professora de inglês para investimentos no C6 Bank.”
- **Preço:** De R$ 32.000 por **R$ 17.997** · 21× R$ 857 · R$ 16.197 à vista · economia R$ 5.800. CTA “Candidatar-me agora”.

### 8.3 MBA Middle & Corporate Banking — `/mba/middle-corporate-banking`
- **Promessa:** “Faça a transição para o Atacado: Middle, Corporate e Agro.”
- **Subtítulo:** Programa para potencializar profissionais da PJ, com foco em performance e transição para o Atacado — Middle, Corporate Banking e Agronegócio.
- **Turma/vagas:** Turma 29/06/2026 · Vagas limitadas
- **Formato:** 1.000h ao vivo · 24 meses (12 + 12 bônus) · 100% Online + Presencial
- **Público:** profissionais PJ em busca de performance · quem faz a transição para o Atacado · foco em Middle e Corporate · profissionais do Agronegócio.
- **Dores:** preso no PJ varejo e quer o Atacado; falta domínio de crédito/comex/capital markets; não entende o Agro; sem repertório para comitê de crédito.
- **Resultados:** dominar crédito, comex, cash e capital markets; transitar para Middle/Corporate; atuar no Agronegócio; conquistar o selo PECB.
- **Módulos (8):** I Crédito · II Comex & Trade Finance · III Produtos Middle & Corporate · IV Cash Management & Financial Services · V Gestão de Relacionamento Comercial · VI Capital Markets (DCM, M&A, ECM) · VII Agronegócio · VIII Carreiras.
- **Market Rooms:** Crédito · Gestão de Relacionamento · Cash/Trade/Produtos · Capital Markets & Agro.
- **Docentes:** Fernando Vazquez (VP — Athena) · Thiago Vila (Superintendente Middle & Corporate — Sofisa) · Pedro Lippi (Sup. Executivo — Banco Fibra) · Max Marchon (Sup. Executivo — Daycoval) · Rodrigo Zago (Gerente Regional Agro — Itaú BBA) · André Cestari (Founder — Affa Capital).
- **Diferenciais:** foco Atacado e Agro · selo PECB · Bionic’s (24/7) · Talent Hub · Mentoria 1:1 (3 meses).
- **Certificação:** PECB — Profissional Empresas e Corporate Banking.
- **Preço:** De R$ 51.997 por **R$ 24.997** · 24× R$ 1.586 · economia R$ 33.000. CTA “Quero me candidatar”.

### 8.4 MBA Private Banking & Offshore — `/mba/private-banking-offshore`
- **Promessa:** “Sua carreira no private banking, sem fronteiras.”
- **Subtítulo:** Especialização prática em mercados onshore e offshore, com networking estratégico junto a profissionais de destaque nos EUA e no Brasil.
- **Formato:** Online e Ao Vivo · 12 meses + 6 de bônus · Online + Imersão internacional · início imediato.
- **Público:** Gerentes High, Assessores e Private Bankers com foco global · quem quer ser referência em produtos internacionais · profissionais que buscam atuar nos EUA.
- **Dores:** quer atuar com produtos internacionais mas não domina offshore; sonha em trabalhar nos EUA sem saber o caminho (visto, certificação); falta networking internacional; insegurança com o mercado americano.
- **Resultados:** dominar private onshore e offshore; entender o mercado financeiro americano; preparar-se para SIE e vistos; construir networking global.
- **Módulos (5):** 01 Análise Quantitativa · 02 Finanças Corporativas · 03 Mercado Financeiro Americano · 04 Private Equity & Real Estate · 05 Asset & Wealth Management.
- **Market Rooms:** Produtos Private Offshore · Produtos Private Onshore · Estratégia Wealth Management · Investment Banking & Asset Management · Carreiras e Tech.
- **Docentes:** Will Castro (Chief Strategist — Avenue) · Diego Ortellado (Head of Relationship Mgmt — BNY Mellon) · Marco Saravalle (Sócio & CIO — MSX Invest) · Fernando Moscoso (Portfolio Solutions — Bradesco Bank Miami) · Wanessa Dermendjian (técnica 93/7) · Pedro Zava (Head of Global Mobility — AG Immigration).
- **Diferenciais:** mentoria com o CEO Fábio Louzada · imersão internacional (Miami mai/26 ou New York set/26) · suporte a vistos nos EUA (AG Immigration) · certificação SIE · parcerias globais (JP Morgan, BlackRock, BNY Mellon) · assessoria de PR.
- **Certificação:** Preparatório CFP® e SIE.
- **Preço:** Sob consulta — vagas por lote. CTA “Fazer pré-aplicação”.

### 8.5 MBA Business & Financial Services — `/mba/business-financial-services`
- **Promessa:** “Seja o gerente PJ de alto nível que o mercado procura.”
- **Subtítulo:** O método criado para desenvolver todas as dimensões que você precisa para ser um gerente PJ de alto nível.
- **Formato:** 1.296h ao vivo · 18 meses (6 + 12 bônus) · 100% Online + Presencial.
- **Público:** profissionais do segmento PJ · gerentes de relacionamento · especialistas em crédito corporativo · profissionais de negócios bancários.
- **Dores:** quer ser gerente PJ de alto nível mas falta base; dificuldade com análise de balanço e crédito PJ; trava na prospecção e retenção da carteira PJ; sem visão comercial estruturada.
- **Resultados:** dominar finanças corporativas e crédito PJ; prospectar e reter clientes PJ; gerir carteira com NPS alto; conquistar o selo PEPJ.
- **Módulos (8):** 01 Fundamentos e Contexto de Mercado · 02 Finanças Corporativas e Análise de Balanço · 03 Crédito e Financiamento PJ · 04 Produtos PJ · 05 Prospecção, Abertura de Conta e Retenção · 06 Gestão de Carteira, NPS e Experiência do Cliente · 07 Desenvolvimento Comercial · 08 Carreira e Visão de Mercado.
- **Docentes:** Fabio Donizete (Officer — Safra) · Fernanda Milena (Especialista Crédito — Santander) · Thiago Pereira (Líder Empresas — Santander) · Gabrielle Fernandes (Gerente Middle Market — Banco Inter) · Wallace Carvalho (Cash Management) · Murilo Silva (Agronegócios/Crédito Rural).
- **Diferenciais:** selo PEPJ · Bionic’s (4 IAs) · 6 encontros presenciais · Talent Hub · Mentoria 1:1 (3 meses).
- **Certificação:** PEPJ (banca).
- **Depoimentos:** Murilo Costa — “De catador de latinhas ao segmento PJ no Bradesco.” · Victor Barros — “Do McDonald’s direto para o segmento PJ do Itaú.”
- **Preço:** De R$ 17.997 por **R$ 14.997** · 21× R$ 714,14 · R$ 13.497,30 à vista · economia R$ 4.499,70. CTA “Quero me candidatar”.

---

## 9) ROTAS
`/` · `/quem-somos` · `/depoimentos` · `/contato` · `/graduacao-administracao` · `/mba/wealth-management` · `/mba/investments-asset-allocation` · `/mba/middle-corporate-banking` · `/mba/private-banking-offshore` · `/mba/business-financial-services` · `/cursos/cpa` · `/cursos/cpro-r` · `/cursos/cpro-i` · `/cursos/pqo-operacional` · `/cursos/cfp` · `/partiu-banco` · `/bionics` · `/emb-pro` · `/mentores` · `/war-room` · `/emb-university/miami` · `/emb-university/new-york` · `/blog` · `/agenda` · `/materiais`.
Páginas ainda não detalhadas: **stub “em construção”** no tema.

---

## 10) PRIORIDADES
1. Setup (tokens, fontes, layout, efeitos) → 2. **Home** → 3. **Quem Somos** → 4. **LP Wealth Management** (com scroll sticky) → 5. demais LPs de MBA.
Fidelidade máxima nas 3 primeiras páginas. Tudo **responsivo** e acessível. Se algum efeito não for viável, priorize nesta ordem: smooth scroll → intro reveal → scroll sticky → reveals on scroll.
