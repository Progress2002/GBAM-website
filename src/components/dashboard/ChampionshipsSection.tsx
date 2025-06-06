import { Box, Heading, Text } from "@chakra-ui/react";

interface ChampionshipCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const ChampionshipCard = ({
  title,
  description,
  image,
}: ChampionshipCardProps) => (
  <Box className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <Box className="h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
    </Box>
    <Box className="p-6">
      <Heading
        as="h3"
        mb={3}
        className="!text-xl font-bold text-gbam-dark  font-display">
        {title}
      </Heading>
      <Text mb={5} className="text-gbam-dark/80 ">
        {description}
      </Text>
      {/* <Button className="!bg-gbam-secondary hover:!bg-gbam-secondary/90 !text-white w-full">
        {buttonText}
      </Button> */}
    </Box>
  </Box>
);

const ChampionshipsSection = () => {
  return (
    <Box as="section" className="py-20 bg-gbam-light">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold  font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Championships
          </Heading>
          <Text className="text-gbam-dark/80 max-w-3xl !mx-auto font-medium text-xl">
            Competitive basketball events that inspire teamwork, leadership, and
            community pride.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChampionshipCard
            title="Secondary Schools Championship"
            description="Showcasing young talent from across Kaduna in an engaging male and female basketball competition."
            image="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            buttonText="School Registration"
          />

          <ChampionshipCard
            title="Adult Championship"
            description="A dynamic tournament for men and women at tertiary and professional levels fostering competition and connection."
            image="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            buttonText="Team Registration"
          />

          <ChampionshipCard
            title="Inter-LGA Adult Championships"
            description="Bringing local governments together in a powerful show of sportsmanship, unity, and cultural celebration."
            image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            buttonText="LGA Registration"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionshipsSection;
