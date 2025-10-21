import { motion } from "framer-motion";
import { FaPlaneDeparture, FaRegPaperPlane } from "react-icons/fa";

const VisaAssistance = () => {
  return (
    <div className="relative py-16 px-6 lg:px-20 bg-white font-['Manrope'] overflow-hidden">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#780606] mb-3">
            Visa Assistance <span className="text-gray-900">Made Simple</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            From paperwork to approvals — we make your visa journey quick, easy, and stress-free.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {[
            { number: "1,800+", label: "Happy Clients" },
            { number: "70+", label: "Countries Covered" },
            { number: "12k+", label: "Applications Processed" },
            { number: "99%", label: "Approval Rate" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-extrabold text-[#780606]">{stat.number}</h3>
              <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          className="mt-20 flex flex-col md:flex-row items-center justify-between bg-[#fff8f8] rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full border border-[#780606]/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Text Side */}
          <div className="flex-1 p-10 md:p-14 text-left">
            <p className="text-sm font-semibold text-[#780606] uppercase mb-3 tracking-wider flex items-center gap-2">
              <FaPlaneDeparture /> Apply for Your Visa
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5">
              You plan the trip, <span className="text-[#780606]">we’ll handle the process.</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our visa specialists handle every detail — from document verification to embassy scheduling.
              Enjoy a hassle-free experience that gets you one step closer to your next destination.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#780606] text-white font-semibold hover:bg-white hover:text-[#780606] border border-[#780606] transition-all duration-300 shadow-md hover:shadow-lg">
              Apply Now
              <FaRegPaperPlane className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image Side with border + shadow + hover motion */}
          <motion.div
            className="flex-1 flex items-center justify-center relative p-6"
            initial={{ opacity: 0, x: 80, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.img
              src="/person-show-hassle-free-services.png"
              alt="Visa Assistance"
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="w-80 h-auto rounded-2xl border border-[#780606]/30 shadow-xl hover:shadow-[#780606]/30 transition-all duration-500 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisaAssistance;
