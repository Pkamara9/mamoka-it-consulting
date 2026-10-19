import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, ProcessTimeline, ServicesGrid } from "@/components/sections";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return <>
    <PageIntro eyebrow="Services" title="The technology work behind better business outcomes.">Whether you need a trusted sounding board, an experienced delivery partner, or both, MAMOKA brings structure and steady momentum to the work ahead.</PageIntro>
    <section className="surface py-20 md:py-28"><div className="container"><div className="mb-10 max-w-2xl"><p className="eyebrow">Where we can help</p><h2 className="section-title mt-4">Expertise for the decisions that shape what comes next.</h2></div><ServicesGrid /></div></section>
    <section className="light-section py-20 md:py-28"><div className="container"><div className="mb-10 max-w-2xl"><p className="eyebrow">An intentional engagement</p><h2 className="section-title mt-4">A process built to create confidence at every step.</h2></div><ProcessTimeline /></div></section>
    <section className="bg-ink py-20 text-white"><div className="container flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow text-blue-300">Find the right starting point</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight">Let&apos;s talk about the work in front of you.</h2></div><Link className="btn btn-primary" href="/contact">Start a conversation <Arrow className="h-4 w-4" /></Link></div></section>
  </>;
}
