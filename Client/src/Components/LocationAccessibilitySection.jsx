// src/components/LocationAccessibilitySection.jsx
import React from "react";

export default function LocationAccessibilitySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* small top label + divider */}
        <div className="mb-8">
          <div className="text-[19px] font-semibold tracking-wide text-black/70">
            Location &amp; Accessibility
          </div>
          <div className="mt-3 h-px w-full bg-black/10" />
        </div>

        {/* top: image + title/desc */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* image */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-md bg-black/5">
              <img
                src="/images/location-accessibility.jpg"
                alt="Quran learning"
                className="h-[220px] w-full object-cover sm:h-[280px] md:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* text */}
          <div className="min-w-0">
            <h2 className="font-serif text-3xl leading-tight text-[#1c2b2e] md:text-4xl">
              A Supportive Path Forward
            </h2>

            {/* small underline */}
            <div className="mt-4 h-[2px] w-10 bg-[#1f5c6e]" />

            <p className="mt-5 max-w-prose text-[16px] leading-6 text-black/55">
              Choosing the right learning environment is about more than
              convenience—it&apos;s about trust, clarity, and results. When
              parents feel informed and children feel supported, progress
              becomes natural and lasting.
            </p>

            <p className="mt-4 max-w-prose text-[16px] leading-6 text-black/55">
              If you&apos;re looking for a guided approach that respects your
              time while nurturing your child&apos;s growth, this learning model
              is built to support your family every step of the way.
            </p>
          </div>
        </div>

        {/* bottom: two columns */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-7">
            <div>
              <h3 className="text-[16px] font-semibold text-[#1c2b2e]">
                Reliable Learning Access for Families Across the United States
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Location should never limit a child&apos;s access to quality
                guidance. A fully online learning environment allows families
                across the United States to provide consistent instruction.
                Travel, local availability, or time constraints are no longer
                obstacles. Accessibility is built into every part of the
                learning experience.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#1c2b2e]">
                Serving Families Across the United States With Consistent Access
              </h4>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Families from coast to coast can enroll without worrying about
                geography. Whether in a major city or a smaller community,
                children receive the same structured instruction, live
                interaction, and learning support.
              </p>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Scheduling aligns with U.S. school routines and time zones. This
                makes it easy for parents to integrate lessons into daily life.
                Nationwide accessibility ensures continuity, even for families
                who relocate or adjust schedules throughout the year.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#1c2b2e]">
                Learn From Home With Flexible Scheduling
              </h4>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Learning from home removes commuting stress and provides a
                familiar, comfortable environment for children. Sessions can be
                scheduled around school, family commitments, and weekends.
              </p>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                This flexibility helps children stay focused and prevents
                burnout. Parents benefit from saved time, reduced stress, and
                the ability to remain nearby without disrupting daily
                responsibilities.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-7">
            <div>
              <h3 className="text-[16px] font-semibold text-[#1c2b2e]">
                Instruction Available in Multiple Languages
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Clear communication is key for effective learning. Instruction
                is available in commonly spoken languages to ensure
                understanding, comfort, and confidence.
              </p>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                Children learn in the language they understand best while
                gradually being introduced to structured learning terms and
                concepts. Multilingual instruction supports diverse households
                and bridges language gaps that may otherwise slow progress.
                Parents also enjoy easier communication with instructors,
                keeping them informed and involved.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#1c2b2e]">
                Designed for Modern Families
              </h4>

              <ul className="mt-4 space-y-3">
                {[
                  "Accessible from any U.S. location",
                  "No travel or local dependency",
                  "Schedules aligned with school routines",
                  "Language support for better understanding",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-black/35" />
                    <span className="text-[16px] leading-6 text-black/55">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#1c2b2e]">
                Learning Without Limits
              </h4>
              <p className="mt-3 text-[16px] leading-6 text-black/55">
                By removing geographic and logistical barriers, families gain a
                dependable way to support their child&apos;s growth.
                Accessibility is more than convenience—it creates consistent
                opportunities for learning, no matter where life takes you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}