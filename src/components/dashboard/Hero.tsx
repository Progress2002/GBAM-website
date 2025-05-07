import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

import HeroImg from "@/assets/images/hero-img.avif";

const Hero = () => {
  return (
    <Box className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <Box className="absolute inset-0 bg-gradient-to-b from-gbam-dark/80 via-gbam-dark/70 to-gbam-dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundBlendMode: "overlay",
            filter: "brightness(0.4)",
          }}
        />
      </Box>

      {/* Content */}
      <Box className="relative h-full container mx-aut0 flex flex-col justify-center md:items-center  px-4 lg:px-8">
        <Box className="max-w-3xl ">
          <Heading
            as="h1"
            className="!text-5xl md:!text-7xl font-extrabold mb-6 text-white font-display leading-tight md:text-center ">
            <span className="text-gbam-primary">#</span>GBAM
          </Heading>
          <Text className="md:text-center text-2xl md:text-3xl font-bold text-white/90 mb-2 font-display">
            Graffiti Basketball, and Music
          </Text>
          <Text className="md:text-center  text-lg md:text-xl font-medium text-white/80 mb-8 max-w-2xl">
            We're building a platform that uses the power of sports,
            entertainment, and communication to create opportunities, promote
            peace, and strengthen ties across communities.
          </Text>
          <Flex justify={{ base: "start", md: "center" }} className="mt-6">
            <Button colorScheme="orange" px={8} py={6}>
              Join The Movement
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Bounce indicator */}
      <Box className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <FaArrowDown size={20} className="text-gray-300" />
      </Box>
    </Box>
  );
};

export default Hero;
