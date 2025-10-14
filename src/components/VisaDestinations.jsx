import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const VisaDestinations = () => {
  const destinations = [
    { name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", desc: "The city of lights and love." },
    { name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1522547902298-51566e4fb383", desc: "Where tradition meets technology." },
    { name: "Sydney, Australia", image: "https://images.unsplash.com/photo-1603912402711-d13eea439bc8", desc: "Sun, sea, and the Opera House." },
    { name: "Dubai, UAE", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090", desc: "Luxury and innovation in the desert." },
    { name: "Santorini, Greece", image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/GR", desc: "Blue domes and breathtaking views." },
    { name: "Rome, Italy", image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/IT", desc: "Ancient ruins and timeless beauty." },
    { name: "San Francisco, USA", image: "https://plus.unsplash.com/premium_photo-1675314167547-9cb4f72f145f", desc: "Golden Gate and coastal charm." },
    { name: "Bali, Indonesia", image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/ID", desc: "Tropical paradise and temples." },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d", desc: "Clean, green, and modern." },
    { name: "London, UK", image: "https://images.unsplash.com/photo-1569865867048-34cfce8d58fe", desc: "Historic charm meets modern life." },
  ];

  return (
    <section className="py-20 bg-[#F2F3FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-[Poppins],sans-serif text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          <span className="text-[#f4b02a]">Global Visa Solutions</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Get your visa approved smoothly & on time. Explore our most popular destinations with thousands of successful visas delivered on time.
          Wherever you plan to go,{" "}
          <span className="text-[#f4b02a] font-semibold">VisaVirtue</span> has you covered.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-12 justify-items-center">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <img
                loading="lazy"
                src={dest.image}
                alt={dest.name}
                className="w-64 h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Animation */}
              <div className="absolute bottom-0 w-full text-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-4">
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-sm mb-3">{dest.desc}</p>
                <button className="px-4 py-2 bg-[#780606] rounded-full text-white text-sm font-semibold transition-transform duration-200 hover:bg-[#5a0404] hover:scale-[1.03] shadow-md">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button className="flex items-center gap-2 bg-[#780606] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a0404] transition-transform duration-200 hover:scale-[1.03] shadow-md">
            View All Visas <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaDestinations;
