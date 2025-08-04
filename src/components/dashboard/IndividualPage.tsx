// src/components/common/ImageGallery.tsx
import React from "react";

interface Image {
  id: number;
  src: string;
  alt?: string;
}

interface ImageGalleryProps {
  title: string;
  description: string;
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, description, images }) => {
  return (
    <div className="mx-auto px-4 py-16 ">
      <div className="py-8 text-center">
        <h2 className="text-center py-2 !font-semibold !text-4xl">
          <b className="text-gbam-primary text-4xl">#</b> {title}
        </h2>
        <p className="!text-[1rem]">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl h-72"
          >
            <div className="h-full w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt || ""}
                className="!w-full !h-full !object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
