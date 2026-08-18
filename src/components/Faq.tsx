import { motion, useReducedMotion } from 'motion/react';
import React, { useState } from 'react';

const items = [
  {
    question: 'What is Glade?',
    answer: 'Glade is a local-first desktop notebook for writing and organizing plain Markdown files.',
  },
  {
    question: 'Where are my notes stored?',
    answer: 'On your machine as ordinary Markdown files. There is no proprietary format and no required cloud account.',
  },
  {
    question: 'Is Glade open source?',
    answer: 'Yes. Glade is open source and available under the MIT license.',
  },
  {
    question: 'Can I sync my notes?',
    answer: 'Your notes are regular files, so you can use your preferred sync approach. Built-in Git sync is on the roadmap.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <details
            className="faq-item"
            key={item.question}
            onToggle={(event) => {
              const isExpanded = event.currentTarget.open;
              setOpenIndex(isExpanded ? index : null);
            }}
          >
            <summary
              className="faq-question"
            >
              <span>{item.question}</span>
              <motion.span
                className="faq-symbol"
                aria-hidden="true"
                transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
              >
                <motion.span
                  className="faq-symbol-plus"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.16 }}
                >
                  +
                </motion.span>
                <motion.span
                  className="faq-symbol-minus"
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.16 }}
                >
                  −
                </motion.span>
              </motion.span>
            </summary>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
            >
              <p>{item.answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
