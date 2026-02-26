"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A]">
      {/* Marquee */}
      <div className="overflow-hidden py-5 border-b border-[#2A2A2A]">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs tracking-[0.3em] uppercase font-serif text-[#C9A84C]/30"
            >
              INTERNITY.
              <span className="mx-8 text-[#C9A84C]/15">{"•"}</span>
              Heritage Cuisine
              <span className="mx-8 text-[#C9A84C]/15">{"•"}</span>
              James Whitfield
              <span className="mx-8 text-[#C9A84C]/15">{"•"}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-14">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-[0.15em] text-[#C9A84C] italic mb-4">
              INTERNITY.
            </h3>
            <p className="text-sm text-[#F5F0E8]/40 font-sans leading-relaxed max-w-xs">
              Celebrating the timeless heritage of British gastronomy with modern
              precision in an intimate and refined setting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]/50 font-sans mb-5">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Rooms", href: "#rooms" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-[#F5F0E8]/40 hover:text-[#C9A84C] font-sans transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]/50 font-sans mb-5">
              Visit Us
            </h4>
            <div className="text-sm text-[#F5F0E8]/40 font-sans leading-relaxed flex flex-col gap-3">
              <p>
                12 Whitehall Gardens
                <br />
                Kensington, London SW1A 2BX
              </p>
              <p>+44 20 7946 0958</p>
              <p>reservations@internity.co.uk</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2A2A2A] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#F5F0E8]/20 font-sans tracking-wider">
            {currentYear} INTERNITY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[11px] text-[#F5F0E8]/20 hover:text-[#C9A84C] font-sans transition-colors duration-300 tracking-wider">
              Privacy Policy
            </button>
            <button className="text-[11px] text-[#F5F0E8]/20 hover:text-[#C9A84C] font-sans transition-colors duration-300 tracking-wider">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
