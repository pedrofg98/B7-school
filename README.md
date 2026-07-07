# B7 Business School — Site

Site institucional e landing pages da **B7 Business School**, educação executiva
para o mercado financeiro.

## Stack
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** (design tokens via CSS `@theme`)
- **shadcn/ui** (base) · **Framer Motion** (`motion`) · **Lenis** (smooth scroll)
- Roteamento: **React Router**

## Rodando localmente
```bash
npm install
npm run dev      # http://localhost:5173
```

Build de produção:
```bash
npm run build
npm run preview
```

## Estrutura
```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Layout, LpLayout
│   ├── home/       # seções da Home
│   ├── mba/        # seções das LPs de MBA
│   ├── effects/    # SmoothScroll, IntroReveal, ScrollProgress, StickyScroll
│   └── ui/         # primitivas (efeitos editoriais, shimmer, spotlight, etc.)
├── config/         # dados de conteúdo (site, home, mbas, quem-somos)
├── pages/          # páginas e LPs
└── index.css       # design tokens da marca (cores, fontes)
```

## Identidade de marca
Cores oficiais: Marinho `#0A2342` · Meia-noite `#04152B` · Azul Detalhe `#123E75`
· Névoa `#E8EBF0` · Ouro `#EBB318`. Tipografia: Schibsted Grotesk + Source Serif 4.
