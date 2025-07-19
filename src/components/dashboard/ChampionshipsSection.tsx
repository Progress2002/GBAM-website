import { Box, Heading, Text } from "@chakra-ui/react";
import localGov from "../../assets/images/championship/JABI0283.webp"
import secSchool from "../../assets/images/championship/IMG_5567.webp"
import Adult from "../../assets/images/championship/competition3.webp"

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
    <Box as="section" className="py-20 bg-gbam-light px-4 lg:px-8">
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
            description="Young kings and queens taking their first shot at greatness through teamwork, leadership, and fun."
            image={secSchool} buttonText={""}          />

          <ChampionshipCard
            title="Adult Championship"
            description="A dynamic tournament for men and women at tertiary and professional levels fostering competition and connection."
            image={Adult}
            buttonText="Team Registration"
          />

          <ChampionshipCard
            title="Inter-LGA Adult Championships"
            description="Local governments battle not with bitterness but with brilliance showcasing culture, talent, and the strength of collective spirit."
            image={localGov}
            buttonText="LGA Registration"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionshipsSection;
