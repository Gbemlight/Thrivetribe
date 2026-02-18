import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Creed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00563B] via-[#03C03C] to-[#00563B]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Thrive Tribe Creed
          </h2>
          <div className="w-24 h-1 bg-[#FFA500] mx-auto rounded-full mb-12"></div>

          <div className="space-y-6">
            {creedLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`${
                  index === 2 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                } font-bold text-white leading-relaxed hover:text-[#FFA500] transition-colors duration-300 cursor-default`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
          >
            <p className="text-xl sm:text-2xl text-[#FFA500] font-semibold italic">
              "Growth is our commitment. Thriving is our culture."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Creed;
