import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ children, className = "", id = "", background = "white" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const bgStyles = background === "dark" ? "bg-[#111827] text-white" : "bg-white text-[#111827]";

  return (
    <section id={id} ref={ref} className={`py-20 sm:py-32 px-4 ${bgStyles} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;