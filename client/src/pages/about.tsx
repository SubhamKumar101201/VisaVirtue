import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Heart,
  Zap
} from "lucide-react";

const stats = [
  { label: "Visas Processed", value: "25,000+", icon: <Globe className="h-8 w-8" /> },
  { label: "Success Rate", value: "99%", icon: <CheckCircle className="h-8 w-8" /> },
  { label: "Countries Covered", value: "150+", icon: <Award className="h-8 w-8" /> },
  { label: "Years Experience", value: "15+", icon: <Clock className="h-8 w-8" /> }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    experience: "15+ years in immigration law",
    description: "Former immigration attorney with expertise in complex visa cases and policy development."
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    experience: "12+ years in visa processing",
    description: "Specialized in streamlining visa processes and ensuring compliance with international regulations."
  },
  {
    name: "Emma Thompson",
    role: "Senior Visa Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    experience: "10+ years in visa consultancy",
    description: "Expert in student visas and family immigration with hundreds of successful applications."
  },
  {
    name: "David Rodriguez",
    role: "Business Development Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    experience: "8+ years in international business",
    description: "Focused on expanding our global reach and building strategic partnerships worldwide."
  }
];

const values = [
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Trust & Integrity",
    description: "We maintain the highest standards of ethics and transparency in all our dealings.",
    color: "bg-blue-500"
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Client-Centric",
    description: "Your success is our priority. We go above and beyond to ensure your visa approval.",
    color: "bg-red-500"
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Innovation",
    description: "We leverage technology and expertise to streamline the visa application process.",
    color: "bg-yellow-500"
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Global Expertise",
    description: "Our team has deep knowledge of visa requirements across 150+ countries.",
    color: "bg-green-500"
  }
];

const milestones = [
  { year: "2009", event: "VisaVirtue founded in Dubai", description: "Started with a vision to simplify visa processes" },
  { year: "2012", event: "Expanded to cover 50+ countries", description: "Growing our global network of partners" },
  { year: "2015", event: "Reached 5,000 successful applications", description: "Milestone achievement in client satisfaction" },
  { year: "2018", event: "Launched digital platform", description: "Revolutionizing visa applications with technology" },
  { year: "2021", event: "99% success rate achieved", description: "Industry-leading approval rates" },
  { year: "2024", event: "25,000+ visas processed", description: "Continuing to grow and serve more clients worldwide" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About VisaVirtue</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Your trusted partner in making global dreams come true through expert visa services
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009 in Dubai, VisaVirtue began with a simple mission: to make international travel and immigration accessible to everyone. What started as a small consultancy has grown into a leading visa services company trusted by thousands of clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to client success, and a deep understanding of the evolving global immigration landscape. Today, we're proud to have helped over 25,000 individuals and families achieve their dreams of traveling, studying, working, and living abroad.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Based in the heart of Dubai's business district, we combine local expertise with global reach, ensuring that our clients receive personalized service backed by comprehensive knowledge of international visa requirements.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="VisaVirtue Office"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${value.color} text-white rounded-2xl mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to making your visa journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients who trusted VisaVirtue with their visa applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Application
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