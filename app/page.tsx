import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Books from '@/components/Books'
import FeaturedBook from '@/components/FeaturedBook'
import About from '@/components/About'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Books />
      <FeaturedBook />
      <About />
      <section id="contact">
        <EmailCapture />
      </section>
      <Footer />
    </main>
  )
}
