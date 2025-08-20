import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Globe, 
  FileText, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Calendar,
  Shield,
  Zap,
  Heart,
  MapPin,
  Phone,
  Mail,
  Search,
  FileCheck,
  MessageCircle,
  Crown,
  Sparkles,
  Target,
  Headphones
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Your Gateway to the World",
      subtitle: "Professional visa services with 99% success rate",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&crop=center"
    },
    {
      title: "Expert Visa Consultation",
      subtitle: "Get personalized guidance from our visa experts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
    },
    {
      title: "Fast Track Processing",
      subtitle: "Expedite your visa application with our premium service",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center"
    },
    {
      title: "Global Visa Solutions",
      subtitle: "Your trusted partner for worldwide visa applications",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&crop=center"
    },
    {
      title: "Premium Document Support",
      subtitle: "Complete assistance with all your visa documentation",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Map pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold shadow-lg backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-gray-200">Visas Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Visa Form Filling",
      description: "Expert assistance with visa application forms and documentation",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Early Appointments",
      description: "Get priority booking for visa appointments and interviews",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Work Permits",
      description: "Complete assistance for work permit applications",
      color: "bg-purple-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Permanent Residency",
      description: "Expert guidance for permanent residency applications",
      color: "bg-orange-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Student Visas",
      description: "Specialized support for educational visa applications",
      color: "bg-red-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Family Visas",
      description: "Reunite with loved ones through family visa programs",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive visa solutions tailored to your needs with expert guidance every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Destinations = () => {
  const destinations = [
    {
      country: "United States",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Tourist", "Business", "Student", "Work"],
      processingTime: "15-30 days",
      successRate: "98%"
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Express Entry", "Tourist", "Study"],
      processingTime: "6-12 months",
      successRate: "97%"
    },
    {
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Skilled Worker", "Student", "Tourist"],
      processingTime: "3-8 weeks",
      successRate: "99%"
    },
    {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Skilled Migration", "Student", "Tourist"],
      processingTime: "4-12 months",
      successRate: "96%"
    },
    {
      country: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Work", "Student", "Business"],
      processingTime: "2-6 weeks",
      successRate: "95%"
    },
    {
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Tourist", "Work", "Student"],
      processingTime: "5-10 days",
      successRate: "94%"
    },
    {
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Business", "Work", "Tourist"],
      processingTime: "3-7 days",
      successRate: "98%"
    },
    {
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop&crop=center",
      visaTypes: ["Schengen", "Student", "Work"],
      processingTime: "15-20 days",
      successRate: "96%"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover visa requirements and procedures for your dream destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">
                    {dest.successRate} Success
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dest.country}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4" />
                    {dest.processingTime}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dest.visaTypes.map((type, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors duration-300">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/destinations">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const PremiumServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-yellow-500 text-purple-900 rounded-2xl mb-6">
            <Crown className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Premium Elite Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Exclusive premium services designed for discerning clients who demand the best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="h-8 w-8" />,
              title: "VIP Concierge Service",
              description: "Dedicated personal visa consultant assigned exclusively to you",
              features: ["24/7 priority support", "Direct phone line", "Expedited processing"],
              price: "$299"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Success Guarantee+",
              description: "100% money-back guarantee with premium success insurance",
              features: ["Full refund if rejected", "Reapplication included", "Legal support"],
              price: "$199"
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Lightning Fast Track",
              description: "Ultra-fast processing in 24-48 hours for urgent cases",
              features: ["Emergency appointments", "Same-day review", "Priority queue"],
              price: "$399"
            }
          ].map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-purple-900 rounded-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-4">{service.price}</div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 hover:from-yellow-500 hover:to-orange-600 font-bold">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisaRequirementChecker = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [nationality, setNationality] = useState('');

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-2xl mb-6">
            <Search className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visa Requirement Checker</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instantly check visa requirements for any destination based on your nationality
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Nationality</label>
                <select 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <option value="">Select Your Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="in">India</option>
                  <option value="pk">Pakistan</option>
                  <option value="bd">Bangladesh</option>
                  <option value="ph">Philippines</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                <select 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Destination</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="jp">Japan</option>
                  <option value="sg">Singapore</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4">
                <Search className="mr-2 h-5 w-5" />
                Check Visa Requirements
              </Button>
            </div>

            {selectedCountry && nationality && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visa Requirements Result</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Visa required for this destination</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">Processing time: 15-30 business days</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-gray-700">Required documents: Passport, photos, financial proof</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  Start Application Process
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const ApplicationStatusChecker = () => {
  const [applicationId, setApplicationId] = useState('');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-2xl mb-6">
            <FileCheck className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Application</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check the status of your visa application in real-time
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Application ID</label>
                <input 
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your application ID (e.g., VV123456789)"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4">
                <Search className="mr-2 h-5 w-5" />
                Track Application
              </Button>

              {applicationId && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg font-semibold text-gray-900">Application Found</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status:</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">March 15, 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Expected Decision:</span>
                      <span className="font-medium">April 15, 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Office:</span>
                      <span className="font-medium">Dubai - Business Bay</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Updates</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• March 20: Documents verified</div>
                      <div>• March 18: Application reviewed by officer</div>
                      <div>• March 15: Application submitted</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/971412345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Canada PR Applicant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "VisaVirtue made my Canadian PR application seamless. Their expert guidance and attention to detail were exceptional. Highly recommended!"
    },
    {
      name: "Ahmed Al Maktoum",
      country: "UK Business Visa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "Professional service with quick processing. Got my UK business visa approved in just 2 weeks. Thank you VisaVirtue!"
    },
    {
      name: "Maria Garcia",
      country: "US Student Visa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment: "The team helped me through every step of my US student visa application. Their expertise saved me months of confusion."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from satisfied clients who achieved their visa dreams with VisaVirtue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to start your visa journey? Contact our experts for a free consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Dubai Office</h4>
                  <p className="text-gray-300">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+971 4 123 4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">info@visavirtue.com</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destination Country</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <PremiumServices />
      <VisaRequirementChecker />
      <Destinations />
      <ApplicationStatusChecker />
      <Testimonials />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}