"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.15)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1)
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#111111] py-24 md:py-36 border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <span
            className={`inline-block text-xs tracking-[0.3em] uppercase text-[#C9A84C]/60 font-sans mb-4 transition-all duration-700 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Get In Touch
          </span>
          <h2
            className={`font-serif text-3xl md:text-5xl lg:text-6xl text-[#F5F0E8] tracking-[0.01em] text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Reserve Your Table
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Form */}
          <div ref={formRef}>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className={`flex flex-col gap-6 transition-all duration-700 ${
                  formVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 font-sans mb-3"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#2A2A2A] py-2.5 text-sm font-sans text-[#F5F0E8] placeholder:text-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 font-sans mb-3"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#2A2A2A] py-2.5 text-sm font-sans text-[#F5F0E8] placeholder:text-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 font-sans mb-3"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#2A2A2A] py-2.5 text-sm font-sans text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 font-sans mb-3"
                    >
                      Guests
                    </label>
                    <select
                      id="guests"
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#2A2A2A] py-2.5 text-sm font-sans text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-[#0D0D0D] text-[#F5F0E8]">
                        Select
                      </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option
                          key={n}
                          value={n}
                          className="bg-[#0D0D0D] text-[#F5F0E8]"
                        >
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option
                        value="9+"
                        className="bg-[#0D0D0D] text-[#F5F0E8]"
                      >
                        9+ (Private Dining)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/40 font-sans mb-3"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-2.5 text-sm font-sans text-[#F5F0E8] placeholder:text-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none"
                    placeholder="Dietary requirements, celebrations, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 self-start bg-[#C9A84C] text-[#0D0D0D] hover:bg-[#D4B85E] px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-300"
                >
                  Request Reservation
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center p-12 border border-[#C9A84C]/30 h-full">
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-3">
                    Thank You
                  </h3>
                  <p className="text-sm text-[#F5F0E8]/50 font-sans leading-relaxed">
                    We have received your reservation request and will confirm
                    shortly by email.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div
            ref={infoRef}
            className={`flex flex-col gap-8 transition-all duration-700 delay-200 ${
              infoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-4 items-start">
              <MapPin
                size={18}
                className="text-[#C9A84C] mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">
                  Address
                </h4>
                <p className="text-sm text-[#F5F0E8]/50 font-sans leading-relaxed">
                  12 Whitehall Gardens
                  <br />
                  Kensington, London
                  <br />
                  SW1A 2BX
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone
                size={18}
                className="text-[#C9A84C] mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">
                  Telephone
                </h4>
                <p className="text-sm text-[#F5F0E8]/50 font-sans">
                  +44 20 7946 0958
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail
                size={18}
                className="text-[#C9A84C] mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">
                  Email
                </h4>
                <p className="text-sm text-[#F5F0E8]/50 font-sans">
                  reservations@internity.co.uk
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock
                size={18}
                className="text-[#C9A84C] mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">
                  Opening Hours
                </h4>
                <div className="text-sm text-[#F5F0E8]/50 font-sans leading-relaxed flex flex-col gap-1">
                  <p>Tue - Sat: 12:00 - 14:30 / 18:00 - 22:00</p>
                  <p>Sunday: 12:00 - 16:00 (Sunday Roast)</p>
                  <p>Monday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
