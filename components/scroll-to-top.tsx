"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 w-10 h-10 flex items-center justify-center border border-[#2A2A2A] text-[#F5F0E8]/50 hover:text-[#C9A84C] hover:border-[#C9A84C] bg-[#0D0D0D]/80 backdrop-blur-sm transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={16} strokeWidth={1.5} />
    </button>
  )
}
