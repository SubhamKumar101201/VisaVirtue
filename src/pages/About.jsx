import { motion } from "framer-motion";
import { FaGlobeAmericas, FaHandshake, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

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
          About <span className="text-gray-800">VisaVirtue</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
        >
          We’re more than a visa consultancy — we’re your trusted travel partner.
          Our mission is to make global travel simple, transparent, and accessible to everyone.
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="px-6 md:px-20 py-10 md:py-16 text-center relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#780606] mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed"
        >
          Founded with a vision to simplify visa processing, VisaVirtue bridges the gap between travelers and complex immigration systems.
          Our experts ensure every document, every step, and every detail is handled with utmost care and precision.
        </motion.p>
      </div>

      {/* Vision + Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12 relative z-10">
        {[
          {
            title: "Our Mission",
            desc: "To empower individuals and businesses to explore global opportunities through simplified, secure, and transparent visa solutions.",
            icon: <FaHandshake className="text-3xl text-[#780606]" />,
          },
          {
            title: "Our Vision",
            desc: "To be the world’s most trusted name in global mobility, redefining the visa experience with innovation and integrity.",
            icon: <FaGlobeAmericas className="text-3xl text-[#780606]" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-[#780606]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#780606]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#780606]">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#780606]/5 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-[#780606]"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { num: "15K+", label: "Clients Assisted" },
            { num: "60+", label: "Countries Served" },
            { num: "99%", label: "Success Rate" },
            { num: "24/7", label: "Expert Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4"
            >
              <h3 className="text-4xl font-extrabold text-[#780606] mb-2">{item.num}</h3>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team / Commitment Section */}
      <div className="px-6 md:px-20 py-16 text-center relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-[#780606]"
        >
          Why Choose VisaVirtue
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Because we go beyond processing visas — we build experiences, trust, and confidence.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaUsers />, title: "Dedicated Experts", desc: "A passionate team committed to guiding you through every visa challenge with personalized attention." },
            { icon: <FaAward />, title: "Trusted by Thousands", desc: "Recognized for excellence and reliability across student, work, and travel visas globally." },
            { icon: <FaGlobeAmericas />, title: "Global Presence", desc: "Extending our support network to 60+ countries with local insights and international expertise." },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-[#780606]/10 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#780606]/10 w-14 h-14 rounded-2xl flex items-center justify-center text-[#780606] text-2xl mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#780606]">{card.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-tr from-[#780606] to-[#4a0303]  text-white text-center py-14 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Let’s Make Your Journey Happen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-gray-200 mb-8"
        >
          Start your visa process with experts who care. Transparent, fast, and stress-free from start to stamp.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.25)" }}
          className="inline-block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
}
