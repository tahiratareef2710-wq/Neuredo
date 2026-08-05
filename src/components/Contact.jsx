import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import TallyForm from "./TallyForm";
import "./Contact.css";

export default function Contact() {
  const [ref, visible] = useReveal();

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
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.08,
            }}
          >
            Questions before
            <br />
            you start?
          </motion.h2>

          <motion.p
            className="contact__body"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.16,
            }}
          >
            Tell us which track you're interested in and we'll point you
            to the right starting point.
          </motion.p>

          <motion.ul
            className="contact__details"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.24,
            }}
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
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        >
          <TallyForm />
        </motion.div>
      </div>
    </section>
  );
}