import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const visible = window.scrollY > 300;
      setIsVisible(visible);
      if (onVisibilityChange) onVisibilityChange(visible); // notify parent
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onVisibilityChange]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          className="fixed right-6 z-50 bg-[#780606] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#5a0404] hover:scale-105 transition-transform duration-300 
                     bottom-[5.2rem] sm:bottom-6"
        >
          <FaArrowUp size={10} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
