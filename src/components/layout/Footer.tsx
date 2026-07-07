import { Link } from 'react-router-dom'
import { NAV, SITE } from '@/config/site'
import { Logo } from '@/components/Logo'
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsappIcon,
} from '@/components/icons/social'

export function Footer() {
  const columns = NAV.filter((i) => i.columns?.length || i.links?.length).slice(0, 4)

  return (
    <footer className="bg-meia-noite text-nevoa">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="text-2xl">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm text-nevoa/70">
              Educação executiva conectada ao mercado financeiro real.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: WhatsappIcon, href: SITE.whatsapp, label: 'WhatsApp' },
                { icon: InstagramIcon, href: SITE.instagram, label: 'Instagram' },
                { icon: LinkedinIcon, href: SITE.linkedin, label: 'LinkedIn' },
                { icon: YoutubeIcon, href: SITE.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-nevoa/80 transition-colors hover:border-ouro hover:text-ouro"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => {
            const links = col.columns?.flatMap((c) => c.links) ?? col.links ?? []
            return (
              <div key={col.label}>
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-nevoa/50">
                  {col.label}
                </p>
                <ul className="space-y-2.5">
                  {links.slice(0, 6).map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="text-sm text-nevoa/75 transition-colors hover:text-ouro"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-nevoa/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidade" className="hover:text-ouro">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-ouro">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
