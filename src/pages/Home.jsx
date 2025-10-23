import React from "react";
import HeroSection from "../components/HeroSection";
import VisaRequirement from "../components/VisaRequirement";
import VisaDestinations from "../components/VisaDestinations";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import HighlightsSection from "../components/HighlightsSection";
import VisaServices from "../components/VisaServicesExperiment";
import VisaAssistanceSection from "../components/VisaAssistanceSection";
import Testimonials from "../components/TestimonialsSection";
import ReferAFriend from "../components/ReferAFriend";

const Home = () => {
  return (
    <>
      <HeroSection />
      <VisaRequirement />
      <VisaDestinations />

      {/* Visa Assistance Promo Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 bg-white overflow-hidden font-['Manrope']">
        {/* Gradient Glow */}
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#780606]/10 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#780606]/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
          className="relative lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0 z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1654163601053-ea0362be3429?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Visa Assistance"
            className="rounded-[2rem] w-full max-w-md shadow-xl object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
          className="relative lg:w-1/2 w-full text-center lg:text-left z-10"
        >
          <h1 className="text-5xl md:text-5xl font-extrabold text-[#780606] leading-tight">
            Your Visa<span className="text-gray-800">, Our Expertise</span>
          </h1>
          <br />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#780606] leading-snug mb-4">
            Hassle-Free Every Step of the Way
          </h2>

          <p className="text-gray-700 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
            At <span className="font-semibold text-[#780606]">VisaVirtue</span>, we turn complex visa procedures into a smooth, stress-free experience.
            From paperwork to appointments, our experts handle everything so you can focus on your travel plans — not the process.
          </p>

          <p className="text-gray-700 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
            <span className="font-semibold text-[#780606]">Fast. Reliable. Transparent.</span> Your visa journey,
            simplified and supported at every step.
          </p>

          <p className="text-gray-500 text-sm mb-8 italic">
            Trusted by <span className="text-[#780606] font-semibold">5,000+</span> happy travelers worldwide
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#780606] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              Get Started
            </button>
            <button className="flex items-center gap-2 bg-[#780606] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a0404] transition-transform duration-200 hover:scale-[1.03] shadow-md hover:shadow-lg hover:-translate-y-1">
              <FaPhoneAlt /> Call Us
            </button>
          </div>
        </motion.div>
      </div>

      <HighlightsSection />
      <VisaAssistanceSection />
      <Testimonials />
      {/* <VisaServices /> */}
      <ReferAFriend />

      {/* Company Info & Location */}
      <div className="relative w-full bg-white text-gray-700 font-['Manrope'] overflow-hidden">

        {/* Background Blobs */}
        <motion.div
          className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-[#780606]/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#780606]/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20 gap-14">

          {/* Left - Info & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-5xl font-extrabold text-[#780606] leading-tight">
              Visit <span className="text-gray-800">VisaVirtue</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              We’re passionate about guiding you through every visa step —
              whether you’re planning to study abroad, travel, or explore new opportunities.
              Come meet us in person or reach out anytime.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#780606] text-xl" />
                <p className="text-gray-700">123 Premium Plaza, Andheri West, Mumbai, India</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#780606] text-xl" />
                <p className="text-gray-700">support@visavirtue.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#780606] text-xl" />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                <FaClock className="text-[#780606] text-xl" />
                <p className="text-gray-700">Mon – Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#780606] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-[#5a0404] transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right - Map + Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative flex justify-center"
          >
            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-lg">
              <iframe
                title="VisaVirtue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0932811559173!2d144.95373631561668!3d-37.81627997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d3fbb8a7%3A0x2b0a0c7d4bbfdd83!2sVisaVirtue%20Consultancy!5e0!3m2!1sen!2sin!4v1698923456789!5m2!1sen!2sin"
                className="w-full h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            {/* Floating Glass Card */}
            <motion.div
              className="absolute top-8 right-8 bg-white/80 backdrop-blur-lg border border-[#780606]/20 rounded-2xl px-6 py-4 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#780606] font-semibold text-lg">📍 Our Office</p>
              <p className="text-gray-600 text-sm">Mumbai, India</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </>
  );
};

export default Home;
