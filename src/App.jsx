import { useEffect, useState } from "react";
import {
  Brain,
  Bot,
  Download,
  Github,
  Linkedin,
  Smile,
  ExternalLink,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const [scan, setScan] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const accent = "#f5c542";

  const glass =
    "backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]";

  const buttonClass =
    "flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 " +
    "hover:bg-white/10 hover:shadow-[0_0_25px_rgba(245,197,66,0.25)] transition-all duration-300";

  const card =
    "p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer";

  const youtubeEmbedUrl = "https://youtube.com/embed/quXDTR25100";

  const projects = [
    {
      title: "AI News Detector",
      description: "Chromium-based misinformation & AI text detection tool.",
      what:
        "A browser extension that detects AI-generated and misleading content in real time.",
      why: "AI-generated misinformation is becoming harder to detect.",
      built: "Full system with ML model + Flask backend + browser extension UI.",
      tech: "Python, Flask, BERT, JavaScript",
      result: "Working prototype analyzing live webpage content.",
      github: "https://github.com/sinpacchan/ai-news-detector"
    },
    {
      title: "Customer Churn Project",
      description: "ML system predicting churn with explainable insights.",
      what: "Predicts customer churn and explains why users leave.",
      why: "Retention is critical for business success.",
      built: "End-to-end ML pipeline + visualization.",
      tech: "Python, Scikit-learn, Pandas, SHAP",
      result: "Model with interpretable churn insights.",
      github: "https://github.com/sinpacchan/customer-churn-predictor"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* glow */}
      <div
        className="pointer-events-none fixed w-[520px] h-[520px] rounded-full blur-[180px] opacity-25"
        style={{
          left: pos.x - 260,
          top: pos.y - 260,
          background: "radial-gradient(circle, rgba(245,197,66,0.35), transparent 70%)"
        }}
      />

      {/* 🌌 atmospheric yellow fog (FIXED: softer, deeper, less neon) */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-[-300px] left-1/4 w-[950px] h-[950px] rounded-full blur-[280px]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,197,66,0.14), transparent 72%)"
          }}
        />

        <div
          className="absolute bottom-[-320px] right-1/4 w-[950px] h-[950px] rounded-full blur-[300px]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,197,66,0.10), transparent 75%)"
          }}
        />
      </div>
      
      {/* scan line */}
      {scan && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: "120vh", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed left-0 w-full h-[2px] z-50 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,197,66,0.8), transparent)",
            boxShadow: "0 0 25px rgba(245,197,66,0.6)"
          }}
        />
      )}

      <AnimatePresence mode="wait">

        {/* INTRO */}
        {!entered && (
          <motion.div
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={`${glass} p-10 rounded-2xl max-w-xl`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Lara Aslan
              </h1>

              <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase mb-6">
                Master of Engineer · AI / ML / Data
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                I turn data into insights.
              </h2>

              <p className="text-slate-400 max-w-xl mb-10">
                NLP, Machine Learning, and applied AI systems.
              </p>

              <button
                onClick={() => {
                  setScan(true);
                  setTimeout(() => setEntered(true), 700);
                }}
                className="px-8 py-3 rounded-xl font-medium text-black"
                style={{ backgroundColor: accent }}
              >
                Click to enter
              </button>
            </div>
          </motion.div>
        )}

        {/* MAIN */}
        {entered && (
          <motion.main className="max-w-5xl mx-auto px-6">

            {/* HERO */}
            <section className="min-h-[60vh] flex flex-col justify-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Lara Aslan
              </h1>

              <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase">
                Master of Engineer · AI / ML / Data
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href="/my-portfolio/Lara_Aslan_CV.pdf" download className="px-6 py-3 rounded-xl text-black font-medium" style={{ backgroundColor: accent }}>
                  <Download size={18} className="inline mr-2" />
                  Download CV
                </a>

                <a href="https://github.com/sinpacchan" className={buttonClass}><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/in/lara-aslan-b6a58022a/" className={buttonClass}><Linkedin size={18}/> LinkedIn</a>
                <a href="https://huggingface.co/lvulpecula" className={buttonClass}><Smile size={18}/> HuggingFace</a>
              </div>
            </section>

            {/* INTRO VIDEO */}
            <section className="py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Introduction
              </h2>

              <div className={card}>
                {youtubeEmbedUrl === "PASTE_YOUTUBE_EMBED_URL_HERE" ? (
                  <p className="text-slate-400">
                    🎥 Video coming soon — introduction will be added here
                  </p>
                ) : (
                  <iframe className="w-full aspect-video rounded-lg" src={youtubeEmbedUrl} />
                )}
              </div>
            </section>

            {/* PROJECTS */}
            <section className="py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className={card}
                    onClick={() => setSelectedProject(p)}
                  >
                    <h3 className="font-semibold mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PUBLICATIONS (RESTORED) */}
            <section className="py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Publications
              </h2>

              <div className="space-y-5">

                <div className={card}>
                  <p className="font-medium">
                    Aslan, L., Ptaszynski, M., Jauhiainen, J. (2024)
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    Are Strong Baselines Enough? False News Detection with Machine Learning.
                  </p>

                  <a href="https://www.mdpi.com/1999-5903/16/9/322"
                     target="_blank"
                     className="inline-flex items-center gap-2 mt-3"
                     style={{ color: accent }}>
                    <ExternalLink size={16}/>
                    Read publication
                  </a>
                </div>

                <div className={card}>
                  <p className="font-medium">Aslan, L. (2023)</p>
                  <p className="text-slate-400 text-sm mt-2">
                    Automatic False News Detection Using Machine Learning.
                  </p>

                  <a href="https://www.theseus.fi/handle/10024/806192"
                     target="_blank"
                     className="inline-flex items-center gap-2 mt-3"
                     style={{ color: accent }}>
                    <ExternalLink size={16}/>
                    Read publication
                  </a>
                </div>

              </div>
            </section>

            <footer className="pb-12 text-center text-slate-500 text-sm">
              Built with React + Tailwind
            </footer>

          </motion.main>
        )}

      </AnimatePresence>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center px-6 z-50"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`${glass} max-w-2xl w-full p-8 rounded-2xl`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-slate-300 mb-4">{selectedProject.what}</p>
              <p className="text-slate-400 text-sm mb-2"><b>Why:</b> {selectedProject.why}</p>
              <p className="text-slate-400 text-sm mb-2"><b>Built:</b> {selectedProject.built}</p>
              <p className="text-slate-400 text-sm mb-2"><b>Tech:</b> {selectedProject.tech}</p>
              <p className="text-slate-400 text-sm mb-6"><b>Result:</b> {selectedProject.result}</p>

              <a
                href={selectedProject.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-yellow-400"
              >
                <Github size={16}/>
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}