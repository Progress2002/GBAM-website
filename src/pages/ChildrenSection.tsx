import { useNavigate } from "react-router-dom";


function ChildrenSection() {

    const navigate = useNavigate();


    const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: "Creative workspace",
      title: "Innovation Hub",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      alt: "Vibrant orange flowers",
      title: "Natural Beauty",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      alt: "Golden hour lighting",
      title: "Golden Moments",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      alt: "Modern architecture",
      title: "Modern Design",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      alt: "Cultural heritage",
      title: "Heritage",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      alt: "Community gathering",
      title: "Together",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Artistic expression",
      title: "Expression",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      alt: "Digital creativity",
      title: "Digital Art",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      alt: "Learning environment",
      title: "Learning",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {image.title}
                </h3>
                <div className="w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChildrenSection;
