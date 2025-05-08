import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Search.css'

const faqs = [
    { question: "Is Notely free to use?",
       answer: "Yes, Notely offers a free plan with basic features." },
    { question: "Can I edit or delete my notes later?",
       answer: "Yes, you can edit or delete your notes anytime." },
    { question: "Can I earn rewards for uploading?", 
      answer: "Yes! Notely provides rewards for contributing notes." },
    { question: "Can you upload multiple notes at the same time?", 
      answer: "No, Notely supports uploading one note at a time." },
    { question: "How do I search for notes by topic?", 
      answer: "Use the search bar with your keyword to filter notes." },
    { question: "Is there a way to use Notely offline?",
       answer: "Offline access is limited; a connection is recommended." },
];

const PeopleAlsoAsk = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="people-also-ask-container">
            <h2 className="people-also-ask-title">People Also Ask:</h2>
            <div className="accordion-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`accordion-item ${openIndex === index ? 'open' : ''}`}
                    >
                        <button
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                        >
                            {item.question}
                            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="accordion-content"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleAlsoAsk;