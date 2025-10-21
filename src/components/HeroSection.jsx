import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaBolt, FaShieldAlt } from "react-icons/fa";

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
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 bg-white">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 space-y-6 text-center lg:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#780606] leading-tight">
          VisaVirtue <span className="text-gray-800">Key to Your Visa.</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
          Unlock global opportunities with{" "}
          <span className="font-semibold text-[#780606]">VisaVirtue</span>. We
          simplify complex visa procedures, making your travel journey smooth,
          secure, and stress-free — because every journey begins with the{" "}
          <span className="font-semibold">right key</span>.
        </p>

        {/* Icons */}
        <div className="flex justify-center lg:justify-start gap-6 pt-4 text-gray-700">
          <div className="flex items-center gap-2">
            <FaGlobe className="text-[#780606] text-xl" />
            <span>75+ Countries</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBolt className="text-[#780606] text-xl" />
            <span>Fast & Flexible</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#780606] text-xl" />
            <span>Secure & Reliable</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-4 pt-6">
          <button className="bg-[#780606] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300">
            Book Free Consultation
          </button>
          <button className="bg-white text-[#780606] px-6 py-3 rounded-full border border-[#780606] hover:bg-[#780606] hover:text-white transition-all duration-300">
            Chat with Visa Expert
          </button>
        </div>
      </motion.div>

      {/* Right Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 w-full flex justify-center relative"
      >
        <div className="w-full max-w-md h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl relative border border-[#780606]/10">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-[1200ms] ease-in-out ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />
          ))}
          <div className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md">
            {slides[current].title}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
