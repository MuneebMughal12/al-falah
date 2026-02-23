import React from 'react'
import Hero  from "../Components/Hero.jsx"
import AboutSection from '../Components/Aboutsection.jsx'
import TransformationSection from '../Components/TransformationSection.jsx'
import BenefitsSection from '../Components/BenefitsSection.jsx'
import FeaturedCourses from '../Components/FeaturedCourses.jsx'
import TrialFormSection from '../Components/TrialFormSection.jsx'
import ServiceSection from '../Components/ServicesSection.jsx'
import TestimonialSection from '../Components/TestimonialSection.jsx'
import TeachersWhoInspire from '../Components/TeachersWhoInspire.jsx'
import FAQSection from '../Components/FAQSection.jsx'
import FaithConfidenceAndPrograms from '../Components/FaithConfidenceAndPrograms.jsx'
import LearningBlocks from '../Components/LearningBlocks.jsx'
import LocationAccessibilitySection from '../Components/LocationAccessibilitySection.jsx'
import ContactSection from '../Components/ContactSection.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <TransformationSection/>
    <BenefitsSection/>
    <FeaturedCourses/>
    <TrialFormSection/>
    <ServiceSection/>
    <TestimonialSection/>
    <TeachersWhoInspire/>
    <FAQSection/>
    <FaithConfidenceAndPrograms/>
    <LearningBlocks/>
    <LocationAccessibilitySection/>
    <ContactSection/>
    </>
  )
}

export default Home