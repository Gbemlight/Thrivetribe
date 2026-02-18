import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, TrendingUp, Target, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Community",
      description: "We grow together"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We support one another"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "We pursue excellence"
    },
    {
      icon: Award,
      title: "Achievement",
      description: "We celebrate progress"
    }
  ];

  return (
    <section ref={ref} className="section-container bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-6">
            About <span className="text-[#03C03C]">The Thrive Tribe</span>
          </h2>
          <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
            The Thrive Tribe is a growth-driven community committed to intentional becoming. 
            We believe thriving is not an accident. It is built through discipline, learning, 
            accountability, and shared purpose.
          </p>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Our culture is simple: we grow together, we support one another, and we pursue 
            excellence daily.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-white to-[#F9FAFB] border-2 border-[#03C03C]/20 rounded-2xl hover:border-[#03C03C]/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <feature.icon className="w-10 h-10 text-[#03C03C] mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6B7280]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
