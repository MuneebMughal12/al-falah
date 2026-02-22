import React from "react";

export default function TransformationSection() {
    return (
        <section className="bg-[#f7eeea] pr-8 pl-8">
            <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    {/* LEFT CONTENT */}
                    <div className="pt-2">
                        <p className="text-[#b64323] font-semibold text-lg">
                            What transformation are you seeking?
                        </p>

                        <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight text-black">
                            Education For{" "}
                            <span className="underline decoration-[#e6b36b] decoration-[6px] underline-offset-[10px]">
                                Blessed
                            </span>{" "}
                            Life
                        </h2>

                        <p className="mt-6 text-[15px] leading-7 text-black/70 max-w-xl">
                            Learning the Quran should fit your lifestyle. With our{" "}
                            <span className="font-semibold text-black/80">
                                online Quran classes for kids and adults
                            </span>
                            , students can study from home without stress.
                        </p>

                        <p className="mt-4 text-[15px] leading-7 text-black/70 max-w-xl">
                            At Q Teaching, lessons are personalized for each learner. Whether you are
                            starting from Qaida or advancing in Tajweed, we make Quran learning simple,
                            flexible, and spiritually fulfilling.
                        </p>
                    </div>

                    {/* RIGHT IMAGE (top-right) */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[44px] bg-white shadow-sm ring-1 ring-black/10">
                            <img
                                src="/images/teacher-laptop.jpg"
                                alt="Teacher"
                                className="h-[340px] w-full object-cover md:h-[420px]"
                            />
                        </div>

                        {/* Cards OVER image (only on large screens) */}
                     
                        <div className="hidden lg:block">
                            {/* Card 1 (LEFT - DOWN) */}
                            <div className="absolute -left-[610px] top-[280px] w-[420px]">
                                <FeatureCard
                                    tone="green"
                                    title="Boost your Islamic knowledge"
                                    desc="Since 2011, QTeaching has supported students across more than 90 countries. Our experience allows us to understand different learning needs and deliver effective online Quran education worldwide."
                                    icon={<MosqueIcon />}
                                />
                            </div>

                            {/* Card 2 (MIDDLE - UP) */}
                            <div className="absolute left-[-150px] top-[280px] w-[260px]">
                                <FeatureCard
                                    tone="red"
                                    title="Speak Arabic, Confidently!"
                                    desc="We offer structured learning paths and award completion certificates after successful course completion, helping learners gain confidence and measurable progress."
                                    icon={<ChatIcon />}
                                />
                            </div>

                            {/* Card 3 (RIGHT - UP) */}
                            <div className="absolute right-[200px] top-[280px] w-[220px]">
                                <FeatureCard
                                    tone="purple"
                                    title="Recite & Memorize Quran"
                                    desc="Our platform offers 24/7 Quran lessons online with expert tutors. This flexibility allows students to learn, recite, and memorize the Quran at their own pace."
                                    icon={<QuranIcon />}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet cards below (stack) */}
                <div className="mt-10 grid gap-6 md:grid-cols-3 lg:hidden">
                    <FeatureCard
                        tone="green"
                        title="Boost your Islamic knowledge"
                        desc="Since 2011, QTeaching has supported students across more than 90 countries. Our experience allows us to understand different learning needs and deliver effective online Quran education worldwide."
                        icon={<MosqueIcon />}
                    />
                    <FeatureCard
                        tone="red"
                        title="Speak Arabic, Confidently!"
                        desc="We offer structured learning paths and award completion certificates after successful course completion, helping learners gain confidence and measurable progress."
                        icon={<ChatIcon />}
                    />
                    <FeatureCard
                        tone="purple"
                        title="Recite & Memorize Quran"
                        desc="Our platform offers 24/7 Quran lessons online with expert tutors. This flexibility allows students to learn, recite, and memorize the Quran at their own pace."
                        icon={<QuranIcon />}
                    />
                </div>

                {/* Extra space so absolute cards don't cut off */}
                <div className="hidden lg:block h-28" />
            </div>
        </section>
    );
}

/* -------------------- UI: Feature Card -------------------- */

function FeatureCard({ tone = "green", icon, title, desc }) {
    const tones = {
        green: {
            ring: "ring-[#d9efe2]",
            iconBg: "bg-[#e8f6ee]",
            iconColor: "text-[#2f8d57]",
        },
        red: {
            ring: "ring-[#f5d7d7]",
            iconBg: "bg-[#fdecee]",
            iconColor: "text-[#c74747]",
        },
        purple: {
            ring: "ring-[#ead9ff]",
            iconBg: "bg-[#f3eaff]",
            iconColor: "text-[#7a3fe0]",
        },
    };

    const t = tones[tone] || tones.green;

    return (
        <div className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ${t.ring}`}>
            <div className="flex items-start gap-4">
                <div className={`grid h-12 w-12 place-items-center rounded-full ${t.iconBg} ${t.iconColor}`}>
                    {icon}
                </div>

                <h3 className="font-serif text-xl leading-snug text-black">
                    {title}
                </h3>
            </div>

            <p className="mt-5 text-[14px] leading-7 text-black/70">{desc}</p>
        </div>
    );
}

/* -------------------- Icons -------------------- */

function MosqueIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 20v-7c0-3 3-5 6-5s6 2 6 5v7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 20v-5a3 3 0 0 1 6 0v5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    );
}

function ChatIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 9h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function QuranIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M7 4h10a3 3 0 0 1 3 3v13H9a2 2 0 0 0-2 2V4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M7 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}