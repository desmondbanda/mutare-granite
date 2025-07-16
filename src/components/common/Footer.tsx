import React from 'react';
import { Mountain, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-slate-400" />
              <div className="text-xl font-bold">
                Mutare Granite Company (Zonal)
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Zimbabwe's premier granite supplier, specializing in high-quality granite products 
              for residential and commercial projects. We provide countertops, tiles, tombstones, 
              and custom granite solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-sm">+263 20 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-sm">info@mutaregaranite.co.zw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-slate-400 mt-1" />
                <div className="text-slate-300 text-sm">
                  <p>123 Industrial Road</p>
                  <p>Mutare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300 text-sm">+263 20 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300 text-sm">info@mutaregaranite.co.zw</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Mutare Granite Company (Zonal). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;