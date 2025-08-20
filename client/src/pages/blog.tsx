import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Tag,
  Eye
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to US Tourist Visa Application in 2024",
    excerpt: "Everything you need to know about applying for a US B1/B2 tourist visa, including requirements, processing times, and expert tips for approval.",
    content: "The US tourist visa application process can seem complex, but with proper preparation and understanding of requirements...",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 2340,
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    category: "US Visas",
    tags: ["Tourist Visa", "B1/B2", "USA", "Guide"],
    featured: true
  },
  {
    id: 2,
    title: "Canada Express Entry: Your Path to Permanent Residency",
    excerpt: "Discover how the Express Entry system works and increase your chances of receiving an Invitation to Apply (ITA) for Canadian permanent residence.",
    content: "Canada's Express Entry system is the fastest way to immigrate to Canada as a skilled worker...",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-12",
    readTime: "12 min read",
    views: 1890,
    image: "https://images.unsplash.com/photo-1503614472-8c93d56cd601?w=600&h=400&fit=crop",
    category: "Canada Immigration",
    tags: ["Express Entry", "Canada", "PR", "Immigration"],
    featured: true
  },
  {
    id: 3,
    title: "UK Student Visa Requirements: A Complete Checklist",
    excerpt: "Planning to study in the UK? Here's everything you need to know about Student visa requirements, application process, and common mistakes to avoid.",
    content: "The UK Student visa (formerly Tier 4) is your gateway to world-class education in the United Kingdom...",
    author: "Emma Thompson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-10",
    readTime: "10 min read",
    views: 1567,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    category: "UK Visas",
    tags: ["Student Visa", "UK", "Education", "Study"],
    featured: false
  },
  {
    id: 4,
    title: "Schengen Visa Tips: Travel 26 Countries with One Visa",
    excerpt: "Learn how to apply for a Schengen visa and explore 26 European countries. Includes tips on choosing the right embassy and avoiding common rejections.",
    content: "The Schengen visa is one of the most sought-after travel documents, allowing you to visit 26 European countries...",
    author: "David Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-08",
    readTime: "6 min read",
    views: 2156,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    category: "Europe Travel",
    tags: ["Schengen", "Europe", "Travel", "Tourist"],
    featured: false
  },
  {
    id: 5,
    title: "Australia Skilled Migration: Points Calculator Guide",
    excerpt: "Understand Australia's skilled migration points system and learn how to maximize your score for a successful visa application.",
    content: "Australia's skilled migration program uses a points-based system to select candidates for permanent residence...",
    author: "Lisa Wong",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-05",
    readTime: "15 min read",
    views: 1423,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop",
    category: "Australia Immigration",
    tags: ["Skilled Migration", "Australia", "Points System", "PR"],
    featured: false
  },
  {
    id: 6,
    title: "Common Visa Interview Questions and How to Answer Them",
    excerpt: "Prepare for your visa interview with confidence. We cover the most common questions asked by visa officers and provide expert tips for success.",
    content: "The visa interview is often the most nerve-wracking part of the application process...",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face",
    date: "2024-01-03",
    readTime: "9 min read",
    views: 3210,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop",
    category: "Interview Tips",
    tags: ["Interview", "Tips", "Preparation", "Success"],
    featured: false
  }
];

const categories = ["All", "US Visas", "Canada Immigration", "UK Visas", "Europe Travel", "Australia Immigration", "Interview Tips"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Visa Insights & Guides</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Expert advice, latest updates, and comprehensive guides for all your visa needs
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <img src={post.authorImage} alt={post.author} className="w-6 h-6 rounded-full mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {post.views}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <img src={post.authorImage} alt={post.author} className="w-5 h-5 rounded-full mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest visa updates, policy changes, and expert insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}