import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollToTop from "../../components/scrollToTop";

import "./detail.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ProcesosFormativosDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { item } = state || {};

  useEffect(() => {
    if (!item) {
      navigate("/procesosFormativos", { replace: true });
    }
  }, [item, navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };

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
      newIndex =
        (currentIndex - 1 + item.arrayImages.length) % item.arrayImages.length;
    } else {
      newIndex = (currentIndex + 1) % item.arrayImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(item.arrayImages[newIndex]);
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

  if (!item) {
    return null;
  }

  return (
    <div className="detailContainer">
      <ScrollToTop />

      <div
        className="detailHero"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <button className="detailBackIcon" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="detailContent">
        <h1 className="detailTitle">{item.title}</h1>
        <div className="detailText">
          <p>{item.description}</p>
          {item.description2 && (
            <p>
              <br />
              {item.description2}
            </p>
          )}
        </div>

        <div className="detailGridSection">
          <div className="detailGridContainer">
            {item.arrayImages.map((image, index) => (
              <div
                key={index}
                className="detailGridItem"
                onClick={() => openModal(image, index)}
              >
                <LazyLoadImage
                  src={image}
                  alt={`${image.title} - Imagen ${index + 1}`}
                  className="detailGridImage"
                  effect="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="detailModalOverlay" onClick={closeModal}>
            <div
              className="detailModalContent"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="detailModalClose" onClick={closeModal}>
                <FaTimes />
              </button>

              <button
                className="detailModalNav detailModalNavPrev"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages("prev");
                }}
              >
                <FaChevronLeft />
              </button>
              <img
                src={selectedImage}
                alt={selectedImage}
                className="detailModalImage"
              />
              <button
                className="detailModalNav detailModalNavNext"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages("next");
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
