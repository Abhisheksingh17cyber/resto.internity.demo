"use client"

import { useState, useEffect, useCallback } from "react"

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Rooms", href: "#rooms" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleLinkClick = useCallback(
    (href: string) => {
      setMobileOpen(false)
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    },
    []
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#C9A84C] italic z-50 relative"
          >
            INTERNITY.
          </a>

          {/* Menu button - always visible */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-3 z-50 relative group"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-[#F5F0E8] text-xs tracking-[0.25em] uppercase font-sans hidden md:block group-hover:text-[#C9A84C] transition-colors duration-300">
              Menu
            </span>
            <div className="flex flex-col gap-[5px] w-7">
              <span
                className={`block h-[1.5px] bg-[#F5F0E8] transition-all duration-500 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-[#F5F0E8] transition-all duration-500 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-[#F5F0E8] transition-all duration-500 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-[#F5F0E8] text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] font-serif transition-all duration-500 hover:text-[#C9A84C]"
              style={{
                transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Footer info in overlay */}
        <div
          className="absolute bottom-12 left-0 right-0 px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#F5F0E8]/40 text-xs font-sans tracking-wider"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transition: "opacity 0.6s ease",
            transitionDelay: mobileOpen ? "500ms" : "0ms",
          }}
        >
          <span>12 Whitehall Gardens, London</span>
          <span>+44 20 7946 0958</span>
          <span>reservations@internity.co.uk</span>
        </div>
      </div>
    </>
  )
}
