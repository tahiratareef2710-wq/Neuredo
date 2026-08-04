import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import NodeCanvas from "./NodeCanvas";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <NodeCanvas />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Neuredo — Online Academy
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          The architecture
          <br />
          of learning.
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
        >
          Five disciplines, one structure. Neuredo connects technical
          skills, soft skills, O Levels, Quranic education and
          intermediate studies into a single, deliberately built path —
          instead of five disconnected courses.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
        >
          <button className="btn btn--primary" onClick={() => scrollTo("tracks")}>
            Explore learning tracks
            <ArrowRight size={16} />
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo("about")}>
            How Neuredo works
          </button>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-value">5</span>
            <span className="hero__stat-label">Learning tracks</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">100%</span>
            <span className="hero__stat-label">Video-led curriculum</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">1</span>
            <span className="hero__stat-label">Connected structure</span>
          </div>
        </motion.div>
      </div>

      <button
        className="hero__scroll-cue"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
