import React from 'react';
import HeroSection from '../components/HeroSection';
import VisaRequirement from '../components/VisaRequirement';
import VisaDestinations from '../components/VisaDestinations';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisaRequirement />
      <VisaDestinations />
    </>
  );
}
