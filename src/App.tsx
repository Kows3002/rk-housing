import { Search, Home, MapPin, Phone, DollarSign, TrendingUp, Shield, Star, Clock, Users, Building, ArrowRight, Mail, Calendar, Award, CheckCircle2, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src="https://res.cloudinary.com/dprxsgnqn/image/upload/v1736438221/WhatsApp_Image_2025-01-09_at_21.08.43_7158e50a_2_gfkebz.png" className="logo-image" alt="Logo" />
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Home", active: true },
                { label: "Properties", submenu: true },
                { label: "Services" },
                { label: "About" },
                { label: "Contact" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <li className={`text-gray-700 hover:text-primary flex items-center space-x-1 ${
                    item.active ? 'text-primary font-medium' : ''
                  }`}>
                    <span>{item.label}</span>
                    {item.submenu && (
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </li>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {['Buy', 'Rent', 'Sell', 'New Developments'].map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-primary hover:bg-primary/90">
                List Property
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-y-3">
              <Button variant="ghost" className="w-full justify-center">Sign In</Button>
              <Button className="w-full justify-center bg-primary hover:bg-primary/90">
                List Property
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center mt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your <span className="text-primary">Perfect</span> Place to Live
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl">
              We help you find the property of your dreams. With over 10,000+ properties available, you're sure to find what you're looking for.
            </p>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Tabs defaultValue="buy" className="mb-6">
                <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="mt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input 
                      placeholder="Location" 
                      className="flex-1"
                      icon={<MapPin className="w-4 h-4 text-gray-500" />}
                    />
                    <Input 
                      placeholder="Price Range" 
                      className="flex-1"
                      icon={<DollarSign className="w-4 h-4 text-gray-500" />}
                    />
                    <Input 
                      placeholder="Property Type" 
                      className="flex-1"
                      icon={<Building className="w-4 h-4 text-gray-500" />}
                    />
                    <Button size="lg" className="bg-primary">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="rent" className="mt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input 
                      placeholder="Location" 
                      className="flex-1"
                      icon={<MapPin className="w-4 h-4 text-gray-500" />}
                    />
                    <Input 
                      placeholder="Monthly Rent" 
                      className="flex-1"
                      icon={<DollarSign className="w-4 h-4 text-gray-500" />}
                    />
                    <Input 
                      placeholder="Property Type" 
                      className="flex-1"
                      icon={<Building className="w-4 h-4 text-gray-500" />}
                    />
                    <Button size="lg" className="bg-primary">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="sell" className="mt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input 
                      placeholder="Property Address" 
                      className="flex-1"
                      icon={<MapPin className="w-4 h-4 text-gray-500" />}
                    />
                    <Button size="lg" className="bg-primary">
                      Get Estimate
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white">10,000+ Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white">Verified Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Properties Listed", icon: <Building className="w-6 h-6" /> },
              { number: "2M+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
              { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
              { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our handpicked selection of premium properties, each offering unique features and exceptional value.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Villa",
                price: "$1,200,000",
                location: "Beverly Hills, CA",
                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3",
                beds: 5,
                baths: 4,
                sqft: 3500,
                features: ["Pool", "Garden", "Garage"]
              },
              {
                title: "Luxury Penthouse",
                price: "$2,500,000",
                location: "Manhattan, NY",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
                beds: 3,
                baths: 3,
                sqft: 2800,
                features: ["Terrace", "Gym", "Doorman"]
              },
              {
                title: "Waterfront Estate",
                price: "$3,800,000",
                location: "Miami Beach, FL",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
                beds: 6,
                baths: 5,
                sqft: 4500,
                features: ["Beach Access", "Dock", "Tennis Court"]
              }
            ].map((property, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Button variant="secondary" size="sm">
                      Featured
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{property.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {property.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Button>View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Comprehensive Services</h2>
            <p className="text-gray-600">
              We offer a full range of real estate services to meet all your property needs, from buying and selling to property management and consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-12 h-12" />,
                title: "Property Sales",
                description: "Expert guidance through the entire home buying and selling process, ensuring the best possible outcome for our clients."
              },
              {
                icon: <Building className="w-12 h-12" />,
                title: "Property Management",
                description: "Comprehensive property management services for landlords, including tenant screening, maintenance, and rent collection."
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Investment Advisory",
                description: "Strategic investment advice backed by market analysis and industry expertise to maximize your returns."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 text-primary transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
                quote: "Working with DreamHome was an absolute pleasure. They made the entire process of buying our first home smooth and stress-free."
              },
              {
                name: "Michael Chen",
                role: "Property Investor",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
                quote: "Their market knowledge and investment advice have been invaluable. I've successfully grown my property portfolio thanks to their expertise."
              },
              {
                name: "Emily Rodriguez",
                role: "First-time Buyer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
                quote: "As a first-time buyer, I had many questions. The team was patient, knowledgeable, and guided me through every step of the process."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a consultation with our expert team today and let us help you find the perfect property
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                icon={<Mail className="w-4 h-4 text-white/60" />}
              />
              <Button size="lg" variant="secondary" className="md:w-auto">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Awards & Recognition</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <Award className="w-8 h-8 text-primary" />
                <span className="text-gray-600 font-medium">Best Agency {2020 + index}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">DreamHome</h3>
              <p className="text-gray-400 mb-6">
                Your trusted partner in finding the perfect property. With years of experience and dedication to excellence.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="hover:text-white">
                    <span className="sr-only">{social}</span>
                    <Home className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Properties', 'About Us', 'Contact', 'Blog'].map((link) => (
                  <li key={link} className="hover:text-white cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Properties</h4>
              <ul className="space-y-4">
                {['Houses', 'Apartments', 'Villas', 'Commercial', 'Off-Plan'].map((type) => (
                  <li key={type} className="hover:text-white cursor-pointer">{type}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>123 Real Estate Ave, NY 10001</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>info@dreamhome.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 py-8 text-center">
            <p className="text-gray-400">
              © 2024 DreamHome. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;