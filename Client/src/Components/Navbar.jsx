import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // dropdown states (desktop hover + click)
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [tutorsOpen, setTutorsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // mobile menu + mobile accordion dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileTutorsOpen, setMobileTutorsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearCloseTimer = () => clearTimeout(closeTimer.current);

  const openWithDelayCancel = (setter) => {
    clearCloseTimer();
    setter(true);
  };

  const closeWithDelay = (setter) => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setter(false), 120);
  };

  const desktopLinkBase =
    "text-[13px] text-black/60 hover:text-black transition-colors";

  const desktopActive = "text-black";

  return (
    
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-black/10 bg-[#f6e9e7]">
        <div className="mx-auto flex h-9 max-w-7xl items-center px-4">
          {/* Left */}
          <div className="flex flex-1 items-center gap-6 text-[12px] text-black/70">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#c8564a]" />
              <span className="whitespace-nowrap">
                Call Us: <span className="font-medium">+1 630 534 0231</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#c8564a]" />
              <span className="whitespace-nowrap">
                Mail Us:{" "}
                <a
                  href="mailto:info@qteaching.com"
                  className="font-medium hover:underline"
                >
                  info@qteaching.com
                </a>
              </span>
            </div>
          </div>

          {/* Right socials */}
          <div className="hidden items-center gap-3 text-[12px] text-black/70 md:flex">
            <a href="#" className="hover:text-black">
              Facebook
            </a>
            <span className="h-1 w-1 rounded-full bg-[#c8564a]" />
            <a href="#" className="hover:text-black">
              Instagram
            </a>
            <span className="h-1 w-1 rounded-full bg-[#c8564a]" />
            <a href="#" className="hover:text-black">
              whatsapp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Replace with your real logo image */}
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm font-semibold text-black/70">
                Q
              </div>
              <div className="ml-3 leading-tight">
                <div className="text-2xl font-semibold tracking-tight">
                  Teaching
                </div>
                <div className="text-[10px] text-black/50">
                  Empower through Quranic Learning
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="ml-10 hidden flex-1 items-center justify-center gap-6 lg:flex">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${desktopLinkBase} ${isActive ? desktopActive : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Courses dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openWithDelayCancel(setCoursesOpen)}
              onMouseLeave={() => closeWithDelay(setCoursesOpen)}
            >
              <button
                type="button"
                onClick={() => setCoursesOpen((v) => !v)}
                className={`${desktopLinkBase} inline-flex items-center gap-1`}
              >
                Courses
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-black/10 bg-white p-2 shadow-xl">
                  <NavLink
                    to="/courses/quran"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Quran Courses
                  </NavLink>
                  <NavLink
                    to="/courses/arabic"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Arabic
                  </NavLink>
                  <NavLink
                    to="/courses/tajweed"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Tajweed
                  </NavLink>
                </div>
              )}
            </li>

            {/* Our Tutors dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openWithDelayCancel(setTutorsOpen)}
              onMouseLeave={() => closeWithDelay(setTutorsOpen)}
            >
              <button
                type="button"
                onClick={() => setTutorsOpen((v) => !v)}
                className={`${desktopLinkBase} inline-flex items-center gap-1`}
              >
                Our Tutors
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    tutorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {tutorsOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-black/10 bg-white p-2 shadow-xl">
                  <NavLink
                    to="/tutors/female"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Female Tutors
                  </NavLink>
                  <NavLink
                    to="/tutors/male"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Male Tutors
                  </NavLink>
                </div>
              )}
            </li>

            {/* Pricing */}
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `${desktopLinkBase} ${isActive ? desktopActive : ""}`
                }
              >
                Our Pricing
              </NavLink>
            </li>

            {/* Customer Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => openWithDelayCancel(setServicesOpen)}
              onMouseLeave={() => closeWithDelay(setServicesOpen)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`${desktopLinkBase} inline-flex items-center gap-1`}
              >
                Customer Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-black/10 bg-white p-2 shadow-xl">
                  <NavLink
                    to="/support"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Support
                  </NavLink>
                  <NavLink
                    to="/faqs"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    to="/refund-policy"
                    className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                  >
                    Refund Policy
                  </NavLink>
                </div>
              )}
            </li>

            {/* Contact */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${desktopLinkBase} ${isActive ? desktopActive : ""}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-lg border border-black/10 p-2 text-black/70 hover:bg-black/5 lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* CTA */}
            <NavLink
              to="/free-trial"
              className="hidden rounded-md bg-[#b94a3a] px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-[6px_6px_0px_rgba(185,74,58,0.25)] hover:brightness-105 active:translate-y-[1px] sm:inline-block"
            >
              FREE TRIAL
            </NavLink>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-black/70 hover:bg-black/5"
                  >
                    Home
                  </NavLink>
                </li>

                {/* Mobile Courses */}
                <li className="rounded-lg border border-black/10">
                  <button
                    onClick={() => setMobileCoursesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-black/70"
                  >
                    Courses
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileCoursesOpen && (
                    <div className="px-2 pb-2">
                      <NavLink
                        to="/courses/quran"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Quran Courses
                      </NavLink>
                      <NavLink
                        to="/courses/arabic"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Arabic
                      </NavLink>
                      <NavLink
                        to="/courses/tajweed"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Tajweed
                      </NavLink>
                    </div>
                  )}
                </li>

                {/* Mobile Tutors */}
                <li className="rounded-lg border border-black/10">
                  <button
                    onClick={() => setMobileTutorsOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-black/70"
                  >
                    Our Tutors
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileTutorsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileTutorsOpen && (
                    <div className="px-2 pb-2">
                      <NavLink
                        to="/tutors"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Meet Tutors
                      </NavLink>
                      <NavLink
                        to="/tutors/female"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Female Tutors
                      </NavLink>
                      <NavLink
                        to="/tutors/male"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Male Tutors
                      </NavLink>
                    </div>
                  )}
                </li>

                {/* Pricing */}
                <li>
                  <NavLink
                    to="/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-black/70 hover:bg-black/5"
                  >
                    Our Pricing
                  </NavLink>
                </li>

                {/* Mobile Customer Services */}
                <li className="rounded-lg border border-black/10">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-black/70"
                  >
                    Customer Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="px-2 pb-2">
                      <NavLink
                        to="/support"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Support
                      </NavLink>
                      <NavLink
                        to="/faqs"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        FAQs
                      </NavLink>
                      <NavLink
                        to="/refund-policy"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-black/70 hover:bg-black/5"
                      >
                        Refund Policy
                      </NavLink>
                    </div>
                  )}
                </li>

                {/* Contact */}
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-black/70 hover:bg-black/5"
                  >
                    Contact Us
                  </NavLink>
                </li>

                {/* Mobile CTA */}
                <li className="pt-2">
                  <NavLink
                    to="/free-trial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#b94a3a] px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-[6px_6px_0px_rgba(185,74,58,0.25)] hover:brightness-105"
                  >
                    FREE TRIAL
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}