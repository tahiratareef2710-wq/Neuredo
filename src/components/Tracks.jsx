import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play, Clock, ArrowUpRight } from "lucide-react";
import { tracks } from "../data/tracks";
import { useReveal } from "../hooks/useReveal";
import "./Tracks.css";

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 4],
  [4, 3],
  [3, 0],
  [0, 4],
];

export default function Tracks() {
  const [ref, visible] = useReveal();
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    if (!activeTrack) return undefined;
    const onKey = (e) => e.key === "Escape" && setActiveTrack(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeTrack]);

  return (
    <section id="tracks" className="tracks section">
      <div className="tracks__field" aria-hidden="true" />

      <div className="container">
        <motion.p
          ref={ref}
          className="eyebrow tracks__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Learning Tracks
        </motion.p>
        <motion.h2
          className="tracks__title"
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          Five nodes. One architecture.
        </motion.h2>
        <motion.p
          className="tracks__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
        >
          Open a track to see how its video curriculum is structured.
          Content shown here is a preview — the full library ships in
          the next stage.
        </motion.p>

        {/* Decorative blueprint diagram, mirrors the logo's node mark */}
        <div className="tracks__blueprint" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            {EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={tracks[a].node.x}
                y1={tracks[a].node.y}
                x2={tracks[b].node.x}
                y2={tracks[b].node.y}
                className="tracks__edge"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
            {tracks.map((t, i) => (
              <circle
                key={t.id}
                cx={t.node.x}
                cy={t.node.y}
                r={1.4}
                className="tracks__node-dot"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="tracks__grid">
          {tracks.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i}
              parentVisible={visible}
              onOpen={() => setActiveTrack(track)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeTrack && (
          <TrackModal track={activeTrack} onClose={() => setActiveTrack(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function TrackCard({ track, index, parentVisible, onOpen }) {
  return (
    <motion.button
      className="track-card"
      initial={{ opacity: 0, y: 30 }}
      animate={parentVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.08 }}
      onClick={onOpen}
    >
      <span className="track-card__index eyebrow">{track.index}</span>
      <h3 className="track-card__name">{track.name}</h3>
      <p className="track-card__summary">{track.summary}</p>
      <span className="track-card__cta">
        View curriculum <ArrowUpRight size={15} />
      </span>
      <span className="track-card__glow" aria-hidden="true" />
    </motion.button>
  );
}

function TrackModal({ track, onClose }) {
  return (
    <motion.div
      className="track-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="track-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${track.name} curriculum`}
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="track-modal__header">
          <div>
            <span className="eyebrow track-modal__index">{track.index} — {track.short}</span>
            <h3>{track.name}</h3>
          </div>
          <button className="track-modal__close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <p className="track-modal__summary">{track.summary}</p>

        <div className="track-modal__grid">
          {track.videos.map((v, i) => (
            <div className="video-card" key={v.title}>
              <div className="video-card__thumb">
                <span className="video-card__play">
                  <Play size={18} fill="currentColor" />
                </span>
                <span className="video-card__number">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="video-card__meta">
                <span className="video-card__level eyebrow">{v.level}</span>
                <h4>{v.title}</h4>
                <span className="video-card__duration">
                  <Clock size={13} /> {v.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="track-modal__footnote">
          Preview layout — actual videos for {track.name} will be uploaded here in the next stage.
        </p>
      </motion.div>
    </motion.div>
  );
}
