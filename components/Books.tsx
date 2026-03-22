'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BOOKS = [
  {
    id: 1,
    src: '/books/1book.jpg',
    title: 'The Scarlet Hour',
    tagline: 'A forbidden desire. An unforgivable choice.',
    coming: false,
  },
  {
    id: 2,
    src: '/books/2book.jpg',
    title: 'Beneath Still Waters',
    tagline: 'He pulled her from the deep — then let her fall.',
    coming: false,
  },
  {
    id: 3,
    src: '/books/3book.jpg',
    title: 'A Thousand Midnights',
    tagline: 'Every night felt like a beginning.',
    coming: false,
  },
  {
    id: 4,
    src: '/books/4book.jpg',
    title: 'Where You Begin',
    tagline: 'The most dangerous place to fall in love.',
    coming: true,
  },
]

function BookCard({ book, index }: { book: (typeof BOOKS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center"
    >
      {/* Book cover */}
      <div className="relative w-full book-glow rounded-sm overflow-hidden shadow-lg"
        style={{ aspectRatio: '2/3' }}>
        <Image
          src={book.src}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 80vw, 25vw"
          priority={index < 2}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <a
            href="#"
            className="w-full text-center font-sans text-[10px] tracking-widest2 uppercase
              text-cream-100 border border-cream-100/50 py-2 hover:bg-cream-100/10
              transition-colors duration-300"
          >
            View Book
          </a>
        </div>

        {/* Coming soon badge */}
        {book.coming && (
          <div className="absolute top-4 right-4">
            <span
              className="font-sans text-[9px] tracking-widest2 uppercase
                bg-cream-50/90 text-gold-400 px-2.5 py-1
                backdrop-blur-sm border border-gold-200/60"
            >
              Coming August
            </span>
          </div>
        )}
      </div>

      {/* Book info */}
      <div className="mt-5 text-center px-2">
        <p className="font-sans text-[9px] tracking-widest2 text-gold-400 uppercase mb-1.5">
          {book.coming ? 'New Release' : `Book ${book.id}`}
        </p>
        <h3 className="font-serif font-light text-stone-800 leading-tight mb-2"
          style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}>
          {book.title}
        </h3>
        <p className="font-serif italic text-stone-400 text-sm leading-snug">
          {book.tagline}
        </p>
      </div>
    </motion.div>
  )
}

export default function Books() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-40px' })

  return (
    <section id="books" className="py-28 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-sans text-[10px] tracking-widest3 text-gold-400 uppercase mb-4"
          >
            The Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-stone-800"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Stories to Remember
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="divider-gold w-32 mx-auto mt-5"
          />
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {BOOKS.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
