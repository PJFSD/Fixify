import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl text-black mb-6">
            FIXIFY<span className="text-blue-600">.</span>
          </h2>

          <p className="text-slate-500 max-w-sm mb-8">
            The future of home maintenance. Fabrication, painting, and electrical
            services delivered with precision and care.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:text-pink-500 transition"
            >
              <Instagram size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:text-blue-600 transition"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:text-sky-500 transition"
            >
              <Twitter size={18} />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919130804848?text=Hello%20Fixify%20Team,%20I%20need%20a%20service"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:text-green-500 transition"
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-black mb-6">Services</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>Industrial Cleaning</li>
            <li>Metal Fabrication</li>
            <li>Interior & Exterior Painting</li>
            <li>Smart Home Electrical</li>
            <li>Art Wall</li>
            <li>Gardening</li>
            <li>Plumbing</li>
            <li>Renovation</li>
            <li>Windows</li>
            <li>Interior</li>
            <li>Waterproofing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-black mb-6">Contact</h4>
          <div className="space-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              hello@fixify.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              +91 9130804848
            </div>

            {/* WhatsApp Contact */}
            <div className="flex items-center gap-3">
              <MessageCircle size={16} className="text-green-500" />
              <a
                href="https://wa.me/919130804848"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              Kolhapur, Maharashtra
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2026 Fixify Services Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
