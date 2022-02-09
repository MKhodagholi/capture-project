import React from "react";

import AboutSection from "../components/AboutSection";
import ServisesSection from "../components/ServisesSection";
import FaqSection from "../components/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServisesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
