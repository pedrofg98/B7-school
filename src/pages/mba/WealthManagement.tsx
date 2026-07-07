import { ForWho, Curriculum, FacultyGrid, MbaTestimonials } from '@/components/mba/sections'
import {
  LpHero,
  PainSection,
  ResultsSection,
  Deliverables,
  CtaBand,
  MentorCeo,
  FaqAccordion,
  LpOffer,
  StickyCta,
} from '@/components/mba/lp-sections'
import { StickyScroll } from '@/components/effects/StickyScroll'
import { MBAS_DATA, MBA_FAQ } from '@/config/mbas'

const mba = MBAS_DATA['wealth-management']

// Etapas da jornada exibidas na seção com scroll sticky
const JOURNEY_STEPS = [
  { title: 'Market Rooms', desc: 'Aulas ao vivo toda semana com quem vive o mercado alta renda.' },
  { title: 'War Room', desc: 'Simulações práticas: entrevistas, comitês e defesa de portfólio.' },
  { title: 'Immersion Bootcamp', desc: 'Encontros presenciais com workshops e networking de alto nível.' },
  { title: 'Bionics (IA)', desc: 'Agentes de IA que aceleram seu estudo e sua performance comercial.' },
  { title: 'Talent Hub', desc: 'Conexão direta com vagas e recrutadores para o próximo passo.' },
]

export function WealthManagement() {
  return (
    <>
      <LpHero mba={mba} />
      <PainSection pains={mba.pains ?? []} />
      <ForWho
        audience={mba.audience}
        note="Para quem atende clientes com patrimônio investido de até R$ 15 milhões e quer elevar a performance."
      />
      <ResultsSection results={mba.results ?? []} />
      <StickyScroll
        eyebrow="A Jornada"
        heading="Como você"
        highlight="evolui"
        items={JOURNEY_STEPS}
      />
      <Deliverables mba={mba} />
      <Curriculum modules={mba.modules} rooms={mba.marketRooms} />
      <CtaBand mba={mba} />
      <FacultyGrid faculty={mba.faculty} />
      <MbaTestimonials items={mba.testimonials ?? []} />
      <MentorCeo />
      <LpOffer mba={mba} />
      <FaqAccordion items={MBA_FAQ} />
      <StickyCta mba={mba} />
    </>
  )
}
