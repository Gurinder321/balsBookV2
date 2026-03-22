'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder — left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Double-bezel frame treatment */}
            <div className="relative border border-gold-200/50 p-3">
              <div className="relative border border-gold-100/40 overflow-hidden"
                style={{ aspectRatio: '4/5' }}>
                {/* Author photo placeholder — warm tone */}
                <div
                  className="w-full h-full flex items-end"
                  style={{
                    background: 'linear-gradient(160deg, #e8d9c5 0%, #d4c3ae 40%, #c4af98 100%)',
                  }}
                >
                  {/* Silhouette suggestion */}
                  <svg
                    viewBox="0 0 400 500"
                    className="w-full opacity-20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="200" cy="160" rx="80" ry="90" fill="#7a6050" />
                    <path d="M80 500 Q120 320 200 300 Q280 320 320 500 Z" fill="#7a6050" />
                  </svg>
                </div>
              </div>

              {/* Quote card overlapping corner */}
              <div className="absolute -bottom-6 -right-6 bg-cream-50 border border-gold-200/50 p-5 shadow-lg max-w-[220px]">
                <p className="font-serif italic text-stone-500 text-sm leading-relaxed">
                  "I write the love stories I couldn't find — and couldn't forget."
                </p>
                <p className="font-sans text-[9px] tracking-widest2 text-gold-400 uppercase mt-2">
                  — Serena Vale
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:pl-8"
          >
            <p className="font-sans text-[10px] tracking-widest3 text-gold-400 uppercase mb-5">
              The Author
            </p>
            <h2
              className="font-serif font-light text-stone-800 leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              About Serena Vale
            </h2>
            <div className="divider-gold w-20 mb-7" />

            <div className="space-y-4 font-sans text-stone-500 text-sm leading-loose">
              <p>
                Serena Vale is a USA Today bestselling author of contemporary romance, known
                for her lush prose and achingly real characters. With four novels to her name,
                she has built a devoted readership that returns for the slow burns, the
                heartbreaks, and the endings that feel earned.
              </p>
              <p>
                She writes from a sun-drenched studio in the south of France, fuelled by
                strong espresso, longer walks, and the belief that every great love story
                starts with two people who probably shouldn't fall for each other.
              </p>
              <p>
                When she isn't writing, you'll find her pressing wildflowers into notebooks
                and recommending books to strangers in airports.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gold-100/60 grid grid-cols-3 gap-4">
              {[
                { num: '4', label: 'Novels' },
                { num: '500K+', label: 'Readers' },
                { num: '12', label: 'Awards' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif font-light text-stone-700 text-3xl">{stat.num}</p>
                  <p className="font-sans text-[9px] tracking-widest2 text-gold-400 uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
