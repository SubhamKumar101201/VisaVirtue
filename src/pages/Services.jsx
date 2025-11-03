import { motion } from "framer-motion";
import { services } from "../data/servicesList";

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-[#fff5f5] via-white to-[#fff0f0] min-h-screen font-['Manrope'] relative overflow-hidden">
      {/* Floating gradients */}
      <div className="absolute -top-20 -left-20 w-60 md:w-80 h-60 md:h-80 bg-[#780606]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-[#4a0303]/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center py-16 md:py-24 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#780606]"
        >
          Our <span className="text-gray-800">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Explore our range of professional travel and visa assistance services
          designed to make your journey smooth, secure, and stress-free.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-12 pt-0 pb-12 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(120,6,6,0.4)] transition-all duration-300 overflow-hidden border border-[#780606]/20 hover:-translate-y-1 flex flex-col"
          >
            {/* Image Section */}
            <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-100 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="text-[#780606] text-3xl mb-3">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-tr from-[#780606] to-[#4a0303] text-white text-center py-14 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-gray-200 mb-8"
        >
          Let our experts handle the details while you focus on your travel
          goals. Seamless, professional, and reliable.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255,255,255,0.25)",
          }}
          className="inline-block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
}
