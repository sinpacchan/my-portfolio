import { useEffect, useState } from "react";
import { Brain, Bot, Download, Github, Linkedin, Smile, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const [scan, setScan] = useState(false);

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
    "p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300";

  const youtubeEmbedUrl = "PASTE_YOUTUBE_EMBED_URL_HERE";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* 🌙 soft cursor aura (now more cinematic, less harsh) */}
      <div
        className="pointer-events-none fixed w-[520px] h-[520px] rounded-full blur-[180px] opacity-25"
        style={{
          left: pos.x - 260,
          top: pos.y - 260,
          background:
            "radial-gradient(circle, rgba(245,197,66,0.45), transparent 72%)"
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

      {/* ⚡ scan line (more subtle, less aggressive glow) */}
      {scan && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: "120vh", opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="fixed left-0 w-full h-[2px] z-50 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,197,66,0.8), transparent)",
            boxShadow: "0 0 22px rgba(245,197,66,0.6)"
          }}
        />
      )}

      <AnimatePresence mode="wait">

        {/* ================= INTRO ================= */}
        {!entered && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
          >
            <motion.div className={`${glass} p-10 rounded-2xl max-w-xl`}>
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

              <motion.button
                onClick={() => {
                  setScan(true);
                  setTimeout(() => setEntered(true), 750);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-xl font-medium text-black"
                style={{ backgroundColor: accent }}
              >
                Click to enter
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* ================= MAIN ================= */}
        {entered && (
          <motion.main
            key="main"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto px-6"
          >

            {/* HERO */}
            <section className="min-h-[60vh] flex flex-col justify-center space-y-6">

              <div>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Lara Aslan
                </h1>

                <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase mt-3">
                  Master of Engineer · AI / ML / Data
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">

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
            <section className="py-14 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Introduction</h2>

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
            <section className="py-14 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div className={card}>
                  <div className="flex items-center gap-2 mb-3">
                    <Brain size={18} style={{ color: accent }} />
                    <h3 className="font-semibold">AI News Detector</h3>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Chromium-based misinformation & AI text detection tool.
                  </p>
                </div>

                <div className={card}>
                  <div className="flex items-center gap-2 mb-3">
                    <Bot size={18} style={{ color: accent }} />
                    <h3 className="font-semibold">Customer Churn Project</h3>
                  </div>
                  <p className="text-slate-400 text-sm">
                    ML system predicting churn with explainable insights.
                  </p>
                </div>

              </div>
            </section>

            {/* PUBLICATIONS */}
            <section className="py-14 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Publications</h2>

              <div className="space-y-5">

                <div className={card}>
                  <p className="font-medium">
                    Aslan, L., Ptaszynski, M., Jauhiainen, J. (2024)
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
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
                  <p className="text-slate-400 text-sm mt-2">
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

            <footer className="pb-12 text-center text-slate-500 text-sm">
              Built with React + Tailwind
            </footer>

          </motion.main>
        )}

      </AnimatePresence>
    </div>
  );
}