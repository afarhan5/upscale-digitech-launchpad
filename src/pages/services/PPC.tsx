import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MousePointer, ArrowRight, Check, DollarSign, Target, BarChart3, Zap, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PPC = () => {
  const features = [
    {
      icon: Target,
      title: "Campaign Strategy & Setup",
      description: "Custom PPC strategies tailored to your business goals and target audience."
    },
    {
      icon: BarChart3,
      title: "Google Ads Management",
      description: "Expert management of Search, Display, Shopping, and Video campaigns."
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Advanced targeting to reach the right customers at the right time."
    },
    {
      icon: Zap,
      title: "Landing Page Optimization",
      description: "High-converting landing pages designed to maximize your ROI."
    },
    {
      icon: TrendingUp,
      title: "Remarketing Campaigns",
      description: "Re-engage visitors who didn't convert the first time."
    },
    {
      icon: DollarSign,
      title: "Bid Management",
      description: "Smart bid strategies to get the most value from your budget."
    }
  ];

  const results = [
    "Average 400% ROI on ad spend",
    "50% reduction in cost per acquisition",
    "See results within the first month",
    "Continuous optimization for better performance"
  ];

  const platforms = [
    "Google Ads",
    "Microsoft Advertising",
    "Facebook Ads",
    "Instagram Ads",
    "LinkedIn Ads",
    "YouTube Ads"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MousePointer className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">PPC & Google Ads</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Maximize ROI with targeted pay-per-click campaigns that drive qualified leads and sales
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free PPC Consultation
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
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why Choose PPC Advertising?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Wasting ad budget on unqualified clicks</li>
                  <li>• Low conversion rates from campaigns</li>
                  <li>• Can't compete with bigger competitors</li>
                  <li>• Need immediate traffic and results</li>
                  <li>• Complex ad platforms to manage</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Target only qualified prospects</li>
                  <li>• Achieve 400%+ ROI on ad spend</li>
                  <li>• Outbid competition strategically</li>
                  <li>• Get instant traffic and leads</li>
                  <li>• Expert campaign management</li>
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

      {/* Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">Platforms We Manage</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We run high-performing campaigns across all major advertising platforms
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-secondary/50 rounded-xl p-6 font-semibold">
                  {platform}
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
            Ready to Scale Your Business with PPC?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free campaign analysis and discover how we can maximize your advertising ROI
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Campaign Analysis
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PPC;