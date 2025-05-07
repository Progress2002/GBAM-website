import { Box, Button, Heading, Text } from "@chakra-ui/react";
import CoachingImg from "@/assets/images/team/coaching.webp";
import CommunityImg from "@/assets/images/team/community-engagement.webp";
import MerchandiseImg from "@/assets/images/team/Merchandise.webp";
import TeamCoordinationImg from "@/assets/images/team/team-coordination.webp";
import TournamentCorImg from "@/assets/images/team/tournament-coordination.webp";
import CommunicationImg from "@/assets/images/team/coordinated-communication.webp";

const teamInAction = [
  {
    image: CoachingImg,
    alt: "GBAM basketball coaching",
    caption: "Basketball Coaching",
  },
  {
    image: CommunityImg,
    alt: "GBAM community outreach",
    caption: "Community Engagement",
  },
  {
    image: MerchandiseImg,
    alt: "GBAM merchandise",
    caption: "Branded Merchandise & Equipment",
  },
  {
    image: TeamCoordinationImg,
    alt: "GBAM team gathering",
    caption: "Team Coordination",
  },
  {
    image: TournamentCorImg,
    alt: "GBAM team at basketball court",
    caption: "Basketball Tournament Coordination",
  },
  {
    image: CommunicationImg,
    alt: "GBAM communication team",
    caption: "Coordinated Communications",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gbam-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span>Team GBAM in Action</span>
          </Heading>
          <Text mb={8} className="text-white/80 max-w-2xl !mx-auto">
          We&apos;re a team of coaches, creatives, tech experts, mentors, and community builders. Together, we create impactful events, projects, and partnerships that empower young people.
          </Text>
        </div>

        {/* Team in Action */}
        <Box className="mb-16">
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {teamInAction.map((item, index) => (
              <Box
                key={index}
                className="relative h-64 rounded-xl overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="!w-full !h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  style={{ filter: "brightness(0.7)" }}
                />
                <div className="absolute bottom-4 px-2 w-fit left-4 right-4 bg-gradient-to-t from-gbam-dark/80 to-transparent ">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Join the Team CTA */}
        <Box className="text-center">
          <Heading mb={4} className="!text-2xl font-bold font-display mb-4">
            Want to Join Our Team?
          </Heading>
          <Text mb={8} className="text-white/80 max-w-2xl !mx-auto ">
            We're always looking for passionate individuals to join our
            movement. Whether you're interested in basketball, arts, music, or
            community outreach, there's a place for you at GBAM.
          </Text>
          <Button colorScheme="orange" className="py-6 px-8 text-lg">
            Apply to Join
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default TeamSection;
