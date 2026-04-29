import React, { useRef } from 'react';
import Image from 'next/image';
import { Quote, Linkedin, Twitter } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import img from "../assets/feranmi.jpeg";

const FoundersSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="gradient-bg py-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-jade-green/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vibrant-orange/10 rounded-full blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <Image 
                src={img} 
                alt="Oluwaferanmi Famawode - Founder" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <Quote className="w-12 h-12 text-jade-green mb-6 opacity-30" />
            <h2 className="text-3xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              Meet the Visionary behind the <span className="text-jade-green">Tribe</span>
            </h2>
            
            <div className="space-y-6 text-mid-gray text-lg leading-relaxed mb-10">
              <p className="italic font-medium text-dark-gray/80">
                "Health isn't just about what you eat or how often you exercise. It's about the community you surround yourself with and the mindset you cultivate every single morning."
              </p>
              <p>
                Oluwaferanmi Famawode is a youth leader and creative entrepreneur passionate about raising a purpose-driven generation. 
                Through Thrivetribe, he equips young leaders with tools for self-discovery, discipline, and meaningful living.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-2xl font-bold text-dark-gray">Oluwaferanmi Famawode</h4>
              <p className="text-jade-green font-medium mb-6 uppercase tracking-widest text-sm">Founder & Chief Growth Officer</p>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white shadow-md rounded-full text-dark-gray hover:text-jade-green transition-all transform hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white shadow-md rounded-full text-dark-gray hover:text-vibrant-orange transition-all transform hover:-translate-y-1"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;