import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/sidebar/index";
import Grid from "../../components/grid/index";

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

  const grid1 = [
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/1.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/2.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/3.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/4.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/5.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/6.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/7.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/8.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/9.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/10.jpg",
    },
    {
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid1/11.jpg",
    },
  ];

  const grid2 = [
    {
      title:
        "Exposición Habitar - espacios y memorias - Corporación Cultural Osorno, 2022",
      image: "/images/mediaciones/grid2/1.jpg",
    },
  ];

  const grid3 = [
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/1.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/2.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/3.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/4.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/5.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/6.jpg",
    },
    {
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid3/7.jpg",
    },
  ];

  const grid4 = [
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/1.webp",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/2.webp",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/3.jpg",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/4.webp",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/5.jpg",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/6.jpg",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/7.jpg",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/8.webp",
    },
    {
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid4/9.jpg",
    },
  ];

  const grid5 = [
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/1.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/2.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/3.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/4.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/5.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/6.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/7.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/8.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/9.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/10.jpg",
    },
    {
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      image: "/images/mediaciones/grid5/11.jpg",
    },
  ];

  const grid6 = [
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/1.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/2.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/3.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/4.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/5.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/6.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/7.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/8.jpg",
    },
    {
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      image: "/images/mediaciones/grid6/9.jpg",
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

          <h3 className="mediacionesSubtitleFirst">
            Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de
            Purranque, 2025
          </h3>
          <Grid images={grid5} />

          <h3 className="mediacionesSubtitle">
            Exposición Habitar - espacios y memorias - Corporación Cultural
            Osorno, 2022
          </h3>
          <Grid images={grid2} />

          <h3 className="mediacionesSubtitle">
            Exposición Chilarte - Corporación Cultural Osorno, 2021
          </h3>
          <Grid images={grid1} />

          <h3 className="mediacionesSubtitle">
            Exposición Trama - Corporación Cultural Osorno, 2021
          </h3>
          <Grid images={grid3} />

          <h3 className="mediacionesSubtitle">
            Exposición Vestuario y Patrimonio Teatro Municipal de Santiago -
            Corporación Cultural Osorno, 2021
          </h3>
          <Grid images={grid4} />

          <h3 className="mediacionesSubtitle">
            Taller mediación ROJO colaboración con Museo de la Solidaridad
            Salvador Allende - Corporación Cultural Osorno, 2021
          </h3>
          <Grid images={grid6} />
        </section>
      </main>
    </div>
  );
}
