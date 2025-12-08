import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  { src: "/images/Picture1.jpg", alt: "Gallery Image 1" },
  { src: "/images/Picture2.jpg", alt: "Gallery Image 2" },
  { src: "/images/1.jpeg", alt: "Gallery Image 3" },
  { src: "/images/Picture4.jpg", alt: "Gallery Image 4" },
  { src: "/images/Picture5.jpg", alt: "Gallery Image 5" },
  { src: "/images/2.jpeg", alt: "Gallery Image 6" },
  { src: "/images/Picture7.jpg", alt: "Gallery Image 7" },
  { src: "/images/Picture8.jpg", alt: "Gallery Image 8" },
  // { src: "/images/3.jpeg", alt: "Gallery Image 9" },
  { src: "/images/4.jpeg", alt: "Gallery Image 10" },
  { src: "/images/5.jpeg", alt: "Gallery Image 11" },
  { src: "/images/6.jpeg", alt: "Gallery Image 12" },
  { src: "/images/7.jpeg", alt: "Gallery Image 13" },
  { src: "/images/8.jpeg", alt: "Gallery Image 14" },
  { src: "/images/10.jpeg", alt: "Gallery Image 15" },
  { src: "/images/11.jpeg", alt: "Gallery Image 17" },
];

const GallerySlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePreviousImage = useCallback(() => {
    if (expandedImage === null) return;
    setExpandedImage(expandedImage === 0 ? galleryImages.length - 1 : expandedImage - 1);
  }, [expandedImage]);

  const handleNextImage = useCallback(() => {
    if (expandedImage === null) return;
    setExpandedImage(expandedImage === galleryImages.length - 1 ? 0 : expandedImage + 1);
  }, [expandedImage]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || isHovered || expandedImage !== null) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api, isHovered, expandedImage]);

  // Keyboard navigation for expanded image
  useEffect(() => {
    if (expandedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedImage(null);
      } else if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedImage, handlePreviousImage, handleNextImage]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our <span className="text-primary">Facilities</span> & Operations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and operations through our gallery.
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={cn(
                      "relative group overflow-hidden rounded-2xl shadow-card border border-border/50 transition-all duration-500 cursor-pointer",
                      "hover:shadow-xl hover:-translate-y-2"
                    )}
                    onClick={() => setExpandedImage(index)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-700",
                          "group-hover:scale-110"
                        )}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                          <Maximize2 className="h-6 w-6 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
            <CarouselNext className="right-4 md:right-8 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === index
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Image Lightbox */}
      <Dialog open={expandedImage !== null} onOpenChange={(open) => !open && setExpandedImage(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none [&>button]:hidden">
          {expandedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 z-50 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>

              {/* Previous button */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 backdrop-blur-sm rounded-full p-3 hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 backdrop-blur-sm rounded-full p-3 hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>

              {/* Expanded Image */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={galleryImages[expandedImage].src}
                  alt={galleryImages[expandedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-foreground">
                {expandedImage + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySlider;

