"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("message")) {
      setError("Please complete your name, email, and message.");
      return;
    }
    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) return <div className="card p-8" role="status"><p className="eyebrow">Message prepared</p><h2 className="mt-3 text-2xl font-extrabold">Thank you for reaching out.</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">This demonstration form does not transmit data. Please use your preferred contact channel to connect with MAMOKA LLC.</p><button className="btn btn-primary mt-7" onClick={() => setSubmitted(false)}>Send another message</button></div>;

  return <form className="card p-6 sm:p-8" onSubmit={submit} noValidate>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-bold">Name<input name="name" required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink dark:border-slate-600 dark:bg-slate-800 dark:text-white" /></label>
      <label className="text-sm font-bold">Work email<input name="email" type="email" required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink dark:border-slate-600 dark:bg-slate-800 dark:text-white" /></label>
    </div>
    <label className="mt-5 block text-sm font-bold">Organization <input name="organization" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink dark:border-slate-600 dark:bg-slate-800 dark:text-white" /></label>
    <label className="mt-5 block text-sm font-bold">How can we help?<textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink dark:border-slate-600 dark:bg-slate-800 dark:text-white" /></label>
    {error && <p className="mt-4 text-sm font-semibold text-red-700" role="alert">{error}</p>}
    <button className="btn btn-primary mt-6" type="submit">Prepare message</button>
    <p className="mt-4 text-xs leading-5 text-slate-500">This form is a front-end demonstration and does not send or store your information.</p>
  </form>;
}
