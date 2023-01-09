import { motion } from 'framer-motion'
import React from 'react'

const Headline = () => {
  return (
      <motion.div
        className="font-bubble text-6xl sm:text-7xl md:text-8xl lg:text-[108px]"
        whileInView={{
          scale: [1, 1.05, 1],
          rotate: [0, 10, -10, 5, -5, 0],
        }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1 }}
      >
        <span className="dark:opacity-50 opacity-100">CHECK OUT MY</span>&nbsp;
        <span className="relative bg-gradient-to-r dark:from-skyblue dark:to-skypurple from-darkred to-darkpurple text-transparent bg-clip-text font-semibold opacity-80 dark:opacity-70">
          ARTICLES
          <svg
            width="100%"
            height="35"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:inline-flex absolute bottom-0 left-0 -z-50 translate-y-[40%]"
          >
            <path
              d="m 0 10 c 300 -10 400 -5 500 0 m -480 10 c 200 -10 400 -10 480 0 m -440 10 c 180 -10 400 -10 440 0"
              fill="transparent"
              strokeWidth="3"
              strokeLinecap="round"
              className="dark:stroke-sky-500 stroke-darkred"
            />
          </svg>
        </span>
      </motion.div>
  )
}

export default Headline