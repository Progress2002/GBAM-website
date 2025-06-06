import { Box, Text, Heading } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box as="section" id="about" className="py-20 bg-white">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Story
          </Heading>
          <Text className="text-gbam-dark/80 !max-w-3xl !mx-auto font-medium text-xl">
            From radio program to grassroots revolution — we're on a mission to
            unify and empower through basketball, arts, and music.
          </Text>
        </Box>

        <Box className="grid md:grid-cols-2 gap-12 items-center">
          <Box className="order-2 md:order-1">
            <Heading
              mb={4}
              as="h3"
              className="!text-2xl text-gbam-dark font-display">
              Our History
            </Heading>
            <Text mb={4} fontWeight="medium" className="text-gbam-dark/80">
              Graffiti Entertainment Consultancy Ltd began in 2014 as a radio
              program providing premium lifestyle and entertainment content. It
              grew into a full-blown movement: #GBAM - Graffiti Basketball and
              Music.
            </Text>
            <Text mb={6} fontWeight="medium" className="text-gbam-dark/80">
              Established to unify and empower, #GBAM bridges the gap between
              creativity, community, and capacity building through the dynamic
              fusion of sports, music, and the arts.
            </Text>

            <Heading
              as="h3"
              mb={4}
              className="!text-2xl text-gbam-dark font-display">
              Our Mission
            </Heading>
            <Text mb={6} fontWeight="medium" className="text-gbam-dark/80 ">
              To provide a dynamic, inclusive platform that integrates sports,
              culture, and social development—fostering youth engagement, unity,
              and holistic well-being.
            </Text>

            <Heading
              as="h3"
              mb={4}
              className="!text-2xl  text-gbam-dark font-display">
              Our Vision
            </Heading>
            <Text mb={6} fontWeight="medium" className="text-gbam-dark/80 ">
              To become Africa's leading grassroots movement combining
              basketball, music, and the arts as tools for social
              transformation, empowerment, and sustainable development.
            </Text>

            {/* <Button colorScheme="orange" >
              Learn More About Us
            </Button> */}
          </Box>

          <Box className="order-1 md:order-2">
            <Box className="relative">
              <Box className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-gbam-primary/20 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Basketball team huddle"
                className="rounded-lg shadow-xl relative z-10 max-h-[600px] w-full"
              />
              <Box className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-gbam-secondary/20 rounded-lg"/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
