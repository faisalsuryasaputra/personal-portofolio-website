import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Digital Products", "UI/UX Design", "AI Solutions", "Web Apps"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-3xl lg:text-4xl font-medium text-amber-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Faisal Surya Saputra
        </motion.h1>
        <div className="flex flex-col items-start max-w-2xl mt-2">
          <motion.p
            className="text-3xl lg:text-5xl font-bold text-neutral-200 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Multidisciplinary Informatics Student & Developer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="my-2"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-5xl lg:text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-lg lg:text-xl font-normal text-neutral-400 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Research Assistant @ Motion Lab
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden px-4">
        <motion.p
          className="text-2xl font-semibold text-amber-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Faisal Surya Saputra
        </motion.p>
        <div>
          <motion.p
            className="text-3xl font-bold text-neutral-200"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-4xl"
            />
          </motion.div>
          <motion.p
            className="text-base font-normal text-neutral-400 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            End-to-End Digital Solutions & AI Innovations
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
