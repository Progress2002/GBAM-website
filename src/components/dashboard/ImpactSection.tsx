import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { SiSemanticscholar } from "react-icons/si";
import { HiOutlineUserGroup } from "react-icons/hi";

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
}

const StatCard = ({ icon, count, label, suffix }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      <div className="text-gbam-primary mb-4 text-4xl">{icon}</div>
      <CountUp end={count} duration={3} enableScrollSpy scrollSpyDelay={200}>
        {({ countUpRef }) => (
          <Box
            as="h2"
            fontWeight="bold"
            className="!text-4xl font-bold overflow-hidden">
            <span ref={countUpRef} className="mr-[1px]" />
            <span className="text-primary-500 font-bold">{suffix}</span>
          </Box>
        )}
      </CountUp>

      <Text mt={3} fontWeight="medium" className="text-gbam-dark/80">
        {label}
      </Text>
    </div>
  );
};

const ImpactSection = () => {
  return (
    <Box
      as="section"
      className="py-20 bg-gradient-to-b from-gbam-light to-white">
      <Box className="container mx-auto px-4">
        <Box className="text-center mb-16">
          <Heading
            as="h2"
            mb={4}
            className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Impact
          </Heading>
          <Text className="text-gbam-dark/80 !max-w-3xl !mx-auto text-lg">
            Making a difference through basketball, arts, and music across
            communities.
          </Text>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<BsPeople size={50} className="text-orange-500 font-bold" />}
            count={50000}
            suffix="+"
            label="People Engaged"
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
            count={100}
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
        </Box>
      </Box>
    </Box>
  );
};

export default ImpactSection;
