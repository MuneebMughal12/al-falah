import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mt-16">
      {/* Background split */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#e7e2cf]" />
        <div className="bg-[#e9edf1]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black mb-6">
            Online Quran Classes for <br />
            Kids | Learn Quran from <br />
            Home with Expert Teachers
          </h1>

          <p className="text-gray-700 text-lg mb-8 max-w-lg">
            Online Quran classes for kids with expert teachers. Live lessons
            from home build confidence, correct recitation, and a lifelong
            connection to the Quran.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#6b5636] hover:bg-[#5b4a2d] text-white px-6 py-3 rounded-full font-medium transition">
            Find Courses
            <span className="bg-white text-[#6b5636] rounded-full p-2">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[420px] hidden md:block">
          {/* Image 1 */}
          <div className="absolute top-0 left-10 w-40 h-40 bg-[#c63b1d] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] p-2">
            <img
              src="/images/teacher1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[40%_60%_55%_45%/55%_45%_60%_40%]"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute top-20 right-0 w-44 h-44 bg-[#c63b1d] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] p-2">
            <img
              src="/images/teacher2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[60%_40%_50%_50%/50%_60%_40%_50%]"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute bottom-0 left-20 w-48 h-48 bg-[#c63b1d] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] p-2">
            <img
              src="/images/kid1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[45%_55%_60%_40%/50%_45%_55%_50%]"
            />
          </div>

          {/* Image 4 */}
          <div className="absolute bottom-10 right-10 w-44 h-44 bg-[#c63b1d] rounded-[55%_45%_50%_50%/60%_40%_60%_40%] p-2">
            <img
              src="/images/kid2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[55%_45%_50%_50%/60%_40%_60%_40%]"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,96L60,101.3C120,107,240,117,360,122.7C480,128,600,128,720,117.3C840,107,960,85,1080,80C1200,75,1320,85,1380,90.7L1440,96V150H0Z"
          />
        </svg>
      </div>
   
    </section>
    
  );
}