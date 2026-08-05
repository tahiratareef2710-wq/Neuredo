import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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

          {/* Social Links */}
          <div className="site-footer__social">
            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://instagram.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://linkedin.com/company/YOUR_COMPANY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
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

        <nav className="site-footer__legal" aria-label="Legal">
          <Link to="/legal/privacy">Privacy Policy</Link>
          <Link to="/legal/terms">Terms of Service</Link>
        </nav>

        <span>Built for students who want structure, not shortcuts.</span>
      </div>
    </footer>
  );
}