import { Brain, Bot, ArrowUpRight } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 scroll-smooth">

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500 blur-[180px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/5 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-semibold tracking-tight">
            Lara Aslan
          </div>

          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="/cv.pdf" className="hover:text-white transition">CV</a>
          </nav>

        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6">

        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col justify-center">

          <p className="text-blue-400 tracking-[0.35em] uppercase text-xs mb-6">
            Data • AI • Machine Learning
          </p>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            I build intelligent systems that turn data into decisions.
          </h1>

          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-10">
            I’m a data & AI engineer focused on NLP, misinformation detection,
            and real-world machine learning systems that actually work in production.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="/cv.pdf"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/20"
            >
              Download CV
            </a>

            <a
              href="https://github.com/"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://youtube.com"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Intro Video
            </a>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 border-t border-white/5">

          <h2 className="text-3xl font-semibold mb-10">About</h2>

          <div className="grid md:grid-cols-2 gap-12">

            <p className="text-gray-300 leading-relaxed">
              I recently completed my Master’s in Engineering specializing in AI and data science.
              My focus is NLP, misinformation detection, and building ML systems that go beyond notebooks into real-world use.
            </p>

            <div className="text-gray-400 text-sm leading-relaxed">
              <p className="mb-3 text-white font-medium">Core strengths</p>
              <ul className="space-y-2">
                <li>→ Machine Learning & NLP</li>
                <li>→ Data pipelines & preprocessing</li>
                <li>→ Model evaluation & deployment thinking</li>
                <li>→ AI system design</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 border-t border-white/5">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* PROJECT 1 */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition hover:-translate-y-1">

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Brain className="text-blue-400" size={18} />
                  <h3 className="text-xl font-semibold">
                    Fake News Detection (BERT)
                  </h3>
                </div>

                <ArrowUpRight className="text-gray-400 group-hover:text-white transition" size={18} />
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                Transformer-based NLP system for detecting AI-generated and misleading news content.
              </p>

              <a href="#" className="text-blue-400 hover:underline">
                View project →
              </a>
            </div>

            {/* PROJECT 2 */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition hover:-translate-y-1">

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bot className="text-blue-400" size={18} />
                  <h3 className="text-xl font-semibold">
                    AI Detection Extension
                  </h3>
                </div>

                <ArrowUpRight className="text-gray-400 group-hover:text-white transition" size={18} />
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                Chrome extension that analyzes text and flags AI-generated content in real time.
              </p>

              <a href="#" className="text-blue-400 hover:underline">
                View project →
              </a>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 text-center text-gray-500 text-sm border-t border-white/5">
          Designed & built with React + Tailwind
        </footer>

      </main>
    </div>
  )
}