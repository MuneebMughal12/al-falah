// src/components/LearningBlocks.jsx
import React, { useMemo, useState } from "react";
import { Plus, X } from "lucide-react";

export default function LearningBlocks() {
  const blocks = useMemo(
    () => [
      {
        eyebrow: "Learning Approach",
        title: "How We Teach Quran Online",
        desc:
          "A child’s success in Quran learning depends on how lessons are taught, not just what is taught. Children need structure, clarity, encouragement, and engagement—especially online. A well-designed learning plan makes sessions meaningful, effective, and enjoyable.",
        links: [
          "How Our Online Quran Classes Work for Kids",
          "One-on-One vs Group Online Quran Classes for Kids",
          "Interactive and Fun Learning Methods for Kids",
          "Digital Tools and Resources to Enhance Quran Learning",
          "Engaging Activities and Games to Teach Quran",
        ],
        img: "/images/learning-approach.jpg",
        reverse: false,
        // optional: if you want readmore here too, add readMoreContent
      },
      {
        eyebrow: "Tutors and Teaching Quality",
        title: "A Better Learning Experience",
        desc:
          "The quality of a child’s Quran education depends on the teacher guiding them. In technology platforms, communication can replace a knowledgeable and patient instructor. For children, the teacher becomes a role model and helps shape learning outcomes, attitude, discipline, and emotional connection to the Quran.",
        links: [
          "Expert Quran Tutors for Kids",
          "English-Speaking Teachers for Western Students",
          "How Tutors Track Your Child’s Progress",
        ],
        img: "/images/tutors-quality.jpg",
        reverse: true,
      },
      {
        eyebrow: "Benefits for Parents and Students",
        title: "A Learning Experience That Supports the Whole Family",
        desc:
          "When children receive structured guidance at the right pace, the benefits go far beyond lessons. Parents gain clarity and confidence, students develop skills and discipline, and a meaningful connection to their learning is built over time.",
        links: ["Read More"],
        img: "/images/benefits-family.jpg",
        reverse: false,
        bigTitle: true,

        // ✅ THIS is the expanded content that should show on click (your screenshot style)
        readMoreContent: {
          sections: [
            {
              heading: "Why Parents Trust Guided Online Learning for Their Children",
              paragraphs: [
                "Trust begins with consistency, safety, and visible results. Parents value live, structured instruction from qualified educators who understand how children learn at different stages.",
                "The online setting allows families to stay involved without disrupting routines. Lessons happen at home, reducing stress and improving focus. Parents appreciate clear communication, defined learning paths, and dependable schedules that fit around school and family life.",
                "Over time, this reliability builds confidence—not only in the program but also in the child’s ability to grow steadily and independently.",
              ],
            },
            {
              heading: "Monitoring Your Child’s Progress With Clarity and Confidence",
              paragraphs: [
                "Parents should never feel disconnected from their child’s learning. Progress tracking is simple, transparent, and meaningful. Regular updates show improvement in:",
              ],
              bullets: ["Reading accuracy", "Pronunciation", "Understanding", "Overall confidence"],
              paragraphsAfterBullets: [
                "Instructors provide feedback based on real performance, not assumptions. Parents can identify strengths, target areas needing support, and celebrate milestones. Clear visibility ensures learning remains intentional and focused.",
                "This shared awareness between parents, instructors, and students creates a strong support system that encourages long-term consistency.",
              ],
            },
            {
              heading: "Overcoming Common Challenges in Online Learning",
              paragraphs: [
                "Every learning format has challenges, but addressing them early makes a difference. Common concerns include:",
              ],
              bullets: ["Distractions at home", "Short attention spans", "Motivation"],
              paragraphsAfterBullets: [
                "Structured sessions, interactive teaching, and consistent routines manage these issues. Live instruction keeps children engaged. Age-appropriate pacing prevents overwhelm. Flexible scheduling avoids burnout. Open communication allows timely adjustments.",
                "Combining structure with adaptability makes learning effective, enjoyable, and sustainable for both parents and students.",
              ],
            },
            {
              heading: "What Families Experience Over Time",
              bullets: [
                "Greater confidence during reading and practice",
                "Improved focus and discipline in lessons",
                "Reduced stress around scheduling and supervision",
                "Stronger parent–child engagement in daily learning",
              ],
            },
          ],
        },
      },
    ],
    []
  );

  return (
    <section className="bg-white overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 space-y-10 md:space-y-14">
        {blocks.map((b, idx) => (
          <InfoBlock key={idx} {...b} />
        ))}
      </div>
    </section>
  );
}

