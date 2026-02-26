"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left - Image panel */}
      <div className="relative w-full md:w-[55%] lg:w-[58%] h-[45vh] md:h-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: loaded ? "scale(1)" : "scale(1.1)",
          }}
        >
          <Image
            src="/images/hero-door.jpg"
            alt="The entrance to INTERNITY restaurant"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            quality={90}
          />
        </div>
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]/30 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]/50 md:hidden" />
      </div>

      {/* Right - Content panel */}
      <div className="relative w-full md:w-[45%] lg:w-[42%] h-[55vh] md:h-full bg-[#0D0D0D] flex items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="max-w-md w-full">
          {/* "Restaurant" text */}
          <h1
            className="font-serif text-[#F5F0E8] leading-[0.95] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "300ms",
            }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em]">
              Restaurant
            </span>
            {/* Outlined INTERNITY text */}
            <span
              className="block text-stroke text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic tracking-[0.02em] mt-1 md:mt-2"
            >
              INTERNITY.
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 md:mt-10 text-[#F5F0E8]/70 text-sm md:text-base font-sans leading-relaxed max-w-sm text-pretty transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "600ms",
            }}
          >
            Award-winning chef James Whitfield welcomes you to his culinary
            jewel inside a grand 18th-century London manor house.
          </p>

          {/* Michelin-style stars */}
          <div
            className="mt-8 flex items-center gap-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "900ms",
            }}
          >
            {[0, 1].map((i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="w-8 h-8 text-[#C9A84C]"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-1.1 0-2-.45-2-1s.9-1 2-1 2 .45 2 1-.9 1-2 1zm0-3c-1.1 0-2-.45-2-1s.9-1 2-1 2 .45 2 1-.9 1-2 1zm0-3c-1.1 0-2-.45-2-1s.9-1 2-1 2 .45 2 1-.9 1-2 1zm0-3c-1.1 0-2-.45-2-1s.9-1 2-1 2 .45 2 1-.9 1-2 1z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
