import React from "react";

export default function FaithConfidenceAndPrograms() {
  return (
    <section className="bg-white">
      {/* ===================== TOP SECTION ===================== */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr]">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[22px] bg-[#f1f2f4]">
              <img
                src="/images/kids-faith.jpg"
                alt="Kids learning Quran"
                className="h-[320px] w-full object-cover md:h-[380px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="max-w-[520px] font-serif text-[22px] leading-snug text-[#1e3b44] md:text-[24px]">
              How Online Quran Classes Help Kids <br />
              Build Faith and Confidence
            </h2>

            {/* underline line */}
            <div className="mt-3 h-[2px] w-full max-w-[520px] bg-[#c4553b]" />

            {/* 2 column text */}
            <div className="mt-6 grid gap-8 text-[15px]  leading-6 text-black/60 md:grid-cols-2 md:text-[14px] md:leading-7">
              <div className="space-y-5 ">
                <p>
                  Faith is not built through memorization alone. It grows through
                  understanding, encouragement, and meaningful interaction. Online
                  Quran classes help children develop a personal connection with the
                  Quran. Lessons create a supportive environment where learning feels
                  positive, not intimidating.
                </p>

                <p>
                  Qualified teachers play a key role in nurturing faith. They explain
                  concepts patiently and correct mistakes kindly. This helps children
                  associate Quran learning with care and positivity. Learning becomes
                  about love for knowledge, not fear of errors.
                </p>
              </div>

              <div className="space-y-5 text-[15px]">
                <p>
                  Confidence grows as children see their progress. Small achievements,
                  like improving pronunciation or completing a memorization goal,
                  reinforce accomplishment. Over time, these successes build self-belief
                  and motivate children to continue learning with enthusiasm.
                </p>

                <p>
                  Online learning also strengthens faith through consistent routines.
                  Regular engagement with the Quran helps children internalize its
                  importance in daily life. Repeated exposure deepens emotional
                  connection and naturally reinforces Islamic values.
                </p>

                <p>
                  Through patient instruction, structured lessons, and emotional
                  support, online Quran classes help children grow. They develop not
                  only as students but also as confident individuals with a strong
                  spiritual foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== GREEN BAND ===================== */}
      <div className="bg-[#cddbbf]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="font-serif text-[22px] text-[#1e3b44] md:text-[26px]">
            Age-Based Programs
          </h3>

          <p className="mt-4 max-w-6xl text-[15px] leading-6 text-black/60 md:text-[14px] md:leading-7">
            Children learn differently at each stage of life. Attention span, emotional
            maturity, reading skills, and comprehension change as they grow. A successful
            Quran learning system respects these differences. Instruction is tailored to
            each developmental phase. Age-based programs ensure children are neither rushed
            nor held back. This helps them grow naturally with confidence and clarity.
          </p>

          <p className="mt-4 max-w-6xl text-[13px] leading-6 text-black/60 md:text-[15px] md:leading-7">
            Each learning stage has specific goals, teaching methods, and outcomes. These
            support both spiritual and cognitive development.
          </p>
        </div>
      </div>

      {/* ===================== PROGRAMS GRID ===================== */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Pre-K */}
          <ProgramBlock
            title="Online Quran Classes for Pre-K and Kindergarten"
            intro="Early childhood is the foundation of Quran learning. Children at this age develop listening skills, basic speech patterns, and emotional attachment to learning. The focus is not speed or memorization but familiarity, comfort, and positive association."
            bullets={[
              "Recognition of Arabic letters and sounds",
              "Gentle repetition without pressure",
              "Short, engaging sessions for limited attention spans",
              "Calm and encouraging teaching style",
              "Introduction to basic manners and listening discipline",
            ]}
            outro="Teachers use simple language, clear pronunciation, and patient guidance. Mistakes are treated as part of learning, not failures. Children associate Quran learning with warmth and encouragement. Parents often notice improved listening skills, focus, and early confidence in recognizing letters and sounds."
          />

          {/* Elementary */}
          <ProgramBlock
            title="Online Quran Classes for Elementary Kids (1st – 5th Grade)"
            intro="Elementary-age children are ready for structured learning. Their focus improves, and they start understanding patterns, rules, and instructions. This stage builds reading fluency, pronunciation accuracy, and consistency."
            bullets={[
              "Strengthening reading skills with guided correction",
              "Developing clear articulation and rhythm",
              "Introducing recitation rules gradually",
              "Encouraging daily practice habits",
              "Building confidence through achievable milestones",
            ]}
            outro="Teachers monitor progress and adjust pacing for each child. Children practice independently while receiving real-time feedback. This balance of guidance and independence helps them feel capable and motivated. Regular progress reinforces discipline, responsibility, and personal growth."
          />

          {/* Middle school */}
          <ProgramBlock
            title="Online Quran Classes for Middle School Kids (6th – 8th Grade)"
            intro="Middle school is a critical transitional phase. Children face emotional changes, academic demands, and growing independence. Quran learning at this stage must provide structure, relevance, and encouragement."
            bullets={[
              "Improving fluency and accuracy",
              "Strengthening application of recitation rules",
              "Gradually expanding memorization",
              "Encouraging self-discipline and accountability",
              "Addressing questions patiently and clearly",
            ]}
            outro="Teachers act as mentors, guiding students with respect. Lessons challenge students without overwhelming them. Internal motivation grows when students feel supported, helping them continue learning voluntarily."
          />

          {/* High school */}
          <ProgramBlock
            title="Online Quran Classes for High School Kids (9th – 12th Grade)"
            intro="High school students have deeper focus, self-reflection, and goal-setting abilities. Quran learning shifts toward mastery, responsibility, and personal connection."
            bullets={[
              "Refining recitation accuracy",
              "Strengthening memorization consistency",
              "Building confidence in independent reading",
              "Encouraging meaningful engagement with the Quran",
              "Supporting spiritual identity during formative years",
            ]}
            outro="Teachers guide students as mentors, helping them set realistic goals and maintain discipline alongside academics. Lessons respect student maturity while reinforcing commitment. For many teens, this stage turns Quran learning from routine into personal practice, building confidence and lifelong skills."
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- Small Block -------------------- */

function ProgramBlock({ title, intro, bullets, outro }) {
  return (
    <div>
      <h4 className="font-serif text-[16px] text-[#1e3b44] md:text-[16px]">
        {title}
      </h4>

      <p className="mt-4 text-[15px] leading-6 text-black/60 md:text-[14px] md:leading-7">
        {intro}
      </p>

      <div className="mt-5 text-[15px] leading-6 text-black/60 md:text-[14px] md:leading-7">
        <p className="mb-2">Lessons for young learners emphasize:</p>

        <ul className="ml-5 list-disc space-y-2">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-[15px] leading-6 text-black/60 md:text-[14px] md:leading-7">
        {outro}
      </p>
    </div>
  );
}