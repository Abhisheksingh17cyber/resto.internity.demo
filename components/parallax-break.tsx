"use client"

import Image from "next/image"
import { useParallax, useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ParallaxBreak() {
  const { ref: parallaxRef, offset } = useParallax(0.2)
  const { ref: textRef, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={parallaxRef} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div
        className="absolute inset-[-20%] will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/images/dining-room.jpg"
          alt="INTERNITY fine dining room interior"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-[#0D0D0D]/40" />

      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center"
      >
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F5F0E8] leading-[1.1] tracking-[0.01em] text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Around the table,
          <br />
          one plate at a time
        </h2>
        <p
          className={`mt-6 md:mt-8 text-[#F5F0E8]/60 text-sm md:text-base font-sans leading-relaxed max-w-2xl text-pretty transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our six-course journey menu traces the best of the British Isles, from
          the Scottish Highlands to the Cornish coast, paired with wines poured at
          the perfect moment.
        </p>
        <button
          onClick={() =>
            document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })
          }
          className={`mt-8 md:mt-10 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0D0D] px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-6"
          }`}
        >
          View our menu
        </button>
      </div>
    </section>
  )
}
