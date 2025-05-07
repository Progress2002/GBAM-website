import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "@/assets/images/yello-fever/image1.webp";
import Image2 from "@/assets/images/yello-fever/image2.webp";
import Image3 from "@/assets/images/yello-fever/image3.webp";
import Image4 from "@/assets/images/yello-fever/image4.webp";

const communityOutreachImages = [Image1, Image2, Image3, Image4];

const FoundationSection = () => {
  return (
    <Box as="section" className="py-20 bg-white">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Foundation
          </Heading>
          <Text className="text-gbam-dark/80 max-w-3xl !mx-auto text-lg">
            Making a difference in communities through outreach initiatives and
            partnerships
          </Text>
        </Box>

        <Box className="bg-gbam-light rounded-xl overflow-hidden shadow-xl">
          <Box className="flex flex-col-reverse md:flex-row items-center">
            <Box className="md:w-1/2 p-8 md:p-12">
              <Box className="flex items-center mb-6">
                <Heading as="h3" className="!text-2xl font-bold text-gbam-dark">
                  <span className="text-gbam-primary">#</span>GBAM x UNICEF
                  Yellow Fever Outreach
                </Heading>
              </Box>

              <p className="text-gbam-dark/80 mb-6">
                A landmark initiative that vaccinated over 11,000 youths across
                Kaduna's tertiary institutions. By fusing entertainment and
                public health, this program exemplified the power of
                community-driven change.
              </p>

              <Box className="bg-white rounded-lg p-6 shadow-md mb-6">
                <Heading
                  as="h4"
                  mb={3}
                  className="!text-xl font-bold  text-gbam-secondary">
                  Key Achievements
                </Heading>
                <UnorderedList className="space-y-2">
                  <ListItem className="flex items-center">
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                    <span>11,000+ vaccinations administered</span>
                  </ListItem>
                  <ListItem className="flex items-center">
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                    <span>Awareness campaigns in 5 major institutions</span>
                  </ListItem>
                  <ListItem className="flex items-center">
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                    <span>
                      Community health education for over 20,000 people
                    </span>
                  </ListItem>
                  <ListItem className="flex items-center">
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                    <span>
                      Entertainment and sports events to promote healthcare
                    </span>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box className="md:w-1/2 grid grid-cols-2 gap-1">
              {communityOutreachImages.map((image, index) => (
                <Box
                  key={index}
                  maxW="sm"
                  overflow="hidden"
                  className="rounded-xl shadow-lg">
                  <img
                    src={image}
                    loading="lazy"
                    alt={`Community outreach ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl  hover:scale-105 transition-transform duration-300"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box className="mt-16 text-center"></Box>
      </Box>
    </Box>
  );
};

export default FoundationSection;
