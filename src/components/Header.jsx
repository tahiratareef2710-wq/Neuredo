import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tracks", label: "Learning Tracks" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Header({ activeId }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <img src={logo} alt="Neuredo" className="brand__mark" />
          <span className="brand__wordmark sr-only">Neuredo</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? "is-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-cta"
          onClick={() => handleNavClick("tracks")}
        >
          Start Learning
        </button>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "is-active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta nav-cta--mobile" onClick={() => handleNavClick("tracks")}>
          Start Learning
        </button>
      </div>
    </header>
  );
}
