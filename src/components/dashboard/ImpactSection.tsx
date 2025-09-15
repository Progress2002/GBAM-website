import React, { useEffect } from "react";
import CountUp from "react-countup";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { SiSemanticscholar } from "react-icons/si";
import { HiOutlineUserGroup } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, count, label, suffix }) => {
  return (
    <div
      className="rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
      data-aos="fade-up"
    >
      <div className="text-gbam-primary mb-4 text-4xl">{icon}</div>
      <CountUp end={count} duration={3} enableScrollSpy scrollSpyDelay={200}>
        {({ countUpRef }) => (
          <h2 className="!text-4xl font-bold overflow-hidden">
            <span ref={countUpRef} className="mr-[1px]" />
            <span className="text-gbam-primary font-bold">{suffix}</span>
          </h2>
        )}
      </CountUp>

      <p className="mt-3 font-medium text-gbam-dark/80">{label}</p>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 120, // trigger a bit before fully visible
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gbam-light to-white px-4 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Impact
          </h2>
          <p className="text-gbam-dark/80 !max-w-3xl !mx-auto font-medium text-xl">
            Making a difference through basketball, arts, and music across
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<BsPeople size={50} className="text-orange-500 font-bold" />}
            count={50000}
            suffix="+"
            label="Word Reach"
          />
          <StatCard
            icon={
              <MdOutlinePersonOutline
                size={50}
                className="text-orange-500 font-bold"
              />
            }
            count={500}
            suffix="+"
            label="Youths Trained"
          />
          <StatCard
            icon={
              <SiSemanticscholar
                size={50}
                className="text-orange-500 font-bold"
              />
            }
            count={50}
            suffix="+"
            label="Scholarships Awarded"
          />
          <StatCard
            icon={
              <HiOutlineUserGroup
                size={50}
                className="text-orange-500 font-bold"
              />
            }
            count={23}
            label="LGAs Collaborated With"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
