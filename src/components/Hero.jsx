import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const scrollToJoin = () => {
    document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03C03C]/10 via-[#00563B]/10 to-[#FFA500]/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(3, 192, 60, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(0, 86, 59, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#03C03C] mb-2">
              THE THRIVE TRIBE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] to-[#FFA500] mx-auto rounded-full"></div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#111827] mb-6 leading-tight"
          >
            Built To Grow.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03C03C] to-[#00563B]">
              Bound To Thrive.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-[#6B7280] mb-12 max-w-3xl mx-auto"
          >
            A growth-driven community committed to intentional becoming.
            Where discipline meets purpose, and thriving is inevitable.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToJoin}
              className="btn-primary inline-flex items-center gap-2 text-lg group"
            >
              Join the Tribe
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-[#03C03C]/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#FFA500]/10 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#03C03C] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#03C03C] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
