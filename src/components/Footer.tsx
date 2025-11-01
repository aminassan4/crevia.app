import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-subtle border-t border-border"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">K</span>
              </div>
              <span className="font-heading text-2xl font-bold text-foreground">
                Qlova
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Empowering African creators and entrepreneurs to build, share, and monetize their expertise through digital products and events.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+254-795-284-028</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@qlova.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 relative">
              About
              <div className="w-12 h-0.5 bg-gradient-hero mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 relative">
              Support
              <div className="w-12 h-0.5 bg-gradient-hero mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Creator Agreement
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 relative">
              Connect
              <div className="w-12 h-0.5 bg-gradient-hero mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-body text-sm text-muted-foreground">Follow us for updates</p>
                <p className="font-body text-sm text-muted-foreground">Join 50K+ African creators</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Stay Updated with African Innovation
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Get weekly insights, success stories, and opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="px-6 py-3 bg-gradient-hero text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              © 2024 Qlova. All rights reserved. Building Africa's digital creator economy.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for African creators</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;