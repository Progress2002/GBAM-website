import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import HeroImg from "@/assets/images/hero.webp";
import HeroImg2 from "@/assets/images/hero.jpg";
import HeroImg3 from "@/assets/images/DSC_7225.webp";
import HeroImg4 from "@/assets/images/_DSC0457.webp";

const Hero = () => {
  const images = [HeroImg, HeroImg2, HeroImg3, HeroImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 8000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gbam-dark/80 via-gbam-dark/70 to-gbam-dark">
       {images.map((src, index) => (
  <motion.img
    key={index}
    src={src}
    alt={`Hero background ${index + 1}`}
    loading="lazy"
    className="!absolute !inset-0 !w-full !h-full object-cover"
    style={{ filter: "brightness(0.3)" }}
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{
      opacity: index === currentIndex ? 1 : 0,
      scale: index === currentIndex ? 1 : 1.05,
    }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
  />
))}


        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            key={currentIndex}
            className="h-full bg-gbam-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative h-full container mx-auto flex flex-col justify-center md:items-center  px-4 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-3xl ">
          <motion.h1
            className="!text-5xl md:!text-7xl !font-extrabold mb-6 text-white font-display leading-tight md:text-center "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-gbam-primary">#</span>GBAM
          </motion.h1>

          <motion.div
            className="md:text-center text-2xl md:text-3xl font-bold text-white/90 mb-2 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Graffiti Basketball, and Music
          </motion.div>

          <motion.p
            className="md:text-center  text-lg md:text-xl font-medium text-white/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            We're building a platform that uses the power of sports,
            entertainment, and communication to create opportunities, promote
            peace, and strengthen ties across communities.
          </motion.p>

          <motion.div
            className="mt-6 flex w-full justify-start md:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <button className="!p-3 !px-7 font-semibold rounded-l rounded-r !text-white !bg-[#DD6C21]">
              Join The Movement
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bounce indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <FaArrowDown size={20} className="text-gray-300" />
      </motion.div>
    </div>
  );
};

export default Hero;
