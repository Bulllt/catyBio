import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";

export default function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoPlayTimeoutRef = useRef(null);
  const autoPlayIntervalRef = useRef(null);

  const clearAutoPlay = () => {
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
  };

  const startAutoPlay = useCallback(() => {
    clearAutoPlay();

    const play = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    autoPlayTimeoutRef.current = setTimeout(() => {
      play();
      autoPlayIntervalRef.current = setInterval(play, 5000);
    }, 5000);
  }, [emblaApi]);

  useEffect(() => {
    startAutoPlay();
    return () => clearAutoPlay();
  }, [startAutoPlay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        startAutoPlay();
      }
    },
    [emblaApi, startAutoPlay]
  );

  return (
    <div className="carousel" ref={emblaRef}>
      <div className="carouselContainer">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.src} alt={image.alt} className="slideImage" />
          </div>
        ))}
      </div>

      <div className="dotsContainer">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === selectedIndex ? "active" : ""}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
