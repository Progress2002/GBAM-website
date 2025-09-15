import { useState, useEffect } from "react";
import coachingA from "../../assets/images/bb-coaching/1.webp";
import coachingB from "../../assets/images/bb-coaching/2.webp";
import coachingD from "../../assets/images/bb-coaching/4.webp";
import commEng1 from "../../assets/images/bb-coaching/comm-eng1.webp";
import commEng2 from "../../assets/images/bb-coaching/comm-eng2.webp";
import commEng3 from "../../assets/images/bb-coaching/comm-eng3.webp";
import commEng4 from "../../assets/images/bb-coaching/comm-eng4.webp";
import commEng5 from "../../assets/images/bb-coaching/comm-eng5.webp";
import commEng6 from "../../assets/images/bb-coaching/comm-eng6.webp";
import merchendise1 from "../../assets/images/bb-coaching/marchendise1.webp";
import merchendise2 from "../../assets/images/bb-coaching/marchendise2.webp";
import merchendise3 from "../../assets/images/bb-coaching/marchendise3.webp";
import merchendise4 from "../../assets/images/bb-coaching/marchendise4.webp";
import merchendise5 from "../../assets/images/bb-coaching/marchendise5.webp";
import merchendise6 from "../../assets/images/bb-coaching/merchendise6.webp";
import merchendise7 from "../../assets/images/bb-coaching/merchendise7.webp";
import teamCod1 from "../../assets/images/bb-coaching/team-cod1.webp";
import teamCod2 from "../../assets/images/bb-coaching/team-cod2.webp";
import teamCod3 from "../../assets/images/bb-coaching/team-cod3.webp";
import teamCod4 from "../../assets/images/bb-coaching/team-cod4.webp";
import teamCod5 from "../../assets/images/bb-coaching/team-cod5.webp";
import teamCod6 from "../../assets/images/bb-coaching/team-cod6.webp";
import teamCod7 from "../../assets/images/bb-coaching/team-cod7.webp";
import competition1 from "../../assets/images/bb-coaching/competition1.webp";
import competition2 from "../../assets/images/bb-coaching/competition2.webp";
import competition3 from "../../assets/images/bb-coaching/competition3.webp";
import communication1 from "../../assets/images/bb-coaching/communication1.webp";
import communication2 from "../../assets/images/bb-coaching/communication2.webp";

const TeamCardsGrid = () => {
  const cardData = [
    {
      title: "Basketball Coaching",
      images: [coachingA, coachingB, coachingD],
    },
    {
      title: "Community Engagement",
      images: [commEng1, commEng2, commEng3, commEng4, commEng5, commEng6],
    },
    {
      title: "Merchandise & Equipment",
      images: [
        merchendise1,
        merchendise2,
        merchendise3,
        merchendise4,
        merchendise5,
        merchendise6,
        merchendise7,
      ],
    },
    {
      title: "Team Coordination",
      images: [teamCod1, teamCod2, teamCod3, teamCod4, teamCod5, teamCod6, teamCod7],
    },
    {
      title: "Tournament Coordination",
      images: [competition1, competition2, competition3],
    },
    {
      title: "Communications",
      images: [communication1, communication2],
    },
  ];

  return (
    <div className="py-20 bg-gbam-dark text-white px-4 lg:px-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="!text-4xl md:!text-5xl !mb-6 font-bold font-display">
            <span className="text-gbam-primary font-bold">#</span>
            <span className="font-bold">Team GBAM in Action</span>
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl !mx-auto font-medium text-xl">
            We're a team of coaches, creatives, tech experts, mentors, and
            community builders. Together, we create impactful events, projects,
            and partnerships that empower young people.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <TeamCard key={index} {...card} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="!text-center">
          <h2 className="!text-2xl !font-bold !font-display !mb-4">
            Want to Join Our Team?
          </h2>
          <p className="!text-white/80 !max-w-2xl !mx-auto !mb-8">
            We're always looking for passionate individuals to join our
            movement. Whether you're interested in basketball, arts, music, or
            community outreach, there's a place for you at GBAM.
          </p>
          <button className="!py-2 !px-4 rounded-xl !text-md font-semibold !bg-gbam-primary">
            Apply to Join
          </button>
        </div>
      </div>
    </div>
  );
};
interface TeamCardProps {
  title: string;
  images: string[];
}

const TeamCard = ({ title, images }: TeamCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-800 h-64 group rounded-xl overflow-hidden shadow-2xl transition-all relative duration-300">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
  ? "opacity-100 translate-x-0"
  : "opacity-0 translate-x-0"

            }`}
          >
            <img
  key={currentImageIndex}
  src={images[currentImageIndex]}
  alt={title}
  loading={currentImageIndex === 0 ? "eager" : "lazy"}
  className="w-full !h-full object-cover brightness-75 group-hover:brightness-90 block transition-all duration-700 group-hover:scale-110"
/>

          </div>
        ))}
      </div>
      <p className="absolute bottom-3 left-3 right-0 bg-black/40 px-0.5 w-fit text-white text-[.9rem] font-semibold text-lg">{title}</p>
    </div>
  );
};

export default TeamCardsGrid;
