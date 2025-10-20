import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Clock, HeadphonesIcon, Search, MousePointer, Share2, Code, Megaphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

import heroImage from "@/assets/hero-bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search rankings with our expert SEO strategies. We deliver organic traffic and long-term growth.",
    },
    {
      icon: MousePointer,
      title: "PPC & Google Ads",
      description: "Maximize ROI with targeted PPC campaigns. We create high-converting ads that drive qualified leads.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence across all social platforms. Engage audiences and grow your community.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert. Fast, secure, and mobile-optimized solutions.",
    },
    {
      icon: Megaphone,
      title: "Content & Branding",
      description: "Tell your story with compelling content. Build a brand that resonates and drives customer loyalty.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechStart Inc.",
      text: "Upscale DigiTech transformed our online presence. Our traffic increased by 250% in just 6 months!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      company: "GrowthLabs",
      text: "Outstanding ROI on our PPC campaigns. The team is professional, responsive, and truly understands digital marketing.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      company: "StyleCraft Co.",
      text: "From website design to social media, they delivered excellence. Our sales have doubled since partnering with them.",
      rating: 5,
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Proven ROI", text: "Average 300% increase in client revenue" },
    { icon: Award, title: "5+ Years Experience", text: "Industry-leading expertise and results" },
    { icon: Clock, title: "24/7 Support", text: "Always here when you need us" },
    { icon: HeadphonesIcon, title: "Affordable Pricing", text: "Premium services at competitive rates" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(147, 51, 234, 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins animate-fade-in">
              Grow Your Business with Upscale DigiTech
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              We are a results-driven Digital Marketing Agency specializing in SEO, PPC, Social Media, and Web Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary text-lg px-8">
                  See Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver measurable results that drive real business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-poppins">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-gradient">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <TestimonialCard {...testimonial} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Ready to Dominate Online?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your digital presence and drive real results. Get your free consultation today!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
