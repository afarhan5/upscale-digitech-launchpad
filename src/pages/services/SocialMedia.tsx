import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Share2, ArrowRight, Check, Users, Heart, MessageCircle, Camera, TrendingUp, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SocialMedia = () => {
  const features = [
    {
      icon: Calendar,
      title: "Social Media Strategy",
      description: "Custom strategies aligned with your brand goals and target audience."
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Engaging posts, graphics, videos, and stories that resonate with your audience."
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description: "Active engagement with your followers to build loyal communities."
    },
    {
      icon: TrendingUp,
      title: "Paid Social Advertising",
      description: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and Twitter."
    },
    {
      icon: Heart,
      title: "Influencer Partnerships",
      description: "Connect with influencers to amplify your brand reach."
    },
    {
      icon: Users,
      title: "Analytics & Reporting",
      description: "Track engagement, growth, and ROI with detailed performance reports."
    }
  ];

  const results = [
    "3x increase in social media engagement",
    "Build a loyal community of followers",
    "Increase brand awareness by 200%+",
    "Generate quality leads from social platforms"
  ];

  const platforms = [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Twitter/X",
    "TikTok",
    "Pinterest"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Share2 className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Social Media Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your brand presence and engage audiences across all major social platforms
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8">
                Get Free Social Media Audit
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
            <h2 className="text-4xl font-bold mb-6 font-poppins text-center">Why Social Media Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Low engagement on social posts</li>
                  <li>• Struggling to grow your follower base</li>
                  <li>• Inconsistent posting schedule</li>
                  <li>• Not generating leads from social media</li>
                  <li>• Can't keep up with content creation</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 3x higher engagement rates</li>
                  <li>• Rapid follower growth</li>
                  <li>• Consistent, high-quality content</li>
                  <li>• Generate qualified leads daily</li>
                  <li>• Full-service content management</li>
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
              We create engaging content and manage your presence across all major social platforms
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
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free social media audit and strategy session tailored to your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Social Media Audit
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;