"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Arrow } from "./icons";

const serviceData = [
  ["01", "Technology strategy", "Turn competing priorities into a focused technology roadmap that your people can act on."],
  ["02", "Cloud & modern workplace", "Build secure, adaptable systems that make collaboration simpler and operations more resilient."],
  ["03", "Security & risk", "Strengthen the habits, controls, and visibility that protect the work your organization depends on."],
  ["04", "Delivery & transformation", "Bring complex initiatives across the finish line with pragmatic governance and trusted guidance."],
];

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32"><div className="hero-orb absolute -right-40 -top-36 h-[36rem] w-[36rem]" /><div className="container relative max-w-4xl"><p className="eyebrow text-blue-300">{eyebrow}</p><h1 className="mt-5 display">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{children}</p></div></section>;
}

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? serviceData.slice(0, 3) : serviceData;
  return <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{items.map(([number, title, copy], index) => <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .06 }} className="card p-7" key={title}><span className="text-sm font-bold text-azure">{number}</span><h3 className="mt-8 text-xl font-extrabold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{copy}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-azure">Explore the fit <Arrow className="h-4 w-4" /></Link></motion.article>)}</div>;
}

export function ProcessTimeline() {
  const steps = [["Listen", "Learn what matters most, where friction exists, and what success looks like."], ["Clarify", "Shape the priorities, plan, and measures that will guide the work."], ["Deliver", "Move from intent to outcomes with a steady, transparent cadence."], ["Enable", "Leave your team stronger, with systems and habits built to last."]];
  return <ol className="relative grid gap-5 lg:grid-cols-4">{steps.map(([title, copy], index) => <motion.li initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .12 }} className="relative card p-6" key={title}><span className="grid h-10 w-10 place-items-center rounded-full bg-azure font-extrabold text-white">{index + 1}</span><h3 className="mt-6 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy}</p></motion.li>)}</ol>;
}
