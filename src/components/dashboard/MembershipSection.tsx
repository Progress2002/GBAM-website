import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ArenaImg from "@/assets/images/arena.webp";
import ArenaImg2 from "@/assets/images/arena2.webp";
import ArenaImg3 from "@/assets/images/arena3.webp";
import ArenaImg4 from "@/assets/images/arena4.webp";

function MembershipSection() {
  const images = [ArenaImg, ArenaImg2, ArenaImg3, ArenaImg4]; // carousel images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-white px-4 lg:px-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="!text-center mb-8">
          <h2 className="!text-4xl !md:text-5xl !font-bold !font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Membership
          </h2>
          <p className="text-gbam-dark/80 max-w-3xl mx-auto font-medium text-xl">
            The #GBAM arena is a multi-purpose, youth centered facility
            combining two basketball courts and a creative studio...
          </p>
        </div>

        {/* Gradient card */}
        <div className="bg-gradient-to-br from-gbam-dark to-gbam-secondary rounded-2xl overflow-hidden shadow-2xl">
          <div className="md:flex">
            {/* IMAGE CAROUSEL */}
            <div className="md:w-1/2 aspect-[4/3] relative overflow-hidden">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Arena ${index + 1}`}
                  className={`absolute !inset-0 !w-full !h-full !object-cover transform transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* TEXT CONTENT */}
            <div className="md:w-1/2 flex items-center p-8 md:p-12">
              {" "}
              <div>
                {" "}
                <h3 className="!text-3xl !mb-6 !font-bold text-white !font-display">
                  {" "}
                  #GBAM Arena{" "}
                </h3>{" "}
                <ul className="!space-y-4 !pl-4 !mb-8">
                  {" "}
                  <li className="flex items-center text-white">
                    {" "}
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />{" "}
                    <span>
                      {" "}
                      Two well equipped basketball courts with professional
                      coaching{" "}
                    </span>{" "}
                  </li>{" "}
                  <li className="flex items-center text-white">
                    {" "}
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />{" "}
                    <span>Early bird access to events and workshops</span>{" "}
                  </li>{" "}
                  <li className="flex items-center text-white">
                    {" "}
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />{" "}
                    <span>Discounts on merchandise and event tickets</span>{" "}
                  </li>{" "}
                  <li className="flex items-center text-white">
                    {" "}
                    <FaCheckCircle className="size-5 text-gbam-primary mr-2 flex-shrink-0" />{" "}
                    <span>
                      {" "}
                      Competitive opportunities at state, national, and
                      international levels{" "}
                    </span>{" "}
                  </li>{" "}
                </ul>{" "}
                <div className="flex mt-4 flex-col md:flex-row gap-4">
                  {" "}
                  <button className="!text-white !font-semibold !rounded-l !rounded-r !rounded-lg !bg-[#DD6C21] !p-2">
                    Individual Membership
                  </button>{" "}
                  <button className="!border-1 !p-2 rounded-l rounded-r font-semibold !border-white">
                    Team Membership
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="!mt-12 !text-center">
          {" "}
          <p className="!text-gbam-dark/80 !max-w-3xl !mx-auto mb-6">
            {" "}
            Whether you're an athlete, artist, or enthusiast membership is your
            gateway to growth and greatness. Join the #GBAM community today!{" "}
          </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default MembershipSection;
