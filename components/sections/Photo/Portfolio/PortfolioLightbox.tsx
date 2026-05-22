import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PhotoItem } from "@/types/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

type PortfolioLightboxProps = {
  items: PhotoItem[];
  selectedImage: PhotoItem | null;
  setSelectedImage: (image: PhotoItem | null) => void;
};

const MotionCarousel = motion.create(Carousel);

const PortfolioLightbox = ({
  items,
  selectedImage,
  setSelectedImage,
}: PortfolioLightboxProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        api?.scrollNext();
      }
      if (e.key === "ArrowLeft") {
        api?.scrollPrev();
      }
      if (e.key === " ") {
        e.preventDefault();
        api?.scrollNext();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [selectedImage, api, setSelectedImage]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Przeglądarka zdjęć portfolio"
          className="bg-background/95 fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md outline-none"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="absolute top-6 right-6 z-10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-foreground/70 hover:text-accent cursor-pointer transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>
          </div>
          <div className="w-full">
            <MotionCarousel
              setApi={setApi}
              opts={{
                startIndex: items.findIndex((i) => i.id === selectedImage?.id),
                loop: true,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CarouselContent>
                {items.map((item) => (
                  <CarouselItem
                    className="flex items-center justify-center"
                    key={item.id}
                  >
                    <motion.img
                      initial={{ scale: 0.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      src={item.image as string}
                      alt={item.title}
                      className="max-h-[90vh] object-contain"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className="absolute top-1/2 left-0 h-20 w-20 -translate-y-1/2 xl:left-6"
                onClick={(e) => e.stopPropagation()}
              >
                {
                  <CarouselPrevious
                    onMouseDown={(e) => e.preventDefault()}
                    className="left-1/2 -translate-x-1/2 cursor-pointer"
                  />
                }
              </div>
              <div
                className="absolute top-1/2 right-0 h-20 w-20 -translate-y-1/2 xl:right-6"
                onClick={(e) => e.stopPropagation()}
              >
                {
                  <CarouselNext
                    onMouseDown={(e) => e.preventDefault()}
                    className="left-1/2 -translate-x-1/2 cursor-pointer"
                  />
                }
              </div>
            </MotionCarousel>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLightbox;
