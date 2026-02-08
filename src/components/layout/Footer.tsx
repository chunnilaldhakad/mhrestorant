import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-serif text-xl font-bold">S</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Shree Govindam</h3>
                <p className="text-sm text-primary-foreground/70">Masala House</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Where Taste Meets Tradition. Experience authentic vegetarian Indian cuisine 
              crafted with love and the finest ingredients.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Our Menu
              </Link>
              <Link to="/daily-meal" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Daily Meal
              </Link>
              <Link to="/banquet" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Banquet Hall
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:9784776778"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>9784776778</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Hotel Danaria, Near Jagatpura Flyover,<br />
                  Hare Krishna Marg, Jaipur – 302017
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Monday - Sunday</span>
              </div>
              <p className="text-sm text-primary-foreground/80 pl-7">
                11:00 AM - 11:00 PM
              </p>
              <p className="text-sm text-secondary font-medium pl-7">
                Daily Thali: 12:00 PM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© 2024 Shree Govindam Masala House. All rights reserved.</p>
          <p>Pure Vegetarian • Authentic Indian Cuisine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
