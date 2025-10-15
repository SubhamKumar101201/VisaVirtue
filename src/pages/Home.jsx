import React from "react";
import HeroSection from "../components/HeroSection";
import VisaRequirement from "../components/VisaRequirement";
import VisaDestinations from "../components/VisaDestinations";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <HeroSection />
      <VisaRequirement />
      <VisaDestinations />

      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 bg-gradient-to-b from-[#fff8f8] to-[#fdecec] overflow-hidden">

        {/* Background Layers */}
        <div className="absolute inset-0 bg-[url('/61772.jpg')] bg-center bg-cover bg-no-repeat opacity-40"></div>

        {/* Left Image */}
        <div className="relative lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0 z-10">
          <img
            src="https://images.unsplash.com/photo-1654163601053-ea0362be3429?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Visa Assistance"
            className="rounded-[2rem] w-full max-w-md shadow-xl object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative lg:w-1/2 w-full text-center lg:text-left z-10 font-['Manrope']"
        >
          <p className="text-[#b43a3a] font-semibold tracking-wider uppercase mb-3">
            Your Visa, Our Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#780606] leading-snug mb-4">
            Hassle-Free Every Step of the Way
          </h2>

          <p className="text-gray-700 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
            At <span className="font-semibold text-[#780606]">VisaVirtue</span>, we turn complex visa procedures into a smooth, stress-free experience.
            From paperwork to appointments, our experts handle everything so you can focus on your travel plans not the process.
          </p>

          <p className="text-gray-700 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
            <span className="font-semibold text-[#780606]">Fast. Reliable. Transparent.</span> your visa journey,
            simplified and supported at every step.
          </p>

          {/* Trust Line */}
          <p className="text-gray-500 text-sm mb-8 italic">
            Trusted by <span className="text-[#780606] font-semibold">5,000+</span> happy travelers worldwide
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#780606] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              Get Started
            </button>
            <button className="flex items-center gap-2 bg-[#780606] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a0404] transition-transform duration-200 hover:scale-[1.03] shadow-md hover:shadow-lg hover:-translate-y-1">
              <FaPhoneAlt /> Call Us
            </button>
          </div>
        </motion.div>
      </section>


    </>
  );
};

export default Home;
