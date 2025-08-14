import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/sidebar/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function Mediaciones() {
  const navigate = useNavigate();
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
      image: "/images/mediaciones/expoChilarte/background.jpg",
      title: "Exposición Chilarte - Corporación Cultural Osorno, 2021",
      description:
        "La exposición Chilarte se destacó por la diversidad de sus artistas, abarcando distintas trayectorias, lenguajes y formas de expresión. La muestra invitaba a reflexionar sobre la variedad de obras y la riqueza creativa presente en ellas.",
      description2:
        "Como parte de su programación, se desarrollaron actividades de mediación que estimularon la creatividad de los grupos participantes, quienes experimentaron con nuevos materiales para crear sus propias obras o reinterpretar algunas de las piezas expuestas. Durante estas instancias también se mostró el uso técnico de algunos materiales, permitiendo a las y los participantes comprender sus posibilidades expresivas y fortalecer así el vínculo entre público y creación artística.",
      arrayImages: [
        "/images/mediaciones/expoChilarte/1.jpg",
        "/images/mediaciones/expoChilarte/2.jpg",
        "/images/mediaciones/expoChilarte/3.jpg",
        "/images/mediaciones/expoChilarte/4.jpg",
        "/images/mediaciones/expoChilarte/5.jpg",
        "/images/mediaciones/expoChilarte/6.jpg",
        "/images/mediaciones/expoChilarte/7.jpg",
        "/images/mediaciones/expoChilarte/8.jpg",
        "/images/mediaciones/expoChilarte/9.jpg",
        "/images/mediaciones/expoChilarte/10.jpg",
      ],
    },
    {
      image: "/images/mediaciones/expoHabitar/background.jpg",
      title:
        "Exposición Habitar - espacios y memorias - Corporación Cultural Osorno, 2022",
      description:
        "La segunda exposición curada por Catherine Núñez reunió nuevamente a artistas emergentes, presentando lenguajes experimentales, diversos formatos y reflexiones en torno a la creación contemporánea. En esta ocasión, se llevaron a cabo mediaciones en  conjunto a las y los artistas, que incluyeron recorridos por la muestra y el desarrollo de una actividad práctica y lúdica dirigida a estudiantes de la comuna.",
      description2:
        "Estas instancias fomentaron el diálogo directo entre curadora, artistas y público, generando un espacio de intercambio y acercamiento a los procesos creativos desde una experiencia participativa.",
      arrayImages: [
        "/images/mediaciones/expoHabitar/1.jpg",
        "/images/mediaciones/expoHabitar/2.jpg",
        "/images/mediaciones/expoHabitar/3.jpg",
        "/images/mediaciones/expoHabitar/4.webp",
        "/images/mediaciones/expoHabitar/5.jpg",
      ],
    },
    {
      image: "/images/mediaciones/expoTrama/background.jpg",
      title: "Exposición Trama - Corporación Cultural Osorno, 2021",
      description:
        "En el marco de una exposición inédita en Osorno, se llevó a cabo un trabajo de convocatoria dirigido a artistas emergentes de la ciudad. Considerando la problemática de la escasez de espacios e instancias para nuevos agentes en el campo artístico, la muestra reunió a nuevas voces y lenguajes visuales.",
      description2:
        "Como parte de la programación, se desarrollaron mediaciones con establecimientos educacionales, orientadas a explorar las obras y reflexionar en torno al arte contemporáneo. Asimismo, se realizó un conversatorio que permitió el intercambio de ideas, lenguajes y procesos creativos entre artistas y público.",
      arrayImages: [
        "/images/mediaciones/expoTrama/1.jpg",
        "/images/mediaciones/expoTrama/2.jpg",
        "/images/mediaciones/expoTrama/3.jpg",
        "/images/mediaciones/expoTrama/4.jpg",
        "/images/mediaciones/expoTrama/5.jpg",
        "/images/mediaciones/expoTrama/6.jpg",
      ],
    },
    {
      image: "/images/mediaciones/expoVP/background.jpg",
      title:
        "Exposición Vestuario y Patrimonio Teatro Municipal de Santiago - Corporación Cultural Osorno, 2021",
      description:
        "En el marco de la itinerancia de la exposición de vestuario del Teatro Municipal de Santiago, se realizaron visitas guiadas abiertas al público y a distintos establecimientos educacionales de primer y segundo ciclo.",
      description2:
        "Además, se desarrollaron recorridos con actividades lúdicas que invitaron a reflexionar sobre el diseño de vestuario y su relevancia dentro de la disciplina teatral.",
      arrayImages: [
        "/images/mediaciones/expoVP/1.webp",
        "/images/mediaciones/expoVP/2.webp",
        "/images/mediaciones/expoVP/3.jpg",
        "/images/mediaciones/expoVP/4.webp",
        "/images/mediaciones/expoVP/5.jpg",
        "/images/mediaciones/expoVP/6.jpg",
        "/images/mediaciones/expoVP/7.jpg",
        "/images/mediaciones/expoVP/8.webp",
      ],
    },
    {
      image: "/images/mediaciones/tallerInsectopedia/background.jpg",
      title:
        "Taller Insectopedia - Insectos y Artes - Biblioteca Municipal de Purranque, 2025",
      description:
        "Taller realizado en el marco del programa de vacaciones de invierno de la Biblioteca Municipal de Purranque. Su objetivo fue vincular a las infancias con la colección infantil de la biblioteca, a través de una propuesta lúdica y creativa que incentivó la exploración de libros, el juego y la imaginación, fortaleciendo así el vínculo de las y los participantes con este espacio cultural.",
      arrayImages: [
        "/images/mediaciones/tallerInsectopedia/1.jpg",
        "/images/mediaciones/tallerInsectopedia/2.jpg",
        "/images/mediaciones/tallerInsectopedia/3.jpg",
        "/images/mediaciones/tallerInsectopedia/4.jpg",
        "/images/mediaciones/tallerInsectopedia/5.jpg",
        "/images/mediaciones/tallerInsectopedia/6.jpg",
        "/images/mediaciones/tallerInsectopedia/7.jpg",
        "/images/mediaciones/tallerInsectopedia/8.jpg",
        "/images/mediaciones/tallerInsectopedia/9.jpg",
        "/images/mediaciones/tallerInsectopedia/10.jpg",
      ],
    },
    {
      image: "/images/mediaciones/tallerMediacionRojo/background.jpg",
      title:
        "Taller mediación ROJO colaboración con Museo de la Solidaridad Salvador Allende - Corporación Cultural Osorno, 2021",
      description:
        "Taller dirigido a público general y a estudiantes del Liceo Eleuterio Ramírez de Osorno, realizado en el marco de la exposición Rojo del Museo de la Solidaridad Salvador Allende, como parte de las actividades de mediación del Kit Taller Sala de Experiencias.",
      description2:
        "Durante la sesión, revisamos el catálogo de la muestra y desarrollamos ejercicios de interacción del color, explorando las distintas tonalidades de rojo y las sensaciones que cada una nos generaba.",
      arrayImages: [
        "/images/mediaciones/tallerMediacionRojo/1.jpg",
        "/images/mediaciones/tallerMediacionRojo/2.jpg",
        "/images/mediaciones/tallerMediacionRojo/3.jpg",
        "/images/mediaciones/tallerMediacionRojo/4.jpg",
        "/images/mediaciones/tallerMediacionRojo/5.jpg",
        "/images/mediaciones/tallerMediacionRojo/6.jpg",
        "/images/mediaciones/tallerMediacionRojo/7.jpg",
        "/images/mediaciones/tallerMediacionRojo/8.jpg",
      ],
    },
  ];

  const navigateTo = (item) => {
    navigate("/mediaciones/detalle", { state: { item } });
  };

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

          <div className="mediacionesGridContainer">
            {images.map((item, index) => (
              <div
                key={index}
                className="mediacionesGridItem"
                onClick={() => navigateTo(item)}
              >
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  className="mediacionesGridImage"
                  effect="blur"
                />
                <div className="mediacionesGridOverlay">
                  <h3 className="mediacionesGridTitle">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
