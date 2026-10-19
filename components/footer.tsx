import Link from "next/link";
import { Mark } from "./icons";

export function Footer() {
  return <footer className="surface border-t border-slate-200 py-12 dark:border-slate-700">
    <div className="container grid gap-9 md:grid-cols-[1fr_auto]">
      <div><Link href="/" className="flex items-center gap-2 font-extrabold"><Mark /><span>MAMOKA<span className="text-azure">.</span></span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">A practical technology partner for organizations ready to work with more clarity and confidence.</p></div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600 dark:text-slate-300"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><a href="#top">Back to top</a></div>
    </div>
    <div className="container mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-700">© {new Date().getFullYear()} MAMOKA LLC · San Diego, California</div>
  </footer>;
}
