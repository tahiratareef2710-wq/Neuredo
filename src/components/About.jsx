import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

const PRINCIPLES = [
  {
    label: "Convergence",
    title: "We connect the dots",
    body: "Critical thinking in O/A Level and FSc studies feeds directly into how you write clean software logic. Every track references another, building a single, cohesive skill set.",
  },
  {
    label: "Paced",
    title: "Build a habit, not a burnout",
    body: "Short, hyper-focused sessions replace long lectures. Students build a sustainable daily rhythm—five days a week, not five hours a day.",
  },
  {
    label: "Measured",
    title: "Progress you can see, not guess at",
    body: "Every track breaks down into checkpoints, so a student — or a parent — always knows exactly where they stand and what comes next.",
  },
];

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="about section bg-field">
      <div className="bg-field__texture" aria-hidden="true" />
      <div className="container about__inner">
        <div className="about__intro">
          <motion.p
            className="eyebrow about__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            ref={ref}
          >
            About Neuredo
          </motion.p>
          <motion.h2
            className="about__title"
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            Learning has structure.
            <br />
            We just draw it out.
          </motion.h2>
          <motion.p
            className="about__body"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            Traditional learning is broken into isolated silos. NEUREDO fixes that. We integrate academic curricula, spiritual values, and high-demand technical skills into a single, structured ecosystem. Instead of juggling scattered topics, you get a clear, guided journey where every track builds on the last.
          </motion.p>
        </div>

        <div className="about__grid">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.title} principle={p} index={i} parentVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({ principle, index, parentVisible }) {
  return (
    <motion.div
      className="principle-card"
      initial={{ opacity: 0, y: 26 }}
      animate={parentVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.24 + index * 0.12 }}
    >
      <span className="principle-card__label eyebrow">{principle.label}</span>
      <h3 className="principle-card__title">{principle.title}</h3>
      <p className="principle-card__body">{principle.body}</p>
    </motion.div>
  );
}