import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./detail.css";

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

  if (!item) {
    return null;
  }

  return (
    <div className="detailContainer">
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
              <div key={index} className="detailGridItem">
                <LazyLoadImage
                  src={image}
                  alt={`${item.title} - Imagen ${index + 1}`}
                  className="detailGridImage"
                  effect="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
