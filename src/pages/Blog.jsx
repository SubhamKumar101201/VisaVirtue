import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import  { blogData }  from "../data/BlogData";
import { useState } from "react";

export default function Blog() {

  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fff5f5] via-white to-[#fff0f0] min-h-screen font-['Manrope'] relative overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute -top-20 -left-20 w-56 md:w-72 h-56 md:h-72 bg-[#780606]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#4a0303]/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center py-16 md:py-20 relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#780606]"
        >
          Visa <span className="text-gray-800">Insights & Updates</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Stay informed with the latest visa news, expert guides, and travel
          tips from our VisaVirtue team.
        </motion.p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10 pb-20">
        {blogData.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white/90 backdrop-blur-md border border-[#f3d1d1] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#780606]/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaRegClock className="mr-2 text-[#780606]" />
                {post.date}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#780606] transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-block text-[#780606] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center py-20 bg-gradient-to-br from-[#780606] via-[#600505] to-[#4a0303] text-white relative z-10 font-['Manrope']">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          Never Miss a Visa Update
        </motion.h3>

        <p className="text-gray-200 max-w-lg mx-auto text-sm sm:text-base mb-10 px-6">
          Subscribe to our newsletter and stay ahead with trusted visa news,
          updates, and travel trends.
        </p>

        {/* Email Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6 px-6"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-5 py-3 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f4b02a] text-sm sm:text-base bg-white/90 shadow-md"
            required
          />
          <button
            type="submit"
            className="bg-[#f4b02a] text-[#4a0303] px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:bg-white hover:text-[#780606] transition-all duration-300"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Contact Button */}
        <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.25)" }}
            className="inline-block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </motion.a>

        {/* Success Popup */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#4a0303] px-6 py-3 rounded-full shadow-lg font-semibold text-sm sm:text-base"
          >
            🎉 Subscription successful! You’ll now receive visa updates.
          </motion.div>
        )}
      </div>
    </div>
  );
}
