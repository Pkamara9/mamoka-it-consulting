import type { SVGProps } from "react";

export function Arrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function Mark() {
  return <svg viewBox="0 0 42 42" className="h-9 w-9" aria-hidden="true"><path fill="#0078D4" d="M4 35V7h8l9 15 9-15h8v28h-8V20l-9 15-9-15v15z" /></svg>;
}

export function Sun({ dark }: { dark: boolean }) {
  return dark ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3a7 7 0 1 0 9 9A9 9 0 0 1 12 3Z" /></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
}
