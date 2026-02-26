"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { AboutSection } from "@/components/about-section"
import { ParallaxBreak } from "@/components/parallax-break"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { EventsSection } from "@/components/events-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StickyReserveButton } from "@/components/sticky-reserve-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ParallaxBreak />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <MarqueeSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <StickyReserveButton />
    </main>
  )
}
