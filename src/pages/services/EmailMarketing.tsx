import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Check, Users, Target, BarChart, Zap, Clock, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EmailMarketing = () => {
  const features = [
    {
      icon: Target,
      title: "Campaign Strategy",
      description: "Custom email marketing strategies tailored to your business goals and target audience."
    },
    {
      icon: Users,
      title: "List Segmentation",
      description: "Advanced audience segmentation for personalized messaging and better engagement rates."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automated email sequences that nurture leads and drive conversions on autopilot."
    },
    {
      icon: BarChart,
      title: "A/B Testing",
      description: "Continuous testing and optimization to maximize open rates, clicks, and conversions."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Detailed reporting and insights to track campaign performance and ROI."
    },
    {
      icon: Clock,
      title: "Drip Campaigns",
      description: "Strategic email sequences that guide prospects through your sales funnel."
    }
  ];

  const results = [
    "275% average increase in email open rates",
    "340% improvement in click-through rates",
    "420% boost in email-driven revenue",
    "190% growth in subscriber engagement"
  ];

  const tools = [
    "Mailchimp",
    "HubSpot",
    "ActiveCampaign",
    "Klaviyo",
    "SendGrid",
    "ConvertKit"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Email Marketing Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Drive conversions and build lasting customer relationships with strategic email campaigns that deliver results
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free Email Strategy
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
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why Your Business Needs Email Marketing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Low email open and click rates</li>
                  <li>• Subscribers not engaging with your content</li>
                  <li>• Missing out on repeat sales</li>
                  <li>• Generic emails that don't convert</li>
                  <li>• Wasted marketing budget on ineffective campaigns</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Increase open rates by 275%+</li>
                  <li>• Drive qualified traffic to your site</li>
                  <li>• Build customer loyalty and retention</li>
                  <li>• Personalized emails that resonate</li>
                  <li>• Maximize ROI with automation</li>
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
              We leverage the best email marketing platforms to deliver exceptional results
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
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free email marketing strategy consultation and discover how we can boost your engagement and sales
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Your Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailMarketing;
