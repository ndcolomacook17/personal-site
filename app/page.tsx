import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Nico Coloma-Cook
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-400">
                I'm a senior software engineer at Justworks based in New York City. I work on the payroll engine serving paychecks for over 200,000 employees across the United States. My other interests include quantum computation hardware and software along with agentic AI experimentation. I also enjoy running, travelling, and trying new restaurants across NYC.
              </p>
              <br />
              <p className="text-xl leading-8 text-slate-400">
                I have a BA in Physics and Economics from Williams College, with my physics thesis advise by <a href="https://physics.williams.edu/profile/fws1/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Professor Frederick Strauch</a>.

              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/assets/linkedin-profile-pic.jpeg"
                alt="Nico Coloma-Cook"
                width={150}
                height={150}
                className="rounded-full border-4 border-slate-700 object-cover"
                priority
              />
            </div>
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
                <li>• Golang, Ruby/Rails, Javascript</li>
                <li>• API design & development</li>
                <li>• AWS, Kubernetes, Docker</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">
                Research
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Interferometry (<a
                href={"https://sites.williams.edu/materials/"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Williams Materials Physics Lab</a>)</li>
                <li>• Quantum algorithm simulation 

                (<a
                href={"https://equs.mit.edu/"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">MIT Lincoln Lab/MIT EQuS Group</a>)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership and Mentorship Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100">
            Leadership & Mentorship
          </h2>
          <div className="space-y-6">
            {/* Justworks Mentorship */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  Justworks Engineering Mentorship Program
                </h3> 
              </div>
              <p className="mb-2 text-sm text-slate-500">New York, NY • Mentor</p>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600"></span>
                  <span>
                    Weekly meetings over 6 months guiding an engineering mentee
                    with code pairing and career growth.
                  </span>
                </li>
              </ul>
            </div>

            {/* WURJ */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  Williams Undergraduate Research Journal (WURJ)
                </h3>
              </div>
              <p className="mb-2 text-sm text-slate-500">
                Williamstown, MA • Co-Founder
              </p>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600"></span>
                  <span>
                    Co-founded the first undergraduate academic journal at
                    Williams College
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600"></span>
                  <span>
                    Editor-in-Chief for all STEM submissions with 10 student
                    editors and writers along with physics faculty
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600"></span>
                  <span>
                    Compiled & reviewed all WURJ submissions to release Volume 1
                    of the journal in Fall 2021
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600"></span>
                  <span>
                    Published several volumes over five years with over 25
                    distinct research authors, still active today
                  </span>
                </li>
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
                Checkout my open-source projects and contributions
              </p>
            </a>
            <a
              href="/papers"
              className="group rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white">
                Papers, Blogs, and More
              </h3>
              <p className="text-slate-400">
                View and download my research papers, blogs, and more
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
