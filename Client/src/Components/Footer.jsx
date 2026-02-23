// src/components/Footer.jsx
import React from "react";
import {
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1114] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <h2 className="text-4xl font-serif font-semibold">
                <span className="text-[#d0441c]">Q</span>Teaching
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Empower through Quranic Learning
              </p>
            </div>

            {/* Decorative Arabic Icon */}
            <div className="opacity-20">
              <svg
                width="160"
                height="160"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="white"
                  strokeWidth="4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Newsletter */}
            <h3 className="text-xl font-semibold leading-snug">
              Subscribe to our Newsletter. We
              <br /> will always stay in touch!
            </h3>

            <div className="mt-6 flex items-center border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/50"
              />
              <ArrowUpRight size={18} className="text-white/70" />
            </div>

            {/* Contact & Social Row */}
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {/* Call Button */}
              <div>
                <div className="inline-flex items-center gap-3 rounded-xl border border-white/40 px-4 py-3">
                  <Phone size={20} />
                  <div>
                    <div className="text-xs text-white/60">
                      CALL FOR MORE INFO
                    </div>
                    <div className="font-semibold">
                      +1 630 534 0231
                    </div>
                  </div>
                </div>
              </div>

              {/* Get In Touch */}
              <div>
                <div className="text-sm font-semibold mb-2">
                  GET IN TOUCH:
                </div>
                <div className="text-sm text-white/70">
                  info@qteaching.com
                </div>
              </div>

              {/* Social */}
              <div>
                <div className="text-sm font-semibold mb-2">
                  STAY CONNECTED :-
                </div>
                <div className="flex items-center gap-4">
                  <Facebook size={18} />
                  <Instagram size={18} />
                  <MessageCircle size={18} />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/50 gap-4">
              <div>
                Copyright © 2025. All Rights Reserved.
              </div>
              <div>
                Powered & Designed by{" "}
                <span className="text-white font-medium">
                  Binary Souls
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}