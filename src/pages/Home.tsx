import { Hero } from '@/components/home/Hero'
import { TrustMarquee } from '@/components/home/TrustMarquee'
import { Stats } from '@/components/home/Stats'
import { MbaShowcase } from '@/components/home/MbaShowcase'
import { Manifesto } from '@/components/home/Manifesto'
import { Programs } from '@/components/home/Programs'
import { People } from '@/components/home/People'
import { Testimonials } from '@/components/home/Testimonials'
import { International } from '@/components/home/International'
import { FinalCta } from '@/components/home/FinalCta'

export function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Stats />
      <MbaShowcase />
      <Manifesto />
      <Programs />
      <People />
      <Testimonials />
      <International />
      <FinalCta />
    </>
  )
}
