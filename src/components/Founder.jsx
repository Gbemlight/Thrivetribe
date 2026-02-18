import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
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
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Meet the <span className="text-[#03C03C]">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] to-[#FFA500] mx-auto rounded-full"></div>
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
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#03C03C] to-[#00563B] flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 sm:w-76 sm:h-76 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={img} 
                    alt="Oluwaferanmi Famawode - Founder of The Thrive Tribe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFA500] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#03C03C] rounded-full opacity-20 blur-xl"></div>
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
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-2">
                Oluwaferanmi Famawode
              </h3>
              <p className="text-xl text-[#03C03C] font-semibold">
                Founder & Chief Growth Officer
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#03C03C]/20" />
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6 pl-6">
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

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#03C03C]/10 to-[#00563B]/10 rounded-full border-2 border-[#03C03C]/20">
              <span className="text-sm font-semibold text-[#111827]">
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
          <div className="text-center p-6 bg-gradient-to-br from-[#03C03C]/5 to-[#00563B]/5 rounded-2xl border border-[#03C03C]/10">
            <p className="text-3xl sm:text-4xl font-bold text-[#03C03C] mb-2">
              Growth
            </p>
            <p className="text-sm text-[#6B7280]">
              Committed to continuous learning
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#03C03C]/5 to-[#00563B]/5 rounded-2xl border border-[#03C03C]/10">
            <p className="text-3xl sm:text-4xl font-bold text-[#03C03C] mb-2">
              Community
            </p>
            <p className="text-sm text-[#6B7280]">
              Building tribes that thrive together
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#03C03C]/5 to-[#00563B]/5 rounded-2xl border border-[#03C03C]/10">
            <p className="text-3xl sm:text-4xl font-bold text-[#03C03C] mb-2">
              Impact
            </p>
            <p className="text-sm text-[#6B7280]">
              Creating lasting transformation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
