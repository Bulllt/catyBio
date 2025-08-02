import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Sidebar from "../../components/sidebar/index";

import "./style.css";

export default function TrabajoArtistico() {
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState("159px");
  const listRef = useRef(null);

  const allItems = [
    "Expositora en XVI Jornadas Estudios e Investigaciones Arte e ideología del Instituto de Teoría e Historia del Arte “Julio E. Payró”, Facultad de Filosofía y Letras, UBA. (2024)",
    "Curadora de Habitar: espacios y memorias en Corporación Cultural de Osorno. (2022)",
    "Exposición colectiva Juntas dar la vuelta curada por Valentina Inostroza, Casa Prochelle, Corporación Cultural Municipal Valdivia (2022)",
    "Curadora de Trama Revisión a cuatro artistas de la ciudad de Osorno en Corporación Cultural de Osorno. (2021)",
    "Participe en Cortes de luz, Antología artística en pandemia, primera edición (2020) Rancagua, Chile: Editorial i con bototos.",
    "Mamá, ¿hoy sí se puede salir? presentada en Señales en espera, Galería Réplica, (2020)",
    "Lugar donde se encierra, presentada en Situación documental, Laboratorio Antropología Audiovisual de la Dirección Museológica UACh (2020)",
    "Postal feminista en resistencia, presentada en el libro de artista compilación 18.10: La revuelta de los rotos, Colectivo Tramarte (2020)",
    "Exposición Postales feministas (2020) Campus Los Canelos, Universidad de Austral de Chile, Valdivia.",
    "Fanzine Postales feministas, 6to evento Internacional de Arte Correo, Museo de Arte Cañadense, Argentina (2019)",
    "Participe exposición colectiva Costuras Interdisciplinarias en Museo de Arte Contemporáneo Valdivia (2018)",
    " Participe en exposición colectiva de dibujo en el Museo Philippi, Valdivia (2018)",
    "Las Meninas obra colectiva donada al hospital base de Valdivia (2017)",
  ];

  useEffect(() => {
    if (listRef.current) {
      if (showAll) {
        setMaxHeight(`${listRef.current.scrollHeight}px`);
      } else {
        const firstThreeHeight = Array.from(listRef.current.children)
          .slice(0, 3)
          .reduce((acc, child) => acc + child.offsetHeight, 0);
        setMaxHeight(`${firstThreeHeight}px`);
      }
    }
  }, [showAll, allItems]);

  const images = [
    {
      title: "120, lápices de colores",
      image: "/images/trabajoArtistico/grid/1.jpg",
    },
    {
      title: "Autorretrato, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/2.jpg",
    },
    {
      title: "Chispita, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/3.jpg",
    },
    {
      title: "Gustavo, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/4.jpg",
    },
    {
      title: "Iñaki, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/5.jpg",
    },
    {
      title: "Ivanna, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/6.jpg",
    },
    {
      title: "Mariana, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/7.jpg",
    },
    {
      title: "Valentina, grafito sobre papel",
      image: "/images/trabajoArtistico/grid/8.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/1.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/2.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/3.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/4.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/5.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/6.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/7.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/8.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/9.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/10.jpg",
    },
    {
      title: "Trabajo Artístico",
      image: "/images/trabajoArtistico/carousel/11.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="trabajoArtisticoSection" id="trabajoArtistico">
          <div className="listContainer">
            <ul
              className="list"
              ref={listRef}
              style={{ maxHeight, overflow: "hidden" }}
            >
              {allItems.map((item, index) => (
                <li key={index} className="listItem">
                  {item}
                </li>
              ))}
            </ul>

            {allItems.length > 3 && (
              <button
                className="showMoreButton"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Mostrar menos" : "Mostrar más"}
              </button>
            )}
          </div>

          <div className="artisticGridContainer">
            {images.map((item, index) => (
              <div
                key={index}
                className="artisticGridItem"
                onClick={() => openModal(item)}
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
                  &times;
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="artisticModalImage"
                />
                <h2 className="artisticModalTitle">{selectedImage.title}</h2>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
