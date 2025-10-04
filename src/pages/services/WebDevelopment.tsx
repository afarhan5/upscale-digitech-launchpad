import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, ArrowRight, Check, Layout, Zap, Shield, Smartphone, Search as SearchIcon, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: "Custom Website Design",
      description: "Beautiful, brand-aligned designs that captivate visitors and drive conversions."
    },
    {
      icon: Smartphone,
      title: "Responsive & Mobile-First",
      description: "Perfect display across all devices - desktop, tablet, and mobile."
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Lightning-fast loading times for better user experience and SEO."
    },
    {
      icon: SearchIcon,
      title: "SEO-Friendly Development",
      description: "Built with SEO best practices to rank higher on search engines."
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Secure hosting, SSL certificates, and ongoing maintenance support."
    },
    {
      icon: Wrench,
      title: "CMS Integration",
      description: "Easy-to-use content management systems for hassle-free updates."
    }
  ];

  const results = [
    "50% faster page load times",
    "Mobile-optimized for all screen sizes",
    "100% secure with SSL encryption",
    "Ongoing support and maintenance included"
  ];

  const technologies = [
    "React & Next.js",
    "WordPress",
    "Shopify",
    "HTML5 & CSS3",
    "Node.js",
    "PHP & MySQL"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Web Development</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create stunning, fast, and secure websites that convert visitors into customers
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free Website Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why You Need a Professional Website</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Outdated website design hurting credibility</li>
                  <li>• Slow loading times losing customers</li>
                  <li>• Not mobile-friendly</li>
                  <li>• Difficult to update content</li>
                  <li>• Poor conversion rates</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Modern, professional design</li>
                  <li>• Lightning-fast performance</li>
                  <li>• Fully responsive on all devices</li>
                  <li>• Easy content management</li>
                  <li>• Optimized for conversions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 font-poppins text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-poppins">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We build with modern, reliable technologies to ensure your website performs flawlessly
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-secondary/50 rounded-xl p-6 font-semibold">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 font-poppins text-center">What You Get</h2>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <Check className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote and consultation for your website project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Website Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;