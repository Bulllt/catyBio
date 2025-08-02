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
          img.src = images[index].src;
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
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="carouselContainer">
      <div className="carousel" ref={emblaRef}>
        <div className="imageContainer">
          {images.map((image, index) => (
            <div
              className="slide"
              key={index}
              data-selected={index === selectedIndex}
            >
              {loadedImages[index] ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slideImage"
                  loading="lazy"
                />
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
