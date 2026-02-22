import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Your final counter numbers
  const stats = useMemo(
    () => [
      { to: 5, suffix: "+", label: "Teachers" },
      { to: 100, suffix: "+", label: "Students" },
    ],
    []
  );

  // Start animation only when section appears on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          obs.disconnect(); // run only once
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 md:py-24 pr-5 "
    >
      {/* Right big circle line (decor) */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-black/10" />

      {/* Soft blobs (decor) */}
      <div className="pointer-events-none absolute right-10 top-28 h-44 w-44 rounded-full bg-[#f3f0ea]" />
      <div className="pointer-events-none absolute -right-10 bottom-8 h-72 w-72 rounded-full bg-[#f3f0ea]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[520px_1fr]">
          {/* LEFT COLUMN */}
          <div className="relative pl-5">
            {/* Image card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
              <img
                src="/images/about-kid.jpg"
                alt="Student learning"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

            {/* ✅ Replaced icon with image */}
            <div className="absolute  bottom-60 hidden md:block">
              <img
                src="/images/book.png"   // <-- change this path to your image
                alt="Book"
                className="h-24 w-24 object-contain drop-shadow-sm"
              />
            </div>

            {/* Counts */}
            <div className="mt-10 grid grid-cols-2 gap-10">
              {stats.map((s) => (
                <CounterStat
                  key={s.label}
                  to={s.to}
                  suffix={s.suffix}
                  label={s.label}
                  start={hasStarted}
                  duration={900} // ms (smoothness)
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/10 md:p-10">
              <div className="text-[#b64323] text-lg font-semibold">Who we are</div>

              <h2 className="mt-2 font-serif text-4xl text-black md:text-5xl">
                <span className="relative inline-block">
                  About Us?
                  <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" />
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-7 text-black/70">
                <p>
                  Across the world, many Muslim families struggle to access reliable Quran
                  education due to busy routines, limited local scholars, and travel constraints.
                </p>

                <p>
                  <span className="font-semibold text-black/80">QTeaching</span> was created to solve
                  this challenge by delivering structured, authentic, and accessible{" "}
                  <span className="font-semibold text-black/80">online Quran classes</span> for learners
                  of all ages. Our platform connects students with qualified Quran teachers,
                  removing geographical limits and making Quran education available anywhere.
                </p>

                <p>
                  We support children, adults, and beginners through flexible, technology-driven learning
                  designed for real life.
                </p>
              </div>

              {/* Mission card */}
              <div className="mt-8 rounded-xl bg-[#eef6f0] p-6">
                <div className="text-lg font-semibold text-[#2f8d57]">Our Mission</div>
                <div className="mt-3 space-y-3 text-[14px] leading-7 text-black/70">
                  <p>
                    Our mission is to make{" "}
                    <span className="font-semibold text-black/80">Quran education online</span>{" "}
                    accessible to every Muslim household. We aim to provide high-quality instruction led
                    by certified Quran tutors, including native Arabic speakers, while removing barriers
                    related to time, distance, and affordability.
                  </p>
                  <p>
                    We focus on accuracy, clarity, and spiritual growth through structured online Quran courses.
                  </p>
                </div>
              </div>

              {/* Vision card */}
              <div className="mt-6 rounded-xl bg-[#fdecee] p-6">
                <div className="text-lg font-semibold text-[#c74747]">Our Vision</div>
                <div className="mt-3 text-[14px] leading-7 text-black/70">
                  Our vision is to strengthen Muslim communities worldwide through{" "}
                  <span className="font-semibold text-black/80">
                    affordable, high-quality online Quran learning
                  </span>
                  . By using advanced learning tools and expert instruction, we strive to create a trusted global
                  platform for Quran education that supports children, adults, and families alike.
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN END */}
        </div>
      </div>
    </section>
  );
}

/* ---------- Counter component (smooth) ---------- */

function CounterStat({ to, suffix = "", label, start, duration = 900 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId;
    const startTime = performance.now();
    const from = 0;

    // smooth easing
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const nextVal = Math.round(from + (to - from) * eased);

      setValue(nextVal);

      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, to, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-semibold text-[#b64323]">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-lg text-black/70">{label}</div>
    </div>
  );
}