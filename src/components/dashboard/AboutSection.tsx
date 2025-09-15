import { useEffect } from "react";
import aboutPic from "@/assets/images/about.webp";
import bb from "@/assets/images/bb.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";

const AboutSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out", // easing
      once: true, // animate only once
      offset: 100, // trigger point
    });
  }, []);

  return (
    <section
      id="about"
      className="relative pt-20 pb-4 bg-gray-100 !px-4 lg:!px-8"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db33_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db33_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Floating bb image (still with framer-motion bounce) */}
      <motion.img
        src={bb}
        alt="Basketball"
        className="absolute top-10 !hidden md:!block lg:top-5 lg:left-5 left-10 w-32 md:w-40 lg:w-48 z-40"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 1.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto !px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="!text-4xl md:!text-5xl !font-bold font-display !mb-4">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Story
          </h2>
          <p className="text-gbam-dark/80 !max-w-3xl !mx-auto font-medium text-xl">
            From radio program to grassroots revolution we're on a mission to
            unify and empower through basketball, arts, and music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            className="order-2 h-full flex flex-col justify-between md:order-1"
            data-aos="fade-right"
          >
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="!text-2xl text-gbam-dark relative !font-semibold font-display !mb-4">
                Our History
                <span className="absolute left-0 -bottom-1 w-16 h-[5px] bg-gradient-to-br from-gbam-primary to-gbam-secondary rounded"></span>
              </h3>
              <p className="mb-4 font-medium text-gbam-dark/80">
                Graffiti Entertainment Consultancy Ltd began in 2014 as a radio
                program providing premium lifestyle and entertainment content.
                It grew into a full blown movement: #GBAM - Graffiti Basketball
                and Music.
              </p>
              <p className="!mb-6 font-medium text-gbam-dark/80">
                Established to unify and empower, #GBAM bridges the gap between
                creativity, community, and capacity building through the dynamic
                fusion of sports, music, and the arts.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="!text-2xl text-gbam-dark !font-semibold font-display !mb-4 relative inline-block">
                Our Mission
                <span className="absolute left-0 -bottom-1 w-16 h-[5px] bg-gradient-to-br from-gbam-primary to-gbam-secondary rounded"></span>
              </h3>
              <p className="!mb-6 font-medium text-gbam-dark/80">
                To provide a dynamic, inclusive platform that integrates sports,
                culture, and social development, fostering youth engagement,
                unity, and holistic well-being.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="!text-2xl !font-semibold relative text-gbam-dark font-display !mb-4">
                Our Vision
                <span className="absolute left-0 -bottom-1 w-16 h-[5px] bg-gradient-to-br from-gbam-primary to-gbam-secondary rounded"></span>
              </h3>
              <p className="!mb-6 font-medium text-gbam-dark/80">
                To become Africa's leading grassroots movement combining
                basketball, music, and the arts as tools for social
                transformation, empowerment, and sustainable development.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => navigate("/LearnMore")}
                className="relative w-full overflow-hidden !p-3 !px-7 font-semibold rounded-l rounded-r !text-white !bg-gradient-to-r from-gbam-primary to-gbam-secondary group"
              >
                {" "}
                <span className="relative z-10">Learn More About Us</span>{" "}
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>{" "}
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-gbam-primary/20 rounded-lg" />
              <img
                src={aboutPic}
                alt="Basketball team huddle"
                className="rounded-2xl shadow-xl object-cover relative z-10 max-h-[600px] w-full"
              />
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-gbam-secondary/20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
