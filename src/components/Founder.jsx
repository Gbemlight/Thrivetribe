import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import Image from 'next/image';
import img from "../assets/feranmi.jpeg"

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-gray mb-4">
            Meet the <span className="text-jade-green">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-jade-green to-vibrant-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Founder Image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-jade-green to-emerald-depths flex items-center justify-center shadow-2xl">
                <div className="relative w-60 h-60 sm:w-76 sm:h-76 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image 
                    src={img} 
                    alt="Oluwaferanmi Famawode - Founder of The Thrive Tribe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-vibrant-orange rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-jade-green rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-dark-gray mb-2">
                Oluwaferanmi Famawode
              </h3>
              <p className="text-xl text-jade-green font-semibold">
                Founder & Chief Growth Officer
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-jade-green/20" />
              <p className="text-lg text-mid-gray leading-relaxed mb-6 pl-6">
                Oluwaferanmi Famawode is a Nigerian youth leader, speaker, and
                creative entrepreneur passionate about raising a generation of
                purpose-driven young people. Known for his strong voice in
                personal development, leadership, and faith-based growth, he
                consistently works at the intersection of creativity, education,
                and social impact. Through speaking engagements, community
                initiatives, and youth programs, he equips teenagers and young
                adults with practical tools for self-discovery, discipline, and
                meaningful living. His leadership style blends vision,
                communication, and service, making him a relatable mentor figure
                to many emerging leaders. Beyond public speaking, Oluwaferanmi
                is deeply involved in branding, media, and organizational
                leadership, using storytelling and strategy to help individuals
                and communities grow. His work reflects a commitment to
                excellence, empowerment, and long-term societal transformation —
                all centered on helping young people realize their potential and
                walk boldly in purpose.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-jade-green/10 to-emerald-depths/10 rounded-full border-2 border-jade-green/20">
              <span className="text-sm font-semibold text-dark-gray">
                "Together, we become more than we were yesterday."
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats or achievements (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-jade-green/5 to-emerald-depths/5 rounded-2xl border border-jade-green/10">
            <p className="text-3xl sm:text-4xl font-bold text-jade-green mb-2">
              Growth
            </p>
            <p className="text-sm text-mid-gray">
              Committed to continuous learning
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-jade-green/5 to-emerald-depths/5 rounded-2xl border border-jade-green/10">
            <p className="text-3xl sm:text-4xl font-bold text-jade-green mb-2">
              Community
            </p>
            <p className="text-sm text-mid-gray">
              Building tribes that thrive together
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-jade-green/5 to-emerald-depths/5 rounded-2xl border border-jade-green/10">
            <p className="text-3xl sm:text-4xl font-bold text-jade-green mb-2">
              Impact
            </p>
            <p className="text-sm text-mid-gray">
              Creating lasting transformation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
