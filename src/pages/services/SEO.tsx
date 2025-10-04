import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Check, TrendingUp, Target, FileText, Link2, BarChart3, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SEO = () => {
  const features = [
    {
      icon: Target,
      title: "Keyword Research & Strategy",
      description: "In-depth analysis to identify high-value keywords that drive qualified traffic to your website."
    },
    {
      icon: Settings,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis and fixes to ensure your site is fully optimized for search engines."
    },
    {
      icon: FileText,
      title: "On-Page Optimization",
      description: "Content optimization, meta tags, headers, and internal linking to boost your search rankings."
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "High-quality backlink campaigns to improve domain authority and search visibility."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Monthly performance reports with actionable insights and continuous optimization."
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Optimize for local searches, Google My Business, and location-based rankings."
    }
  ];

  const results = [
    "250% average increase in organic traffic",
    "First page rankings for 80% of target keywords",
    "3-6 month timeframe for significant results",
    "Continuous growth and sustained rankings"
  ];

  const tools = [
    "Google Search Console",
    "SEMrush",
    "Ahrefs",
    "Screaming Frog",
    "Google Analytics",
    "Moz Pro"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">SEO Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dominate search engine rankings and drive qualified organic traffic with our proven SEO strategies
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free SEO Audit
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
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why Your Business Needs SEO</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Your website isn't showing up on Google</li>
                  <li>• Competitors are ranking higher than you</li>
                  <li>• Missing out on potential customers</li>
                  <li>• Low website traffic and conversions</li>
                  <li>• Lack of online visibility hurting sales</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Rank on first page of Google</li>
                  <li>• Outperform your competition</li>
                  <li>• Attract qualified leads organically</li>
                  <li>• Increase website traffic by 250%+</li>
                  <li>• Build long-term sustainable growth</li>
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

      {/* Tools We Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">Tools We Use</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We leverage industry-leading SEO tools to deliver exceptional results
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-secondary/50 rounded-xl p-6 font-semibold">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Clients Get */}
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
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can transform your online visibility
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Your Free SEO Audit
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;