"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "INTERNITY bar with warm ambient lighting",
    span: "col-span-1 sm:col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Private dining room with candlelight",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Chef plating a dish with precision",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-1.jpg",
    alt: "Seared Scottish salmon presentation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/about.jpg",
    alt: "Signature plated dish from our kitchen",
    span: "col-span-1 sm:col-span-2 row-span-1",
  },
]

function GalleryItem({
  image,
  index,
}: {
  image: (typeof galleryImages)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden group cursor-pointer ${image.span} transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative w-full h-full min-h-[220px] md:min-h-[280px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/30 transition-all duration-700" />
      </div>
    </div>
  )
}

export function GallerySection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.15)

  return (
    <section id="gallery" className="bg-[#0D0D0D] py-24 md:py-36 border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <span
            className={`inline-block text-xs tracking-[0.3em] uppercase text-[#C9A84C]/60 font-sans mb-4 transition-all duration-700 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            A Glimpse Inside
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px]">
          {galleryImages.map((image, i) => (
            <GalleryItem key={image.src} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
