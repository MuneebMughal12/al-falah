// src/components/ContactSection.jsx
import React, { useMemo } from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  ChevronDown,
} from "lucide-react";

export default function ContactSection() {
  const courses = useMemo(
    () => ["Quran Reading", "Tajweed", "Hifz", "Islamic Studies", "Arabic"],
    []
  );

  return (
    <section className="relative bg-white overflow-x-hidden">
      {/* top image background */}
      <div className="relative h-[380px] md:h-[480px]">
        <img
          src="/images/contact-hero.jpg"
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* big white diagonal */}
      <div className="relative -mt-20 md:-mt-28">
        <div className="absolute left-0 top-0 h-40 w-full -skew-y-6 bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_620px] items-start">
          {/* LEFT: Contact info */}
          <div className="relative">
            <div className="mt-8 md:mt-0">
              <h3 className="font-serif text-3xl md:text-4xl text-[#1c2b2e]">
                Contact
              </h3>

              <div className="mt-10 space-y-8">
                <InfoRow
                  icon={<PhoneCall size={18} />}
                  label="Call us"
                  value="+1 630 534 0231"
                />
                <InfoRow
                  icon={<MessageCircle size={18} />}
                  label="Whatsapp"
                  value="+1 (714) 798 9997"
                />
                <InfoRow
                  icon={<Mail size={18} />}
                  label="24/7 Support"
                  value="info@qteaching.com"
                />
                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Find us"
                  value="Hatton Garden, London, UK"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <div className="relative">
        

            <div className="rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] ring-1 ring-black/5 p-6 sm:p-8 md:p-10">
              <p className="text-[13px] font-semibold text-[#b64323]">
                Contact with us
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl leading-tight text-[#1c2b2e]">
                Have Any{" "}
                <span className="relative inline-block">
                  Questions

                </span>
                <br />
                Get in Touch Today
              </h2>

              {/* ✅ FormSubmit form (NO BACKEND) */}
              <form
                action="https://formsubmit.co/YOUR_GMAIL_HERE"
                method="POST"
                className="mt-8"
              >
                {/* IMPORTANT: FormSubmit settings */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Message"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="relative z-10 grid gap-5 md:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      name="Full Name"
                      required
                      autoComplete="name"
                      className="w-full bg-transparent pb-2 text-[13px] text-black outline-none border-b border-black/20 focus:border-black/40"
                      placeholder=""
                    />
                  </Field>

                  <Field label="Phone">
                    <input
                      name="Phone"
                      autoComplete="tel"
                      className="w-full bg-transparent pb-2 text-[13px] text-black outline-none border-b border-black/20 focus:border-black/40"
                      placeholder=""
                    />
                  </Field>

                  <Field label="Email Address" className="md:col-span-2">
                    <input
                      type="email"
                      name="Email"
                      required
                      autoComplete="email"
                      className="w-full bg-transparent pb-2 text-[13px] text-black outline-none border-b border-black/20 focus:border-black/40"
                      placeholder=""
                    />
                  </Field>

                  <Field label="Country" className="md:col-span-2">
                    <div className="relative">
                      <select
                        name="Country"
                        required
                        className="w-full appearance-none bg-transparent pb-2 pr-8 text-[13px] text-black/70 outline-none border-b border-black/20 focus:border-black/40"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select country
                        </option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>UAE</option>
                        <option>Canada</option>
                        <option>Pakistan</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-black/40"
                      />
                    </div>
                  </Field>

                  <Field label="Course to Enroll" className="md:col-span-2">
                    <div className="relative">
                      <select
                        name="Course"
                        required
                        className="w-full appearance-none bg-transparent pb-2 pr-8 text-[13px] text-black/70 outline-none border-b border-black/20 focus:border-black/40"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select course
                        </option>
                        {courses.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-black/40"
                      />
                    </div>
                  </Field>

                  <Field label="Message" className="md:col-span-2">
                    <textarea
                      name="Message"
                      rows={3}
                      required
                      className="w-full resize-none bg-transparent pb-2 text-[13px] text-black outline-none border-b border-black/20 focus:border-black/40"
                    />
                  </Field>
                </div>

                {/* button row (no captcha) */}
                <div className="mt-10 flex justify-center md:justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8d2b17] px-10 py-4 text-[13px] font-semibold text-white shadow-[0_18px_40px_rgba(141,43,23,0.25)] hover:opacity-95"
                  >
                    Send Message
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                      <Send size={16} />
                    </span>
                  </button>
                </div>

                <p className="mt-4 text-[11px] text-black/40">
                  Submitting will email your message to the configured Gmail via
                  FormSubmit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 text-[11px] font-semibold text-black/40">
        {label}
      </div>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-[#8d2b17] ring-1 ring-black/10">
        {icon}
      </div>
      <div>
        <div className="text-[12px] font-semibold text-black/45">{label}</div>
        <div className="text-[14px] font-semibold text-[#1c2b2e]">{value}</div>
      </div>
    </div>
  );
}

function CrossDecor() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 12 + (i % 3) * 26;
        const y = 12 + Math.floor(i / 3) * 26;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(12)`}>
            <path d="M7 0v14" stroke="#8d2b17" strokeWidth="4" strokeLinecap="round" />
            <path d="M0 7h14" stroke="#8d2b17" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

function DotsDecor() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
      {Array.from({ length: 45 }).map((_, i) => {
        const cols = 9;
        const x = (i % cols) * 10 + 4;
        const y = Math.floor(i / cols) * 10 + 4;
        return (
          <circle key={i} cx={x} cy={y} r="2" fill="#d66a55" opacity="0.8" />
        );
      })}
    </svg>
  );
}