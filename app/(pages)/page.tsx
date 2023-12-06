import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ServiceSection from '@/components/ServiceSectionTwo'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import OpenHoursSection from '@/components/open-hour-section'
import OurCenters from '@/components/our-centers'
import OurTeam from '@/components/our-team'
import TestimonialsSection from '@/components/testimonials-section'
import Head from 'next/head'
import Image from 'next/image'

// Hex Codes: #E9E1CC, #C2C0A2, #9A9F78, #616847

export default function Home() {
  return (
    <>
    
    <style>
      @import url(https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap);
    </style>
    <main>
      <HeroSection/>
      {/* <AboutSection/> */}
      <ServicesSection/>
      <ServiceSection/>
      <OurCenters/>
      <OpenHoursSection/>
      <OurTeam/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </main>
      
    </>
  )
}
