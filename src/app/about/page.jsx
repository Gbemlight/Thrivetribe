'use client';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We constantly seek new ways to solve problems and create value.' },
    { icon: Users, title: 'Community', description: 'We believe in the power of collective growth and support.' },
    { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in everything we do.' },
    { icon: Heart, title: 'Purpose', description: 'We are driven by a deep commitment to making a positive impact.' },
  ];

  return (
    <main>
      {/* Hero */}
      <Section className="text-center min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-bold mb-8 text-dark-gray"
          >
            About <span className="text-jade-green">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mid-gray leading-relaxed"
          >
            The Thrive Tribe is a community of ambitious individuals committed to intentional growth. 
            We believe that together, we can achieve more than we ever could alone.
          </motion.p>
        </div>
      </Section>

      {/* Story Section */}
      <Section background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-jade-green">Story</span></h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded with a simple vision: to create a space where people can grow, learn, and thrive together.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              What started as a small group of like-minded individuals has grown into a thriving community 
              of thousands. We believe in the power of connection, the value of continuous learning, 
              and the transformative potential of intentional action.
            </p>
          </div>
          <div className="bg-jade-green/10 rounded-3xl p-12">
            <div className="text-6xl font-bold text-jade-green mb-4">5000+</div>
            <div className="text-xl text-gray-300">Active Members</div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-gray-400">Programs</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">Our <span className="text-jade-green">Values</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} {...value} index={index} />
          ))}
        </div>
      </Section>
    </main>
  );
}