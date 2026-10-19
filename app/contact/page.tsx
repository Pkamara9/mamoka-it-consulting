import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/sections";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <>
    <PageIntro eyebrow="Contact" title="Start with the conversation that matters.">Tell us what you are navigating. We will help you identify a thoughtful, practical next step.</PageIntro>
    <section className="surface py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Connect</p><h2 className="section-title mt-4">What&apos;s on your mind?</h2><p className="lede mt-6">Use this form to prepare a message about your organization&apos;s technology goals, challenges, or upcoming initiatives.</p><div className="mt-9 border-l-2 border-azure pl-5"><p className="text-sm font-bold">MAMOKA LLC</p><p className="mt-1 text-slate-600 dark:text-slate-300">San Diego, California</p></div></div><ContactForm /></div></section>
  </>;
}
