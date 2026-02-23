// src/components/TestimonialSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  // IMPORTANT: make sure these images exist in /public/images/
  // /public/images/testimonial-kid.jpg
  // /public/images/avatar-1.jpg ... avatar-5.jpg
  const testimonials = [
    {
      name: "Muhammad Zakir",
      role: "Student",
      img: "/images/avatar-1.jpg",
      text:
        "I always wanted to be Hafiz e Quran and was always in seek of a proper institute of Learning Quran but memorizing the Quran was never an easy task for me. Though I had a very busy life with the help of Qteaching competent instructors I managed to memorize the Quran in a few years.",
      stars: 5,
    },
    {
      name: "Ayesha Noor",
      role: "Parent",
      img: "/images/avatar-2.jpg",
      text:
        "My child improved recitation and confidence within weeks. The teacher is patient, kind, and very professional. Scheduling is flexible and the learning plan is clear.",
      stars: 5,
    },
    {
      name: "Abdullah Khan",
      role: "Student",
      img: "/images/avatar-3.jpg",
      text:
        "Tajweed lessons are structured and easy to follow. The feedback is precise and the sessions are always on time. Highly recommended for serious learners.",
      stars: 5,
    },
    {
      name: "Fatima Ali",
      role: "Parent",
      img: "/images/avatar-4.jpg",
      text:
        "We tried multiple options before, but this is the best. Teachers are supportive and the progress tracking keeps us motivated. Great experience overall.",
      stars: 5,
    },
    {
      name: "Hassan Raza",
      role: "Student",
      img: "/images/avatar-5.jpg",
      text:
        "I started from basics and now I can read fluently. The classes are practical, simple, and consistent. The platform makes learning comfortable from home.",
      stars: 5,
    },
  ];

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="bg-[#ededed]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-[#b64323] text-lg font-semibold">
              Our Testimonial
            </p>

            <h2 className="mt-2 font-serif text-4xl leading-tight text-black md:text-5xl">
              Why Students Love <br />
              <span className="relative inline-block">
                Learning
                <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" />
              </span>{" "}
              Quran with Us
            </h2>

            {/* SINGLE CARD CONTAINER */}
            <div className="mt-10 w-80 md:w-auto">
              <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/10">
                {/* NAV buttons
                    Mobile: centered at bottom
                    Desktop: bottom-right
                */}
                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 md:left-auto md:right-7 md:translate-x-0">
                  <button
                    ref={prevRef}
                    type="button"
                    aria-label="Previous"
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#4b39ff] hover:bg-black/5"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    ref={nextRef}
                    type="button"
                    aria-label="Next"
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#4b39ff] hover:bg-black/5"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                {navReady && (
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    className="overflow-hidden"
                  >
                    {testimonials.map((t, i) => (
                      <SwiperSlide key={i}>
                        <Stars count={t.stars} />

                        <p className="mt-4 text-[14px] leading-7 text-black/60">
                          {t.text}
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
                          />
                          <div>
                            <div className="font-serif text-[18px] text-black">
                              {t.name}
                            </div>
                            <div className="text-[12px] text-black/50">
                              {t.role}
                            </div>
                          </div>
                        </div>

                        {/* spacer so arrows don't overlap text */}
                        <div className="h-10 md:h-8" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE
              Mobile: hide image
              Desktop (lg+): show image
          */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[44px] bg-white shadow-sm ring-1 ring-black/10">
              <img
                src="/images/testimonial-kid.jpg"
                alt="Student"
                className="h-[360px] w-full object-cover md:h-[430px]"
              />
            </div>

            {/* overlay stats card
                Hide on small screens, show on md+
            */}
            <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white px-6 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/10 md:block">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fdecee] text-[#ff4d4d]">
                  <CapIcon />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#ff4d4d]">
                    1000+
                  </div>
                  <div className="text-[13px] text-black/60">
                    Satisfied Students
                  </div>
                </div>
              </div>
            </div>

            {/* moon decor */}
            <div className="pointer-events-none absolute bottom-8 right-10">
              <MoonDecor />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#f6b01e"
          aria-hidden="true"
        >
          <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.76 1.64 7.03z" />
        </svg>
      ))}
    </div>
  );
}

function CapIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3 2 8l10 5 10-5-10-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 10v6c0 2 3 4 6 4s6-2 6-4v-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonDecor() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" aria-hidden="true">
      <path
        d="M70 10c-8 3-14 12-14 22 0 13 10 24 23 24 8 0 15-4 19-10-2 18-17 32-36 32-21 0-38-17-38-38C24 20 45 6 70 10Z"
        fill="#ffcc1a"
      />
      <path d="M92 28l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#ffcc1a" />
      <path d="M82 45l1.5 3.5 3.5 1.5-3.5 1.5L82 55l-1.5-3.5L77 50l3.5-1.5L82 45Z" fill="#ffcc1a" />
    </svg>
  );
}