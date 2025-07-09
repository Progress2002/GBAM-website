import React, { useState, useEffect } from 'react';

const TeamCardsGrid = () => {
  // Different image sets for each card
  const cardData = [
    {
      title: "Basketball Coaching",
      images: [
        "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=Coach+1",
        "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=Coach+2",
        "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=Coach+3",
        "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=Coach+4"
      ],
      description: "Professional basketball coaching and training"
    },
    {
      title: "Community Engagement",
      images: [
        "https://via.placeholder.com/400x300/38A169/FFFFFF?text=Community+1",
        "https://via.placeholder.com/400x300/38A169/FFFFFF?text=Community+2",
        "https://via.placeholder.com/400x300/38A169/FFFFFF?text=Community+3",
        "https://via.placeholder.com/400x300/38A169/FFFFFF?text=Community+4"
      ],
      description: "Building strong community connections"
    },
    {
      title: "Merchandise & Equipment",
      images: [
        "https://via.placeholder.com/400x300/9F7AEA/FFFFFF?text=Merch+1",
        "https://via.placeholder.com/400x300/9F7AEA/FFFFFF?text=Merch+2",
        "https://via.placeholder.com/400x300/9F7AEA/FFFFFF?text=Merch+3",
        "https://via.placeholder.com/400x300/9F7AEA/FFFFFF?text=Merch+4"
      ],
      description: "Quality branded merchandise and equipment"
    },
    {
      title: "Team Coordination",
      images: [
        "https://via.placeholder.com/400x300/ECC94B/FFFFFF?text=Team+1",
        "https://via.placeholder.com/400x300/ECC94B/FFFFFF?text=Team+2",
        "https://via.placeholder.com/400x300/ECC94B/FFFFFF?text=Team+3",
        "https://via.placeholder.com/400x300/ECC94B/FFFFFF?text=Team+4"
      ],
      description: "Seamless team coordination and management"
    },
    {
      title: "Tournament Coordination",
      images: [
        "https://via.placeholder.com/400x300/F56565/FFFFFF?text=Tournament+1",
        "https://via.placeholder.com/400x300/F56565/FFFFFF?text=Tournament+2",
        "https://via.placeholder.com/400x300/F56565/FFFFFF?text=Tournament+3",
        "https://via.placeholder.com/400x300/F56565/FFFFFF?text=Tournament+4"
      ],
      description: "Organizing competitive basketball tournaments"
    },
    {
      title: "Communications",
      images: [
        "https://via.placeholder.com/400x300/4299E1/FFFFFF?text=Comm+1",
        "https://via.placeholder.com/400x300/4299E1/FFFFFF?text=Comm+2",
        "https://via.placeholder.com/400x300/4299E1/FFFFFF?text=Comm+3",
        "https://via.placeholder.com/400x300/4299E1/FFFFFF?text=Comm+4"
      ],
      description: "Strategic communication and outreach"
    }
  ];

  return (
    <div className="py-20 bg-gbam-dark text-white px-4 lg:px-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="!text-4xl md:!text-5xl font-bold font-display">
            <span className="text-gbam-primary">#</span>
            <span>Team GBAM in Action</span>
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl !mx-auto font-medium text-xl">
            We're a team of coaches, creatives, tech experts, mentors, and community builders. 
            Together, we create impactful events, projects, and partnerships that empower young people.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <TeamCard key={index} {...card} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="!text-2xl font-bold font-display mb-4">Want to Join Our Team?</h2>
          <p className="text-white/80 max-w-2xl !mx-auto mb-8">
            We're always looking for passionate individuals to join our movement. 
            Whether you're interested in basketball, arts, music, or community outreach, 
            there's a place for you at GBAM.
          </p>
          <button className="py-6 px-8 text-lg bg-gbam-primary">
            Apply to Join
          </button>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ title, images, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentImageIndex 
                ? 'transform translate-x-0' 
                : index < currentImageIndex 
                  ? 'transform -translate-x-full' 
                  : 'transform translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-300"
            />
          </div>
        ))}
        
      
      </div>
    </div>
  );
};

export default TeamCardsGrid;