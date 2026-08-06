import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "../data/reviews";
import { useReveal } from "../hooks/useReveal";
import "./Reviews.css";

export default function Reviews() {
  const [ref, visible] = useReveal();

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="reviews__head">
          <motion.p
            ref={ref}
            className="eyebrow reviews__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Student Reviews
          </motion.p>
          <motion.h2
            className="reviews__title"
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            What students say
          </motion.h2>
          <motion.p
            className="reviews__intro"
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          >
            A few notes from learners across our tracks — in their own
            words.
          </motion.p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, i) => (
            <motion.figure
              className="review-card"
              key={`${review.name}-${i}`}
              initial={{ opacity: 0, y: 26 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.08,
              }}
            >
              <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    fill={s < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <blockquote className="review-card__text">
                "{review.text}"
              </blockquote>
              <figcaption className="review-card__foot">
                <span className="review-card__name">{review.name}</span>
                <span className="review-card__track">{review.track}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
