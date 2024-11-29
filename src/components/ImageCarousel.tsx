import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageCarouselProps {
  images: string[];
  title: string;
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  title,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean[]>(new Array(images.length).fill(true));

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isHovered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, paginate]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isPaused]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        paginate(-1);
      } else {
        paginate(1);
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <div 
      className="relative w-full h-48 overflow-hidden bg-gray-900/50 backdrop-blur-sm"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovered(false);
      }}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="popLayout"
      >
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
        >
          <div className="relative w-full h-full">
            {isLoading[currentIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: isLoading[currentIndex] ? 0 : 1 }}
              draggable={false}
              onLoad={() => {
                const newLoading = [...isLoading];
                newLoading[currentIndex] = false;
                setIsLoading(newLoading);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 pointer-events-none" style={{ zIndex: 50 }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-white/20 transition-colors pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-white/20 transition-colors pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5" style={{ zIndex: 50 }}>
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75 w-1.5"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>

          <div className="absolute top-2 right-2 text-white/60 text-sm font-medium tracking-wide backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-full" style={{ zIndex: 50 }}>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
