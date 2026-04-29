import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({ children, href, variant = "primary", className = "", onClick }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#03C03C] text-white hover:bg-[#00563B] shadow-lg hover:shadow-[#03C03C]/20",
    outline: "border-2 border-[#03C03C] text-[#03C03C] hover:bg-[#03C03C] hover:text-white",
    secondary: "bg-[#FFA500] text-white hover:bg-[#CC8400] shadow-lg hover:shadow-[#FFA500]/20",
    white: "bg-white text-[#111827] hover:bg-[#FFA500] hover:text-white"
  };

  const content = (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.span>
  );

  if (href) return <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</Link>;
  
  return <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</button>;
};

export default Button;