import { useEffect, useState } from "react";
import { Brain, Bot, Download, Github, Linkedin, Smile, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const accent = "#f5c542"; // NAVI-ish yellow

  const buttonClass =
    "flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 " +
    "hover:bg-white/10 hover:shadow-[0_0_25px_rgba(245,197,66,0.25)] transition-all duration-300";

  const card =
    "p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300";

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  const cardHover = {
    scale: 1.01,
    transition: { type: "spring", stiffness: 250 }
  };

  const youtubeEmbedUrl = "PASTE_YOUTUBE_EMBED_URL_HERE";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* 🎮 dynamic yellow cursor glow */}
      <div
        className="pointer-events-none fixed w-[520px] h-[520px] rounded-full blur-[150px] opacity-25"
        style={{
          left: pos.x - 260,
          top: pos.y - 260,
          background: "radial-gradient(circle, #f5c542, transparent 60%)"
        }}
      />

      {/* 🌑 background atmosphere (clean cinematic style) */}
      <div className="fixed inset-0 pointer-events-none">

        {/* main yellow glow (brighter + more presence) */}
        <div className="absolute top-[-200px] left-1/4 w-[750px] h-[750px] bg-yellow-300 blur-[180px] rounded-full opacity-20" />

        {/* secondary glow */}
        <div className="absolute bottom-[-250px] right-1/4 w-[800px] h-[800px] bg-yellow-400 blur-[220px] rounded-full opacity-15" />

        {/* subtle vignette for readability (important fix) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

      </div>

      <main className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center space-y-6">

          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">

            <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold">
              Lara Aslan
            </motion.h1>

            <motion.p variants={item} className="text-yellow-400 text-xs tracking-[0.3em] uppercase">
              Master of Engineer · AI / ML / Data
            </motion.p>

            <motion.h1 variants={item} className="text-4xl md:text-5xl font-semibold">
              I turn data into insights.
            </motion.h1>

            <motion.p variants={item} className="text-slate-300 max-w-xl">
              NLP, Machine Learning, and applied AI systems.
            </motion.p>

          </motion.div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mt-2">

            <a
              href="/my-portfolio/Lara_Aslan_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-black font-medium"
              style={{ backgroundColor: accent }}
            >
              <Download size={18} />
              Download CV
            </a>

            <a href="https://github.com/sinpacchan" target="_blank" className={buttonClass}>
              <Github size={18} /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/lara-aslan-b6a58022a/" target="_blank" className={buttonClass}>
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href="https://huggingface.co/lvulpecula" target="_blank" className={buttonClass}>
              <Smile size={18} /> HuggingFace
            </a>

          </div>

        </section>

        {/* INTRO */}
        <section className="py-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Introduction</h2>

          <motion.div whileHover={cardHover} className={card}>

            {youtubeEmbedUrl === "PASTE_YOUTUBE_EMBED_URL_HERE" ? (
              <p className="text-slate-300">
                🎥 Video coming soon — introduction will be added here
              </p>
            ) : (
              <iframe className="w-full aspect-video rounded-lg" src={youtubeEmbedUrl} />
            )}

          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="py-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-5">

            <motion.div whileHover={cardHover} className={card}>
              <div className="flex items-center gap-2 mb-3">
                <Brain size={18} style={{ color: accent }} />
                <h3 className="font-semibold">AI News Detector</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Chromium-based misinformation & AI text detection tool.
              </p>
            </motion.div>

            <motion.div whileHover={cardHover} className={card}>
              <div className="flex items-center gap-2 mb-3">
                <Bot size={18} style={{ color: accent }} />
                <h3 className="font-semibold">Customer Churn Project</h3>
              </div>
              <p className="text-slate-300 text-sm">
                ML system predicting churn with explainable insights.
              </p>
            </motion.div>

          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="py-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Publications</h2>

          <div className="space-y-5">

            <div className={card}>
              <p className="font-medium">
                Aslan, L., Ptaszynski, M., Jauhiainen, J. (2024)
              </p>
              <p className="text-slate-300 text-sm mt-2">
                Are Strong Baselines Enough? False News Detection with Machine Learning.
              </p>

              <a
                href="https://www.mdpi.com/1999-5903/16/9/322"
                target="_blank"
                className="inline-flex items-center gap-2 mt-3"
                style={{ color: accent }}
              >
                <ExternalLink size={16} />
                Read publication
              </a>
            </div>

            <div className={card}>
              <p className="font-medium">Aslan, L. (2023)</p>
              <p className="text-slate-300 text-sm mt-2">
                Automatic False News Detection Using Machine Learning.
              </p>

              <a
                href="https://www.theseus.fi/handle/10024/806192"
                target="_blank"
                className="inline-flex items-center gap-2 mt-3"
                style={{ color: accent }}
              >
                <ExternalLink size={16} />
                Read publication
              </a>
            </div>

          </div>
        </section>

        <footer className="pb-12 text-center text-slate-400 text-sm">
          Built with React + Tailwind
        </footer>

      </main>
    </div>
  );
}