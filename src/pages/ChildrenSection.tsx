import Navbar from "@/components/layout/Navbar";
import IndividualPage from "../components/dashboard/IndividualPage.tsx"

import image1 from "../../src/assets/images/children/image1.webp";
import image2 from "../../src/assets/images/children/image2.webp";
import image3 from "../../src/assets/images/children/image3.webp";
import image4 from "../../src/assets/images/children/image4.webp";
import image5 from "../../src/assets/images/children/image5.webp";
import image6 from "../../src/assets/images/children/image6.webp";
import image7 from "../../src/assets/images/children/image7.webp";
import image8 from "../../src/assets/images/children/image8.webp";

const ChildrenSection: React.FC = () => {
  const galleryImages = [
    { id: 1, src: image1, alt: "" },
    { id: 2, src: image2, alt: "" },
    { id: 3, src: image3, alt: "" },
    { id: 4, src: image4, alt: "" },
    { id: 5, src: image5, alt: "" },
    { id: 6, src: image6, alt: "" },
    { id: 7, src: image7, alt: "" },
    { id: 8, src: image8, alt: "" },
  ];

  return (
    <>
      <Navbar />
      <IndividualPage
        title="GBAM program for Children"
        description="Developing skills, confidence, and teamwork from an early age through fun, structured basketball and arts activities. We plant seeds early instilling confidence, discipline, and teamwork."
        images={galleryImages}
      />
    </>
  );
};

export default ChildrenSection;
