import { motion } from "framer-motion";

const services = [
  {
    country: "USA",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    desc: "H1-B visa prep and early appointments within 60–90 days.",
  },
  {
    country: "Canada",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    desc: "PR filing, work permits, study visas, and tourist visas.",
  },
  {
    country: "United Kingdom",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    desc: "Visitor visas, student visas, and work visa applications.",
  },
  {
    country: "Australia",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    desc: "Visitor, family, study, and skilled migration visa assistance.",
  },
  {
    country: "New Zealand",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    desc: "Work, study, and visitor visa guidance personalized for you.",
  },
  {
    country: "Schengen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    desc: "Simplified tourist and long-term stay visa processes for Europe.",
  },
];

const HighlightsSection = () => {
  return (
    <div className="relative w-full bg-white text-gray-700 font-['Manrope'] overflow-hidden py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute -top-40 -left-20 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#780606]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#780606]/5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#780606] mb-3 leading-tight">
            Highlights <span className="text-gray-900">of Our Services</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Explore top destinations where{" "}
            <span className="text-[#780606] font-semibold">VisaVirtue</span>{" "}
            simplifies your visa journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7 md:gap-8 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-sm sm:shadow-lg p-5 sm:p-6 md:p-7 flex flex-col items-center text-center hover:shadow-2xl border border-transparent hover:border-[#780606]/50 transition-all duration-300 ease-in-out"
            >
              {/* Flag Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 rounded-full overflow-hidden border-4 border-[#780606]/20 shadow-md">
                <img
                  src={service.image}
                  alt={service.country}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#780606] mb-2">
                {service.country}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                {service.desc}
              </p>

              {/* CTA Button */}
              <button className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full bg-[#780606] text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
