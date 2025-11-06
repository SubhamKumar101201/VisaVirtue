import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL =
    import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const sendForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(form.current);
    const payload = {
      formType: "contact",
      origin: window.location.origin,
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      whatsapp: formData.get("user_whatsapp"),
      nationality: formData.get("nationality"),
      visaType: formData.get("visa_type"),
      travellingTo: formData.get("travel_to"),
      planToApply: formData.get("apply_time"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      if (!response.ok) throw new Error("Network error");
      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        setErrorMessage(result.message || "Submission failed. Try again later.");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage("");
      }, 4000);
    }
  };

  const inputMotion = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#780606]/40 focus:border-[#780606]/40 transition-all duration-200";

  return (
    <div className="bg-gradient-to-br from-[#fff5f5] via-white to-[#fff0f0] min-h-screen font-['Manrope'] relative overflow-hidden">
      {/* Floating gradients */}
      <div className="absolute -top-20 -left-20 w-56 md:w-72 h-56 md:h-72 bg-[#780606]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#4a0303]/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="py-16 md:py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#780606]"
        >
          Let’s Get in <span className="text-gray-800">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4"
        >
          Have questions about your visa or travel process? We’d love to hear
          from you. Our experts will get back to you shortly.
        </motion.p>
      </div>

      {/* Form + Info */}
      <div className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendForm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-[#780606]/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#780606] mb-6 sm:mb-8">
              Send us a Message
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: "Full Name", name: "user_name", placeholder: "Your full name" },
                { label: "Email", name: "user_email", placeholder: "you@example.com", type: "email" },
                { label: "Phone Number", name: "user_phone", placeholder: "+91 98765 43210", type: "tel" },
                { label: "WhatsApp Number", name: "user_whatsapp", placeholder: "+91 98765 43210", type: "tel" },
                { label: "Nationality", name: "nationality", placeholder: "Enter your nationality" },
                { label: "Type of Visa", name: "visa_type", placeholder: "Enter visa type" },
                { label: "Travelling To", name: "travel_to", placeholder: "Enter destination country" },
                { label: "When do you plan to apply?", name: "apply_time", placeholder: "e.g. In 1 month" },
              ].map((field, i) => (
                <motion.div key={field.name} custom={i} variants={inputMotion}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    required
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                </motion.div>
              ))}

              {/* Message */}
              <motion.div custom={9} variants={inputMotion} className="md:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  className={inputClass}
                ></textarea>
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(120,6,6,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className={`md:col-span-2 mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-[#780606] px-8 sm:px-10 py-3.5 sm:py-4 text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-[2px] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          {/* Info card (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#780606]/10 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 self-start"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#780606] mb-3">
              Don’t Hesitate to Contact Us
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Need help or have a question about your visa process? Our experts
              are available to guide you every step of the way.
            </p>

            <div className="space-y-5 text-gray-800 text-sm sm:text-base">
              {[
                { Icon: FaMapMarkerAlt, title: "Office", text: "123 Visa Street, New Delhi, India" },
                { Icon: FaPhoneAlt, title: "Phone", text: "+91 98765 43210" },
                { Icon: FaEnvelope, title: "Email", text: "support@visavirtue.com" },
                { Icon: FaClock, title: "Work Hours", text: "Mon - Sat: 9:00 AM – 8:00 PM" },
              ].map(({ Icon, title, text }, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#780606]/10 p-2.5 sm:p-3 rounded-lg mt-1">
                    <Icon className="text-[#780606] text-base sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">{title}</p>
                    <p className="font-semibold">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#780606]/12 pt-6">
              <p className="text-gray-700 mb-3 font-semibold text-sm sm:text-base">
                Follow us
              </p>
              <div className="flex gap-3 sm:gap-4 text-[#780606] text-lg sm:text-xl">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-[#780606] hover:text-white transition-all"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4 sm:px-6"
            onClick={() => setIsSubmitted(false)}
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
                  ✓
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#780606] mb-2">
                {errorMessage ? "Oops!" : "Thank You!"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {errorMessage
                  ? errorMessage
                  : "Your message has been successfully submitted. Our team will get back to you shortly."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
