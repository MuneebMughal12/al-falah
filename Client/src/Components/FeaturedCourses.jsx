import React from "react";
import { Clock3, User2, GraduationCap } from "lucide-react";

export default function FeaturedCourses() {
  const courses = [
    {
      level: "Intermediate",
      title: "Memorize Quran Online",
      desc:
        "Memorizing the Holy Quran is a spiritual and physical program. It's a miracle.",
      reviews: 82,
      price: "39 USD",
      enroll: "378+ Enroll",
      img: "/images/course-1.jpg",
    },
    {
      level: "Beginners",
      title: "Qaida by QTeaching",
      desc:
        "For the purpose of learning the basics of Tajweed rules, one has to learn this booklet.",
      reviews: 68,
      price: "39 USD",
      enroll: "300+ Enroll",
      img: "/images/course-2.jpg",
    },
    {
      level: "Advance",
      title: "Quran Reading with Tajweed",
      desc:
        "Quran Reading with Tajweed has immense significance in preservation of Quran.",
      reviews: 78,
      price: "39 USD",
      enroll: "294+ Enroll",
      img: "/images/course-3.jpg",
    },
    {
      level: "Advance",
      title: "Tafsir Courses",
      desc:
        "We understand that a surface-level reading of the Quran can't fulfill the purpose of Islamic education.",
      reviews: 153,
      price: "39 USD",
      enroll: "427+ Enroll",
      img: "/images/course-4.jpg",
    },
    {
      level: "Advance",
      title: "Arabic Language Course",
      desc:
        "Our structured Arabic language program is designed for both beginners with zero knowledge.",
      reviews: 153,
      price: "39 USD",
      enroll: "321+ Enroll",
      img: "/images/course-5.jpg",
    },
    {
      level: "Advance",
      title: "Islamic Studies",
      desc:
        "In this course, we build a strong foundational understanding of the five pillars of Islam.",
      reviews: 153,
      price: "39 USD",
      enroll: "172+ Enroll",
      img: "/images/course-6.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f5ff] py-16 md:py-24">
 

      <div className="mx-auto max-w-7xl px-4">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#b64323] font-semibold tracking-wide">
            Highlighted Program
          </p>

          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
            Our{" "}
            <span className="relative inline-block">
              Featured
              <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" />
            </span>{" "}
            Courses
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-black/70">
            Explore our carefully designed{" "}
            <span className="font-semibold text-black/80">online Quran courses</span>, including
            Tajweed, Hifz, Tafsir, Arabic language, and Islamic studies. Each course is
            structured to meet specific learning goals with clarity and excellence.
          </p>
        </div>

        {/* cards grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {courses.map((c, idx) => (
            <CourseCard key={idx} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function CourseCard({ course }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
      <div className="grid grid-cols-[220px_1fr] gap-6 p-6 md:p-7">
        {/* image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={course.img}
              alt={course.title}
              className="h-[170px] w-full object-cover md:h-[190px]"
            />
          </div>

          {/* badge */}
          <span className="absolute left-3 top-3 rounded-full bg-[#f5c21b] px-4 py-2 text-xs font-semibold text-black shadow-sm">
            {course.level}
          </span>
        </div>

        {/* content */}
        <div className="flex flex-col">
          {/* top meta row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[12.5px] text-black/60">
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} />
              1 on 1 Session
            </span>
            <span className="inline-flex items-center gap-2">
              <User2 size={16} />
              24/7 Available
            </span>
          </div>

          <h3 className="mt-4 font-serif text-xl md:text-2xl text-black">
            {course.title}
          </h3>

          <p className="mt-3 text-[14px] leading-7 text-black/65 max-w-[38ch]">
            {course.desc}
          </p>

          {/* rating */}
          <div className="mt-4 flex items-center gap-2">
            <Stars count={5} />
            <span className="text-[13px] text-black/55">
              ({course.reviews} Reviews)
            </span>
          </div>

          {/* bottom row */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-lg font-semibold text-black">{course.price}</div>
            <div className="inline-flex items-center gap-2 text-[13px] text-black/55">
              <GraduationCap size={18} />
              {course.enroll}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Stars -------------------- */

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 17.3 18.2 21l-1.7-7.2L22 9l-7.3-.6L12 2 9.3 8.4 2 9l5.5 4.8L5.8 21 12 17.3Z"
            fill="#f5b301"
          />
        </svg>
      ))}
    </div>
  );
}