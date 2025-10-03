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
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to grow your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins">Get Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <Button type="submit" size="lg" className="btn-gradient w-full">
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <Button type="button" onClick={handleWhatsApp} size="lg" variant="outline" className="w-full border-2 border-primary hover:bg-primary hover:text-white">
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">+91 9631881743</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@upscaledigitech.com" className="text-muted-foreground hover:text-primary">
                      info@upscaledigitech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Okhla NSIC, New Delhi<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-secondary/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 font-poppins">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl overflow-hidden h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">How long does it take to see results?</h3>
              <p className="text-muted-foreground">Results vary by service, but most clients see measurable improvements within 3-6 months for SEO and 1-2 months for PPC campaigns.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">What is your pricing structure?</h3>
              <p className="text-muted-foreground">We offer customized packages based on your specific needs and goals. Contact us for a free consultation and personalized quote.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you work with businesses of all sizes?</h3>
              <p className="text-muted-foreground">Yes! We work with startups, small businesses, and large enterprises. Our strategies are tailored to fit your budget and goals.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;