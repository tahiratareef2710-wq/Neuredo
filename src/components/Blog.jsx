import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useReveal } from "../hooks/useReveal";
import "./Blog.css";

export default function Blog() {
  const [ref, visible] = useReveal();

  return (
    <section id="blog" className="blog section bg-field">
      <div className="bg-field__texture" aria-hidden="true" />
      <div className="container">
        <div className="blog__head">
          <div>
            <motion.p
              ref={ref}
              className="eyebrow blog__eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              From the Blog
            </motion.p>
            <motion.h2
              className="blog__title"
              initial={{ opacity: 0, y: 22 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              Notes on how we teach
            </motion.h2>
          </div>
          <motion.p
            className="blog__intro"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          >
            Short, practical writing from the people building Neuredo's
            curriculum — method, not marketing.
          </motion.p>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <motion.article
              className="blog-card"
              key={post.id}
              initial={{ opacity: 0, y: 26 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.08 }}
            >
              <div className="blog-card__top">
                <span className="eyebrow blog-card__tag">{post.tag}</span>
                <span className="blog-card__date">{post.date}</span>
              </div>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__foot">
                <span className="blog-card__read">{post.readTime} read</span>
                <span className="blog-card__link">
                  Read <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}