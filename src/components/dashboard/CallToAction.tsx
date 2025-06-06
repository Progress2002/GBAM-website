import { Box, Button, Heading, Text } from '@chakra-ui/react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gbam-dark">
      <Box className="container mx-auto px-4">
        <Box className="max-w-4xl mx-auto text-center">
          <Heading as="h2" className="!text-4xl md:!text-5xl font-bold !mb-6 text-white font-display">
            Join the <span className="text-gbam-primary">#</span>GBAM Movement Today!
          </Heading>
          <Text className="text-white/80  !mb-8 font-medium text-xl">
            Follow us, support us, grow with us. Be the first to hear about upcoming events, training programs, and opportunities to make a difference through basketball, music, and art.
          </Text>
          <Box className="flex flex-col sm:flex-row justify-center gap-4">
            <Button colorScheme="orange" className="bg-gbam-primary hover:bg-gbam-primary/90 text-white py-6 px-8 text-lg">
              Become A Member
            </Button>
            <Button variant="outline" className="!border-white !text-white hover:!bg-white/10 py-6 px-8 text-lg">
              Sign Up For Updates
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default CallToAction;
