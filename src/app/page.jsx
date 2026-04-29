'use client';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FoundersSection from '../components/FoundersSection';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Zap, BookOpen, Heart, Globe, Sparkles, Lightbulb, Compass, Handshake, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Users, title: 'Community', description: 'Connect with like-minded individuals on the same growth journey.' },
    { icon: Target, title: 'Purpose', description: 'Find clarity in your vision and align your actions with your goals.' },
    { icon: Zap, title: 'Momentum', description: 'Build unstoppable momentum through accountability and support.' },
    { icon: BookOpen, title: 'Resources', description: 'Access exclusive educational content and growth tools.' },
  ];

  // Creed section refs
  const creedRef = useRef(null);
  const creedInView = useInView(creedRef, { once: true, margin: "-100px" });

  const creedLines = [
    "We are built to grow.",
    "We refuse stagnation.",
    "We choose discipline over comfort, progress over excuses, purpose over fear.",
    "We rise together.",
    "We sharpen one another.",
    "We celebrate every step forward.",
    "Growth is our commitment.",
    "Thriving is our culture.",
    "Together, we become more than we were yesterday."
  ];

  // Core values
  const values = [
    { icon: Compass, label: "Character" },
    { icon: Lightbulb, label: "Skills" },
    { icon: TrendingUp, label: "Mindset" },
    { icon: Handshake, label: "Purpose" }
  ];

  return (
    <main>
      <Hero />
      
      {/* Features Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-gray mb-6">
            Why Join The <span className="text-jade-green">Thrive Tribe</span>
          </h2>
          <p className="text-xl text-mid-gray max-w-2xl mx-auto">
            A community designed to help you grow faster, go further, and become the best version of yourself.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} {...feature} index={index} />
          ))}
        </div>
      </Section>

      {/* Creed Section */}
      <section ref={creedRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-depths via-jade-green to-emerald-depths"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={creedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The Thrive Tribe Creed
            </h2>
            <div className="w-24 h-1 bg-vibrant-orange mx-auto rounded-full mb-12"></div>

            <div className="space-y-6">
              {creedLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={creedInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`${
                    index === 2 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                  } font-bold text-white leading-relaxed hover:text-vibrant-orange transition-colors duration-300 cursor-default`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={creedInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
            >
              <p className="text-xl sm:text-2xl text-vibrant-orange font-semibold italic">
                "Growth is our commitment. Thriving is our culture."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-32 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jade-green/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-vibrant-orange" />
              <h2 className="text-4xl sm:text-5xl font-bold text-dark-gray">
                Our <span className="text-jade-green">Vision</span>
              </h2>
              <Sparkles className="w-8 h-8 text-vibrant-orange" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/80 to-light-bg/80 backdrop-blur-sm border-2 border-jade-green/20 rounded-3xl p-8 sm:p-12 shadow-lg"
            >
              <p className="text-xl sm:text-2xl text-mid-gray leading-relaxed mb-6">
                To become a thriving tribe of purpose-driven individuals who inspire 
                transformation, elevate one another, and create lasting impact.
              </p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-jade-green to-emerald-depths"
              >
                When people commit to growth, thriving becomes inevitable.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Core Values Section */}
      <section className="py-20 sm:py-32 px-4 bg-gradient-to-br from-jade-green/5 via-transparent to-vibrant-orange/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-gray mb-8">
              Our <span className="text-jade-green">Mission</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-mid-gray leading-relaxed mb-12">
              To cultivate a community where intentional growth is a shared lifestyle. 
              We empower individuals to develop character, skills, mindset, and purpose 
              through collaboration, accountability, and continuous learning.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3 hover:shadow-lg transition-shadow duration-300">
                    <value.icon className="w-10 h-10 text-jade-green" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-dark-gray">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <Section background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-jade-green">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We exist to empower individuals to unlock their full potential through community, 
              education, and intentional action. Together, we rise.
            </p>
            <a href="/about" className="inline-flex items-center text-jade-green font-medium hover:underline">
              Learn more about us <span className="ml-2">→</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-3xl text-center"
            >
              <Globe className="w-12 h-12 text-jade-green mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Community Members</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-3xl text-center"
            >
              <Zap className="w-12 h-12 text-vibrant-orange mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Programs Launched</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Founders Section */}
      <FoundersSection />

      {/* CTA Section */}
      <Section id="join">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-gray mb-6">
            Ready to <span className="text-jade-green">Thrive</span>?
          </h2>
          <p className="text-xl text-mid-gray mb-10">
            Join thousands of ambitious individuals who are already on their growth journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/community" className="btn-primary text-lg px-8 py-4">
              Join The Community
            </a>
            <a href="/donations" className="btn-secondary text-lg px-8 py-4">
              Support Our Mission
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}