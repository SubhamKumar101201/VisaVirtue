import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  Shield, 
  Users, 
  Globe, 
  Heart,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";

const services = [
  {
    id: "visa-form-filling",
    title: "Visa Form Filling Assistance",
    description: "Expert help with completing visa application forms accurately and efficiently",
    icon: <FileText className="h-12 w-12" />,
    features: ["Document Review", "Form Completion", "Error Prevention", "Expert Guidance"],
    price: "Starting from $99",
    processingTime: "Same Day",
    color: "bg-blue-500"
  },
  {
    id: "early-appointments",
    title: "Early Appointment Booking",
    description: "Get priority booking for visa appointments and interviews",
    icon: <Calendar className="h-12 w-12" />,
    features: ["Priority Booking", "Multiple Slots", "Rescheduling Support", "Confirmation"],
    price: "Starting from $199",
    processingTime: "24-48 Hours",
    color: "bg-green-500"
  },
  {
    id: "work-permits",
    title: "Work Permit Applications",
    description: "Complete assistance for work permit and employment authorization",
    icon: <Shield className="h-12 w-12" />,
    features: ["Documentation", "Employer Liaison", "Status Tracking", "Legal Support"],
    price: "Starting from $499",
    processingTime: "2-4 Weeks",
    color: "bg-purple-500"
  },
  {
    id: "permanent-residency",
    title: "Permanent Residency Applications",
    description: "Expert guidance for permanent residency and immigration applications",
    icon: <Users className="h-12 w-12" />,
    features: ["Eligibility Assessment", "Document Preparation", "Interview Prep", "Follow-up"],
    price: "Starting from $999",
    processingTime: "3-6 Months",
    color: "bg-orange-500"
  },
  {
    id: "student-visas",
    title: "Student Visa Support",
    description: "Specialized support for educational visa applications worldwide",
    icon: <Globe className="h-12 w-12" />,
    features: ["University Liaison", "I-20 Processing", "Financial Documentation", "Interview Prep"],
    price: "Starting from $299",
    processingTime: "1-3 Weeks",
    color: "bg-red-500"
  },
  {
    id: "family-visas",
    title: "Family Reunion Visas",
    description: "Reunite with loved ones through family visa programs",
    icon: <Heart className="h-12 w-12" />,
    features: ["Relationship Proof", "Sponsorship Support", "Document Verification", "Case Tracking"],
    price: "Starting from $399",
    processingTime: "2-8 Weeks",
    color: "bg-pink-500"
  }
];

const additionalServices = [
  "Document Translation & Notarization",
  "Travel Insurance Assistance",
  "Flight Booking Support",
  "Accommodation Assistance",
  "Pre-departure Orientation",
  "Embassy Liaison Services",
  "Visa Extension Support",
  "Emergency Visa Services"
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Comprehensive visa solutions with expert guidance, premium support, and guaranteed results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Zap className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of visa services designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${service.color} text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <Badge variant="secondary">{service.processingTime}</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-blue-600 transition-colors duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support services to make your visa journey seamless and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="mx-auto h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get your visa approved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free initial consultation to assess your needs" },
              { step: "02", title: "Documentation", description: "Prepare and review all required documents" },
              { step: "03", title: "Application", description: "Submit your application with expert guidance" },
              { step: "04", title: "Approval", description: "Track progress and receive your approved visa" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Visa Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients who achieved their visa dreams with VisaVirtue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}