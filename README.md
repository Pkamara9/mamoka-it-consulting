# MAMOKA LLC consulting site

A production-ready marketing site for MAMOKA LLC, built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. The existing `FleetFlow.Api` project remains intact as a separate .NET API.

## Run locally

1. Install Node.js 20.9 or later.
2. Run `npm install` from the repository root.
3. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Production deployment

Run `npm run build` to create an optimized production build, then `npm run start` to serve it. The application is deployable to any Next.js-compatible host. Configure the deployment's production URL in `app/layout.tsx` by replacing the placeholder `https://mamoka.example` metadata base with the final canonical domain.

The contact form is deliberately a front-end demonstration: it validates required fields locally and clearly confirms that no information is sent or stored. Connect it to a vetted server-side form endpoint before collecting contact submissions in production.
