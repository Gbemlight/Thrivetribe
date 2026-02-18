import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA500]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#03C03C]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-[#FFA500]" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
              Our <span className="text-[#03C03C]">Vision</span>
            </h2>
            <Sparkles className="w-8 h-8 text-[#FFA500]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-[#F9FAFB]/80 backdrop-blur-sm border-2 border-[#03C03C]/20 rounded-3xl p-8 sm:p-12 shadow-lg"
          >
            <p className="text-xl sm:text-2xl text-[#6B7280] leading-relaxed mb-6">
              To become a thriving tribe of purpose-driven individuals who inspire 
              transformation, elevate one another, and create lasting impact.
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#03C03C] to-[#00563B]"
            >
              When people commit to growth, thriving becomes inevitable.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
