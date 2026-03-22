'use client'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Goodreads', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Newsletter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-cream-50 border-t border-gold-100/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Wordmark */}
        <div className="text-center md:text-left">
          <p className="font-serif font-light text-stone-700 text-xl tracking-wide">Serena Vale</p>
          <p className="font-sans text-[9px] tracking-widest2 text-gold-400 uppercase mt-1">
            Romance Author
          </p>
        </div>

        {/* Social links */}
        <nav className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[10px] tracking-widest text-stone-400 uppercase
                hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-[10px] tracking-wider text-stone-300 uppercase text-center md:text-right">
          © {new Date().getFullYear()} Serena Vale
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="divider-gold max-w-6xl mx-auto mt-8" />
    </footer>
  )
}
