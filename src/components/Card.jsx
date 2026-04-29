import { motion } from "framer-motion";

const Card = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 bg-white rounded-3xl border-2 border-gray-50 shadow-sm hover:shadow-xl hover:border-jade-green/20 transition-all group"
    >
      {Icon && <Icon className="w-12 h-12 text-jade-green mb-6 group-hover:scale-110 transition-transform" />}
      <h3 className="text-2xl font-bold text-dark-gray mb-4">{title}</h3>
      <p className="text-mid-gray leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default Card;