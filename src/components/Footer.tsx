import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/flawless-7.webp" className="bg-transparent object-cover w-16 h-16 p-2 rounded-lg" alt="Flawless Auto Logo" />
              <div>
                <h2 className="text-xl font-bold">Flawless Auto</h2>
                <p className="text-blue-400 dark:text-blue-300 font-medium">Refinishing</p>
              </div>
            </Link>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional auto body repair and refinishing services with over 15 years of experience.
              We restore your vehicle to its original beauty with precision and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                <span className="text-gray-300 dark:text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                <span className="text-gray-300 dark:text-gray-400">info@flawlessauto.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-300 mt-1" />
                <span className="text-gray-300 dark:text-gray-400">
                  123 Auto Repair Ave<br />
                  Your City, ST 12345
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours & Links</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-gray-300 dark:text-gray-400">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                Our Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                Work Gallery
              </Link>
              <Link to="/contact" className="block text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Flawless Auto Refinishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;