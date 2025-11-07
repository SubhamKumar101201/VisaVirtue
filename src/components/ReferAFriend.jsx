import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

const ReferAFriend = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerWhatsapp: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    friendWhatsapp: "",
  });

  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    type: "success", // "success" or "error"
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { referrerEmail, friendEmail } = formData;

    // ✅ Validate both emails only
    if (!isValidEmail(referrerEmail) || !isValidEmail(friendEmail)) {
      setModalInfo({
        isOpen: true,
        type: "error",
        message: "Please enter valid email addresses for both fields.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        formType: "refer",
        yourName: formData.referrerName,
        yourEmail: formData.referrerEmail,
        yourWhatsapp: formData.referrerWhatsapp,
        friendName: formData.friendName,
        friendEmail: formData.friendEmail,
        friendPhone: formData.friendPhone,
        friendWhatsapp: formData.friendWhatsapp,
        origin: window.location.origin,
      };

      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
        redirect: "follow", // ensures your app follows redirects cleanly
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();

      if (result.success) {
        setModalInfo({
          isOpen: true,
          type: "success",
          message:
            "Your referral has been successfully submitted. We’ll contact your friend soon!",
        });
        setFormData({
          referrerName: "",
          referrerEmail: "",
          referrerWhatsapp: "",
          friendName: "",
          friendEmail: "",
          friendPhone: "",
          friendWhatsapp: "",
        });
      } else {
        setModalInfo({
          isOpen: true,
          type: "error",
          message: result.message || "Submission failed. Try again later.",
        });
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setModalInfo({
        isOpen: true,
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setModalInfo((prev) => ({ ...prev, isOpen: false })), 3000);
    }
  };

  const inputMotion = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
      }),
    }),
    []
  );

  return (
    <div className="relative w-full bg-gradient-to-l from-[#fef3f3] via-white to-white py-20 px-6 md:px-10 lg:px-20 font-['Manrope'] overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#780606]/10 rounded-full blur-md"
            style={{
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col lg:flex-row items-center justify-between gap-14 max-w-6xl mx-auto"
      >
        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src="/refer-a-friend.png"
            alt="Friends Illustration"
            className="w-[90%] max-w-md drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 bg-white border border-[#780606]/15 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 md:p-10"
        >
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#780606]">
              Refer a Friend
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Know someone who needs{" "}
              <span className="text-[#780606] font-medium">
                Visa Assistance
              </span>
              ? Share their details and our{" "}
              <span className="font-semibold text-gray-800">
                VisaVirtue experts
              </span>{" "}
              will reach out —{" "}
              <span className="italic">secure, trusted, and hassle-free.</span>
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              { label: "Your Name", name: "referrerName", placeholder: "Full name", required: true },
              { label: "Your Email", name: "referrerEmail", placeholder: "you@example.com", type: "email", required: true },
              { label: "Your WhatsApp", name: "referrerWhatsapp", placeholder: "+91 98765 43210", type: "tel", required: false },
              { label: "Friend’s Name", name: "friendName", placeholder: "Friend’s full name", required: true },
              { label: "Friend’s Email", name: "friendEmail", placeholder: "friend@example.com", type: "email", required: true },
              { label: "Friend’s Phone", name: "friendPhone", placeholder: "+91 98765 43210", type: "tel", required: true },
              { label: "Friend’s WhatsApp", name: "friendWhatsapp", placeholder: "+91 98765 43210", type: "tel", required: false, full: true },
            ].map((field, i) => (
              <motion.div
                key={field.name}
                custom={i}
                variants={inputMotion}
                className={field.full ? "md:col-span-2" : ""}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type || "text"}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#780606]/40 focus:border-[#780606]/40 focus:bg-white transition-all duration-200"
                />
              </motion.div>
            ))}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 6px 20px rgba(120,6,6,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className={`md:col-span-2 mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#780606] px-10 py-4 text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-[2px] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              <FaUserPlus className="w-5 h-5" />
              {isSubmitting ? "Submitting..." : "Submit Referral"}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalInfo.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4 sm:px-6"
            onClick={() => setModalInfo((prev) => ({ ...prev, isOpen: false }))}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center max-w-sm sm:max-w-md w-full border border-[#780606]/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${modalInfo.type === "success" ? "bg-[#780606]/10" : "bg-red-100"
                  }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center text-white text-base sm:text-lg ${modalInfo.type === "success" ? "bg-[#780606]" : "bg-red-600"
                    }`}
                >
                  {modalInfo.type === "success" ? "✓" : "!"}
                </motion.div>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${modalInfo.type === "success" ? "text-[#780606]" : "text-red-600"
                  }`}
              >
                {modalInfo.type === "success" ? "Thank You!" : "Oops!"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {modalInfo.message}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReferAFriend;
