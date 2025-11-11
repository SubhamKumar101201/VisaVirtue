import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaBolt, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/whatsappLink";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1200&auto=format&fit=crop",
    title: "Get Your UK Tourist Visa",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
    title: "Explore the World with Confidence",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    title: "Travel Made Simple with VisaVirtue",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Soft gradient background on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f9f4f2] via-white to-transparent opacity-70 pointer-events-none" />

      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 space-y-5 text-center lg:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#780606] leading-tight">
          VisaVirtue{" "}
          <span className="text-gray-800 block sm:inline">
            Key to Your Visa.
          </span>
        </h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
          Unlock global opportunities with{" "}
          <span className="font-semibold text-[#780606]">VisaVirtue</span>. We
          simplify complex visa procedures, making your travel journey smooth,
          secure, and stress-free — because every journey begins with the{" "}
          <span className="font-semibold">right key</span>.
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-3 sm:pt-4 text-gray-700">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaGlobe className="text-[#780606] text-lg sm:text-xl" />
            <span>75+ Countries</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaBolt className="text-[#780606] text-lg sm:text-xl" />
            <span>Fast & Flexible</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaShieldAlt className="text-[#780606] text-lg sm:text-xl" />
            <span>Secure & Reliable</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-6">
          <Link
            to="/contact"
            className="bg-[#780606] text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg text-center"
          >
            Book Free Consultation
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#780606] px-6 py-3 rounded-full font-medium border border-[#780606] hover:bg-[#780606] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Chat with Visa Expert
          </a>

        </div>
      </motion.div>

      {/* Right Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 w-full flex justify-center relative z-10 mb-10 lg:mb-0"
      >
        <div className="w-full max-w-md h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl relative border border-[#780606]/10">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-[1200ms] ease-in-out ${current === index ? "opacity-100" : "opacity-0"
                }`}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
            />
          ))}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 bg-black/50 text-white px-4 py-2 rounded-lg text-sm sm:text-lg font-medium shadow-md backdrop-blur-sm">
            {slides[current].title}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
