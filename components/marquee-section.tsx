"use client"

export function MarqueeSection() {
  const items = [
    "INTERNITY.",
    "Heritage Cuisine",
    "James Whitfield",
  ]

  return (
    <section className="bg-[#0D0D0D] py-5 md:py-6 overflow-hidden border-y border-[#C9A84C]/10">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(6)].map((_, setIdx) =>
          items.map((item, i) => (
            <span
              key={`${setIdx}-${i}`}
              className="mx-6 md:mx-10 text-sm md:text-base tracking-[0.2em] uppercase font-serif text-[#C9A84C]/60"
            >
              {item}
              <span className="mx-6 md:mx-10 text-[#C9A84C]/20">{"•"}</span>
            </span>
          ))
        )}
      </div>
    </section>
  )
}
