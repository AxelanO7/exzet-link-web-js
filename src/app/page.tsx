"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  MapPin,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { memo } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Hardcoded GitHub contribution pattern (7 cols × 4 rows = 28 cells), intensity 0-3
const contributionGrid = [
  2, 0, 3, 1, 2, 3, 1,
  0, 3, 2, 3, 0, 2, 3,
  1, 2, 0, 2, 3, 1, 2,
  3, 1, 3, 0, 2, 3, 2,
];

const intensityClass: Record<number, string> = {
  0: "bg-slate-800",
  1: "bg-emerald-900/60",
  2: "bg-emerald-700/70",
  3: "bg-emerald-500/80",
};

const BentoTile = memo(function BentoTile({
  children,
  className = "",
  href = "",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const baseClass = `
    relative overflow-hidden rounded-3xl p-6 md:p-8
    bg-white/70 dark:bg-slate-900/70 backdrop-blur-md
    border border-slate-200 dark:border-slate-800/80
    transition-all duration-300 ease-out
    hover:border-emerald-500/30 dark:hover:border-emerald-500/20
    hover:scale-[1.015] hover:shadow-[0_0_32px_rgba(16,185,129,0.12)]
    group flex flex-col justify-between cursor-pointer
  `;

  if (href) {
    return (
      <motion.a
        variants={tileVariants}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div variants={tileVariants} className={`${baseClass} ${className}`}>
      {children}
    </motion.div>
  );
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-emerald-500/5 dark:bg-emerald-500/[0.02] blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-emerald-500/5 dark:bg-emerald-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Tile 1: Identity */}
          <BentoTile className="md:col-span-2 md:row-span-2 justify-between min-h-[300px]">
            {/* Subtle glow behind name */}
            <div className="emerald-glow-bg absolute top-8 left-8 w-48 h-24 bg-emerald-500/5 blur-2xl rounded-full pointer-events-none" />
            <div className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <img
                  src="/avatar.jpg"
                  alt="Jeremia Axelano"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-800"
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight transition-all duration-300 hover:tracking-wide cursor-default select-none">
                    Jeremia Axelano
                  </h1>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium">Bali, Indonesia</span>
                  </div>
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white pt-2">
                I build platforms. <br />
                <span className="text-emerald-500 dark:text-emerald-400 font-extrabold">
                  Then I scale them.
                </span>
              </p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md pt-4 font-light">
              Turning complex systems into products people use — from Bali, for the world.
            </p>
          </BentoTile>

          {/* Tile 2: CTO role */}
          <BentoTile className="md:col-span-1 justify-between min-h-[160px]">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active
              </span>
            </div>
            <div className="mt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Current Role</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                CTO @ New Directions Success
              </h3>
              <p className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 mt-1">
                Building Guestlist Ecosystem
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Marketplace · Entertainment · Bali
              </p>
              <p className="text-xs text-emerald-500/70 dark:text-emerald-400/70 mt-2 font-mono">
                Mar 2025 – Present
              </p>
            </div>
          </BentoTile>

          {/* Tile 3: Experience */}
          <BentoTile className="md:col-span-1 justify-between min-h-[160px]">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Experience</p>
              <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
                6+ Yrs
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Building full-stack platforms & mobile apps.
            </p>
          </BentoTile>

          {/* Tile 4: LinkedIn */}
          <BentoTile href="https://www.linkedin.com/in/jeremia-axelano/" className="min-h-[120px]">
            <div className="flex justify-between items-start w-full">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">LinkedIn</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Professional network & updates</p>
            </div>
          </BentoTile>

          {/* Tile 5: GitHub + contribution grid */}
          <BentoTile href="https://github.com/AxelanO7/" className="md:col-span-2 min-h-[120px]">
            <div className="flex justify-between items-start w-full">
              <div className="p-3 bg-slate-800 rounded-2xl text-white">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-mono text-slate-400">@AxelanO7</span>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">GitHub</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Code repositories & open-source</p>
              </div>
              {/* Contribution grid */}
              <div className="grid grid-cols-7 gap-0.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                {contributionGrid.map((intensity, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-sm ${intensityClass[intensity]}`}
                  />
                ))}
              </div>
            </div>
          </BentoTile>

          {/* Tile 6: Contact */}
          <BentoTile className="min-h-[180px] justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Contact</p>
              <h3 className="text-lg font-bold mt-1">Get in Touch</h3>
            </div>
            <div className="space-y-3 mt-4">
              <a
                href="mailto:jeremia123.jm@gmail.com"
                className="flex items-center gap-2.5 text-sm hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">jeremia123.jm@gmail.com</span>
              </a>
              <a
                href="https://wa.me/+6282246034453"
                className="flex items-center gap-2.5 text-sm hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+62 822 4603 4453</span>
              </a>
            </div>
          </BentoTile>

          {/* Tile 7: Portfolio — with shimmer border */}
          <BentoTile
            href="https://portfolio.exzet.site/"
            className="md:col-span-2 min-h-[180px] justify-between bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"
          >
            {/* Shimmer border overlay on top edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-border rounded-t-3xl" />
            <div className="flex justify-between items-start w-full">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Interactive Showcase
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                Explore the architectures, production systems, and scale of products I built.
              </p>
            </div>
          </BentoTile>
        </motion.div>
      </div>
    </div>
  );
}
