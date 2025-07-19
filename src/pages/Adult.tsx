import Navbar from "@/components/layout/Navbar";
import IndividualPage from "../components/dashboard/IndividualPage.tsx"

import image1 from "../../src/assets/images/adult/image1.webp";
import image2 from "../../src/assets/images/adult/image2.webp";
import image3 from "../../src/assets/images/adult/image3.webp";
import image4 from "../../src/assets/images/adult/image4.webp";
import image5 from "../../src/assets/images/adult/image5.webp";
import image6 from "../../src/assets/images/adult/image6.webp";
import image7 from "../../src/assets/images/adult/image7.webp";
import image8 from "../../src/assets/images/adult/image8.webp";

const Adult: React.FC = () => {
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
        title="GBAM program for Adult"
        description="Offering growth opportunities for aspiring professionals and community leaders through advanced training and mentorship."
        images={galleryImages}
      />
    </>
  );
};

export default Adult;
