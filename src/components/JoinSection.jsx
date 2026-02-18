import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Instagram, MessageCircle } from 'lucide-react';

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="join" ref={ref} className="section-container bg-gradient-to-br from-[#03C03C]/10 via-[#00563B]/10 to-[#FFA500]/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#03C03C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-6">
            Join Our <span className="text-[#03C03C]">Community</span>
          </h2>
          <p className="text-xl text-[#6B7280] mb-12 max-w-2xl mx-auto">
            Be part of a tribe that grows together. Sign up to get early access and 
            join a community committed to intentional growth.
          </p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border-2 border-[#03C03C]/30 focus:border-[#03C03C] focus:outline-none text-[#111827] placeholder-[#6B7280] transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {submitted ? (
                  <>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-[#6B7280] font-semibold mb-6">Or connect with us:</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/thethrivetribe_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#03C03C]/20 rounded-full hover:border-[#03C03C] hover:shadow-md transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-[#03C03C] group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-sm text-[#6B7280]">Follow us on Instagram</span>
                  <span className="block font-semibold text-[#111827]">@thethrivetribe_</span>
                </div>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#03C03C]/20 rounded-full hover:border-[#03C03C] hover:shadow-md transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 text-[#03C03C] group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-sm text-[#6B7280]">Join our WhatsApp</span>
                  <span className="block font-semibold text-[#111827]">Community</span>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
