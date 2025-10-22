import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MousePointer, Share2, Code, Megaphone, Mail, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search engine rankings with our comprehensive SEO strategies. We specialize in Local SEO, Technical SEO, On-Page optimization, and Link Building.",
      features: [
        "Keyword research & strategy",
        "Technical SEO audit & fixes",
        "Local SEO optimization",
        "Content optimization",
        "Link building campaigns",
        "Monthly reporting & analytics",
      ],
    },
    {
      icon: MousePointer,
      title: "PPC & Google Ads",
      description: "Maximize your ROI with expertly managed PPC campaigns. Our certified Google Ads specialists create high-converting campaigns that drive qualified leads.",
      features: [
        "Google Ads management",
        "Search & Display campaigns",
        "Remarketing strategies",
        "A/B testing & optimization",
        "Landing page optimization",
        "Detailed performance tracking",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms. We create engaging content and run targeted campaigns on Instagram, Facebook, LinkedIn, and Twitter.",
      features: [
        "Social media strategy",
        "Content creation & scheduling",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Analytics & reporting",
      ],
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Create stunning, responsive websites that convert visitors into customers. Our web development services focus on speed, security, and user experience.",
      features: [
        "Custom website design",
        "Responsive & mobile-optimized",
        "E-commerce solutions",
        "CMS integration",
        "Speed optimization",
        "Ongoing maintenance",
      ],
    },
    {
      icon: Megaphone,
      title: "Content & Branding",
      description: "Tell your brand story with compelling content. We develop content strategies, create engaging materials, and build brands that resonate with your audience.",
      features: [
        "Brand strategy & positioning",
        "Content marketing strategy",
        "Blog writing & SEO content",
        "Video production",
        "Graphic design",
        "Brand guidelines",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Drive conversions and build lasting customer relationships through strategic email campaigns. Our data-driven approach ensures maximum engagement and ROI.",
      features: [
        "Email campaign strategy",
        "Newsletter design & creation",
        "Automation & drip campaigns",
        "List segmentation & targeting",
        "A/B testing & optimization",
        "Performance tracking & analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to drive growth and maximize your online presence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-poppins">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <Link to={`/services/${
                    service.title === "SEO Services" ? "seo" :
                    service.title === "PPC & Google Ads" ? "ppc" :
                    service.title === "Social Media Marketing" ? "social-media" :
                    service.title === "Website Development" ? "web-development" :
                    service.title === "Email Marketing" ? "email-marketing" :
                    "content-branding"
                  }`}>
                    <Button size="lg" className="btn-gradient">
                      Learn More
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-card shadow-lg rounded-2xl p-8 border">
                    <h3 className="text-2xl font-semibold mb-6 font-poppins">What's Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver results that matter to your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">300%</div>
              <p className="text-lg font-semibold mb-2">Average ROI Increase</p>
              <p className="text-muted-foreground">Our clients see significant returns on their marketing investment</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">24/7</div>
              <p className="text-lg font-semibold mb-2">Support Available</p>
              <p className="text-muted-foreground">Round-the-clock assistance whenever you need it</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">98%</div>
              <p className="text-lg font-semibold mb-2">Client Retention</p>
              <p className="text-muted-foreground">Long-term partnerships built on trust and results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business. Get your free consultation today!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Contact Us Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
