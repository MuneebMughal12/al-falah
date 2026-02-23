import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What Age Should Kids Start Online Quran Classes?",
      answer:
        "Children can start structured Quran learning as early as four years old. Lessons are designed to feel engaging rather than academic, helping children build familiarity and comfort gradually. Starting early allows learning habits to form naturally.",
    },
    {
      question: "How to Choose the Right Online Quran Tutor for Kids?",
      answer:
        "The right tutor combines subject expertise with emotional connection. Look for patience, experience with young learners, structured lessons, and consistent feedback.",
    },
    {
      question: "Are Online Hifz Programs Effective for Kids?",
      answer:
        "Yes, with structured memorization plans, revision schedules, and teacher supervision, online Hifz programs can be highly effective.",
    },
    {
      question: "Can Parents Track Progress in Online Quran Classes?",
      answer:
        "Parents can monitor attendance, progress reports, and communicate regularly with teachers for transparency.",
    },
    {
      question: "How Much Do Online Quran Classes for Kids Cost?",
      answer:
        "Pricing varies depending on lesson frequency and course type. Many institutes offer flexible monthly packages.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#cddbbf] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT IMAGES */}
          <div className="relative grid grid-cols-2 gap-6">
            <img
              src="/images/faq1.jpg"
              className="rounded-[40px] col-span-1 row-span-2 object-cover h-[420px]"
              alt=""
            />
            <img
              src="/images/faq2.jpg"
              className="rounded-[30px] object-cover h-[200px]"
              alt=""
            />
            <img
              src="/images/faq3.jpg"
              className="rounded-[40px] object-cover h-[200px]"
              alt=""
            />
          </div>

          {/* RIGHT FAQ */}
          <div>
            <p className="text-[#b64323] font-semibold">Helpful Answers</p>

            <h2 className="mt-2 text-[#160704] font-serif text-4xl">
              Frequently Ask{" "}
              <span className="relative inline-block">
                Question
                <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-[#e6b36b]" />
              </span>
            </h2>

            <div className="mt-8 text-black/70 space-y-5">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-black/10 pb-4">

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h4 className="font-medium text-lg">
                      {faq.question}
                    </h4>

                    <span className="text-2xl font-light">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-black/70 leading-6">
                      {faq.answer}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}