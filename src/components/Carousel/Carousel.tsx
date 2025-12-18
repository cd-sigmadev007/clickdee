import React, { useState, useRef, useEffect } from 'react';

export interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  gap?: number;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  autoPlayInterval = 3000,
  gap = 24,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;
  const cardWidth = 400; // Fixed card width from design

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || pauseAutoPlay || isDragging) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      return;
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % totalSlides;
        if (carouselRef.current) {
          const scrollPosition = next * (cardWidth + gap);
          carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
        return next;
      });
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, totalSlides, pauseAutoPlay, isDragging, gap, cardWidth]);

  // Mouse drag handlers
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !carouselRef.current) return;
      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      // Update current index based on scroll position
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / (cardWidth + gap));
        setCurrentIndex(newIndex >= 0 && newIndex < totalSlides ? newIndex : currentIndex);
      }
      // Resume auto play after a delay
      setTimeout(() => {
        setPauseAutoPlay(false);
      }, 2000);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft, cardWidth, gap, totalSlides, currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setPauseAutoPlay(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setPauseAutoPlay(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Update current index based on scroll position
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setCurrentIndex(newIndex >= 0 && newIndex < totalSlides ? newIndex : currentIndex);
    }
    setTimeout(() => {
      setPauseAutoPlay(false);
    }, 2000);
  };

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!carouselRef.current || isDragging) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / (cardWidth + gap));
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{
          gap: `${gap}px`,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            style={{ width: `${cardWidth}px` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
