'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Will this program help me with specific situations, like interviews or presentations?",
    answer: "Yes, we also focus on soft skills to prepare you for these situations."
  },
  {
    question: "Can I focus on pronunciation, vocabulary and conversation skills?",
    answer: "Yes, special emphasis is placed on pronunciation, and it's included in all the courses you select."
  },
  {
    question: "Are there any additional resources for practice outside of class?",
    answer: "Yes, we provide separate worksheets for additional practice."
  },
  {
    question: "What if I have a very busy schedule—are flexible timings available?",
    answer: "You'll have access to multiple schedule options, so you can choose the one that best fits as per your convenience."
  },
  {
    question: "Do you offer an IELTS course for those planning to study or work abroad?",
    answer: "Yes, we offer an IELTS course specifically designed for individuals looking to study or work abroad, with comprehensive preparation and practice."
  },
  {
    question: "Who can benefit from this program?",
    answer: " Graduate students, Housewives, Working Professionals, Individuals seeking career transitionsand Overseas participants"
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0 ">
      <button
        className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-yellow-500 transform transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 pt-0">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-16 px-8 sm:px-6  ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 pl-4">Frequently Asked Questions</h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
