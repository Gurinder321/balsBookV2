'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FeaturedBook() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0e6d6 0%, #ede0ce 50%, #e8d9c5 100%)' }}
    >
      {/* Decorative background text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-serif font-light text-stone-300/20 whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 15vw, 16rem)', letterSpacing: '-0.02em' }}
        >
          Bestseller
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Book cover — left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto md:mx-0"
            style={{ maxWidth: '340px', width: '100%' }}
          >
            {/* Glow behind cover */}
            <div
              className="absolute -inset-6 rounded-lg opacity-40 blur-2xl"
              style={{ background: 'radial-gradient(ellipse, #c9a96e, transparent 70%)' }}
            />
            <div className="relative shadow-2xl rounded-sm overflow-hidden book-glow"
              style={{ aspectRatio: '2/3' }}>
              <Image
                src="/books/1book.jpg"
                alt="The Scarlet Hour"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 340px"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-cream-50 border border-gold-200/60 px-4 py-3 shadow-lg">
              <p className="font-sans text-[9px] tracking-widest2 text-gold-400 uppercase">Readers' Favourite</p>
              <p className="font-serif text-stone-700 text-sm mt-0.5">Top Pick 2024</p>
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="font-sans text-[10px] tracking-widest3 text-gold-400 uppercase mb-4">
              Featured
            </p>
            <h2
              className="font-serif font-light text-stone-800 leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              The Scarlet Hour
            </h2>
            <div className="divider-gold w-20 mb-6" />
            <p className="font-serif italic text-stone-500 text-lg leading-relaxed mb-4">
              "A master of slow burn and stolen glances."
            </p>
            <p className="font-sans text-stone-500 text-sm leading-loose mb-8 max-w-md">
              Elena never expected the man hired to protect her to be the one
              who would shatter every wall she'd built. Set against the sun‑soaked
              hills of Tuscany, <em>The Scarlet Hour</em> is a story about the fine
              line between safety and surrender — and what happens when you step
              over it willingly.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#" className="btn-primary">
                <span>Read Sample</span>
              </a>
              <a
                href="#"
                className="font-sans text-[11px] tracking-widest2 text-stone-400 uppercase
                  hover:text-gold-400 transition-colors duration-300 underline-offset-4
                  hover:underline"
              >
                Where to Buy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
