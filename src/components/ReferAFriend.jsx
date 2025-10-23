import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

const ReferAFriend = () => {
    const [formData, setFormData] = useState({
        referrerName: "",
        referrerEmail: "",
        friendName: "",
        friendEmail: "",
        friendPhone: "",
    });

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for referring! We’ll get in touch soon.");
        setFormData({
            referrerName: "",
            referrerEmail: "",
            friendName: "",
            friendEmail: "",
            friendPhone: "",
        });
    };

    const inputMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
        }),
    };

    return (
        <div className="relative w-full bg-gradient-to-l from-[#fef3f3] via-white to-white py-20 px-6 md:px-10 lg:px-20 font-['Manrope'] overflow-hidden">
            {/* Floating Particles - light effect only */}
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
                    {/* Header */}
                    <div className="text-center lg:text-left mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#780606]">
                            Refer a Friend
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Know someone who needs{" "}
                            <span className="text-[#780606] font-medium">Visa Assistance</span>?{" "}
                            Share their details and our{" "}
                            <span className="font-semibold text-gray-800">VisaVirtue experts</span>{" "}
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
                            { label: "Your Name", name: "referrerName", placeholder: "Full name" },
                            { label: "Your Email", name: "referrerEmail", placeholder: "you@example.com", type: "email" },
                            { label: "Friend’s Name", name: "friendName", placeholder: "Friend’s full name" },
                            { label: "Friend’s Email", name: "friendEmail", placeholder: "friend@example.com", type: "email" },
                            { label: "Friend’s Phone", name: "friendPhone", placeholder: "+91 98765 43210", type: "tel", full: true },
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
                                    required={!field.name.includes("Phone")}
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
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 6px 20px rgba(120,6,6,0.3)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="md:col-span-2 mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#780606] px-10 py-4 text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-[2px]"
                        >
                            <FaUserPlus className="w-5 h-5" />
                            Submit Referral
                        </motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ReferAFriend;
