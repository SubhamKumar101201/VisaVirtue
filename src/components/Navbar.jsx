import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Make sure React Router is installed

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white transition-all duration-500 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 sm:py-4">
        
        {/* ===== Logo Section ===== */}
        <Link
          to="/"
          onClick={() => handleLinkClick("Home")}
          className="flex items-center space-x-2"
        >
          <img
            src="/logo.svg"  // ✅ Place your logo file inside the public folder
            alt="VisaVirtue Logo"
            className="h-12 w-auto sm:h-14 object-contain"
          />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center space-x-7">
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`relative text-base lg:text-lg transition-colors duration-300 ${
                activeLink === item
                  ? "text-[#780606] font-semibold border-b-2 border-[#780606] pb-1"
                  : "text-gray-800 hover:text-[#780606]"
              }`}
            >
              {item}
            </Link>
          ))}
          <button className="bg-white text-[#780606] px-5 py-2 rounded-full border-2 border-[#780606] hover:bg-[#780606] hover:text-white transition-all duration-300">
            Apply Now
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white text-center py-5 space-y-4 px-6 rounded-b-3xl shadow-md">
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`block text-lg font-medium transition-all duration-300 rounded-lg py-3 ${
                activeLink === item
                  ? "text-[#780606] bg-[#fbeaea] border border-[#f2cfcf]"
                  : "text-gray-700 hover:text-[#780606] hover:bg-[#fbeaea]"
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Apply Now button visible in mobile */}
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
