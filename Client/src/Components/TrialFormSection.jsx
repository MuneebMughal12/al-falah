import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { RefreshCw } from "lucide-react";

export default function TrialFormSection() {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(() => makeCaptcha());
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState({ type: "", msg: "" });

  const question = useMemo(() => `What is ${captcha.a} × ${captcha.b} ?`, [captcha]);

  function resetCaptcha() {
    setCaptcha(makeCaptcha());
    setAnswer("");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const correct = captcha.a * captcha.b;
    if (Number(answer) !== correct) {
      setStatus({ type: "error", msg: "Captcha wrong. Please try again." });
      resetCaptcha();
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      message: "Book Free Trial Class request",
    };

    try {
      setLoading(true);

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        payload,
        "YOUR_PUBLIC_KEY"
      );

      setStatus({ type: "ok", msg: "Submitted! We'll contact you soon." });
      form.reset();
      resetCaptcha();
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top big panel */}
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
          <div className="grid lg:grid-cols-2">
            {/* LEFT (dark map + person) */}
            <div className="relative bg-[#2b2b2b] min-h-[260px] lg:min-h-[320px]">
              {/* dotted world map feel */}
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
                  backgroundSize: "6px 6px",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%)",
                }}
              />

              {/* Person image (optional) */}
              <img
                src="/images/form-man.png"
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[280px] lg:h-[340px] object-contain"
              />
            </div>

            {/* RIGHT (form area) */}
            <div className="bg-[#b64323] p-6 md:p-10">
              <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="h-12 w-full rounded-full bg-white px-5 text-sm outline-none"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Your Email"
                  className="h-12 w-full rounded-full bg-white px-5 text-sm outline-none"
                />
                <input
                  name="phone"
                  required
                  placeholder="Your Phone No"
                  className="h-12 w-full rounded-full bg-white px-5 text-sm outline-none"
                />

                {/* Captcha box */}
                <div className="rounded-2xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-black/70">{question}</p>
                    <button
                      type="button"
                      onClick={resetCaptcha}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5"
                      aria-label="Refresh"
                    >
                      <RefreshCw size={16} className="text-black/60" />
                    </button>
                  </div>

                  <input
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer"
                    className="mt-3 h-11 w-full rounded-full bg-[#f5f5f5] text-black px-4 text-sm outline-none"
                  />
                </div>

                <button
                  disabled={loading}
                  className="h-12 w-full rounded-full bg-[#121212] text-sm font-semibold tracking-widest text-white hover:brightness-110 disabled:opacity-60"
                >
                  {loading ? "SENDING..." : "BOOK FREE TRIAL CLASS"}
                </button>

                {status.msg && (
                  <p
                    className={`text-sm ${
                      status.type === "ok" ? "text-white" : "text-white/90"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Heading below (with down->up animation) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-[#b64323] font-semibold">Connect with Quran’s Essence</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            Meet Instructors &amp; Choose{" "}
            <span className="relative inline-block">
              Learning
              {/* <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#e6b36b]" /> */}
            </span>{" "}
            Plan Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-black/70">
            Begin structured Quran lessons tailored to your needs. Our team supports you
            from the first day, ensuring consistency and progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function makeCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b };
}