import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMail } from "react-icons/fi";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import ContactForm from "./ContactForm";
import { ContactCircles } from "../blurs/BlurCircles";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="min-h-[80vh] flex flex-col space-y-16 lg:space-x-8 p-8 lg:flex-row lg:justify-between items-center mt-10 md:mt-20 relative"
    >
      <div className="relative flex flex-col space-y-16 items-center lg:items-start justify-center">
        <motion.div
          className={`section-title lg:text-7xl ${
            theme === "light" ? "darkbolts" : ""
          }`}
          whileInView={{ scale: [1, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
        >
          Contact
        </motion.div>
        <motion.div
          className="tracking-widest text-center lg:text-start text-4xl md:text-5xl font-brush"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Have questions or feedback?
        </motion.div>
        <div className="hidden sm:flex flex-col space-y-4 items-center">
          <motion.div
            className="flex space-x-4 items-center"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <BiMessageRoundedDots className="h-[5vw] w-[5vw] md:h-10 md:w-10 dark:text-skypurple text-darkpurple" />
            <div className="text-3xl md:text-4xl font-brush">
              Request # on form if preferred medium
            </div>
          </motion.div>
          <motion.div
            className="flex space-x-4 items-center sm:pl-[10vw]"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <div className="text-3xl md:text-4xl font-brush">
              siamr902@gmail.com
            </div>
            <FiMail className="h-[5vw] w-[5vw] md:h-10 md:w-10 dark:text-skypurple text-darkpurple" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <ContactCircles />
          <div className="hidden sm:inline-flex bubble-display absolute top-4 right-0 translate-y-[20%] translate-x-[3%] -z-20">
            SUP
          </div>
          <div className="hidden sm:inline-flex bubble-display absolute bottom-4 left-2 translate-y-[60%] -z-20">
            HMU
          </div>
        </motion.div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
