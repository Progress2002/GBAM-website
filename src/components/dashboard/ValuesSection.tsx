import { Box, Heading, Text } from "@chakra-ui/react";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";



interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
    <Box className="text-gbam-primary mb-4 text-2xl">
      {icon}
    </Box>
    <Heading as="h3" mb={2} className="!text-xl font-bold text-gbam-dark">{title}</Heading>
    <Text className="text-gbam-dark/80">{description}</Text>
  </div>
);

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gbam-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading as="h2" mb={4} className="!text-4xl md:!text-5xl font-bold  font-display">
            Our Core Values
          </Heading>
          <Text className="text-gbam-dark/80 max-w-3xl !mx-auto font-medium text-xl">
            The principles that guide everything we do at #GBAM
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            title="Unity"
            description="Connecting communities across boundaries and backgrounds."
            icon={<RiUserCommunityLine size={40} className="text-orange-500 font-bold" />}
          />
          <ValueCard
            title="Empowerment"
            description="Creating opportunities for self and communal growth."
            icon={<IoFlashOutline size={40} className="text-orange-500 font-bold" />}
          />
          <ValueCard
            title="Creativity"
            description="Championing self-expression through music and the arts."
            icon={<LuPencil size={40} className="text-orange-500 font-bold" />}
          />
          <ValueCard
            title="Excellence"
            description="Delivering world-class programs and experiences."
            icon={<MdOutlineVerified size={40} className="text-orange-500 font-bold" />}
          />
          <ValueCard
            title="Inclusivity"
            description="Embracing diversity—empowering women, children, and persons with special needs."
            icon={<TbUsersGroup size={40} className="text-orange-500 font-bold" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
