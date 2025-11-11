import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import { Link, useNavigate } from "react-router-dom";
import { countryList as countries } from "../data/countryList"; // Must be object: { IN: "India", AE: "United Arab Emirates", ... }
import { whatsappLink } from "../lib/whatsappLink";

export default function VisaRequirement() {
  const [citizen, setCitizen] = useState("");
  const [destination, setDestination] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  // Convert the imported list into a flag-compatible format
  const countryCodes = useMemo(() => Object.keys(countries), []);
  const destinationOptions = useMemo(
    () => countryCodes.filter((code) => code !== citizen),
    [citizen, countryCodes]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!citizen || !destination) {
      setErrorMessage("Please select both citizenship and destination country.");
      setShowErrorModal(true);
      return;
    }

    // Convert country code to full name
    const citizenName = countries[citizen] || citizen;
    const destinationName = countries[destination] || destination;

    // Redirect to Apply Visa with full country names
    navigate("/visas/apply-visa", {
      state: {
        fromCountry: citizenName,
        toCountry: destinationName,
      },
    });
  };

  useEffect(() => {
    if (showErrorModal) {
      const timer = setTimeout(() => setShowErrorModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showErrorModal]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-cover bg-center relative z-10"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1657358846130-3305fd8fcd30?auto=format&fit=crop&q=80&w=1170')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-[#f4b02a]">Visa Requirements</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Every journey begins with the right visa. Discover the documents and
          process you need — whether it’s for travel, work, or study. Let{" "}
          <span className="text-[#f4b02a] font-semibold">VisaVirtue</span> make
          it simple for you.
        </p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-3xl"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-2xl border border-white/40 shadow-2xl p-6 sm:p-8 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Citizen Select */}
              <div className="flex flex-col relative">
                <label className="text-sm text-gray-600 mb-2">For citizens of</label>
                <div className="rounded-lg border border-gray-200 bg-white text-gray-800 relative z-20">
                  <ReactFlagsSelect
                    countries={countryCodes}
                    customLabels={countries}
                    selected={citizen}
                    onSelect={(code) => {
                      setCitizen(code);
                      if (destination === code) setDestination("");
                    }}
                    placeholder="Select Country"
                    searchable
                    className="w-full !pb-0"
                    selectButtonClassName="w-full h-12 border-0 bg-transparent text-gray-800"
                    dropdownStyle={{
                      position: "absolute",
                      zIndex: 50,
                      width: "100%",
                      background: "white",
                      color: "black",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      maxHeight: "250px",
                      overflowY: "auto",
                    }}
                  />
                </div>
              </div>

              {/* Destination Select */}
              <div className="flex flex-col relative">
                <label className="text-sm text-gray-600 mb-2">Traveling to</label>
                <div className="rounded-lg border border-gray-200 bg-white text-gray-800 relative z-10">
                  <ReactFlagsSelect
                    countries={destinationOptions}
                    customLabels={countries}
                    selected={destination}
                    onSelect={(code) => setDestination(code)}
                    placeholder="Select Destination"
                    searchable
                    className="w-full !pb-0"
                    selectButtonClassName="w-full h-12 border-0 bg-transparent text-gray-800"
                    dropdownStyle={{
                      position: "absolute",
                      zIndex: 40,
                      width: "100%",
                      background: "white",
                      color: "black",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      maxHeight: "250px",
                      overflowY: "auto",
                    }}
                  />
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 invisible">Check</label>
                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-[#780606] hover:bg-[#5a0404] text-white font-semibold transition-transform duration-200 hover:scale-[1.03] shadow-md"
                >
                  Check Requirements
                </button>
              </div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-sm text-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">

              {/* WhatsApp (linked) */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#1ebe5d] transition-colors duration-300"
              >
                <FaWhatsapp />
                <span className="text-white">WhatsApp</span>
              </a>

              {/* Phone number */}
              <a
                href="tel:+91 7008454261"
                className="flex items-center gap-2 text-[#f4b02a] hover:text-[#d89c1e] transition-colors duration-300"
              >
                <FaPhoneAlt />
                <span className="text-white">+91 7008454261</span>
              </a>

            </div>

            <div className="text-gray-300 text-xs text-center sm:text-right">
              Tip: Select your country & destination to view requirements.
            </div>
          </div>

          <div className="text-gray-300 text-center text-xs sm:text-sm mt-6">
            Having trouble selecting your country or it’s not listed?{" "}
            <Link
              to="/contact"
              className="text-[#f4b02a] font-medium underline hover:text-yellow-400 transition-colors duration-200"
            >
              Contact us
            </Link>{" "}
            and we’ll get back to you shortly.
          </div>
        </motion.div>
      </div>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4 sm:px-6"
            onClick={() => setShowErrorModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center max-w-sm sm:max-w-md w-full border border-[#780606]/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 rounded-full bg-[#780606]/10 flex items-center justify-center">
                <div className="w-7 sm:w-8 h-7 sm:h-8 bg-[#780606] rounded-full flex items-center justify-center text-white text-base sm:text-lg">
                  !
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#780606] mb-2">
                Oops!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{errorMessage}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
