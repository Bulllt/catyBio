import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./style.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Grid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImages = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          navigateImages("prev");
        } else if (e.key === "ArrowRight") {
          navigateImages("next");
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <div className="artisticGridContainer">
        {images.map((item, index) => (
          <div
            key={index}
            className="artisticGridItem"
            onClick={() => openModal(item, index)}
          >
            <LazyLoadImage
              src={item.image}
              alt={item.title}
              className="artisticGridImage"
              effect="blur"
            />
            <div className="artisticGridOverlay">
              <h3 className="artisticGridTitle">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="artisticModalOverlay" onClick={closeModal}>
          <div
            className="artisticModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="artisticModalClose" onClick={closeModal}>
              <FaTimes />
            </button>

            <button
              className="artisticModalNav artisticModalNavPrev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("prev");
              }}
            >
              <FaChevronLeft />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="artisticModalImage"
            />
            <button
              className="artisticModalNav artisticModalNavNext"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("next");
              }}
            >
              <FaChevronRight />
            </button>

            <h2 className="artisticModalTitle">{selectedImage.title}</h2>
          </div>
        </div>
      )}
    </>
  );
}
