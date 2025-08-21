import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Search,
  MapPin,
  DollarSign,
  Users,
  FileText
} from "lucide-react";

const destinations = [
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    capital: "Washington D.C.",
    currency: "USD",
    population: "331M",
    visaTypes: [
      { type: "Tourist (B-2)", duration: "Up to 6 months", fee: "$160", processing: "15-30 days" },
      { type: "Business (B-1)", duration: "Up to 6 months", fee: "$160", processing: "15-30 days" },
      { type: "Student (F-1)", duration: "Course duration", fee: "$350", processing: "30-60 days" },
      { type: "Work (H-1B)", duration: "3 years", fee: "$555", processing: "2-6 months" }
    ],
    requirements: [
      "Valid passport (6+ months validity)",
      "Completed DS-160 form",
      "Visa fee payment receipt",
      "Passport-style photograph",
      "Supporting documents"
    ],
    successRate: "98%",
    description: "The United States offers diverse visa categories for tourism, business, education, and employment opportunities."
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=600&h=400&fit=crop",
    capital: "Ottawa",
    currency: "CAD",
    population: "38M",
    visaTypes: [
      { type: "Visitor Visa", duration: "Up to 6 months", fee: "$100", processing: "2-8 weeks" },
      { type: "Study Permit", duration: "Course duration", fee: "$150", processing: "4-12 weeks" },
      { type: "Work Permit", duration: "Job duration", fee: "$155", processing: "2-12 weeks" },
      { type: "Express Entry", duration: "Permanent", fee: "$1,325", processing: "6-12 months" }
    ],
    requirements: [
      "Valid passport",
      "Completed application form",
      "Photographs",
      "Proof of funds",
      "Medical exam (if required)"
    ],
    successRate: "97%",
    description: "Canada welcomes immigrants and visitors with its friendly policies and diverse visa programs."
  },
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    capital: "London",
    currency: "GBP",
    population: "67M",
    visaTypes: [
      { type: "Standard Visitor", duration: "Up to 6 months", fee: "£100", processing: "3 weeks" },
      { type: "Student Visa", duration: "Course duration", fee: "£348", processing: "3-8 weeks" },
      { type: "Skilled Worker", duration: "Up to 5 years", fee: "£610", processing: "3-8 weeks" },
      { type: "Family Visa", duration: "2.5 years", fee: "£1,523", processing: "12 weeks" }
    ],
    requirements: [
      "Valid passport",
      "Completed online application",
      "Biometric information",
      "Supporting documents",
      "English language requirement"
    ],
    successRate: "99%",
    description: "The UK offers various visa routes for visitors, students, workers, and family members."
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop",
    capital: "Canberra",
    currency: "AUD",
    population: "26M",
    visaTypes: [
      { type: "Visitor (600)", duration: "Up to 12 months", fee: "$145", processing: "15-30 days" },
      { type: "Student (500)", duration: "Course duration", fee: "$620", processing: "4-12 weeks" },
      { type: "Skilled Migration", duration: "Permanent", fee: "$4,115", processing: "4-12 months" },
      { type: "Working Holiday", duration: "12 months", fee: "$485", processing: "2-4 weeks" }
    ],
    requirements: [
      "Valid passport",
      "Online application",
      "Health insurance",
      "Character requirements",
      "English proficiency"
    ],
    successRate: "96%",
    description: "Australia provides pathways for tourists, students, skilled workers, and working holiday makers."
  },
  {
    id: "schengen",
    country: "Schengen Area",
    flag: "🇪🇺",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    capital: "Multiple",
    currency: "EUR",
    population: "420M",
    visaTypes: [
      { type: "Short Stay (C)", duration: "Up to 90 days", fee: "€80", processing: "15 days" },
      { type: "Long Stay (D)", duration: "90+ days", fee: "€80", processing: "15-30 days" },
      { type: "Transit (A)", duration: "24 hours", fee: "€80", processing: "15 days" },
      { type: "Multiple Entry", duration: "Up to 5 years", fee: "€80", processing: "15 days" }
    ],
    requirements: [
      "Valid passport",
      "Completed application form",
      "Passport photographs",
      "Travel insurance",
      "Proof of accommodation"
    ],
    successRate: "95%",
    description: "The Schengen visa allows travel across 26 European countries with a single visa."
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    capital: "Abu Dhabi",
    currency: "AED",
    population: "10M",
    visaTypes: [
      { type: "Tourist Visa", duration: "30-90 days", fee: "$100", processing: "3-5 days" },
      { type: "Transit Visa", duration: "96 hours", fee: "$60", processing: "24 hours" },
      { type: "Visit Visa", duration: "30-90 days", fee: "$150", processing: "3-5 days" },
      { type: "Long Term", duration: "Multiple entry", fee: "$300", processing: "5-7 days" }
    ],
    requirements: [
      "Valid passport (6+ months)",
      "Passport copy",
      "Passport photograph",
      "Confirmed ticket",
      "Hotel booking"
    ],
    successRate: "99%",
    description: "UAE offers easy visa processes for tourists and business visitors to this modern destination."
  }
];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  const filteredDestinations = destinations.filter(dest =>
    dest.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Visa Destinations</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Explore visa requirements and procedures for your dream destination
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Destinations List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Destinations</h3>
              <div className="space-y-4">
                {filteredDestinations.map((dest) => (
                  <Card 
                    key={dest.id} 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedDestination.id === dest.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedDestination(dest)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{dest.flag}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{dest.country}</h4>
                          <div className="flex items-center text-sm text-green-600">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            {dest.successRate} Success Rate
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Destination Details */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={selectedDestination.image} 
                    alt={selectedDestination.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-4xl">{selectedDestination.flag}</span>
                        <h2 className="text-3xl font-bold">{selectedDestination.country}</h2>
                      </div>
                      <p className="text-gray-200">{selectedDestination.description}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Country Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <MapPin className="mx-auto h-6 w-6 text-blue-600 mb-2" />
                      <div className="text-sm text-gray-600">Capital</div>
                      <div className="font-semibold">{selectedDestination.capital}</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="mx-auto h-6 w-6 text-green-600 mb-2" />
                      <div className="text-sm text-gray-600">Currency</div>
                      <div className="font-semibold">{selectedDestination.currency}</div>
                    </div>
                    <div className="text-center">
                      <Users className="mx-auto h-6 w-6 text-purple-600 mb-2" />
                      <div className="text-sm text-gray-600">Population</div>
                      <div className="font-semibold">{selectedDestination.population}</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="mx-auto h-6 w-6 text-green-600 mb-2" />
                      <div className="text-sm text-gray-600">Success Rate</div>
                      <div className="font-semibold text-green-600">{selectedDestination.successRate}</div>
                    </div>
                  </div>

                  {/* Visa Types */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Available Visa Types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDestination.visaTypes.map((visa, index) => (
                        <Card key={index} className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-semibold text-gray-900">{visa.type}</h4>
                              <Badge variant="secondary">{visa.fee}</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                Duration: {visa.duration}
                              </div>
                              <div className="flex items-center">
                                <FileText className="mr-2 h-4 w-4" />
                                Processing: {visa.processing}
                              </div>
                            </div>
                            <Button size="sm" className="w-full mt-3">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">General Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDestination.requirements.map((req, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to apply for {selectedDestination.country}?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Get expert assistance with your visa application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Start Application
                      </Button>
                      <Button variant="outline">
                        Free Consultation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}