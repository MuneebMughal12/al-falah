import React from "react";
import { Clock } from "lucide-react";

export default function WhyAndTeachersSection() {
  return (
    <>
      {/* 🔥 FIRST: Teachers */}
      <TeachersWhoInspire />

      {/* 🔥 SECOND: Why Online Section */}
      <WhyOnlineSection />
    </>
  );
}

/* =========================================================
   SECTION 1: Teachers Who Inspire (NOW FIRST)
========================================================= */

function TeachersWhoInspire() {
  const teachers = [
    { name: "Hadeer Barakat", edu: "Master’s Degree Sadat University (SU)", img: "/images/teacher-1.png" },
    { name: "Nehad Mohammad", edu: "Bachelor’s Degree (BA) Al-Manoufia University", img: "/images/teacher-2.png" },
    { name: "Nehal", edu: "Bachelor’s Degree (Engineering) Al-Azhar University (AU)", img: "/images/teacher-3.png" },
    { name: "Aliaa Ahmed Mohammed", edu: "Bachelor’s Degree (Pharmacology) Al-Minia University", img: "/images/teacher-4.png" },
    { name: "Aya Muhammad Yousri", edu: "Bachelor’s Degree (BA) Suez Canal University", img: "/images/teacher-5.png" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_600px_at_15%_45%,rgba(246,220,210,0.35),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-[#b64323] text-base font-semibold">
            Building a strong Muslim community.
          </p>

          <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight text-black">
            Teachers Who{" "}
            <span className="relative inline-block">
              Inspire
              <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" />
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {teachers.map((t, i) => (
            <TeacherCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeacherCard({ img, edu, name }) {
  return (
    <div>
      <div className="relative mx-auto h-[270px] w-full max-w-[260px] overflow-hidden rounded-[28px] bg-[#d9c4b1]">
        <img src={img} alt={name} className="h-full w-full object-cover" />

        <div className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-[#b64323] shadow-md ring-4 ring-white">
          <Clock size={18} className="text-white" />
        </div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-[260px]">
        <div className="flex items-start gap-2 text-[12px] text-black/60">
          <span className="mt-2 h-2 w-2 rounded-full bg-[#b64323]" />
          <p>{edu}</p>
        </div>

        <div className="mt-3 font-serif text-[18px] text-[#b64323]">
          {name}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION 2: Why Online Quran (NOW BELOW)
========================================================= */

function WhyOnlineSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* TEXT */}
          <div>
            <h2 className="font-serif text-3xl leading-tight text-[#0f3f4a] md:text-4xl">
              Why Online Quran <br />
              Classes for Kids Are <br />
              the Best Choice
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-black/60">
              <p>
                Raising children with a strong connection to the Quran is challenging in modern life.
                Online Quran classes solve these problems and provide structured learning.
              </p>

              <p>
                Consistency helps children build discipline. Online learning removes travel obstacles
                and allows year-round structured progress.
              </p>

              <p>
                Qualified instructors provide personalized attention, correct mistakes gently,
                and ensure confident progress.
              </p>

              <p>
                Learning from home improves focus and emotional safety, making education natural
                rather than forced.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative ml-auto w-full max-w-[520px]">
              <img
                src="/images/kid-quran.jpg"
                alt="Kid reading Quran"
                className="h-[520px] w-full object-cover shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}