import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Model from '@/components/Model'
import Why from '@/components/Why'
import Offices from '@/components/Offices'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Model />
        <Why />
        <Offices />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
