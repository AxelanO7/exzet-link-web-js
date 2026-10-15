import { ArrowUpRight, MapPin, Ticket } from "lucide-react";
import { Brand, Mark } from "@/components/mark";
import { Clock } from "@/components/clock";
import { siteConfig, stats } from "@/config/site";

function Tile({
  children,
  className = "",
  href,
  delay = 0,
  beam,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  delay?: number;
  beam?: boolean;
}) {
  const base = `rise group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.1] bg-ink-surface p-6 transition-colors duration-200 md:p-8 ${beam ? "beam" : ""}`;
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
  return <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/80">{children}</p>;
}

function Arrow() {
  return <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cy" />;
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white/[0.05] p-3 text-white/80">{children}</div>;
}

/** Small phone with the real screen, the whole screen, at the screenshot's own ratio. */
function MiniPhone({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div className={`absolute w-[92px] rounded-[18px] border-[3px] border-[#1b242c] bg-black shadow-[0_18px_30px_-12px_rgba(0,0,0,0.8)] ${className}`}>
      <img src={`/phone/${name}-t.webp`} width={300} height={592} alt="" loading="lazy" decoding="async" className="block h-auto w-full rounded-[15px]" />
    </div>
  );
}

const CHIPS = [
  { t: "Bali", s: "Live", on: true },
  { t: "Las Vegas", s: "Oct 2026", on: false },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "radial-gradient(60% 40% at 85% 0%, rgba(45,212,232,0.12), transparent 70%), radial-gradient(50% 35% at 0% 100%, rgba(233,194,125,0.07), transparent 70%), #050f16" }}>
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Identity */}
          <Tile className="min-h-[320px] md:col-span-2 md:row-span-2" delay={0}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="/avatar.webp" alt="Jeremia Axelano" width={72} height={72} className="h-[72px] w-[72px] rounded-2xl border border-white/15 object-cover" />
                <div>
                  <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Jeremia Axelano</h1>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-mist">
                    <MapPin className="h-4 w-4 text-cy" />
                    Bali, Indonesia
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-cy">CTO · Bali, UTC+8</p>
                <p className="mt-3 font-display text-[clamp(30px,6vw,46px)] font-extrabold leading-[1.04] tracking-tight">
                  Platforms, Web3 and <span className="shine">AI agents</span>, built end to end.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <p className="max-w-md text-sm text-mist md:text-base">
                A nightlife marketplace on web and mobile, {stats.agents} AI agents in daily use and {stats.web3} Web3 sites. One builder across the whole stack.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`${siteConfig.portfolio}/#cases`} target="_blank" rel="noopener noreferrer" className="btn-cta">
                  See case studies
                </a>
                <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
                  Start a conversation
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {CHIPS.map((c) => (
                  <span key={c.t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-deep/60 px-3 py-1.5 text-xs">
                    <span className={`h-2 w-2 rounded-full ${c.on ? "live-dot bg-mint" : "border border-mist"}`} />
                    {c.t} <span className="text-mist">{c.s}</span>
                  </span>
                ))}
              </div>
            </div>
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
              <Clock />
            </div>
          </Tile>

          {/* Proof */}
          <Tile className="min-h-[170px]" delay={120}>
            <div>
              <Label>Live in Bali</Label>
              <p className="mt-2 font-display text-5xl font-extrabold leading-none tabular-nums">{stats.visitors}</p>
              <p className="mt-1 text-sm text-mist">unique visitors tracked</p>
            </div>
            <p className="mt-4 text-sm text-mist">
              <span className="font-semibold text-white">{stats.bookings}</span> booking requests a month ·{" "}
              <span className="font-semibold text-white">{stats.partners}</span> partners
            </p>
          </Tile>

          {/* Portfolio, with the real product */}
          <Tile href={siteConfig.portfolio} beam className="min-h-[210px] border-cy/25 md:col-span-2" delay={180}>
            <div className="relative z-10 flex w-full items-start justify-between">
              <Mark size={44} />
              <span className="flex items-center gap-1 text-sm font-semibold text-cy">
                View portfolio <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative z-10 mt-6 md:max-w-[58%]">
              <h2 className="font-display text-2xl font-semibold leading-tight">Everything I built, in one place</h2>
              <p className="mt-1 text-sm text-mist">Guestlist Ticket, AI agents, Web3 sites, client platforms and the {stats.tools}-tool arsenal.</p>
            </div>
            {/* phones sit below the text on a phone, and to the right on wider screens */}
            <div aria-hidden="true" className="pointer-events-none relative -mb-6 mt-5 h-[150px] w-[210px] self-center md:absolute md:-bottom-6 md:right-4 md:mb-0 md:mt-0 md:h-[200px] md:self-auto">
              <MiniPhone name="gl-nightlife" className="left-0 top-8 -rotate-6" />
              <MiniPhone name="gl-ticket" className="right-0 top-6 rotate-6" />
              <MiniPhone name="gl-home" className="floaty left-[56px] top-0 z-10 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.9)]" />
            </div>
          </Tile>

          {/* Case studies */}
          <Tile href={`${siteConfig.portfolio}/#cases`} className="min-h-[210px]" delay={240}>
            <div className="flex w-full items-start justify-between">
              <Label>Case study</Label>
              <Arrow />
            </div>
            <div>
              <p className="font-display text-[44px] font-extrabold leading-none tracking-tight text-cy">328→70</p>
              <p className="mt-2 text-sm text-mist">sitemap URLs, so search engines only see real pages</p>
              <p className="mt-3 font-mono text-[11px] text-gold">3 write-ups · problem, approach, result</p>
            </div>
          </Tile>

          {/* Guestlist Ticket */}
          <Tile href="https://guestlistticket.com" className="min-h-[170px]" delay={300}>
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
          <Tile href="https://www.linkedin.com/in/jeremia-axelano/" className="min-h-[170px]" delay={360}>
            <div className="flex w-full items-start justify-between">
              <IconBox>
                <Brand id="linkedin" />
              </IconBox>
              <Arrow />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-lg font-semibold">LinkedIn</h3>
              <p className="mt-1 text-xs text-mist">Career and updates</p>
            </div>
          </Tile>

          {/* GitHub */}
          <Tile href="https://github.com/AxelanO7/" className="min-h-[170px]" delay={420}>
            <div className="flex w-full items-start justify-between">
              <IconBox>
                <Brand id="github" />
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
          <Tile className="min-h-[130px] md:col-span-3" delay={480}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Label>Contact</Label>
                <h3 className="mt-1 font-display text-lg font-semibold">Get in touch</h3>
                <p className="mt-1 text-sm text-mist">Build a product, get architecture advice, or a part-time CTO.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.email}`} className="btn-cta">
                  <Brand id="gmail" className="h-4 w-4" />
                  {siteConfig.email}
                </a>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Brand id="whatsapp" className="h-4 w-4" />
                  {siteConfig.whatsappLabel}
                </a>
              </div>
            </div>
          </Tile>
        </div>

        <footer className="mt-8 flex items-center justify-center gap-3 font-mono text-xs text-mist">
          <Mark size={22} />
          <span>© 2026 Jeremia Axelano · Bali, UTC+8</span>
        </footer>
      </main>
    </div>
  );
}
