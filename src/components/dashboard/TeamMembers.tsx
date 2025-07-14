import IndividualPage from "./IndividualPage.tsx";
import Dagana from "../../assets/images/teamMembers/Dangana-Ndakotsu.webp";
import Daniel from "../../assets/images/teamMembers/Daniel Erbe-Jonahn.webp";
import Didam from "../../assets/images/teamMembers/Didam-liya-Creative-Director.webp";
import Ehie from "../../assets/images/teamMembers/Ehie-Major-Attah.webp";
import Elsie from "../../assets/images/teamMembers/Elsie-Major-Idoko.webp";
import Grace from "../../assets/images/teamMembers/Grace-John.webp";
import Janet from "../../assets/images/teamMembers/Janet-Gapsiso.webp";
import Mayowa from "../../assets/images/teamMembers/Mayowa-Kilanko.webp";
import Mercy from "../../assets/images/teamMembers/Mercy-Ofuya-welfare.webp";
import Murpheus from "../../assets/images/teamMembers/Murpheus.webp";
import Samuel from "../../assets/images/teamMembers/Samuel-Ajowgu-Abah.webp";
import Zailani from "../../assets/images/teamMembers/Zailani-AJ-Musa-CSO.webp";

const TeamMembers: React.FC = () => {
  const galleryImages = [
    { id: 9, src: Murpheus, alt: "" },
    { id: 10, src: Mayowa, alt: "" },
    { id: 6, src: Janet, alt: "" },
    { id: 4, src: Ehie, alt: "" },
    { id: 5, src: Elsie, alt: "" },
    { id: 7, src: Grace, alt: "" },
    { id: 8, src: Mercy, alt: "" },
    { id: 1, src: Dagana, alt: "" },
    { id: 2, src: Daniel, alt: "" },
    { id: 3, src: Didam, alt: "" },
    { id: 12, src: Samuel, alt: "" },
    { id: 11, src: Zailani, alt: "" },
  ];

  return (
    <div className="container mx-auto px-4 bg-gbam-dark text-white  ">
      <div className="py-8 text-center">
        <h2 className="text-center py-2 !font-semibold !text-3xl">
          <b className="text-gbam-primary text-3xl">#</b> GBAM Team Members
        </h2>
        <p>These are the current GbAM team members now</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl h-[22rem]"
          >
            <div className="h-full w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt || ""}
                className="!w-full !h-full !object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
