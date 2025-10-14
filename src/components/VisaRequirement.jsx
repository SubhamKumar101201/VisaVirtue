import { useState } from "react";
import { motion } from "framer-motion";
import { FaComments, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function VisaRequirement() {
  const [citizen, setCitizen] = useState("India");
  const [destination, setDestination] = useState("");

  const citizens = ["India", "USA", "UK", "Canada", "Australia", "Germany"];
  const destinations = [
    "Japan",
    "France",
    "UAE",
    "Singapore",
    "Italy",
    "Thailand",
    "USA",
    "Canada",
  ];

  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-12 mb-24"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1657358846130-3305fd8fcd30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto text-center text-white"
      >
        {/* Title */}
        <h2 className="font-[Poppins],sans-serif text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-[#f4b02a]">Visa Requirements</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Every journey begins with the right visa. Discover the documents and
          process you need — whether it’s for travel, work, or study. Let{" "}
          <span className="text-[#f4b02a] font-semibold">VisaVirtue</span> make
          it simple for you.
        </p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-white/40 shadow-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
              {/* Citizen Select */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2">For citizens of</label>
                <select
                  value={citizen}
                  onChange={(e) => setCitizen(e.target.value)}
                  className="h-12 px-4 rounded-lg border border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#780606] outline-none"
                >
                  {citizens.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Destination Select */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2">Traveling to</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-12 px-4 rounded-lg border border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#780606] outline-none"
                >
                  <option value="">Select Country</option>
                  {destinations.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Button */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 invisible">Check</label>
                <button
                  type="button"
                  className="h-12 w-full px-4 rounded-lg bg-[#780606] hover:bg-[#5a0404] text-white font-semibold transition-transform duration-200 hover:scale-[1.03] shadow-md"
                >
                  Check Requirements
                </button>
              </div>

            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-sm text-gray-200">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-[#f4b02a]">
                <FaComments /> <span className="text-white">Live Chat</span>
              </span>
              <span className="flex items-center gap-2 text-[#25D366]">
                <FaWhatsapp /> <span className="text-white">WhatsApp</span>
              </span>
              <span className="flex items-center gap-2 text-[#f4b02a]">
                <FaPhoneAlt /> <span className="text-white">+91 98765 43210</span>
              </span>
            </div>
            <div className="text-gray-300 text-xs">
              Tip: Select your country & destination to view requirements.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
