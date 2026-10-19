"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark, Sun } from "./icons";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("mamoka-theme");
    const nextDark = saved ? saved === "dark" : preferred;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("mamoka-theme", nextDark ? "dark" : "light");
  }

  return <header className="sticky top-0 z-50 nav-glass">
    <nav className="container flex min-h-[4.75rem] items-center justify-between" aria-label="Main navigation">
      <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight" aria-label="MAMOKA LLC home"><Mark /><span>MAMOKA<span className="text-azure">.</span></span></Link>
      <div className="hidden items-center gap-7 md:flex">{links.map((link) => <Link className="text-sm font-semibold text-slate-600 transition hover:text-azure dark:text-slate-300" key={link.href} href={link.href}>{link.label}</Link>)}</div>
      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink transition hover:border-azure dark:border-slate-600" aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><Sun dark={dark} /></button>
        <Link href="/contact" className="btn btn-primary hidden text-sm sm:inline-flex">Let&apos;s talk</Link>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden dark:border-slate-600" aria-label="Toggle navigation" aria-expanded={open}><span className="text-xl leading-none">{open ? "×" : "☰"}</span></button>
      </div>
    </nav>
    {open && <div className="container border-t border-slate-200 py-4 md:hidden dark:border-slate-700">{links.map((link) => <Link onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800" key={link.href} href={link.href}>{link.label}</Link>)}</div>}
  </header>;
}
