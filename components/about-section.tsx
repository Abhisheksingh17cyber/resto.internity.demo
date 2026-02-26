"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.15)
  const { ref: imgLeftRef, isVisible: imgLeftVisible } = useScrollAnimation(0.1)
  const { ref: imgRightRef, isVisible: imgRightVisible } = useScrollAnimation(0.1)

  return (
    <section id="story" className="relative bg-[#0D0D0D] py-28 md:py-40 overflow-hidden">
      {/* Floating image - left */}
      <div
        ref={imgLeftRef}
        className={`absolute top-12 md:top-20 left-4 md:left-12 w-32 md:w-48 lg:w-56 aspect-[3/4] z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          imgLeftVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-12"
        }`}
      >
        <Image
          src="/images/detail-handle.jpg"
          alt="Ornate brass door handle detail"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 128px, 224px"
          loading="lazy"
        />
      </div>

      {/* Floating image - right */}
      <div
        ref={imgRightRef}
        className={`absolute top-6 md:top-12 right-4 md:right-12 w-32 md:w-48 lg:w-56 aspect-[3/4] z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
          imgRightVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12"
        }`}
      >
        <Image
          src="/images/interior-hallway.jpg"
          alt="INTERNITY restaurant hallway interior"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 128px, 224px"
          loading="lazy"
        />
      </div>

      {/* Central content */}
      <div
        ref={sectionRef}
        className="relative z-20 mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center pt-20 md:pt-0"
      >
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F5F0E8] leading-[1.1] tracking-[0.01em] text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          Where heritage meets
          <br />
          culinary excellence
        </h2>

        <p
          className={`mt-8 md:mt-10 text-[#F5F0E8]/60 text-sm md:text-base font-sans leading-relaxed max-w-2xl text-pretty transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          We layer time-honoured British tradition, seasonal precision and local
          produce into dishes that feel both familiar and daring. Every plate tells
          a story and ends with a smile.
        </p>
      </div>
    </section>
  )
}
