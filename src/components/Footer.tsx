import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/upscale-digitech-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Upscale DigiTech - Digital Marketing Agency" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Results-driven Digital Marketing Agency specializing in SEO, PPC, Social Media, and Web Development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/upscale_digitech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61582684476323" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/upscaledigitech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/upscaledigitech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                aria-label="Visit our X (Twitter) page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
              <li><Link to="/services/email-marketing" className="text-gray-400 hover:text-primary transition-colors">Email Marketing</Link></li>
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
                <a href="mailto:info@upscaledigitech.com" className="text-gray-400 hover:text-primary transition-colors">info@upscaledigitech.com</a>
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