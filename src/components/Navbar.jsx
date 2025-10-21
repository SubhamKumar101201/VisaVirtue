import { useState, useEffect } from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        : "bg-white shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 sm:py-4 transition-all duration-500">
        {/* ===== Logo ===== */}
        <Link
          to="/"
          onClick={() => handleLinkClick("Home")}
          className="flex items-center space-x-2"
        >
          <img
            src="/logo.svg"
            alt="VisaVirtue Logo"
            className="h-12 w-auto sm:h-14 object-contain transition-all duration-500"
          />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center space-x-7">
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`relative text-base lg:text-lg transition-colors duration-300 ${activeLink === item
                ? "text-[#780606] font-semibold border-b-2 border-[#780606] pb-1"
                : "text-gray-800 hover:text-[#780606]"
                }`}
            >
              {item}
            </Link>
          ))}
          <button className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#780606] to-[#a30e0e] text-white font-semibold border border-[#780606] overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10 flex items-center gap-2">
              Apply Now
              <FaRegPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

        </div>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-gradient-to-b from-white to-[#fff2f2] text-center py-5 space-y-4 px-6 rounded-b-3xl shadow-md border-t border-[#f3caca]/40">
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`block text-lg font-medium transition-all duration-300 rounded-lg py-3 ${activeLink === item
                ? "text-[#780606] bg-[#fbeaea] border border-[#f2cfcf]"
                : "text-gray-700 hover:text-[#780606] hover:bg-[#fbeaea]"
                }`}
            >
              {item}
            </Link>
          ))}

          <div className="px-4 pt-4">
            <button className="w-full bg-white text-[#780606] py-3 rounded-2xl border border-[#780606] hover:bg-[#780606] hover:text-white transition-all duration-300 shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
