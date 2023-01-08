import { motion } from "framer-motion";
import React from "react";

const Blog = () => {
  return (
    <motion.div
      className="w-full min-h-[50vh] sm:min-h-[60vh] p-6 mt-20 dark:bg-[#272727] bg-[#eeeeee] overflow-hidden -skew-y-[3deg] transition ease-linear shadow-dimmer dark:shadow-[#1f1e1e] shadow-[#c6cacf]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="font-bubble text-6xl sm:text-7xl md:text-8xl lg:text-[108px] dark:opacity-50">
        CHECK OUT MY ARTICLES
      </div>
    </motion.div>
  );
};

export default Blog;
