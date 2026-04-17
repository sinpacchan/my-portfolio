import { Brain, Bot } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 animate-fade-in">

        <p className="text-blue-400 mb-3 text-sm tracking-widest uppercase">
          Data & AI Engineer
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m Lara 👋
        </h1>

        <p className="text-gray-300 max-w-2xl text-lg mb-8">
          I build machine learning systems, work with NLP, and turn messy data into meaningful insights.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 transition transform hover:-translate-y-1"
          >
            Download CV
          </a>

          <a
            href="https://github.com/"
            className="px-6 py-3 rounded border border-gray-600 hover:border-gray-400 transition transform hover:-translate-y-1"
          >
            GitHub
          </a>

          <a
            href="https://youtube.com"
            className="px-6 py-3 rounded border border-gray-600 hover:border-gray-400 transition transform hover:-translate-y-1"
          >
            Intro Video
          </a>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">

        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I recently completed my Master’s in Engineering specializing in AI and data science.
          My focus is on NLP, misinformation detection, and building real-world ML systems that actually work outside of notebooks.
        </p>

      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROJECT 1 */}
          <div className="p-6 rounded-xl border border-gray-800 bg-slate-900 transition transform hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl animate-fade-in">

            <div className="flex items-center gap-2 mb-2">
              <Brain className="text-blue-400" size={18} />
              <h3 className="text-xl font-semibold">
                Fake News Detection (BERT)
              </h3>
            </div>

            <p className="text-gray-400 mb-4">
              Transformer-based model for detecting AI-generated and misleading news content.
            </p>

            <a href="#" className="text-blue-400 hover:underline">
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="p-6 rounded-xl border border-gray-800 bg-slate-900 transition transform hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl animate-fade-in">

            <div className="flex items-center gap-2 mb-2">
              <Bot className="text-blue-400" size={18} />
              <h3 className="text-xl font-semibold">
                AI Detection Browser Extension
              </h3>
            </div>

            <p className="text-gray-400 mb-4">
              Chrome extension that analyzes text and flags AI-generated content in real time.
            </p>

            <a href="#" className="text-blue-400 hover:underline">
              View project →
            </a>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm animate-fade-in">
        Built with React + Tailwind 🚀
      </footer>

    </div>
  )
}