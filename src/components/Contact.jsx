import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

// Set VITE_API_URL in the frontend's environment (e.g. a .env file, or the
// Vercel project's Environment Variables) to your deployed Railway backend,
// e.g. https://neuredo-backend.up.railway.app
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const TRACK_OPTIONS = [
  "Technical Skills",
  "Academic Tuition (Grades 4-8)",
  "O Levels",
  "A Levels",
  "Matriculation",
  "Intermediate",
  "Quranic Studies",
  "Not sure yet",
];

export default function Contact() {
  const [ref, visible] = useReveal();
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    track: TRACK_OPTIONS[0],
    message: "",
    website: "", // honeypot -- stays empty for real visitors
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", email: "", track: TRACK_OPTIONS[0], message: "", website: "" });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <div className="contact__intro">
          <motion.p
            ref={ref}
            className="eyebrow contact__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in Touch
          </motion.p>
          <motion.h2
            className="contact__title"
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            Questions before
            <br />
            you start?
          </motion.h2>
          <motion.p
            className="contact__body"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            Tell us which track you're interested in and we'll point you
            to the right starting point.
          </motion.p>

          <motion.ul
            className="contact__details"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          >
            <li>
              <Mail size={17} />
              <span>neuredoedu@gmail.com</span>
            </li>
            <li>
              <Phone size={17} />
              <span>+92 3072889902</span>
            </li>
            <li>
              <MapPin size={17} />
              <span>Islamabad, Pakistan</span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, y: 26 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="contact__success">
              <CheckCircle2 size={38} />
              <h3>Message received</h3>
              <p>
                Thanks for reaching out -- we'll get back to you at the email
                address you provided.
              </p>
              <button className="btn btn--ghost" onClick={resetForm}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="track">Interested track</label>
                <select id="track" name="track" value={form.track} onChange={handleChange}>
                  {TRACK_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What would you like to know?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {/* Honeypot field -- hidden from real visitors via CSS, but bots
                  that auto-fill every input will trip it. */}
              <div className="field field--honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              {status === "error" && (
                <p className="contact-form__error">
                  <AlertCircle size={15} />
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary contact-form__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send message"}
                <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}