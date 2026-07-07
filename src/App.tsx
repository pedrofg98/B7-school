import { Routes, Route } from 'react-router-dom'
import { SmoothScroll } from '@/components/effects/SmoothScroll'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { IntroReveal } from '@/components/effects/IntroReveal'
import { Layout } from '@/components/layout/Layout'
import { LpLayout } from '@/components/layout/LpLayout'
import { Home } from '@/pages/Home'
import { QuemSomos } from '@/pages/QuemSomos'
import { WealthManagement } from '@/pages/mba/WealthManagement'
import { Placeholder } from '@/pages/Placeholder'
import { MBAS } from '@/config/site'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <IntroReveal />
      <Routes>
      {/* LPs de MBA — layout enxuto (sem menu), estilo landing page */}
      <Route element={<LpLayout />}>
        <Route path="/mba/wealth-management" element={<WealthManagement />} />
        {MBAS.filter((m) => m.href !== '/mba/wealth-management').map((m) => (
          <Route
            key={m.href}
            path={m.href}
            element={<Placeholder title={m.label} note="Landing page do MBA (em construção)." />}
          />
        ))}
      </Route>

      {/* Site institucional — layout com navbar + footer */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/depoimentos" element={<Placeholder title="Depoimentos" />} />
        <Route path="/contato" element={<Placeholder title="Contato" />} />

        {/* Demais itens do menu */}
        <Route path="/graduacao-administracao" element={<Placeholder title="Graduação — Administração" />} />
        <Route path="/cursos/cpa" element={<Placeholder title="CPA" />} />
        <Route path="/cursos/cpro-r" element={<Placeholder title="CPRO-R" />} />
        <Route path="/cursos/cpro-i" element={<Placeholder title="CPRO-I" />} />
        <Route path="/cursos/pqo-operacional" element={<Placeholder title="PQO Operacional" />} />
        <Route path="/cursos/cfp" element={<Placeholder title="CFP®" />} />
        <Route path="/partiu-banco" element={<Placeholder title="Partiu Banco" />} />
        <Route path="/bionics" element={<Placeholder title="Bionic's" />} />
        <Route path="/emb-pro" element={<Placeholder title="EMB Pro — Hub de cursos" />} />
        <Route path="/mentores" element={<Placeholder title="One-o-One" />} />
        <Route path="/war-room" element={<Placeholder title="War Room" />} />
        <Route path="/emb-university/miami" element={<Placeholder title="Imersão Miami" />} />
        <Route path="/emb-university/new-york" element={<Placeholder title="Imersão New York" />} />
        <Route path="/blog" element={<Placeholder title="Blog" />} />
        <Route path="/agenda" element={<Placeholder title="Agenda EMB" />} />
        <Route path="/materiais" element={<Placeholder title="Materiais Gratuitos" />} />
        <Route path="/politica-de-privacidade" element={<Placeholder title="Política de Privacidade" />} />
        <Route path="/termos" element={<Placeholder title="Termos de Uso" />} />

        <Route path="*" element={<Placeholder title="Página não encontrada" note="O endereço acessado não existe." />} />
      </Route>
    </Routes>
    </>
  )
}
