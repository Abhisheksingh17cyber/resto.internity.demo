"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Send } from "lucide-react"

export function NewsletterSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 border-t border-[#2A2A2A]">
      <div ref={ref} className="mx-auto max-w-2xl px-6 md:px-12 text-center">
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F0E8] tracking-[0.01em] text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Newsletter
        </h2>
        <p
          className={`mt-6 text-[#F5F0E8]/50 text-sm md:text-base font-sans leading-relaxed text-pretty transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Fresh menu drops, events and behind-the-scenes stories straight to your
          inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className={`mt-10 flex flex-col sm:flex-row gap-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent border border-[#2A2A2A] px-5 py-3.5 text-sm font-sans text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0D0D0D] hover:bg-[#D4B85E] px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-300"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        ) : (
          <div className="mt-10 p-5 border border-[#C9A84C]/30">
            <p className="text-sm text-[#C9A84C] font-sans">
              Thank you for subscribing. We look forward to sharing our story with
              you.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