function InfoBlock({
  eyebrow,
  title,
  desc,
  links,
  img,
  reverse = false,
  bigTitle = false,
  readMoreContent,
}) {
  const [open, setOpen] = useState(false);
  const hasReadMore = Boolean(readMoreContent);

  return (
    <div className="rounded-2xl bg-[#f3f3f3] p-5 sm:p-7 md:p-10">
      <div
        className={[
          "grid items-center gap-8 lg:gap-12",
          "md:grid-cols-2",
          reverse ? "md:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* TEXT */}
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-wide text-[#1f5c6e]">
            {eyebrow}
          </p>

          <h3
            className={[
              "mt-2 font-serif leading-tight text-[#1c2b2e]",
              bigTitle
                ? "text-3xl sm:text-4xl md:text-5xl"
                : "text-2xl sm:text-3xl md:text-4xl",
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-black/60 max-w-prose">
            {desc}
          </p>

          <ul className="mt-6 space-y-3">
            {links.map((t, i) => {
              const isReadMore = t.toLowerCase().includes("read more") && hasReadMore;

              if (!isReadMore) {
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-black/35" />
                    <a
                      href="#"
                      className="text-[15px] font-semibold text-[#1f5c6e] hover:underline"
                    >
                      {t}
                    </a>
                  </li>
                );
              }

              return (
                <li key={i} className="flex items-center gap-3">
                  <span className="mt-[2px] h-[5px] w-[5px] shrink-0 rounded-full bg-black/35" />
                  <button
                    type="button"
                    onClick={() => setOpen((s) => !s)}
                    className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#1f5c6e] hover:underline"
                  >
                    {t}
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white ring-1 ring-black/10 group-hover:bg-black/5">
                      {open ? <X size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end min-w-0">
          <div className="w-full max-w-[520px] overflow-hidden rounded-xl bg-white ring-1 ring-black/10 shadow-sm">
            <img
              src={img}
              alt={title}
              className="h-[210px] w-full object-cover sm:h-[260px] md:h-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ✅ EXPANDED CONTENT */}
      {hasReadMore && (
        <div
          className={[
            "transition-all duration-300 ease-out overflow-hidden",
            open ? "max-h-[2000px] mt-8 opacity-100" : "max-h-0 mt-0 opacity-0",
          ].join(" ")}
        >
          <div className="rounded-xl bg-white/70 ring-1 ring-black/10 p-5 sm:p-7 md:p-8">
            <ExpandedContent content={readMoreContent} />
          </div>
        </div>
      )}
    </div>
  );
}

function ExpandedContent({ content }) {
  return (
    <div className="space-y-7">
      {content.sections.map((s, idx) => (
        <div key={idx} className="space-y-3">
          <h4 className="font-serif text-[16px] sm:text-[17px] text-[#1c2b2e]">
            {s.heading}
          </h4>

          {s.paragraphs?.map((p, i) => (
            <p key={i} className="text-[13px] leading-6 text-black/60">
              {p}
            </p>
          ))}

          {Array.isArray(s.bullets) && s.bullets.length > 0 && (
            <ul className="mt-2 space-y-2">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-black/35" />
                  <span className="text-[13px] leading-6 text-black/60">{b}</span>
                </li>
              ))}
            </ul>
          )}

          {s.paragraphsAfterBullets?.map((p, i) => (
            <p key={i} className="text-[13px] leading-6 text-black/60">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}