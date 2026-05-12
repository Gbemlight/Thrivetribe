'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Articles', href: '/articles' },
    { name: 'Community', href: '/community' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Donations', href: '/donations' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200/50">
      <div className="absolute inset-0 bg-gradient-to-r from-jade-green/5 via-transparent to-vibrant-orange/5 opacity-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-jade-green to-emerald-depths flex items-center justify-center shadow-lg shadow-jade-green/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-dark-gray">
                THRIVE<span className="text-jade-green">TRIBE</span>
              </span>
              <span className="text-[10px] text-mid-gray tracking-widest uppercase">Community</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'text-jade-green' 
                    : 'text-dark-gray hover:text-jade-green'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-jade-green rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/donations" 
              className="group relative px-6 py-2.5 bg-jade-green text-white text-sm font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10">Join the Tribe</span>
              <div className="absolute inset-0 bg-emerald-depths translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.href) 
                    ? 'bg-jade-green/10 text-jade-green' 
                    : 'text-dark-gray hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donations"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-jade-green text-white py-4 rounded-xl font-bold mt-4"
            >
              Join the Tribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;