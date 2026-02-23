import React from "react";
import { ClipboardList, Clock3, GraduationCap, Award, Play } from "lucide-react";

export default function ServicesSection() {
  const steps = [
    {
      title: "Fill out the Form!",
      desc: "Reach us easily by submitting the contact form or calling our support team.",
      icon: <ClipboardList className="h-8 w-8" />,
    },
    {
      title: "Free Trial Classes",
      desc: "Experience our online Quran tutoring with a free trial at a time that suits you.",
      icon: <Clock3 className="h-8 w-8" />,
    },
    {
      title: "Subscribe & Learn",
      desc: "Subscribe today and start your journey toward meaningful Quran learning.",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      title: "Earn Certificates",
      desc: "Complete any course successfully and receive a recognized certificate.",
      icon: <Award className="h-8 w-8" />,
    },
  ];

  const services = [
    {
      title: "Arabic Language Course",
      desc: "Learn to read, write, and understand Arabic with a structured course covering grammar, vocabulary, and daily usage, suitable for beginners and advanced learners.",
      accent: "blue",
      icon: <Play className="h-5 w-5 text-white" />,
    },
    {
      title: "Noorani Qaida",
      desc: "A step-by-step foundational course that helps children and beginners learn correct Arabic pronunciation to start reading the Quran confidently.",
      accent: "purple",
      icon: <span className="text-white font-semibold">آ</span>,
    },
    {
      title: "Quran Reading with Tajweed",
      desc: "Improve your Quran recitation by learning proper Tajweed rules, correct pronunciation, and fluency under the guidance of qualified teachers.",
    },
    {
      title: "Tafsir Course",
      desc: "Understand the deeper meanings of the Quran through detailed explanations, historical context, and practical lessons for daily life.",
    },
    {
      title: "Ijazah Course",
      desc: "Earn official certification in Quran recitation by mastering Tajweed and memorization under authorized scholars following traditional standards.",
    },
    {
      title: "Quran Memorization (Hifz)",
      desc: "A guided memorization program with revision plans, monitoring, and support to help students memorize the Quran accurately and confidently.",
    },
    {
      title: "Umrah Training",
      desc: "Learn the correct method of performing Umrah, including rituals, duas, and practical guidance to perform your journey properly and with confidence.",
    },
    {
      title: "Hajj Training",
      desc: "Complete guidance on Hajj rituals, step-by-step procedures, and common mistakes to help pilgrims perform Hajj according to Sunnah.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        {/* TOP 4 CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#c75a43] px-7 py-7 text-white shadow-[0_25px_40px_rgba(36,44,80,0.25)]"
            >
              <div className="opacity-90">{s.icon}</div>
              <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-white/85">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* OUR SERVICES GRID */}
        <div className="mt-14 grid gap-10 md:grid-cols-[360px_1fr]">
          {/* LEFT COLUMN */}
          <div className="pt-2">
            <h2 className="font-serif text-4xl text-[#23424a]">Our Services</h2>
            <p className="mt-4 text-[16px] leading-7 text-black/50">
              There are many variations of passages of lorem ipsum available, but the
              majority have suffered alteration in some form, by injected.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-[#b64323] px-7 py-3 text-xs font-semibold tracking-wide text-white">
              VIEW MORE
            </button>
          </div>

          {/* RIGHT COLUMN (2-COLUMN SERVICES LIST) */}
          <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
            {services.map((srv, idx) => (
              <ServiceItem key={idx} {...srv} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ title, desc, icon, accent }) {
  const accentBg =
    accent === "blue"
      ? "bg-gradient-to-br from-[#24c1ff] to-[#0077ff]"
      : accent === "purple"
      ? "bg-gradient-to-br from-[#ff42d3] to-[#7b2cff]"
      : null;

  return (
    <div className="flex items-start gap-4">
      {/* icon only for first two (like screenshot) */}
      {accentBg ? (
        <div className={`grid h-10 w-10 place-items-center rounded-full ${accentBg}`}>
          {icon}
        </div>
      ) : (
        <div className="h-10 w-10" />
      )}

      <div>
        <h4 className="font-serif text-[16px] text-[#23424a]">{title}</h4>
        <p className="mt-3 text-[16px] leading-7 text-black/50">{desc}</p>
      </div>
    </div>
  );
}