import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, FileText } from "lucide-react";
import { tracks } from "../data/tracks";
import { useReveal } from "../hooks/useReveal";
import "./Tracks.css";

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [0, 3],
  [1, 4],
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
          Seven nodes. One architecture.
        </motion.h2>
        <motion.p
          className="tracks__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
        >
          Open a track to see its subjects or courses. Each one links to a
          short Google Form to get started.
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
                style={{ animationDelay: `${i * 0.12}s` }}
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
        {track.cta} <ArrowUpRight size={15} />
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
        aria-label={`${track.name} — ${track.cta.toLowerCase()}`}
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

        <div className="track-modal__list">
          {track.items.map((item) => (
            <ItemRow key={item.title} item={item} />
          ))}
        </div>

        <p className="track-modal__footnote">
          Tap an item to open its Google Form and get started.
        </p>
      </motion.div>
    </motion.div>
  );
}

function ItemRow({ item }) {
  const hasForm = Boolean(item.formUrl);

  return (
    <div className="item-row">
      <span className="item-row__icon" aria-hidden="true">
        <FileText size={16} />
      </span>
      <span className="item-row__title">{item.title}</span>

      {hasForm ? (
        <a
          className="item-row__action"
          href={item.formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply <ArrowUpRight size={14} />
        </a>
      ) : (
        <span className="item-row__action item-row__action--disabled">
          Form coming soon
        </span>
      )}
    </div>
  );
}