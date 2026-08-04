import logo from "../assets/logo.png";
import "./Footer.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tracks", label: "Learning Tracks" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Neuredo" />
          <p>The Architecture of Learning.</p>
        </div>

        <nav aria-label="Footer">
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.id);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container site-footer__bottom">
       <span>© 2024 Neuredo. All rights reserved.</span>
        <span>Built for students who want structure, not shortcuts.</span>
      </div>
    </footer>
  );
}
