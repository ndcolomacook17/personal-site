export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nico Coloma-Cook
            </span>
          </h1>
          <p className="text-xl leading-8 text-slate-400">
            Welcome to my personal portfolio. Here you'll find my projects,
            research papers, and professional background.
          </p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm a passionate developer and researcher with a keen interest in
              building innovative solutions and contributing to the academic
              community. This site showcases my work across software
              development, research, and professional projects.
            </p>
            <p>
              Feel free to explore my GitHub projects, read through my research
              papers, or get in touch if you'd like to collaborate on something
              interesting.
            </p>
          </div>
        </section>

        {/* Skills/Experience Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100">Skills & Experience</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">
                Development
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Full-stack web development</li>
                <li>• Modern JavaScript/TypeScript</li>
                <li>• React & Next.js</li>
                <li>• API design & development</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">
                Research
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Academic writing & publishing</li>
                <li>• Data analysis & visualization</li>
                <li>• Experimental design</li>
                <li>• Literature review</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100">Explore</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/projects"
              className="group rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white">
                Projects
              </h3>
              <p className="text-slate-400">
                Browse my GitHub repositories and software projects
              </p>
            </a>
            <a
              href="/papers"
              className="group rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white">
                Papers
              </h3>
              <p className="text-slate-400">
                View and download my research publications
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
