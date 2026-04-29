'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Community', href: '/community' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Donate', href: '/donations' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark-gray text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jade-green via-emerald-depths to-vibrant-orange" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-jade-green/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-vibrant-orange/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-jade-green to-emerald-depths flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                THRIVE<span className="text-jade-green">TRIBE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A thriving community of purpose-driven individuals committed to growth, discipline, and meaningful living.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-jade-green hover:text-white transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-jade-green rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-jade-green transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-jade-green transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-jade-green rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-jade-green mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-jade-green flex-shrink-0" />
                <span>hello@thrivetribe.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-jade-green flex-shrink-0" />
                <span>+234 800 THRIVE</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-jade-green rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-jade-green transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-jade-green text-white rounded-full font-medium text-sm hover:bg-emerald-depths transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} The Thrive Tribe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-jade-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-jade-green transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;