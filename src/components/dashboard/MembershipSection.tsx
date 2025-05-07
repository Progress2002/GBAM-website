import {
  Box,
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const MembershipSection = () => {
  return (
    <Box as="section" className="py-20 bg-white">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Membership
          </Heading>
          <Text className="text-gbam-dark/80 max-w-3xl !mx-auto text-lg">
            Join the #GBAM family and gain access to exclusive benefits and
            opportunities
          </Text>
        </Box>

        <Box className="bg-gradient-to-br from-gbam-dark to-gbam-secondary rounded-2xl overflow-hidden shadow-2xl">
          <Box className="md:flex">
            <Box className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="#GBAM Arena"
                className="w-full h-full object-cover"
              />
            </Box>
            <Box className="md:w-1/2 p-8 md:p-12">
              <Heading
                as="h3"
                mb={6}
                className="text-3xl font-bold  text-white font-display">
                #GBAM Arena
              </Heading>

              <UnorderedList className="space-y-4 mb-8">
                <ListItem className="flex items-center text-white">
                  <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                  <span>
                    Two well-equipped basketball courts with professional
                    coaching
                  </span>
                </ListItem>
                <ListItem className="flex items-center text-white">
                  <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                  <span>Early-bird access to events and workshops</span>
                </ListItem>
                <ListItem className="flex items-center text-white">
                  <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                  <span>Discounts on merchandise and event tickets</span>
                </ListItem>
                <ListItem className="flex items-center text-white">
                  <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />
                  <span>
                    Competitive opportunities at state, national, and
                    international levels
                  </span>
                </ListItem>
              </UnorderedList>

              <Box mt={4} className="flex flex-col md:flex-row gap-4">
                <Button colorScheme="orange">InBoxidual Membership</Button>
                <Button variant="outline" colorScheme="gray">
                  Team Membership
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="mt-12 text-center">
          <Text
            fontWeight="medium"
            className="text-gbam-dark/80 max-w-3xl !mx-auto mb-6">
            Whether you're an athlete, artist, or enthusiast—membership is your
            gateway to growth and greatness. Join the #GBAM community today!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MembershipSection;
