'use client';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Megaphone, Database, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { 
      icon: TrendingUp, 
      title: 'Growth Consulting', 
      description: 'Strategic guidance to help you scale your business and personal development.' 
    },
    { 
      icon: Code, 
      title: 'Digital Solutions', 
      description: 'Custom web and mobile applications built with cutting-edge technology.' 
    },
    { 
      icon: Palette, 
      title: 'Brand Design', 
      description: 'Professional branding and visual identity that sets you apart.' 
    },
    { 
      icon: Megaphone, 
      title: 'Marketing', 
      description: 'Comprehensive marketing strategies to grow your reach and impact.' 
    },
    { 
      icon: Database, 
      title: 'Data Analytics', 
      description: 'Insights-driven decision making through advanced data analysis.' 
    },
    { 
      icon: Shield, 
      title: 'Security', 
      description: 'Enterprise-grade security solutions to protect your digital assets.' 
    },
  ];

  return (
    <main>
      {/*
      Hero
      <Section className="text-center min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-bold mb-8 text-dark-gray"
          >
            Our <span className="text-jade-green">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mid-gray leading-relaxed"
          >
            Comprehensive solutions designed to accelerate your growth and maximize your potential.
          </motion.p>
        </div>
      </Section>

      Services Grid
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} index={index} />
          ))}
        </div>
      </Section>

      CTA
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to get <span className="text-jade-green">started</span>?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help you achieve your goals.
          </p>
          <a href="/community" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </a>
        </div>
      </Section>
      */}
    </main>
  );
}