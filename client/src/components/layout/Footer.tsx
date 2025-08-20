import { Link } from "wouter";
import { 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  Clock,
  Users
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">VisaVirtue</h3>
                <p className="text-xs text-gray-300">Your Gateway to the World</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional visa services with 99% success rate. We make your international dreams come true with expert guidance and seamless processing.
            </p>
            
            {/* Dubai Office Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Dubai Headquarters</p>
                  <p className="text-gray-300 text-sm">Business Bay, Level 15<br/>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">info@visavirtue.com</span>
              </div>
            </div>

            {/* Social Media & WhatsApp */}
            <div className="flex space-x-4">
              <a href="https://wa.me/971412345678" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Visa Form Filling</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Early Appointments</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Work Permits</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Permanent Residency</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Student Visas</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Family Reunification</span></Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/destinations"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Popular Destinations</span></Link></li>
              <li><Link href="/blog"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Visa Guides</span></Link></li>
              <li><Link href="/about"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">About Us</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Contact Support</span></Link></li>
              <li><Link href="/tracking"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Track Application</span></Link></li>
              <li><Link href="/application"><span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer block">Start Application</span></Link></li>
            </ul>
          </div>

          {/* Trust Indicators */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">99% Success Rate</p>
                  <p className="text-gray-300 text-sm">Industry leading approval rates</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">25,000+ Clients</p>
                  <p className="text-gray-300 text-sm">Trusted by thousands worldwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">15+ Years</p>
                  <p className="text-gray-300 text-sm">Professional experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Secure & Reliable</p>
                  <p className="text-gray-300 text-sm">Bank-level security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-300 text-sm">© 2024 VisaVirtue. All rights reserved.</p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-gray-300">256-bit SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">Licensed & Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
