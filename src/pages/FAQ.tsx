// src/pages/FAQ.tsx
import React, { useState, type JSX } from 'react';

type FaqItem = {
  id: number;
  title: string;
  body: string;
  delay: number; // AOS delay in ms
};

const FAQS: FaqItem[] = [
  {
    id: 1,
    title: 'What is \n MindCare?',
    body:
      'MindCare is an e-counselling platform that connects you with licensed local mental health ' +
      'professionals who speak Sinhala, Tamil, and English. You can access support from the comfort of ' +
      'your home, in your preferred language.',
    delay: 600,
  },
  {
    id: 2,
    title: 'Is my information kept private?',
    body:
      'Yes. All data and session conversations are private and secure using professional-grade ' +
      'encryption protocols.',
    delay: 800,
  },
  {
    id: 3,
    title: 'Can I cancel or reschedule a session?',
    body:
      'Yes. Go to your upcoming session list and select the session to view cancellation or reschedule options.',
    delay: 1000,
  },
  {
    id: 4,
    title: 'How can I access my prescriptions?',
    body:
      'Click “View Your Prescriptions” from your dashboard to view or download past prescriptions.',
    delay: 1200,
  },
  {
    id: 5,
    title: 'Do I need an \nappointment?',
    body:
      'Yes, all sessions are scheduled in advance to ensure availability of the right professional for your needs.',
    delay: 1400,
  },
];

export default function FAQ(): JSX.Element {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Header Band */}
      <div className="bg-gradient-to-r from-purple-500 to-cyan-200 rounded-lg p-6 mb-6 px-4 py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-4 mt-6">
        <h2
          className="text-2xl md:text-3xl font-bold text-purple-800 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          Frequently Asked Questions
        </h2>
        <p
          className="mt-4 text-black-800 text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          Need help? Here are some common questions and answers to get you started.
        </p>
      </div>

      <main className="flex-grow px-4 py-12">
        <div className="flex flex-wrap justify-center gap-6 items-start max-w-screen-xl mx-auto">
          {FAQS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white w-full sm:w-80 p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col"
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                {/* Toggle header */}
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center text-left cursor-pointer"
                >
                  <h2
                    className="text-lg font-semibold text-purple-700 whitespace-pre-line"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    {item.title}
                  </h2>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Body */}
                <p
                  className={`mt-4 text-gray-600 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
