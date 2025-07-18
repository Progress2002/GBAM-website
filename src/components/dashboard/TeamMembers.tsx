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
    { id: 9, src: Murpheus, name:"Morpheus Major-Idoko", title: "Founder/CEO", alt: "Murpheus Major-Idoko" },
    { id: 10, src: Mayowa, name:"Mayowa Kilanko", title: "Head of Media", alt: "Mayowa Kilanko" },
    { id: 6, src: Janet, name:"Janet Gapsiso", title: "Head of Legal", alt: "Janet Gapsiso" },
    { id: 4, src: Ehie, name:"Ehie Major-Attah", title: "Head of Finance/Accounts", alt: "Ehie Major-Attah" },
    { id: 5, src: Elsie, name:"Elsie Major-Idoko", title: "Admin/HR", alt: "Elsie Major-Idoko" },
    { id: 7, src: Grace, name:"Grace John", title: "Academy Manager", alt: "Grace John" },
    { id: 8, src: Mercy, name:"Mercy Ofuya", title: "welfare", alt: "Mercy Ofuya" },
    { id: 1, src: Dagana, name:"Dagana Ndakotsu", title: "Head of Logistics.", alt: "Dagana Ndakotsu" },
    { id: 2, src: Daniel, name:"Daniel Erbe Jonahn", title: "Head of Basketball", alt: "Daniel Erbe Jonahn" },
    { id: 3, src: Didam, name:"Didam Iliya", title: "Creative Director ", alt: "Didam Iliya" },
    { id: 12, src: Samuel, name:"Samuel Ajowgu", title: "Head of Operations", alt: "Samuel Ajowgu" },
    { id: 11, src: Zailani, name:"Zailani AJ Musa", title: "Chief Security Officer", alt: "Zailani AJ Musa" },
  ];

  return (
    <div className="container mx-auto px-4 pb-8 relative">
      <div className="py-8 text-center">
        <h2 className="text-center py-2 !font-bold !text-4xl">
          <b className="text-gbam-primary font-bold text-3xl">#</b> GBAM Team Members
        </h2>
        <p>These are the current GbAM team members now</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl h-[23rem] md:h-[25rem] lg:h-[27rem]"
          >
            <div className="h-full w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt || ""}
                className="!w-full !h-full !object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="absolute bottom-0 flex justify-center text-center text-[.9rem] bg-black/70 w-full text-white font-semibold text-lg">{image.name} <br /> {image.title}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
