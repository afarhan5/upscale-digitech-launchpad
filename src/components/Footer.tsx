import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">UD</span>
              </div>
              <span className="text-xl font-bold font-poppins">Upscale DigiTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Results-driven Digital Marketing Agency specializing in SEO, PPC, Social Media, and Web Development.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/seo" className="text-gray-400 hover:text-primary transition-colors">SEO Services</Link></li>
              <li><Link to="/services/ppc" className="text-gray-400 hover:text-primary transition-colors">PPC & Google Ads</Link></li>
              <li><Link to="/services/social-media" className="text-gray-400 hover:text-primary transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services/content-branding" className="text-gray-400 hover:text-primary transition-colors">Content & Branding</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary transition-colors">+91 9631881743</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@upscaledigitech.com" className="text-gray-400 hover:text-primary transition-colors">hello@upscaledigitech.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Okhla NSIC, New Delhi<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Upscale DigiTech. All rights reserved. | 
            <Link to="/privacy" className="hover:text-primary transition-colors ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-primary transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;