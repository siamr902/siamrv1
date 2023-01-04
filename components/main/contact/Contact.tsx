import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMail } from "react-icons/fi";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import ContactForm from "./ContactForm";
import { ContactCircles } from "../blurs/BlurCircles";
import { useModal } from "../../../contexts/ModalContext";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="min-h-[80vh] flex flex-col space-y-12 lg:space-x-8 p-8 lg:flex-row lg:justify-between items-center mt-10 md:mt-20 relative"
    >
      <div className="relative flex flex-col space-y-16 items-center lg:items-start justify-center">
        <motion.div
          className={`section-title lg:text-6xl ${
            theme === "light" ? "darkbolts" : ""
          }`}
          whileInView={{ scale: [1, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}

        >
          Contact
        </motion.div>
        <motion.div
          className="text-center tracking-wide lg:text-start text-xl sm:text-2xl md:text-3xl font-ui"
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
            <div className="text-xl md:text-2xl font-ui z-10">
              Request # on form if preferred medium
            </div>
          </motion.div>
          <motion.div
            className="sm:pl-[10vw]"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <a
              href="mailto:siamr902@gmail.com?subject=Lovely weather outside."
              className="group flex items-center space-x-4"
            >
              <div className="text-xl dark:group-hover:text-skyblue group-hover:text-sky-500 md:text-2xl font-ui z-10 transition duration-300 ease-out">
                siamr902@gmail.com
              </div>
              <FiMail className="h-[5vw] w-[5vw] md:h-10 md:w-10 dark:text-skypurple text-darkpurple" />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <ContactCircles />
        </motion.div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
