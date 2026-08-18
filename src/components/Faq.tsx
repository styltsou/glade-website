import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import React, { useState } from 'react';

const items = [
  { question: 'What is Glade?', answer: 'Glade is a local-first desktop notebook for writing and organizing plain Markdown files.' },
  { question: 'Where are my notes stored?', answer: 'On your machine as ordinary Markdown files. There is no proprietary format and no required cloud account.' },
  { question: 'Is Glade open source?', answer: 'Yes. Glade is open source and available under the MIT license.' },
  { question: 'Can I sync my notes?', answer: 'Your notes are regular files, so you can use your preferred sync approach. Built-in Git sync is on the roadmap.' },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="faq-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
