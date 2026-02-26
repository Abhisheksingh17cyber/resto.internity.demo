"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const signatureDishes = [
  {
    name: "Hamachi",
    image: "/images/dish-hamachi.jpg",
  },
  {
    name: "Scallop",
    image: "/images/dish-scallop.jpg",
  },
  {
    name: "Garden",
    image: "/images/dish-garden.jpg",
  },
]

const menuCategories = [
  {
    title: "Starters",
    items: [
      { name: "Scottish Smoked Salmon", desc: "Crème fraîche, pickled shallots, sourdough crisp", price: "18" },
      { name: "Dorset Crab Tian", desc: "Avocado, heritage tomato, lemon gel", price: "22" },
      { name: "Game Terrine", desc: "Pheasant & partridge, fig chutney, toasted brioche", price: "16" },
      { name: "Roasted Beetroot Salad", desc: "Cashel blue, candied walnuts, honey dressing", price: "14" },
      { name: "Caviar 30 Grams", desc: "Blinis, crème fraîche, chive", price: "95" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Beef Wellington", desc: "Truffle duxelles, fondant potato, red wine jus", price: "45" },
      { name: "Roasted Cornish Lamb", desc: "Dauphinoise, heritage carrots, rosemary jus", price: "38" },
      { name: "Pan-Seared Halibut", desc: "Crushed peas, brown shrimp butter, samphire", price: "36" },
      { name: "Venison Loin", desc: "Celeriac purée, blackberry, dark chocolate", price: "42" },
      { name: "Lobster Thermidor", desc: "Gruyère gratin, buttered greens, triple-cooked chips", price: "52" },
      { name: "Duck Breast", desc: "Confit leg bonbon, cherry gel, turnip", price: "34" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Sticky Toffee Pudding", desc: "Clotted cream, butterscotch sauce", price: "14" },
      { name: "Dark Chocolate Fondant", desc: "Salted caramel ice cream, honeycomb", price: "16" },
      { name: "Eton Mess", desc: "Chantilly cream, fresh strawberries, meringue", price: "13" },
      { name: "British Cheese Board", desc: "Stilton, Cheddar, Brie, quince, biscuits", price: "18" },
      { name: "Crème Brûlée", desc: "Tahitian vanilla, lavender shortbread", price: "14" },
    ],
  },
]

function DishCard({
  dish,
  index,
}: {
  dish: (typeof signatureDishes)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={dish.image}
          alt={`${dish.name} - Signature dish at INTERNITY`}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent" />
      </div>
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        <h3 className="font-serif text-xl md:text-2xl text-[#F5F0E8] tracking-wide">
          {dish.name}
        </h3>
      </div>
    </div>
  )
}

export function MenuSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.15)
  const { ref: specialRef, isVisible: specialVisible } = useScrollAnimation(0.1)

  return (
    <section id="menu" className="bg-[#0D0D0D] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section label */}
        <div ref={headingRef} className="mb-14 md:mb-20">
          <span
            className={`inline-block text-xs tracking-[0.3em] uppercase text-[#C9A84C]/60 font-sans mb-4 transition-all duration-700 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Signature Dishes
          </span>
        </div>

        {/* Signature dish cards - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {signatureDishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        {/* Special items */}
        <div
          ref={specialRef}
          className={`mt-16 md:mt-24 grid md:grid-cols-2 gap-px bg-[#2A2A2A] transition-all duration-700 ${
            specialVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {specialItems.map((item, i) => (
            <div
              key={item.name}
              className="bg-[#0D0D0D] p-6 md:p-8 flex items-center justify-between"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div>
                <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]/50 font-sans">
                  {item.label}
                </span>
                <h4 className="mt-2 font-serif text-lg md:text-xl text-[#F5F0E8] uppercase tracking-wider">
                  {item.name}
                </h4>
              </div>
              <span className="font-serif text-2xl md:text-3xl text-[#C9A84C]">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
