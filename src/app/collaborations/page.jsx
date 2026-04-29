'use client';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import { Handshake, Heart, Star, Users } from 'lucide-react';

export default function CollaborationsPage() {
  const collaborations = [
    { 
      icon: Handshake, 
      title: 'Strategic Partnerships', 
      description: 'We partner with organizations that share our vision and values to create lasting impact.' 
    },
    { 
      icon: Heart, 
      title: 'Non-Profit Initiatives', 
      description: 'Collaborating with charities and NGOs to give back to communities in need.' 
    },
    { 
      icon: Star, 
      title: 'Brand Collaborations', 
      description: 'Working with like-minded brands to bring value to our community members.' 
    },
    { 
      icon: Users, 
      title: 'Community Projects', 
      description: 'Joint ventures with community leaders to drive local and global change.' 
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
            Our <span className="text-jade-green">Collaborations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mid-gray leading-relaxed"
          >
            Building meaningful partnerships to amplify our impact and create lasting change.
          </motion.p>
        </div>
      </Section>

      Types of Collaboration
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">Partner With <span className="text-jade-green">Us</span></h2>
          <p className="text-xl text-mid-gray max-w-2xl mx-auto">
            We believe in the power of collaboration. Join us in making a difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {collaborations.map((collab, index) => (
            <Card key={index} {...collab} index={index} />
          ))}
        </div>
      </Section>

      CTA
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let's create something <span className="text-jade-green">great</span> together</h2>
          <p className="text-xl text-gray-300 mb-10">
            Interested in collaborating? We'd love to hear from you.
          </p>
          <a href="/community" className="btn-primary text-lg px-8 py-4">
            Get In Touch
          </a>
        </div>
      </Section>
      */}
    </main>
  );
}