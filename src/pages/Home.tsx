import Hero from "@/components/dashboard/Hero";
import Navbar from "@/components/layout/Navbar";
import { Box } from "@chakra-ui/react";
import NewsMarquee from "@/components/dashboard/NewsMarquee";
import { newsItems, ticketItems } from "@/constatnt";
import AboutSection from "@/components/dashboard/AboutSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
import ValuesSection from "@/components/dashboard/ValuesSection";
import TeamSection from "@/components/dashboard/TeamSection";
import AcademySection from "@/components/dashboard/AcademySection";
import ChampionshipsSection from "@/components/dashboard/ChampionshipsSection";
import MembershipSection from "@/components/dashboard/MembershipSection";
import FoundationSection from "@/components/dashboard/FoundationSection";
import BounceBackSection from "@/components/dashboard/BounceBackSection";
import CallToAction from "@/components/dashboard/CallToAction";
import Footer from "@/components/layout/Footer";
import { Element } from "react-scroll";
import TeamMembers from "@/components/dashboard/TeamMembers";

function Home() {
  return (
    <Box className="min-h-screen scroll-smooth">
      <Navbar />
      {/* Hero Section */}
      <Box as="section" id="home">
        <Hero />
      </Box>
      {/* News Marquee */}
      <Box className="relative z-10">
        <NewsMarquee items={newsItems} />
        <NewsMarquee items={ticketItems} className="bg-gbam-secondary" />
      </Box>

      {/* Main Content */}
      <Element name="about">
        <Box as="section">
          <AboutSection />
        </Box>
      </Element>

      <Box as="section" id="impact">
        <ImpactSection />
      </Box>

      <Box as="section" id="values">
        <ValuesSection />
      </Box>

      <Box as="section" id="team">
        <TeamSection />
      </Box>

      <Element name="academy">
        <Box as="section" id="academy">
          <AcademySection />
        </Box>
      </Element>

      <Element name="championships">
        <Box as="section" id="championships">
          <ChampionshipsSection />
        </Box>
      </Element>

      <Element name="membership">
        <Box as="section" id="membership">
          <MembershipSection />
        </Box>
      </Element>

      <Element name="foundation">
        <Box as="section" id="foundation">
          <FoundationSection />
        </Box>
      </Element>

      <Element name="bounceback">
        <Box as="section" id="bounceback">
          <BounceBackSection />
        </Box>
      </Element>


      <Element name="team">
        <Box as="section" id="teamMembers">
          <TeamMembers />
        </Box>
      </Element>
      {/* Call to Action */}

      <Element name="join">
        <Box as="section" id="join">
          <CallToAction />
        </Box>
      </Element>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
