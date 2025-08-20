import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  Globe,
  Users
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office Address",
    details: [
      "Business Bay, Level 15",
      "Dubai, United Arab Emirates",
      "P.O. Box 123456"
    ],
    color: "bg-blue-500"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Numbers",
    details: [
      "+971 4 123 4567 (Dubai)",
      "+1 800 123 4567 (Toll Free)",
      "+44 20 1234 5678 (UK)"
    ],
    color: "bg-green-500"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Addresses",
    details: [
      "info@visavirtue.com",
      "support@visavirtue.com",
      "urgent@visavirtue.com"
    ],
    color: "bg-purple-500"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed"
    ],
    color: "bg-orange-500"
  }
];

const offices = [
  {
    city: "Dubai (Headquarters)",
    address: "Business Bay, Level 15, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@visavirtue.com",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
  },
  {
    city: "London Office",
    address: "Canary Wharf, London, UK",
    phone: "+44 20 1234 5678",
    email: "london@visavirtue.com",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
  },
  {
    city: "New York Office",
    address: "Manhattan, New York, USA",
    phone: "+1 212 123 4567",
    email: "newyork@visavirtue.com",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Get in touch with our visa experts for personalized assistance and free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
            <a href="tel:+971412345678">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold shadow-lg backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${info.color} text-white rounded-2xl mb-6`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="schengen">Schengen Area</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Visa Type</option>
                    <option value="tourist">Tourist/Visitor</option>
                    <option value="business">Business</option>
                    <option value="student">Student</option>
                    <option value="work">Work</option>
                    <option value="family">Family</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    rows={4} 
                    placeholder="Tell us about your visa requirements or any questions you have..."
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map and Dubai Office */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Dubai Headquarters</CardTitle>
                  <p className="text-gray-600">Visit our main office in the heart of Dubai's business district</p>
                </CardHeader>
                <CardContent>
                  {/* Demo Interactive Map */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.158516956735!2d55.2651738!3d25.1881721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d4c8b1b82b%3A0x7f8b3e9c2a8f1c3d!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1639123456789"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm font-medium">VisaVirtue Office</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">Business Bay, Level 15<br />Dubai, United Arab Emirates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+971 4 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">dubai@visavirtue.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose VisaVirtue?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">25K+</div>
                      <div className="text-sm text-gray-600">Visas Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">150+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices in key locations around the world to better serve our international clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mt-0.5 mr-2 text-blue-600" />
                      {office.address}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-green-600" />
                      {office.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-purple-600" />
                      {office.email}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long does the visa application process take?",
                answer: "Processing times vary by country and visa type. Tourist visas typically take 1-4 weeks, while work and immigration visas can take 2-6 months. We provide accurate timelines during consultation."
              },
              {
                question: "What is your success rate?",
                answer: "We maintain a 99% success rate across all visa types. Our experienced team carefully reviews each application to ensure all requirements are met before submission."
              },
              {
                question: "Do you offer emergency visa services?",
                answer: "Yes, we provide expedited processing for urgent travel needs. Emergency services are available for an additional fee and depend on the destination country's policies."
              },
              {
                question: "How much do your services cost?",
                answer: "Our fees vary based on the service type and complexity. We offer transparent pricing with no hidden costs. Contact us for a personalized quote based on your specific needs."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}