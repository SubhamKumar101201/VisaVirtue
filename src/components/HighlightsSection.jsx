import { motion } from "framer-motion";

const services = [
  {
    country: "USA",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    desc: "H1-B visa prep and early appointments within 60–90 days.",
  },
  {
    country: "Canada",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    desc: "PR filing, work permits, study visas, and tourist visas.",
  },
  {
    country: "United Kingdom",
    image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    desc: "Visitor visas, student visas, and work visa applications.",
  },
  {
    country: "Australia",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    desc: "Visitor, family, study, and skilled migration visa assistance.",
  },
  {
    country: "New Zealand",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    desc: "Work, study, and visitor visa guidance personalized for you.",
  },
  {
    country: "Schengen",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    desc: "Simplified tourist and long-term stay visa processes for Europe.",
  },
];

const HighlightsSection = () => {
  return (
    <div className="relative py-20 px-6 lg:px-16 bg-white font-['Manrope'] overflow-hidden">
      {/* Parent Div */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Child 1: Heading with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#780606] mb-4">
            Highlights <span className="text-gray-900">of Our Services</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Explore top destinations where{" "}
            <span className="text-[#780606] font-semibold">VisaVirtue</span>{" "}
            simplifies your visa journey.
          </p>
        </motion.div>

        {/* Child 2: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
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
              whileHover={{ scale: 1.06 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl border border-transparent hover:border-[#780606] transition-all duration-200 ease-in-out"
            >
              <div className="w-20 h-20 mb-5 rounded-full overflow-hidden border-4 border-[#780606]/20 shadow-md">
                <img
                  src={service.image}
                  alt={service.country}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#780606] mb-3">
                {service.country}
              </h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {service.desc}
              </p>
              <button className="px-5 py-2 rounded-full bg-[#780606] text-white text-sm font-semibold hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg">
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
