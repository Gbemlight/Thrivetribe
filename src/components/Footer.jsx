'use client';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Community', href: '/community' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Donations', href: '/donations' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark-gray mt-auto text-white relative">
      {/* Gradient Border Top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-jade-green via-vibrant-orange to-jade-green opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-jade-green to-emerald-depths flex items-center justify-center shadow-lg shadow-jade-green/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white">
                  THRIVE<span className="text-jade-green">TRIBE</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm italic">
              "Building a thriving tribe of purpose-driven individuals who inspire transformation, elevate one another, and create lasting impact."
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-jade-green hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:justify-self-center">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-jade-green text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-jade-green" /> hello@thrivetribe.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-jade-green" /> +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-jade-green" /> Global Community
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for growth tips and community updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-jade-green transition-colors"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-jade-green hover:bg-emerald-depths px-3 rounded-lg transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {currentYear} ThriveTribe Community. Built to Grow.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-semibold text-gray-500">
            <Link href="#" className="hover:text-jade-green transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-jade-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;