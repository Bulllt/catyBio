import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

export default function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const hasHoverEffect = images[0]?.hover === true;

  const startAutoPlay = useCallback(() => {
    if (!emblaApi || !isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi, isAutoPlaying, 5000]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const resetAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (isAutoPlaying) {
      startAutoPlay();
    }
  }, [stopAutoPlay, startAutoPlay, isAutoPlaying]);

  useEffect(() => {
    const loadImages = () => {
      const newLoadedImages = [...loadedImages];
      const indicesToLoad = [
        selectedIndex,
        (selectedIndex - 1 + images.length) % images.length,
        (selectedIndex + 1) % images.length,
      ];

      indicesToLoad.forEach((index) => {
        if (!newLoadedImages[index]) {
          const img = new Image();
          img.src = images[index].image;
          img.onload = () => {
            newLoadedImages[index] = true;
            setLoadedImages([...newLoadedImages]);
          };
        }
      });
    };

    loadImages();
  }, [selectedIndex, images]);

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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoPlay();
  }, [emblaApi, resetAutoPlay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoPlay();
  }, [emblaApi, resetAutoPlay]);

  useEffect(() => {
    if (!emblaApi) return;

    startAutoPlay();

    const carouselNode = emblaApi.rootNode();

    const handleMouseEnter = () => {
      setIsAutoPlaying(false);
      stopAutoPlay();
    };

    const handleMouseLeave = () => {
      setIsAutoPlaying(true);
    };

    carouselNode.addEventListener("mouseenter", handleMouseEnter);
    carouselNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopAutoPlay();
      carouselNode.removeEventListener("mouseenter", handleMouseEnter);
      carouselNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaApi, startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, [stopAutoPlay]);

  return (
    <div className="carouselContainer">
      <div className="carousel" ref={emblaRef}>
        <div className="imageContainer">
          {images.map((image, index) => (
            <div
              className={`slide ${hasHoverEffect ? "has-hover" : ""}`}
              key={index}
              data-selected={index === selectedIndex}
            >
              {loadedImages[index] ? (
                <>
                  <img
                    src={image.image}
                    alt={image.title}
                    className="slideImage"
                    loading="lazy"
                  />

                  {hasHoverEffect && (
                    <div className="carouselOverlay">
                      <h3 className="carouselTitle">{image.title}</h3>
                    </div>
                  )}
                </>
              ) : (
                <div className="imagePlaceholder" />
              )}
            </div>
          ))}
        </div>

        <button className="carouselButton prev" onClick={scrollPrev}>
          <FaChevronLeft />
        </button>
        <button className="carouselButton next" onClick={scrollNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
