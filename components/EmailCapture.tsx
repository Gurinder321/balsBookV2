'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function EmailCapture() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #2c2417 0%, #3d3122 50%, #2c2417 100%)' }}
    >
      {/* Decorative scatter */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#c9a96e' }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: '#d4b896' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-sans text-[10px] tracking-widest3 text-gold-300 uppercase mb-5"
        >
          Stay Close
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-cream-100 leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Be the First to Know
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-24 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif italic text-stone-400 leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
        >
          New releases, cover reveals, and the occasional love letter
          from Serena — delivered quietly to your inbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/5 border border-white/15 text-cream-100 placeholder-stone-500
                  px-5 py-3 font-sans text-sm focus:outline-none focus:border-gold-300/60
                  transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                <span>Subscribe</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-5"
            >
              <p className="font-serif italic text-gold-300 text-lg">
                Welcome to the story, darling.
              </p>
              <p className="font-sans text-stone-500 text-xs tracking-widest mt-2 uppercase">
                You're on the list
              </p>
            </motion.div>
          )}

          <p className="font-sans text-[10px] text-stone-600 tracking-wider mt-4 uppercase">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
