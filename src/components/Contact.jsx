import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const TRACK_OPTIONS = [
  "Technical Skills",
  "Soft Skills",
  "O Levels",
  "Quranic Education",
  "Intermediate Studies",
  "Not sure yet",
];

export default function Contact() {
  const [ref, visible] = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    track: TRACK_OPTIONS[0],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend demo only — wire this up to your backend / email service later.
    setSubmitted(true);
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
              <a href="mailto:neuredoedu@gmail.com">neuredoedu@gmail.com</a>
            </li>
            <li>
              <Phone size={17} />
              <a href="tel:+923072889902">+92 3072889902</a>
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
          {submitted ? (
            <div className="contact__success">
              <CheckCircle2 size={38} />
              <h3>Message received</h3>
              <p>
                This is a frontend demo, so nothing was actually sent —
                but this is exactly how the confirmation will look once
                the backend is connected.
              </p>
              <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>
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

              <button type="submit" className="btn btn--primary contact-form__submit">
                Send message
                <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}