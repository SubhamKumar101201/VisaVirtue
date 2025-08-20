import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">VisaVirtue</h1>
              <p className="text-xs text-gray-600">Visa Application Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`text-sm font-medium transition-colors ${
                location === '/' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}>
                Dashboard
              </a>
            </Link>
            <Link href="/application">
              <a className={`text-sm font-medium transition-colors ${
                location.startsWith('/application') ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}>
                New Application
              </a>
            </Link>
            <Link href="/tracking">
              <a className={`text-sm font-medium transition-colors ${
                location === '/tracking' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}>
                Track Status
              </a>
            </Link>
            <a href="#support" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              Support
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <Link href="/">
              <a className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                location === '/' ? 'text-primary bg-primary/5' : 'text-gray-600'
              }`}>
                Dashboard
              </a>
            </Link>
            <Link href="/application">
              <a className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                location.startsWith('/application') ? 'text-primary bg-primary/5' : 'text-gray-600'
              }`}>
                New Application
              </a>
            </Link>
            <Link href="/tracking">
              <a className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                location === '/tracking' ? 'text-primary bg-primary/5' : 'text-gray-600'
              }`}>
                Track Status
              </a>
            </Link>
            <a href="#support" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg">
              Support
            </a>
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
