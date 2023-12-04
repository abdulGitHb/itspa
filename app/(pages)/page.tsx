import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ServiceSection from '@/components/ServiceSectionTwo'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import OpenHoursSection from '@/components/open-hour-section'
import TestimonialsSection from '@/components/testimonials-section'
import Head from 'next/head'
import Image from 'next/image'

// Hex Codes: #E9E1CC, #C2C0A2, #9A9F78, #616847

export default function Home() {
  return (
    <>
    <main>
      <HeroSection/>
      <AboutSection/>
      {/* <ServicesSection/> */}
      <ServiceSection/>
      <OpenHoursSection/>
      <TestimonialsSection/>
      {/* <ContactSection/> */}
      <Footer/>
    </main>
      
    </>
  )
}
