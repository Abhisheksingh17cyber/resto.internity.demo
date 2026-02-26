"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const rooms = [
  {
    title: "The Tower Suite",
    image: "/images/suite-tower.jpg",
    alt: "The Tower Suite at INTERNITY",
  },
  {
    title: "The Garden Suite",
    image: "/images/suite-garden.jpg",
    alt: "The Garden Suite at INTERNITY",
  },
]

export function EventsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.15)

  return (
    <section id="rooms" className="bg-[#0D0D0D] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14 md:mb-20">
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.1] tracking-[0.01em] text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Stay the night at our
            <br />
            beautiful suites with a
            <br />
            gorgeous view of the garden
          </h2>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`mt-8 md:mt-10 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0D0D] px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans transition-all duration-500 delay-300 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Book our rooms
          </button>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.title} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function RoomCard({
  room,
  index,
}: {
  room: (typeof rooms)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={room.image}
          alt={room.alt}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
        <h3 className="font-serif text-xl md:text-2xl text-[#F5F0E8]">
          {room.title}
        </h3>
        <button className="inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-sans group-hover:gap-3 transition-all duration-300">
          Read more
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
