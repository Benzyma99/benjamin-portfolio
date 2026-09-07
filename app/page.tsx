const projects = [
  {
    number: "01",
    title: "LLM-Powered Support Triage API",
    description:
      "An AI-powered backend API built with Python and FastAPI that uses an LLM to classify and route support requests with validation and reliable error handling.",
    technologies: ["Python", "FastAPI", "LLM API", "REST API"],
    github: "https://github.com/Benzyma99/flyrank-week7-llm-triage-api",
  },
  {
    number: "02",
    title: "Authentication REST API",
    description:
      "An authentication API built with Next.js, TypeScript and Supabase, featuring JWT access control, protected routes and Swagger documentation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "JWT",
      "Swagger",
    ],
    github: "https://github.com/Benzyma99/BE-A3-Auth-Login",
  },
  {
    number: "03",
    title: "FlyRank Task Management API",
    description:
      "A RESTful CRUD API built with Python and FastAPI during my FlyRank Backend Development Internship.",
    technologies: ["Python", "FastAPI", "REST API", "CRUD"],
    github: "https://github.com/Benzyma99/FlyRank-internship-",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "LLM APIs",
  "TypeScript",
  "Next.js",
  "Supabase",
  "REST APIs",
  "JWT",
  "Swagger / OpenAPI",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight"
        >
          Benjamin<span className="text-zinc-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="https://github.com/Benzyma99"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-zinc-400"
        >
          GitHub ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        </div>

        <div className="mx-auto flex min-h-[82vh] max-w-6xl items-center px-6 py-24">
          <div className="max-w-4xl">
            {/* Status */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Benjamin
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                Emmanuel.
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-tight text-zinc-200 sm:text-3xl">
              Back-end AI Engineer building reliable APIs and AI-powered
              backend systems.
            </h2>

            {/* Introduction */}
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              I build practical backend applications with Python, FastAPI,
              PostgreSQL and LLM APIs, with a focus on reliable, useful
              software.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                View my work
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/benjamin-emmanuel-48603a25a"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-900"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-16">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
                Currently working with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "LLM APIs",
                  "TypeScript",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            About me
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Building backend systems that solve practical problems.
            </h2>

            <p className="leading-8 text-zinc-400">
              I am developing my career in back-end AI engineering through
              hands-on projects and my FlyRank internship. My work focuses on
              building APIs, integrating AI capabilities, working with
              databases and learning how to design reliable backend systems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Selected work
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Projects
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-600"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">
                    {project.number}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>

                <h3 className="mt-12 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tools I work with
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-zinc-800 px-5 py-3 text-zinc-300 transition hover:border-zinc-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-zinc-400">
            I&apos;m interested in back-end AI engineering, APIs and
            opportunities where I can continue learning while building useful
            software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Benzyma99"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-emmanuel-48603a25a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Benjamin Emmanuel</span>

          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}