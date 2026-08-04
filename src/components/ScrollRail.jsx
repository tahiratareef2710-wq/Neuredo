import "./ScrollRail.css";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tracks", label: "Learning Tracks" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function ScrollRail({ activeId }) {
  const activeIndex = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === activeId)
  );
  const fillPercent =
    SECTIONS.length > 1 ? (activeIndex / (SECTIONS.length - 1)) * 100 : 0;

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="scroll-rail" aria-label="Section progress">
      <div className="scroll-rail__track">
        <div
          className="scroll-rail__fill"
          style={{ height: `${fillPercent}%` }}
        />
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`scroll-rail__node ${
              i <= activeIndex ? "is-passed" : ""
            } ${s.id === activeId ? "is-active" : ""}`}
            style={{ top: `${(i / (SECTIONS.length - 1)) * 100}%` }}
            onClick={() => handleClick(s.id)}
            aria-current={s.id === activeId ? "true" : undefined}
          >
            <span className="scroll-rail__label">{s.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
