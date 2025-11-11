import React, { useState, useMemo } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { visaDestinationsData } from "../data/VisaDestinationData";
import { Link, useNavigate } from "react-router-dom";

const VisaDestinations = ({ showAll = false }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter destinations based on search query
  const filteredDestinations = useMemo(() => {
    return visaDestinationsData.filter((dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Limit destinations for home page
  const destinationsToShow = showAll
    ? filteredDestinations
    : filteredDestinations.slice(0, 5);

  // Redirect function
  const handleRedirect = (destination) => {
    navigate("/visas/apply-visa", {
      state: {
        fromCountry: "",
        toCountry: destination.name,
      },
    });
  };

  return (
    <div className="relative py-20 bg-white overflow-hidden font-['Manrope']">
      {/* Background Motion */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#780606]/10 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#780606]/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-[Poppins] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          <span className="text-[#f4b02a]">Global Visa Solutions</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Get your visa approved smoothly & on time. Explore our most popular
          destinations with thousands of successful visas delivered on time.
          Wherever you plan to go,{" "}
          <span className="text-[#f4b02a] font-semibold">VisaVirtue</span> has
          you covered.
        </motion.p>

        {/* Search Bar (only show on services page) */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center mb-12"
          >
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-3 rounded-full border border-[#e7c6c6] focus:border-[#780606] focus:ring-4 focus:ring-[#780606]/20 transition-all duration-300 outline-none shadow-md bg-[#fffaf5] placeholder-gray-500 text-gray-700"
              />
            </div>
          </motion.div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 justify-items-center">
          {destinationsToShow.length > 0 ? (
            destinationsToShow.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onClick={() => handleRedirect(dest)}
                className="group cursor-pointer w-full max-w-[160px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[260px]"
              >
                {/* Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:scale-105">
                  <LazyLoadImage
                    effect="blur"
                    src={dest.image}
                    alt={dest.name}
                    wrapperClassName="!block"
                    className="w-full h-40 sm:h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="hidden sm:block absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="hidden sm:block absolute bottom-0 w-full text-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm mb-3">{dest.desc}</p>

                    {/* More Details button only for desktop */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRedirect(dest);
                      }}
                      className="px-4 py-2 bg-[#780606] rounded-full text-white text-xs sm:text-sm font-semibold transition-transform duration-200 hover:bg-[#5a0404] hover:scale-[1.03] shadow-md"
                    >
                      More Details
                    </button>
                  </div>
                </div>

                {/* Mobile Country Name (below the card) */}
                <div className="block sm:hidden mt-2 text-center">
                  <h3 className="text-base font-semibold text-gray-800">
                    {dest.name}
                  </h3>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-lg col-span-full mt-10">
              No countries found.
            </p>
          )}
        </div>

        {/* View All Button (only for home page) */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link to="/visas">
              <button className="flex items-center gap-2 bg-[#780606] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a0404] transition-transform duration-200 hover:scale-[1.03] shadow-md">
                View All Visas <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default React.memo(VisaDestinations);
