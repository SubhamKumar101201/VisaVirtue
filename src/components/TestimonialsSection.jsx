import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Devansh Singh",
        country: "Work Visa - Australia",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Got my visa faster than expected! Loved how their team kept me updated at every step of the process.",
    },
    {
        name: "Neha Bansal",
        country: "Family Visa - USA",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        review:
            "VisaVirtue helped me bring my family together. The process was smooth and stress-free.",
    },
    {
        name: "Amit Verma",
        country: "Student Visa - Canada",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        review:
            "Professional and efficient! My visa process felt effortless with their expert help.",
    },
    {
        name: "Riya Kapoor",
        country: "Tourist Visa - Schengen",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        review:
            "They guided me throughout the Schengen visa process. Everything was transparent and quick.",
    },
    {
        name: "Karan Mehta",
        country: "Work Visa - UK",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        review:
            "I got my UK work visa approved without hassle. Loved the professionalism and support!",
    },
];

const InfiniteTestimonials = () => {
    const duplicatedTestimonials = [...testimonials, ...testimonials]; // For infinite loop illusion

    return (
        <div className="relative overflow-hidden py-20 bg-white font-['Manrope']">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#780606]">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mt-3 text-lg">
                    Hear directly from people whose journeys we’ve simplified with care
                    and expertise.
                </p>
            </div>

            <motion.div
                className="flex gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // scroll speed
                }}
            >
                {duplicatedTestimonials.map((t, i) => (
                    <div
                        key={i}
                        className="min-w-[350px] max-w-[400px] flex-shrink-0 bg-white shadow-lg rounded-2xl p-8 mx-2 border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between"
                    >
                        {/* Top Section */}
                        <div>
                            <FaQuoteLeft className="text-[#780606] text-2xl mb-4" />
                            <p className="italic text-gray-700 mb-8 leading-relaxed">
                                {t.review}
                            </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#780606]/20"
                            />
                            <div>
                                <h3 className="font-semibold text-[#780606] text-lg">{t.name}</h3>
                                <p className="text-gray-500 text-sm">{t.country}</p>
                                <div className="flex mt-2 text-[#780606]">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteTestimonials;
