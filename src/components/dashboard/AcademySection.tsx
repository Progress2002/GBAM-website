import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Carousel from "../Carousel";

const AcademySection = () => {
  return (
    <Box as="section" className="py-20 bg-white">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Academy
          </Heading>
          <Text className="text-gbam-dark/80 max-w-3xl !mx-auto text-lg">
            Where talent meets transformation. Inclusive training programs for
            everyone.
          </Text>
        </Box>

        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          <Box
            w={{ base: "sm", md: "2xl", lg: "lg" }}
            className="!mx-auto mb-8 md:mb-0">
            <Carousel className="rounded-lg" />
          </Box>

          <Box>
            <Box className="bg-gbam-light rounded-lg p-8 shadow-lg">
              <Heading
                as="h3"
                mb={6}
                className="!text-2xl font-bold text-gbam-dark font-display">
                Our Programs
              </Heading>

              <Box className="mb-6">
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-xl font-bold text-gbam-primary flex items-center">
                  <span className="bg-gbam-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    1
                  </span>
                  Children
                </Heading>
                <Text className="text-gbam-dark/80 pl-11">
                  Developing skills, confidence, and teamwork from an early age
                  through fun, structured basketball and arts activities.
                </Text>
              </Box>

              <Box className="mb-6">
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-xl font-bold text-gbam-primary flex items-center">
                  <span className="bg-gbam-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    2
                  </span>
                  Adults
                </Heading>
                <Text className="text-gbam-dark/80 pl-11">
                  Offering growth opportunities for aspiring professionals and
                  community leaders through advanced training and mentorship.
                </Text>
              </Box>

              <Box className="mb-6">
                <Heading
                  as="h4"
                  mb={2}
                  className="!text-xl font-bold text-gbam-primary flex items-center">
                  <span className="bg-gbam-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    3
                  </span>
                  Persons Living with Disabilities
                </Heading>
                <Text className="text-gbam-dark/80 pl-11">
                  Ensuring no one is left behind in the journey of
                  self-expression and achievement with adaptive programs and
                  specialized coaching.
                </Text>
              </Box>

              <Button colorScheme="orange" mb={4}>
                Apply for Academy
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AcademySection;
