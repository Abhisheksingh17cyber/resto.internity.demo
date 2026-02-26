"use client"

import { useState, useEffect } from "react"
import { CalendarDays } from "lucide-react"

export function StickyReserveButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() =>
        document
          .querySelector("#contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      aria-label="Reserve a table"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-[#C9A84C] text-[#0D0D0D] px-5 py-3 md:px-6 md:py-3.5 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] animate-subtle-pulse hover:bg-[#D4B85E] group ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <CalendarDays size={16} strokeWidth={1.5} className="shrink-0" />
      <span className="text-xs tracking-[0.15em] uppercase font-sans font-medium hidden sm:inline">
        Reserve a Table
      </span>
    </button>
  )
}
