import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Compass, Handshake, TrendingUp } from 'lucide-react';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Compass, label: "Character" },
    { icon: Lightbulb, label: "Skills" },
    { icon: TrendingUp, label: "Mindset" },
    { icon: Handshake, label: "Purpose" }
  ];

  return (
    <section ref={ref} className="section-container gradient-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-8">
            Our <span className="text-[#03C03C]">Mission</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-[#6B7280] leading-relaxed mb-12">
            To cultivate a community where intentional growth is a shared lifestyle. 
            We empower individuals to develop character, skills, mindset, and purpose 
            through collaboration, accountability, and continuous learning.
          </p>

          {/* Value Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3 hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="w-10 h-10 text-[#03C03C]" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-[#111827]">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
