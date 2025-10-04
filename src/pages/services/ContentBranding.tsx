import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, ArrowRight, Check, FileText, Video, Palette, PenTool, Lightbulb, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContentBranding = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Define your unique brand positioning, voice, and messaging that resonates."
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Develop comprehensive content plans aligned with your business goals."
    },
    {
      icon: FileText,
      title: "Blog & SEO Content",
      description: "High-quality, SEO-optimized articles that drive traffic and engagement."
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Engaging video content for social media, websites, and advertising."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Eye-catching visuals, infographics, and branded materials."
    },
    {
      icon: Target,
      title: "Brand Guidelines",
      description: "Complete brand identity guidelines for consistent messaging."
    }
  ];

  const results = [
    "Establish a memorable brand identity",
    "Increase content engagement by 200%+",
    "Build trust and authority in your industry",
    "Create consistent messaging across all channels"
  ];

  const deliverables = [
    "Brand Strategy Document",
    "Logo & Visual Identity",
    "Content Calendar",
    "Blog Articles (SEO-optimized)",
    "Social Media Content",
    "Video Scripts & Production"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Megaphone className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Content & Branding</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tell your brand story with compelling content that drives customer loyalty and growth
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free Brand Consultation
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
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why Content & Branding Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Inconsistent brand messaging</li>
                  <li>• Lack of engaging content</li>
                  <li>• Struggling to stand out from competitors</li>
                  <li>• No clear brand identity</li>
                  <li>• Low content engagement rates</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Cohesive brand across all channels</li>
                  <li>• High-quality, engaging content</li>
                  <li>• Unique brand positioning</li>
                  <li>• Strong, memorable identity</li>
                  <li>• 3x higher engagement rates</li>
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

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">What You'll Receive</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Comprehensive content and branding deliverables tailored to your needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <div key={index} className="bg-secondary/50 rounded-xl p-6 font-semibold">
                  {item}
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
            <h2 className="text-4xl font-bold mb-12 font-poppins text-center">Results You Can Expect</h2>
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
            Ready to Build a Powerful Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free brand consultation and discover how we can elevate your content
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Brand Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentBranding;