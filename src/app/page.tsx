import { ArrowUpRight, Github, Globe, Linkedin, Mail, MapPin, Phone, Ticket } from "lucide-react";
import { siteConfig } from "@/config/site";

const TOOLS = 82;
const AGENTS = 11;
const WEB3 = 44;

function Tile({
  children,
  className = "",
  href,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  delay?: number;
}) {
  const base =
    "rise group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.09] bg-ink-surface p-6 transition-colors duration-200 md:p-8";
  const style = { animationDelay: `${delay}ms` };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style} className={`${base} hover:border-cy/40 ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <div style={style} className={`${base} ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/70">{children}</p>;
}

function Arrow() {
  return <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cy" />;
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white/[0.04] p-3 text-white/75">{children}</div>;
}

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(60% 40% at 85% 0%, rgba(34,211,238,0.10), transparent 70%), #07151d" }}
    >
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Identity */}
          <Tile className="min-h-[300px] md:col-span-2 md:row-span-2" delay={0}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="/avatar.jpg" alt="Jeremia Axelano" width={64} height={64} className="h-16 w-16 rounded-2xl border border-white/15 object-cover" />
                <div>
                  <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Jeremia Axelano</h1>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-mist">
                    <MapPin className="h-4 w-4 text-cy" />
                    Bali, Indonesia
                  </p>
                </div>
              </div>
              <p className="pt-2 font-display text-[clamp(30px,6vw,46px)] font-bold leading-[1.05] tracking-tight">
                Platforms, Web3 and <span className="text-cy">AI agents</span>, built end to end.
              </p>
            </div>
            <p className="max-w-md pt-6 text-sm text-mist md:text-base">
              A nightlife marketplace on web and mobile, {WEB3} Web3 sites and a fleet of AI agents. One builder across the whole stack.
            </p>
          </Tile>

          {/* Role */}
          <Tile className="min-h-[170px]" delay={60}>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-cy/25 bg-cy/10 px-3 py-1 text-xs font-semibold text-cy">
              <span className="live-dot h-2 w-2 rounded-full bg-cy" />
              Active
            </span>
            <div className="mt-4">
              <Label>Current role</Label>
              <h2 className="mt-1 font-display text-xl font-semibold leading-tight">CTO, New Directions Success</h2>
              <p className="mt-1 text-sm font-medium text-cy">Building Guestlist Ticket</p>
              <p className="mt-1 text-xs text-mist">Web · Mobile · Bali to Las Vegas</p>
              <p className="mt-2 font-mono text-xs text-gold">Mar 2025 – Present</p>
            </div>
          </Tile>

          {/* Stats */}
          <Tile className="min-h-[170px]" delay={120}>
            <div>
              <Label>Arsenal</Label>
              <p className="mt-2 font-display text-5xl font-bold leading-none tabular-nums">{TOOLS}</p>
              <p className="mt-1 text-sm text-mist">tools in production use</p>
            </div>
            <p className="mt-4 text-sm text-mist">
              <span className="font-semibold text-white">{AGENTS}</span> AI agents ·{" "}
              <span className="font-semibold text-white">{WEB3}</span> Web3 sites
            </p>
          </Tile>

          {/* Portfolio */}
          <Tile href={siteConfig.portfolio} className="min-h-[190px] border-cy/25 md:col-span-2" delay={180}>
            <div className="flex w-full items-start justify-between">
              <div className="rounded-2xl bg-cy/10 p-3 text-cy">
                <Globe className="h-6 w-6" />
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-cy">
                View portfolio <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="font-display text-2xl font-semibold">Everything I built, in one place</h2>
              <p className="mt-1 max-w-md text-sm text-mist">
                Guestlist Ticket, {AGENTS} AI agents, {WEB3} Web3 sites, client platforms and the full {TOOLS}-tool arsenal.
              </p>
            </div>
          </Tile>

          {/* Guestlist Ticket */}
          <Tile href="https://guestlistticket.com" className="min-h-[190px]" delay={240}>
            <div className="flex w-full items-start justify-between">
              <IconBox>
                <Ticket className="h-6 w-6" />
              </IconBox>
              <Arrow />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-lg font-semibold">Guestlist Ticket</h3>
              <p className="mt-1 text-xs text-mist">The marketplace I lead, live in Bali</p>
            </div>
          </Tile>

          {/* LinkedIn */}
          <Tile href="https://www.linkedin.com/in/jeremia-axelano/" className="min-h-[130px]" delay={300}>
            <div className="flex w-full items-start justify-between">
              <IconBox>
                <Linkedin className="h-6 w-6" />
              </IconBox>
              <Arrow />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-lg font-semibold">LinkedIn</h3>
              <p className="mt-1 text-xs text-mist">Career and updates</p>
            </div>
          </Tile>

          {/* GitHub */}
          <Tile href="https://github.com/AxelanO7/" className="min-h-[130px]" delay={360}>
            <div className="flex w-full items-start justify-between">
              <IconBox>
                <Github className="h-6 w-6" />
              </IconBox>
              <span className="flex items-center gap-1 font-mono text-xs text-white/50">
                @AxelanO7 <Arrow />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-display text-lg font-semibold">GitHub</h3>
              <p className="mt-1 text-xs text-mist">70+ public repositories</p>
            </div>
          </Tile>

          {/* Contact */}
          <Tile className="min-h-[130px]" delay={420}>
            <div>
              <Label>Contact</Label>
              <h3 className="mt-1 font-display text-lg font-semibold">Get in touch</h3>
            </div>
            <div className="mt-4 space-y-2.5">
              <a href="mailto:jeremia123.jm@gmail.com" className="flex items-center gap-2.5 text-sm text-mist hover:text-cy">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">jeremia123.jm@gmail.com</span>
              </a>
              <a href="https://wa.me/6282246034453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-mist hover:text-cy">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+62 822 4603 4453</span>
              </a>
            </div>
          </Tile>
        </div>
      </main>
    </div>
  );
}
