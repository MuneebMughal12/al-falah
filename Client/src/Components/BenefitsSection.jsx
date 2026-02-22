import React from "react";

export default function BenefitsSection() {
  const cards = [
    {
      title: "Expert Quran\nTutors",
      desc:
        "Our experienced Quran tutors focus on correct recitation, understanding, and character development, helping students apply Quranic teachings in daily life.",
      icon: <IconTutor />,
      span: "lg:col-start-3 lg:row-start-1",
      defaultPeach: false,
    },
    {
      title: "One-to-One\nClasses",
      desc:
        "Personalized one-on-one Quran classes ensure focused learning, direct feedback, and faster improvement.",
      icon: <IconOneToOne />,
      // ✅ top row right card #2
      span: "lg:col-start-4 lg:row-start-1",
      defaultPeach: false,
    },
    {
      title: "Female Teachers\nAvailable",
      desc:
        "Qualified female Quran teachers are available for students who prefer a comfortable and culturally respectful learning environment.",
      icon: <IconFemale />,
      span: "lg:col-start-1 lg:row-start-2",
    },
    {
      title: "Flexible Class\nTimings",
      desc:
        "We provide 24/7 flexible Quran classes online, allowing learners to choose schedules that fit their daily routine.",
      icon: <IconCalendar />,
      span: "lg:col-start-2 lg:row-start-2",
    },
    {
      title: "Supervised\nLearning",
      desc:
        "Our structured curriculum ensures consistent progress with expert supervision at every stage.",
      icon: <IconSupervised />,
      span: "lg:col-start-3 lg:row-start-2",
    },
    {
      title: "Ideal Quran\nStudy Option",
      desc:
        "Our global online Quran academy offers a reliable, flexible, and effective solution for Quran learning from anywhere.",
      icon: <IconMosque />,
      span: "lg:col-start-4 lg:row-start-2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#efe6df] py-16 md:py-24">
      {/* bottom curve */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 140" className="w-full" aria-hidden="true">
          <path
            d="M0,90 C240,140 520,140 720,120 C980,95 1160,70 1440,95 L1440,140 L0,140 Z"
            fill="#f5f4ff"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* blob + dots (top left like screenshot) */}
      <div className="pointer-events-none absolute left-44 top-16 hidden lg:block">
        <div className="h-56 w-56 rounded-[55%_45%_55%_45%/55%_45%_55%_45%] bg-[#f2b2a6] opacity-60" />
      </div>


      <div className="relative mx-auto max-w-7xl px-4 md:px-10">
        {/* ✅ grid format exactly like screenshot */}
        <div className="grid gap-8 lg:grid-cols-4 lg:grid-rows-2">
          {/* LEFT TEXT BLOCK (Top-left area) */}
          <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1">
            <p className="text-[#b64323] text-lg font-semibold">
              Perks of Choosing Us
            </p>

            <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight text-black">
              <span className="relative inline-block">
                Benefits
                <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" />
              </span>{" "}
              <span className="font-serif text-black">of Q Teaching</span>
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-black/70 max-w-xl">
              <p>
                Learning the Quran online should feel natural and supportive. Our{" "}
                <span className="font-semibold text-black/80">
                  online Quran classes
                </span>{" "}
                are designed around your schedule, learning speed, and goals.
              </p>

              <p>
                Each student receives focused attention from certified Quran teachers.
                Whether you are a beginner, a child, or an adult learner, we guide you
                step by step.
              </p>

              <p>
                Start with a{" "}
                <span className="font-semibold text-black/80">
                  free trial Quran class
                </span>{" "}
                and experience how easy online Quran learning can be.
              </p>
            </div>
          </div>

          {/* CARDS */}
          {cards.map((c, idx) => (
            <BenefitCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Card with Hover Color Change -------------------- */
function BenefitCard({ icon, title, desc, span, defaultPeach = false }) {
  return (
    <div
      className={[
        "group rounded-2xl p-8 shadow-sm ring-1 ring-black/10 transition-all duration-300",
        defaultPeach ? "bg-[#f2b2a6]" : "bg-white",
        // ✅ hover effect
        "hover:bg-[#f2b2a6] hover:-translate-y-1 hover:shadow-md",
        span,
      ].join(" ")}
    >
      <div
        className={[
          "transition-colors duration-300",
          defaultPeach ? "text-black" : "text-[#b64323]",
          "group-hover:text-black",
        ].join(" ")}
      >
        {icon}
      </div>

      <h3
        className={[
          "mt-6 whitespace-pre-line font-serif text-2xl leading-snug transition-colors duration-300",
          defaultPeach ? "text-black" : "text-black",
          "group-hover:text-black",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-4 text-[15px] leading-7 transition-colors duration-300",
          defaultPeach ? "text-black/80" : "text-black/70",
          "group-hover:text-black/80",
        ].join(" ")}
      >
        {desc}
      </p>
    </div>
  );
}

/* -------------------- Decorative dots -------------------- */
function Dots() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="grid grid-cols-6 gap-2">
      {dots.map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#b64323]/70" />
      ))}
    </div>
  );
}

/* -------------------- ICONS -------------------- */
const stroke = "currentColor";

function IconTutor() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7Z" stroke={stroke} strokeWidth="2.3" />
      <path d="M14 39v-5c0-5 4-9 10-9s10 4 10 9v5" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M10 23l14 7 14-7-14-7-14 7Z" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M38 23v8" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function IconOneToOne() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 10h22a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H18l-8 6v-6H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M30 28h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H34l-6 4v-4h2" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M14 16h12" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M14 21h8" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function IconFemale() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6c6 0 10 5 10 11 0 7-4 10-10 10s-10-3-10-10C14 11 18 6 24 6Z" stroke={stroke} strokeWidth="2.3" />
      <path d="M14 42v-3c0-6 5-11 10-11s10 5 10 11v3" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M18 18c2 2 4 3 6 3s4-1 6-3" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M12 10v4M36 10v4" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M10 16h28" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M12 12h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M16 22h6M16 28h6M26 22h6M26 28h6" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function IconSupervised() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 18l14-7 14 7-14 7-14-7Z" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M16 22v9c0 3 4 6 8 6s8-3 8-6v-9" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M34 20v8" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M30 12l4-2 4 2" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function IconMosque() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 40h32" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M14 40V22c0-6 5-10 10-10s10 4 10 10v18" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M24 6v6" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M20 12h8" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M20 40V30a4 4 0 0 1 8 0v10" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
    </svg>
  );
}