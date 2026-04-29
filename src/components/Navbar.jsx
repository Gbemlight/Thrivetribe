'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive(link.href) 
                        ? 'bg-jade-green/10 text-jade-green' 
                        : 'text-dark-gray hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/donations"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-jade-green text-white py-4 rounded-xl font-semibold mt-4"
                >
                  Join the Tribe
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;