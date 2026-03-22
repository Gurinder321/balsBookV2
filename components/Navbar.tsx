'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Books', href: '#books' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-gold-100/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span className={`font-serif font-light tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-stone-800' : 'text-stone-700'
          }`} style={{ fontSize: '1.15rem' }}>
            Serena Vale
          </span>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-[10px] tracking-widest2 uppercase transition-colors duration-300
                hover:text-gold-400 ${scrolled ? 'text-stone-500' : 'text-stone-500'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex btn-primary text-[10px] py-2 px-5 ${
            scrolled ? '' : 'border-stone-400/50 text-stone-500'
          }`}
        >
          <span>Get Updates</span>
        </a>
      </div>
    </motion.header>
  )
}
