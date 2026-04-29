'use client';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Users, Globe } from 'lucide-react';

export default function DonationsPage() {
  const impact = [
    { icon: Users, value: '1000+', label: 'Youth Mentored' },
    { icon: Globe, value: '50+', label: 'Communities Reached' },
    { icon: DollarSign, value: '$50K+', label: 'Funds Raised' },
  ];

  return (
    <main>
      {/*
      Hero
      <Section className="text-center min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 bg-vibrant-orange/10 rounded-full mb-6"
          >
            <Heart className="text-vibrant-orange w-12 h-12" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-bold mb-8 text-dark-gray"
          >
            Fuel the <span className="text-jade-green">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mid-gray leading-relaxed mb-12"
          >
            Your contributions directly support our youth mentorship programs and the development 
            of free educational resources for underprivileged communities. Every donation accelerates our impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-xl px-12 py-6">
              Donate Now
            </button>
            <button className="btn-secondary text-xl px-12 py-6">
              View Impact Report
            </button>
          </motion.div>
        </div>
      </Section>

      Impact Stats
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-jade-green">Impact</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-8 rounded-3xl text-center"
            >
              <item.icon className="w-12 h-12 text-jade-green mx-auto mb-4" />
              <div className="text-5xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-gray-400 text-lg">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      Donation Options
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">Ways to <span className="text-jade-green">Give</span></h2>
          <p className="text-xl text-mid-gray max-w-2xl mx-auto">
            Every contribution makes a difference. Choose how you'd like to support our mission.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['One-time Donation', 'Monthly Giving', 'Corporate Sponsorship'].map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-3xl text-center hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-dark-gray mb-4">{option}</h3>
              <p className="text-mid-gray mb-6">
                {index === 0 && 'Make a single impact with a one-time donation.'}
                {index === 1 && 'Become a sustaining supporter with monthly gifts.'}
                {index === 2 && 'Partner with us to create lasting change.'}
              </p>
              <button className="btn-primary">Get Started</button>
            </motion.div>
          ))}
        </div> 
      </Section>
      */}
    </main>
  );
}