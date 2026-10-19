import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro } from "@/components/sections";

const values = [
  ["Curiosity with purpose", "We ask better questions before reaching for familiar answers."],
  ["Clarity over complexity", "We communicate plainly, especially when the work is difficult."],
  ["Progress together", "We partner closely with the people accountable for the outcome."],
];

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="About MAMOKA" title="We believe better technology starts with better understanding.">MAMOKA LLC is a San Diego consulting practice built around a simple idea: the right technology work should make organizations more capable, not more complicated.</PageIntro>
    <section className="surface py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Our perspective</p><h2 className="section-title mt-4">Practical is not the opposite of ambitious.</h2></div><div className="space-y-6 leading-8 text-slate-600 dark:text-slate-300"><p>Ambitious organizations need technology partners who can connect a big-picture goal to the realities of people, process, and implementation.</p><p>That is where MAMOKA works best: helping leaders find the signal in the noise, make sound decisions, and turn plans into progress their teams can feel.</p></div></div></section>
    <section className="light-section py-20 md:py-28"><div className="container"><p className="eyebrow">What guides us</p><div className="mt-8 grid gap-5 md:grid-cols-3">{values.map(([title, copy]) => <article className="card p-7" key={title}><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{copy}</p></article>)}</div></div></section>
    <section className="surface py-20"><div className="container text-center"><p className="eyebrow">A conversation is a good place to start</p><h2 className="section-title mx-auto mt-4 max-w-2xl">Bring us the challenge you are working through.</h2><Link className="btn btn-primary mt-8" href="/contact">Connect with MAMOKA <Arrow className="h-4 w-4" /></Link></div></section>
  </>;
}
