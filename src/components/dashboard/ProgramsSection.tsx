import { Button } from '@chakra-ui/react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ProgramCard = ({ title, description, icon, link }: ProgramCardProps) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full transition-transform hover:scale-[1.02]">
    <div className="text-gbam-primary mb-4 text-3xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gbam-dark mb-3">{title}</h3>
    <p className="text-gbam-dark/80 mb-6 flex-grow">{description}</p>
    <Button className="bg-gbam-secondary hover:bg-gbam-secondary/90 text-white self-start mt-auto">
      <a href={link}>Learn More</a>
    </Button>
  </div>
);

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Programs
          </h2>
          <p className="text-gbam-dark/80 max-w-3xl mx-auto text-lg">
            Explore our initiatives that combine sports, arts, and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            title="Academy"
            description="Where talent meets transformation. We provide inclusive training programs in sports and the arts for children, adults, and persons living with disabilities."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            link="#academy"
          />

          <ProgramCard
            title="Championships"
            description="From secondary schools to adult leagues, our competitions inspire teamwork, leadership, and community pride across Kaduna State."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            link="#championships"
          />

          <ProgramCard
            title="Foundation"
            description="Our outreach initiatives, including the UNICEF Yellow Fever campaign, exemplify the power of community-driven change."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            link="#foundation"
          />
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gbam-primary hover:bg-gbam-primary/90 text-white px-8 py-6 text-lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
