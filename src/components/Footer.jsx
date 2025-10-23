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

const Footer = () => {
    return (
        <footer className="bg-[#fafafa] border-t border-gray-200 pt-16 pb-8 font-['Manrope'] text-gray-700">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-20">
                    <div>
                        {/* Logo */}
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
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:border-[#780606] hover:text-[#780606] transition-all duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
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
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Visa Requirements
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Destinations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Refer a Friend
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#780606] transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
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
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-[#780606]" />
                                <span>support@visavirtue.com</span>
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
