import { motion } from "framer-motion";

const services = [
  {
    name: "USA",
    desc: "H1-B visa prep and early appointments within 60-90 days.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "Canada",
    desc: "PR filing, work permits, study visas, and tourist visas.",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "United Kingdom",
    desc: "Visitor visas, student visas, and work visa applications.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "Australia",
    desc: "Support for visitor, family, study, and skilled migration visas.",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
  },
  {
    name: "New Zealand",
    desc: "Guidance for work, study, and visitor visas, tailored for you.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  },
  {
    name: "Schengen",
    desc: "Simplified tourist visa and long-term stay processing for Europe.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  },
];

const VisaServices = () => {
  return (
    <section className="relative bg-[#faf6f6] py-20 px-6 lg:px-16 font-['Manrope']">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#780606] uppercase tracking-tight"
        >
          VisaVirtue — <span className="text-gray-900">Highlights of Our Services</span>
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Simplifying global visa processes with expert assistance, trusted guidance, and
          transparent service — every step of your journey.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-[#780606]/30 flex items-center justify-center bg-[#fff0f0] shadow-inner">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#780606] mb-2 uppercase tracking-wide">
              {service.name}
            </h3>
            <p className="text-gray-600 mb-5 font-medium">{service.desc}</p>
            <button className="bg-[#780606] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisaServices;
