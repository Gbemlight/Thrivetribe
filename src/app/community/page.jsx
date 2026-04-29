'use client';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, Video } from 'lucide-react';

export default function CommunityPage() {
  const features = [
    { 
      icon: Users, 
      title: 'Member Network', 
      description: 'Connect with thousands of like-minded individuals on their growth journey.' 
    },
    { 
      icon: MessageCircle, 
      title: 'Discussion Forums', 
      description: 'Engage in meaningful conversations and share insights with the community.' 
    },
    { 
      icon: Calendar, 
      title: 'Events & Workshops', 
      description: 'Access exclusive events, workshops, and networking opportunities.' 
    },
    { 
      icon: Video, 
      title: 'Live Sessions', 
      description: 'Join live sessions with industry experts and thought leaders.' 
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
            Join Our <span className="text-jade-green">Community</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mid-gray leading-relaxed"
          >
            Be part of a thriving community of ambitious individuals committed to growth and success.
          </motion.p>
        </div>
      </Section>

      Features
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">Community <span className="text-jade-green">Benefits</span></h2>
          <p className="text-xl text-mid-gray max-w-2xl mx-auto">
            Everything you need to grow, learn, and connect with others on the same journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} {...feature} index={index} />
          ))}
        </div>
      </Section>

      Stats
      <Section background="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-jade-green mb-2">5K+</div>
            <div className="text-gray-400">Members</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-jade-green mb-2">50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-jade-green mb-2">100+</div>
            <div className="text-gray-400">Events/Year</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-jade-green mb-2">1000+</div>
            <div className="text-gray-400">Success Stories</div>
          </div>
        </div>
      </Section>

      CTA
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Become part of something <span className="text-jade-green">bigger</span></h2>
          <p className="text-xl text-mid-gray mb-10">
            Join the Thrive Tribe today and start your growth journey with thousands of like-minded individuals.
          </p>
          <a href="/donations" className="btn-primary text-lg px-8 py-4">
            Join Now
          </a>
        </div>
      </Section>
      */}
    </main>
  );
}