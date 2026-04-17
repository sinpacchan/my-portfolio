import { Brain, Bot } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 blur-[160px] rounded-full" />
      </div>

      {/* CONTENT */}
      <main className="relative max-w-5xl mx-auto px-6">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center">
          <p className="text-blue-400 text-xs tracking-[0.3em] uppercase mb-6">
            Data • AI • ML Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            I build systems that turn data into decisions.
          </h1>

          <p className="text-slate-400 max-w-xl mb-10">
            NLP, machine learning, and real-world AI applications.
          </p>

          <div className="flex gap-4">
            <a className="px-5 py-3 bg-blue-500 rounded-xl">
              Download CV
            </a>
            <a className="px-5 py-3 border border-white/10 rounded-xl">
              GitHub
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-24 border-t border-white/10">
          <h2 className="text-3xl mb-10 font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Brain size={18} className="text-blue-400" />
                <h3 className="font-semibold">Fake News Detection</h3>
              </div>
              <p className="text-slate-400 text-sm">
                BERT-based misinformation detection system.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Bot size={18} className="text-blue-400" />
                <h3 className="font-semibold">AI Detection Tool</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Chrome extension for AI text detection.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 text-center text-slate-500 text-sm">
          Built with React + Tailwind
        </footer>

      </main>
    </div>
  )
}