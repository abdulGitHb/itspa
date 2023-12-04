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

export default function Home() {
  return (
    <>
    <main>
      <HeroSection/>
      {/* <ServicesSection/> */}
      <ServiceSection/>
      <OpenHoursSection/>
      <AboutSection/>
      <TestimonialsSection/>
      {/* <ContactSection/> */}
      <Footer/>
    </main>
      
    </>
  )
}
