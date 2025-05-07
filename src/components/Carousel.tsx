import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "@/assets/images/academy/image1.webp";
import Image3 from "@/assets/images/academy/image2.webp";
import Image4 from "@/assets/images/academy/image3.webp";
import Image5 from "@/assets/images/academy/image4.webp";
import Image6 from "@/assets/images/academy/image5.webp";
import Image7 from "@/assets/images/academy/image6.webp";
import Image8 from "@/assets/images/academy/image7.webp";
import Image9 from "@/assets/images/academy/image8.webp";
import Image10 from "@/assets/images/academy/image9.webp";
import Image11 from "@/assets/images/academy/image10.webp";
import Image12 from "@/assets/images/academy/image11.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

interface CarouselProps {
  images?: string[];
  className?: string;
}

const carouselImages = [
  Image1,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

const Carousel = ({ images = carouselImages, className }: CarouselProps) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    images.map(() => false)
  );

  return (
    <div className={cn("relative w-full", className)}>
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
            margin-top: 0 !important;
            transform: translateY(-50%) !important;
          }
          .swiper-button-prev:after, .swiper-button-next:after {
            content: none !important;
          }
          .swiper-pagination {
            bottom: 16px !important;
            display: flex !important;
            justify-content: center !important;
            gap: 3px !important;
          }
          .swiper-pagination-bullet {
            background: rgba(177, 187, 201, 0.5) !important;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background: #6B7280 !important; /* gray-500 */
          }
        `}
      </style>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000, // 2 seconds
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        className="w-full h-64 sm:h-80 md:h-96">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box position="relative" w="full" h="full" borderRadius="lg">
              {/* Skeleton Placeholder */}
              <Skeleton
                isLoaded={loadedImages[index]}
                w="full"
                h="full"
                fadeDuration={1}>
                {/* Image */}
                <Box
                  as="img"
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  w="full"
                  shadow="lg"
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.09)" }}
                  loading={index > 1 ? "lazy" : "eager"}
                  onLoad={() => {
                    setLoadedImages((prev) => ({ ...prev, [index]: true }));
                  }}
                />
              </Skeleton>
            </Box>
          </SwiperSlide>
        ))}
        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev !bg-gray-500/40 !text-gray-800 !p-2 !rounded-full hover:!bg-gray-500/80 hover:!text-white focus:!outline-none !left-4 !top-1/2 !-translate-y-1/2 !w-10 !h-10 !z-10"
          aria-label="Previous slide">
          <IoIosArrowBack className="w-4 h-4" />
        </button>
        <button
          className="swiper-button-next !bg-gray-500/40 !text-gray-800 !p-2 !rounded-full hover:!bg-gray-500/80 hover:!text-white focus:!outline-none  !right-4 !top-1/2 !-translate-y-1/2 !w-10 !h-10 !z-10"
          aria-label="Next slide">
          <IoIosArrowForward className="w-4 h-4" />
        </button>
        {/* Pagination Dots */}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default Carousel;
