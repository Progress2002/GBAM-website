import Navbar from "@/components/layout/Navbar";
import IndividualPage from "../components/dashboard/IndividualPage.tsx"

import image1 from "../../src/assets/images/personsWithDisabilities/image1.webp";
import image2 from "../../src/assets/images/personsWithDisabilities/image2.webp";
import image3 from "../../src/assets/images/personsWithDisabilities/image3.webp";
import image4 from "../../src/assets/images/personsWithDisabilities/image4.webp";
import image5 from "../../src/assets/images/personsWithDisabilities/image9.webp";
import image6 from "../../src/assets/images/personsWithDisabilities/image6.webp";
import image7 from "../../src/assets/images/personsWithDisabilities/image7.webp";
import image8 from "../../src/assets/images/personsWithDisabilities/image8.webp";

const PersonsWithDisabilities: React.FC = () => {
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
        title="GBAM program for Persons With Disabilities"
        description="Ensuring no one is left behind in the journey of self-expression and achievement with adaptive programs and specialized coaching. We design access points for all, because greatness wears many forms."
        images={galleryImages}
      />
    </>
  );
};

export default PersonsWithDisabilities;
