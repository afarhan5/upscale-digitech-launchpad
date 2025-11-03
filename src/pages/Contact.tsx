import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };
  const handleWhatsApp = () => {
    window.open("https://wa.me/15551234567?text=Hi! I'd like to know more about your digital marketing services.", "_blank");
  };
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Ready to grow your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-poppins">Get Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="w-full" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} required className="w-full" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <Select value={formData.service} onValueChange={value => setFormData({
                  ...formData,
                  service: value
                })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="ppc">PPC & Google Ads</SelectItem>
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="content">Content & Branding</SelectItem>
                      <SelectItem value="email-marketing">Email Marketing</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required rows={5} className="w-full" />
                </div>

                <Button type="submit" className="btn-gradient w-full h-11 sm:h-12 text-base sm:text-lg">
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-4 sm:mt-6">
                <Button type="button" onClick={handleWhatsApp} variant="outline" className="w-full h-11 sm:h-12 text-base sm:text-lg border-2 border-primary hover:bg-primary hover:text-white">
                  <MessageCircle className="mr-2" size={18} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-poppins">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                    <a href="tel:+15551234567" className="text-sm sm:text-base text-muted-foreground hover:text-primary break-all">+91 9631881743</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <a href="mailto:info@upscaledigitech.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary break-all">
                      info@upscaledigitech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Okhla NSIC, New Delhi<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-secondary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-poppins">Office Hours</h3>
                <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <p><span className="font-medium text-foreground">Monday - Friday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="font-medium text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-poppins">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">How long does it take to see results?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Results vary by service, but most clients see measurable improvements within 3-6 months for SEO and 1-2 months for PPC campaigns.</p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">What is your pricing structure?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">We offer customized packages based on your specific needs and goals. Contact us for a free consultation and personalized quote.</p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Do you work with businesses of all sizes?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Yes! We work with startups, small businesses, and large enterprises. Our strategies are tailored to fit your budget and goals.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;