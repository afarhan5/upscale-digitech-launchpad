import { Button } from "@/components/ui/button";
import { Target, Users, Zap, Award, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable ROI and tangible business growth for every client.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and transparency.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of digital trends to keep your business competitive in the evolving market.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "Quality is non-negotiable. We deliver premium services that exceed expectations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">About Upscale DigiTech</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in digital transformation and online growth
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-poppins">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2014, Upscale DigiTech began with a simple mission: to help businesses thrive in the digital age. What started as a small team of passionate marketers has grown into a full-service digital marketing agency serving clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over 10 years of experience, we've helped hundreds of businesses achieve their online goals through innovative strategies and data-driven campaigns. Our team of certified experts specializes in SEO, PPC, social media marketing, web development, and content creation.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in building lasting relationships with our clients, understanding their unique challenges, and delivering customized solutions that drive real results. Every strategy we create is backed by research, analytics, and a commitment to excellence.
              </p>
            </div>
            <div>
              <img 
                src={aboutImage} 
                alt="Upscale DigiTech Team" 
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-poppins text-gradient">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower businesses of all sizes with cutting-edge digital marketing solutions that drive growth, increase visibility, and deliver measurable ROI. We're committed to staying at the forefront of industry trends and providing our clients with strategies that work.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-poppins text-gradient">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the leading digital marketing agency recognized for innovation, integrity, and exceptional results. We envision a future where every business, regardless of size, has access to world-class digital marketing expertise to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center card-hover p-6 rounded-xl bg-card shadow-md">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-poppins">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">Recognized for excellence in digital marketing</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">98%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">50+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gradient mb-2">10+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Work With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Let's discuss how we can help your business grow.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
