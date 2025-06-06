import { Heading, Box, Text } from "@chakra-ui/react";
import { PiPersonSimpleThrowFill } from "react-icons/pi";
import { MdOutlineFastfood } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import BBIImage from "@/assets/images/BBI.webp";

const BounceBackSection = () => {
  return (
    <Box as="section" className="py-20 bg-gbam-light px-4 lg:px-8">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="text-4xl md:text-5xl font-bold  font-display">
            Bounce Back Initiative
          </Heading>
          <Text className="text-gbam-dark/80 max-w-2xl !mx-auto font-medium text-xl">
            Empowering marginalized communities through basketball, nutrition,
            and creative arts
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <Box className="order-2 md:order-1 ">
            <Heading
              as="h3"
              mb={6}
              className="!text-3xl font-bold text-gbam-dark font-display">
              More Than Just a Game
            </Heading>

            <Text mb={6} maxW="xl" className="text-gbam-dark/80">
              Bounce Back is a comprehensive initiative that uses basketball as
              a tool for social change and community development. We reach out
              to under-resourced areas with a program that combines sports,
              nutrition, and creative expression.
            </Text>

            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-8">
              <Box className="bg-white p-6 rounded-xl shadow-md">
                <Box className="w-12 h-12 bg-gbam-primary rounded-full flex items-center justify-center text-white mb-4">
                  <PiPersonSimpleThrowFill size={25} />
                </Box>
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-lg font-bold text-gbam-dark">
                  Basketball Clinics
                </Heading>
                <Text className="text-gbam-dark/80">
                  Weekly basketball challenges and skills development sessions
                  led by professional coaches.
                </Text>
              </Box>

              <Box className="bg-white p-6 rounded-xl shadow-md">
                <Box className="w-12 h-12 bg-gbam-primary rounded-full flex items-center justify-center text-white mb-4">
                  <MdOutlineFastfood size={25} />
                </Box>
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-lg font-bold text-gbam-dark">
                  Nutrition Programs
                </Heading>
                <Text className="text-gbam-dark/80">
                  Providing nutritious meals and education about balanced diets
                  for optimal performance and health.
                </Text>
              </Box>

              <Box className="bg-white p-6 rounded-xl shadow-md">
                <Box className="w-12 h-12 bg-gbam-primary rounded-full flex items-center justify-center text-white mb-4">
                  <LuPencil size={25} />
                </Box>
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-lg font-bold text-gbam-dark">
                  Creative Arts
                </Heading>
                <Text className="text-gbam-dark/80">
                  Expression through music, dance, and visual arts that build
                  confidence and community bonds.
                </Text>
              </Box>

              <Box className="bg-white p-6 rounded-xl shadow-md">
                <Box className="w-12 h-12 bg-gbam-primary rounded-full flex items-center justify-center text-white mb-4">
                  <IoBookOutline size={25} />
                </Box>
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-lg font-bold text-gbam-dark">
                  Life Skills
                </Heading>
                <Text className="text-gbam-dark/80">
                  Workshops on teamwork, conflict resolution, and goal setting
                  that translate to success beyond sports.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box className="order-1 md:order-2">
            <Box className="relative">
              <Box className="absolute -left-4 -top-2 w-full h-full bg-gbam-primary/20 rounded-lg transform rotate-1"></Box>
              <img
                src={BBIImage}
                alt="Kids playing basketball"
                className="relative z-10 rounded-lg shadow-xl"
              />
              <Box className="absolute -right-1 -bottom-4 w-1/2 h-1/2 bg-gbam-secondary/20 rounded-lg transform -rotate-9"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BounceBackSection;
