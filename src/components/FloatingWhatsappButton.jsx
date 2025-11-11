import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { whatsappLink } from "../lib/whatsappLink";

const FloatingWhatsappButton = ({ scrollVisible }) => {

  return (
    <>
      {/* Desktop / Tablet Version */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed right-5 z-50 items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-all duration-300"
        style={{
          boxShadow: "0 0 10px 2px rgba(37, 211, 102, 0.5)",
        }}
        animate={{
          bottom: scrollVisible ? "6.5rem" : "1.5rem", // moves up/down based on scroll button
          boxShadow: [
            "0 0 10px 2px rgba(37, 211, 102, 0.4)",
            "0 0 16px 4px rgba(37, 211, 102, 0.7)",
            "0 0 10px 2px rgba(37, 211, 102, 0.4)",
          ],
        }}
        transition={{
          bottom: { duration: 0.4, ease: "easeInOut" },
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 16px 4px rgba(37, 211, 102, 0.7)",
        }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

      {/* Mobile Version */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed bottom-0 left-0 w-full bg-[#780606] text-white font-semibold text-base flex items-center justify-center gap-2 py-3 z-50 shadow-[0_-2px_8px_rgba(0,0,0,0.15)] border-t border-[#5a0404]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <FaWhatsapp className="text-lg text-[#25D366]" />
        Whatsapp Us
      </motion.a>
    </>
  );
};

export default FloatingWhatsappButton;
