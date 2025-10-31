import React from 'react';
import { motion } from "framer-motion";
import VisaDestinations from '../components/VisaDestinations';
import { FaBullhorn } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Services() {
  return (
    <>
      <VisaDestinations showAll />
      {/* CTA Section */}
      <div className="bg-gradient-to-tr from-[#780606] to-[#4a0303] text-white text-center py-12 sm:py-16 px-4 sm:px-6 font-['Manrope']">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Let’s Get in Touch and Build Something Great!
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">
            Whether you’re planning your visa journey, seeking expert guidance, or
            just want to collaborate — our team is always excited to connect and help
            you achieve your goals.
          </p>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="inline-block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </>
  );
}
