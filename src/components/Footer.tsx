import { Link } from "react-router-dom";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-tradie-navy text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-tradie-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/examples" className="hover:text-tradie-orange transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-tradie-orange transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-tradie-orange transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:1300123456" className="hover:text-tradie-orange transition-colors">
                  1300 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@tradiewebworks.com" className="hover:text-tradie-orange transition-colors">
                  info@tradiewebworks.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Sydney, Australia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-tradie-orange transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-tradie-orange transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-tradie-orange transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-tradie-orange">Tradie</span> Web Works
          </h2>
          <p className="text-tradie-gray">
            Simple, effective websites for tradies
          </p>
          <p className="mt-4 text-sm text-tradie-gray">
            © {new Date().getFullYear()} Tradie Web Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};