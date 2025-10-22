import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowRight, Users, DollarSign, BarChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const CaseStudies = () => {
  const caseStudies = [{
    company: "TechStart Inc.",
    industry: "SaaS Technology",
    challenge: "Low organic traffic and minimal online visibility in a competitive market.",
    solution: "Implemented comprehensive SEO strategy with technical optimization, content marketing, and link building campaigns.",
    results: [{
      metric: "Organic Traffic",
      increase: "250%",
      icon: TrendingUp
    }, {
      metric: "Keyword Rankings",
      increase: "180%",
      icon: BarChart
    }, {
      metric: "Lead Generation",
      increase: "320%",
      icon: Users
    }, {
      metric: "Revenue Growth",
      increase: "400%",
      icon: DollarSign
    }],
    duration: "6 months",
    testimonial: "Upscale DigiTech transformed our online presence completely. The results speak for themselves!",
    author: "Rajesh Sharma, CEO"
  }, {
    company: "GrowthLabs",
    industry: "E-commerce",
    challenge: "High PPC costs with low conversion rates and poor ROI on advertising spend.",
    solution: "Redesigned PPC campaigns with better targeting, optimized landing pages, and implemented conversion rate optimization strategies.",
    results: [{
      metric: "Cost Per Click",
      increase: "-45%",
      icon: DollarSign
    }, {
      metric: "Conversion Rate",
      increase: "210%",
      icon: TrendingUp
    }, {
      metric: "ROAS",
      increase: "380%",
      icon: BarChart
    }, {
      metric: "Monthly Sales",
      increase: "290%",
      icon: DollarSign
    }],
    duration: "4 months",
    testimonial: "Our ROI skyrocketed after partnering with this team. Best decision we ever made!",
    author: "Priya Patel, Marketing Director"
  }, {
    company: "StyleCraft Co.",
    industry: "Fashion & Lifestyle",
    challenge: "Limited social media engagement and brand awareness in a crowded market.",
    solution: "Developed comprehensive social media strategy with influencer partnerships, engaging content, and paid social campaigns.",
    results: [{
      metric: "Social Following",
      increase: "450%",
      icon: Users
    }, {
      metric: "Engagement Rate",
      increase: "380%",
      icon: TrendingUp
    }, {
      metric: "Website Traffic",
      increase: "290%",
      icon: BarChart
    }, {
      metric: "Online Sales",
      increase: "340%",
      icon: DollarSign
    }],
    duration: "8 months",
    testimonial: "They understood our brand perfectly and helped us reach audiences we never thought possible.",
    author: "Emma Williams, Founder"
  }, {
    company: "FitLife Wellness",
    industry: "Health & Fitness",
    challenge: "Poor email marketing performance with low open rates and minimal conversions from email campaigns.",
    solution: "Implemented advanced email marketing automation, segmentation strategies, personalized content, and optimized email designs.",
    results: [{
      metric: "Open Rate",
      increase: "275%",
      icon: TrendingUp
    }, {
      metric: "Click Rate",
      increase: "340%",
      icon: BarChart
    }, {
      metric: "Email Revenue",
      increase: "420%",
      icon: DollarSign
    }, {
      metric: "Subscriber Growth",
      increase: "190%",
      icon: Users
    }],
    duration: "5 months",
    testimonial: "Email marketing was dead for us until Upscale DigiTech completely transformed our strategy. Incredible results!",
    author: "Michael Chen, Marketing Manager"
  }, {
    company: "HomeDecor Plus",
    industry: "Interior Design",
    challenge: "Struggling to compete with larger brands and generate consistent online sales in a competitive market.",
    solution: "Created an integrated digital strategy combining SEO, content marketing, social media, and targeted PPC campaigns.",
    results: [{
      metric: "Organic Rankings",
      increase: "320%",
      icon: TrendingUp
    }, {
      metric: "Website Visitors",
      increase: "410%",
      icon: Users
    }, {
      metric: "Online Orders",
      increase: "380%",
      icon: DollarSign
    }, {
      metric: "Brand Awareness",
      increase: "290%",
      icon: BarChart
    }],
    duration: "7 months",
    testimonial: "From a small local shop to competing with major brands online - this team made it happen!",
    author: "Sarah Johnson, Owner"
  }, {
    company: "TechSupport Pro",
    industry: "IT Services",
    challenge: "Low website visibility and difficulty generating qualified leads in the B2B technology space.",
    solution: "Implemented comprehensive B2B SEO strategy, LinkedIn marketing, and content marketing focused on technical decision-makers.",
    results: [{
      metric: "B2B Leads",
      increase: "350%",
      icon: Users
    }, {
      metric: "Search Traffic",
      increase: "280%",
      icon: TrendingUp
    }, {
      metric: "Sales Pipeline",
      increase: "440%",
      icon: DollarSign
    }, {
      metric: "Domain Authority",
      increase: "160%",
      icon: BarChart
    }],
    duration: "6 months",
    testimonial: "Finally, a marketing team that understands B2B tech. Our lead quality and quantity have never been better.",
    author: "David Kumar, CEO"
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses. See how we've helped our clients achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => <Card key={index} className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Details */}
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-secondary/50 to-background">
                      <div className="mb-6">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                          {study.industry}
                        </span>
                        
                        <p className="text-muted-foreground">Duration: {study.duration}</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 font-poppins text-destructive">Challenge</h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-2 font-poppins text-primary">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border">
                          <p className="italic text-muted-foreground mb-3">"{study.testimonial}"</p>
                          <p className="font-semibold">{study.author}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Results */}
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
                      <h3 className="text-2xl font-bold mb-8 font-poppins">Results Achieved</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {study.results.map((result, rIndex) => <div key={rIndex} className="bg-white rounded-xl p-6 shadow-md card-hover">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                              <result.icon className="text-white" size={24} />
                            </div>
                            <p className="text-3xl font-bold text-gradient mb-2">
                              {result.increase}
                            </p>
                            <p className="text-sm text-muted-foreground font-medium">
                              {result.metric}
                            </p>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Overall Performance</h2>
            <p className="text-xl text-muted-foreground">Combined results across all our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">500+</p>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">$50M+</p>
              <p className="text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">98%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">300%</p>
              <p className="text-muted-foreground">Avg. ROI Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results. Get started today!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CaseStudies;