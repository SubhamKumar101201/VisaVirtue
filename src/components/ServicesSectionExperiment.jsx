import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

const visaData = [
  {
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
    visas: "53K+",
    date: "15 Oct, 08:34 PM",
  },
  {
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    visas: "32K+",
    date: "13 Oct, 09:18 PM",
  },
  {
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    visas: "30K+",
    date: "11 Nov, 12:00 AM",
  },
  {
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    visas: "27K+",
    date: "16 Oct, 09:12 PM",
  },
  {
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    visas: "16K+",
    date: "13 Oct, 10:08 PM",
  },
];

const VisaServices = () => {
  return (
    <section className="py-20 bg-[#F2F3FA]" id="visa-services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#780606] font-semibold mb-2 flex items-center justify-center gap-2 text-lg">
            <FaGlobe /> Global Visa Solutions
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get Your Visa Approved Smoothly & On Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular destinations with thousands of successful
            visas delivered on time. Wherever you plan to go, VisaVirtue has you covered.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {visaData.map((visa, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={visa.image}
                  alt={visa.country}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#780606] text-white text-sm font-medium px-3 py-1 rounded-md">
                  {visa.visas} Visas on Time
                </div>
              </div>
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {visa.country}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Get on{" "}
                  <span className="text-[#780606] font-medium">{visa.date}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="bg-[#780606] hover:bg-[#5c0404] text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300">
            View All Visas
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaServices;
