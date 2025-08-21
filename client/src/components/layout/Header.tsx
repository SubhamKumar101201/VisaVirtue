import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useState } from "react";

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VisaVirtue
              </h1>
              <p className="text-xs text-gray-500 font-medium">Your Gateway to the World</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/services">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/services' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Services
              </span>
            </Link>
            <Link href="/destinations">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/destinations' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Destinations
              </span>
            </Link>
            <Link href="/blog">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/blog' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/about' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className={`cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                location === '/contact' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contact
              </span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
              <Phone className="mr-2 h-4 w-4" />
              +971 4 123 4567
            </Button>
            <Link href="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link href="/">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Home
              </div>
            </Link>
            <Link href="/services">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Services
              </div>
            </Link>
            <Link href="/destinations">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/destinations' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Destinations
              </div>
            </Link>
            <Link href="/blog">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/blog' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Blog
              </div>
            </Link>
            <Link href="/about">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                location === '/contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </div>
            </Link>
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link href="/login">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
