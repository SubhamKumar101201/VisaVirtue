import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Added for smooth scrolling

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] border-t border-gray-200 pt-16 pb-8 font-['Manrope'] text-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-20">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center mb-5">
              <img
                src="/logo.svg"
                alt="VisaVirtue Logo"
                className="w-[180px] object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Simplifying your visa journey with transparency, speed, and care.
              Experience the premium way to travel — hassle-free, every time.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/visavirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/visavirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/visavirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@visavirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <HashLink
                  smooth
                  to="/#visa-requirements"
                  className="hover:text-[#780606] transition-colors"
                >
                  Visa Requirements
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#destinations"
                  className="hover:text-[#780606] transition-colors"
                >
                  Destinations
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#testimonials"
                  className="hover:text-[#780606] transition-colors"
                >
                  Testimonials
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#refer-a-friend"
                  className="hover:text-[#780606] transition-colors"
                >
                  Refer a Friend
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#780606] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#780606] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                //   to="/privacy-policy"
                  className="hover:text-[#780606] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                //   to="/terms"
                  className="hover:text-[#780606] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#780606]" />
                <span>123 Premium Plaza, Andheri West, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#780606]" />
                <a
                  href="tel:+917008454261"
                  className="hover:text-[#780606] transition-colors"
                >
                  +91 70084 54261
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#780606]" />
                <a
                  href="mailto:visavirtue@gmail.com"
                  className="hover:text-[#780606] transition-colors"
                >
                  visavirtue@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VisaVirtue. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <span className="text-[#780606] font-semibold">VisaVirtue</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
