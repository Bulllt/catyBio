import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/sidebar/index";
import Carousel from "../../components/carousel";

import "./style.css";

export default function Mediaciones() {
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState("159px");
  const listRef = useRef(null);

  const allItems = [
    "Taller Insectopedia: Insectos y Artes | Biblioteca Municipal de Purranque, 2025.",
    "Día de Los Patrimonios | Archivo de La Unión, 2025.",
    "Exposición Habitar: espacios y memorias | Corporación Cultural Osorno, 2022.",
    "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago | Corporación Cultural Osorno, 2021.",
    "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende | Corporación Cultural Osorno, 2021.",
    "Exposición | Museo Interactivo Osorno, 2021.",
    "Exposición Chilarte | Corporación Cultural Osorno, 2021.",
    "Exposición Trama | Corporación Cultural Osorno, 2021.",
    "Conversatorio Trama | Corporación Cultural Osorno, 2021.",
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
      image: "/images/mediaciones/1.jpg",
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago | Corporación Cultural Osorno, 2021",
      hover: true,
    },
    {
      image: "/images/mediaciones/2.jpg",
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/3.jpg",
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/4.jpg",
      title:
        "Exposición Habitar: espacios y memorias | Corporación Cultural Osorno, 2022",
    },
    {
      image: "/images/mediaciones/5.jpg",
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/6.jpg",
      title: "Exposición Chilarte | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/7.jpg",
      title: " Exposición Chilarte | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/8.jpg",
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/9.jpg",
      title: "Exposición Trama | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/10.jpg",
      title: "Exposición Trama | Corporación Cultural Osorno, 2021",
    },
    {
      image: "/images/mediaciones/11.jpg",
      title:
        "Taller Insectopedia: Insectos y Artes | Biblioteca Municipal de Purranque, 2025",
    },
    {
      image: "/images/mediaciones/12.jpg",
      title:
        "Taller Insectopedia: Insectos y Artes | Biblioteca Municipal de Purranque, 2025",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="mediacionesSection" id="mediaciones">
          <h2 className="sectionTitle">Mediaciones</h2>

          <p className="introParagraph">
            He desarrollado diversas mediaciones en instituciones culturales del
            sur de Chile, principalmente en la región de Los Lagos. En cada una
            de ellas he buscado acercar las exposiciones a distintos públicos,
            generando vínculos significativos con comunidades escolares,
            asociaciones de adultos y público general. Además del recorrido o
            visita guiada, las mediaciones poseen una actividad especialmente
            pensada para el grupo visitante, permitiendo que la experiencia sea
            no solo informativa, sino también participativa y reflexiva en torno
            a los contenidos de la muestra y los lineamientos de las
            instituciones.
          </p>

          <div className="listContainer">
            <ul
              className="mediacionesList"
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

          <Carousel images={images} />
        </section>
      </main>
    </div>
  );
}
