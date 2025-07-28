import React from "react";
import Sidebar from "../../components/sidebar/index";
import Carousel from "../../components/carousel";

import "./style.css";

export default function Mediaciones() {
  const images = [
    {
      src: "/images/mediaciones/1.jpg",
      alt: "Mediación 1",
    },
    {
      src: "/images/mediaciones/2.jpg",
      alt: "Mediación 2",
    },
    {
      src: "/images/mediaciones/3.jpg",
      alt: "Mediación 3",
    },
    {
      src: "/images/mediaciones/4.jpg",
      alt: "Mediación 4",
    },
    {
      src: "/images/mediaciones/5.jpg",
      alt: "Mediación 5",
    },
    {
      src: "/images/mediaciones/6.jpg",
      alt: "Mediación 6",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="mediacionesSection" id="mediaciones">
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
            <ul className="mediacionesList">
              <li className="listItem">
                Taller Insectopedia: Insectos y Artes | Biblioteca Municipal de
                Purranque, 2025.
              </li>
              <li className="listItem">
                Día de Los Patrimonios | Archivo de La Unión, 2025.
              </li>
              <li className="listItem">
                Exposición Vestuario y Patrimonio Teatro Municipal de Santiago |
                Corporación Cultural Osorno
              </li>
              <li className="listItem">
                Taller mediación ROJO colaboración con Museo de la Solidaridad
                Salvador Allende | Corporación Cultural Osorno, 2021.
              </li>
              <li className="listItem">
                Exposición | Museo Interactivo Osorno, 2021.
              </li>
              <li className="listItem">
                Exposición Habitar: espacios y memorias | Corporación Cultural
                Osorno, 2021.
              </li>
              <li className="listItem">
                Exposición Chilarte | Corporación Cultural Osorno, 2021.
              </li>
              <li className="listItem">
                Exposición Trama | Corporación Cultural Osorno, 2021.
              </li>
              <li className="listItem">
                Conversatorio Trama | Corporación Cultural Osorno, 2021.
              </li>
            </ul>
          </div>

          <Carousel images={images} />
        </section>
      </main>
    </div>
  );
}
