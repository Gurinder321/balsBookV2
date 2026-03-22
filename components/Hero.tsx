'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const BOOKS = [
  { src: '/books/1book.jpg', title: 'The Scarlet Hour' },
  { src: '/books/2book.jpg', title: 'Beneath Still Waters' },
  { src: '/books/3book.jpg', title: 'A Thousand Midnights' },
  { src: '/books/4book.jpg', title: 'Where You Begin' },
  // duplicated for seamless loop
  { src: '/books/1book.jpg', title: 'The Scarlet Hour' },
  { src: '/books/2book.jpg', title: 'Beneath Still Waters' },
  { src: '/books/3book.jpg', title: 'A Thousand Midnights' },
  { src: '/books/4book.jpg', title: 'Where You Begin' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fdfaf5 0%, #f5ede0 50%, #ede3d4 100%)' }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Decorative circle blur */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 z-0"
        style={{ background: 'radial-gradient(circle, #d4b896 0%, transparent 70%)' }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-12"
      >
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[10px] tracking-widest3 text-gold-400 uppercase mb-6"
        >
          Bestselling Romance Author
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-stone-800 leading-none mb-3"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
        >
          Serena Vale
        </motion.h1>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-6"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic font-light text-stone-500 max-w-lg leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
        >
          Stories that pull you under — and make you want to drown.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#books" className="btn-primary">
            <span>Explore Books</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Cinematic Book Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="relative z-10 w-full mt-8 pb-16 overflow-hidden"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{ background: 'linear-gradient(90deg, #fdfaf5, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{ background: 'linear-gradient(270deg, #fdfaf5, transparent)' }} />

        <div className="flex gap-6 animate-marquee w-max">
          {BOOKS.map((book, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 group cursor-pointer"
              style={{ width: 'clamp(100px, 12vw, 150px)' }}
            >
              <div className="relative overflow-hidden rounded-sm shadow-md book-glow"
                style={{ aspectRatio: '2/3' }}>
                <Image
                  src={book.src}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="150px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[9px] tracking-widest3 text-gold-400/70 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-300/70 to-transparent"
        />
      </motion.div>
    </section>
  )
}
