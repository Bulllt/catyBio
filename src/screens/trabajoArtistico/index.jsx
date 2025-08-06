import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/sidebar/index";
import Grid from "./grid";

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

  const drawings = [
    {
      title: "120, lápices de colores",
      image: "/images/trabajoArtistico/drawings/1.jpg",
    },
    {
      title: "Autorretrato, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/2.jpg",
    },
    {
      title: "Chispita, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/3.jpg",
    },
    {
      title: "Gustavo, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/4.jpg",
    },
    {
      title: "Iñaki, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/5.jpg",
    },
    {
      title: "Ivanna, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/6.jpg",
    },
    {
      title: "Mariana, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/7.jpg",
    },
    {
      title: "Valentina, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/8.jpg",
    },
    {
      title: "Autorretrato, técnica mixta (grafito, acrílico)",
      image: "/images/trabajoArtistico/drawings/9.jpg",
    },
    {
      title: "Pucatrihue, grafito sobre papel",
      image: "/images/trabajoArtistico/drawings/10.jpg",
    },
  ];

  const engravings = [
    {
      title: "Efe, taco perdido",
      image: "/images/trabajoArtistico/engravings/1.jpg",
    },
    {
      title: "real, xilografía sobre fotografía",
      image: "/images/trabajoArtistico/engravings/2.jpg",
    },
    {
      title: "sin título, detalles",
      image: "/images/trabajoArtistico/engravings/3.jpg",
    },
    {
      title: "sin titulo, grabado en tetrapack",
      image: "/images/trabajoArtistico/engravings/4.jpg",
    },
    {
      title: "sin título, grabado sobre tela",
      image: "/images/trabajoArtistico/engravings/5.jpg",
    },
    {
      title: "sin título, punta seca",
      image: "/images/trabajoArtistico/engravings/6.jpg",
    },
    {
      title: "sin título, taco perdido en tríptico",
      image: "/images/trabajoArtistico/engravings/7.jpg",
    },
    {
      title: "Valpo 02, Agua fuerte",
      image: "/images/trabajoArtistico/engravings/8.jpg",
    },
    {
      title: "Valpo 03, Agua fuerte tinta azul",
      image: "/images/trabajoArtistico/engravings/9.jpg",
    },
    {
      title: "Valpo 03, Agua fuerte tinta violeta",
      image: "/images/trabajoArtistico/engravings/10.jpg",
    },
  ];

  const paints = [
    {
      title: "Bodegón contemporáneo",
      image: "/images/trabajoArtistico/paints/1.jpg",
    },
    {
      title:
        "Las Meninas obra colectiva donada al hospital base de Valdivia, 2017",
      image: "/images/trabajoArtistico/paints/2.jpg",
    },
    {
      title: "Pepinillos, acuarela",
      image: "/images/trabajoArtistico/paints/3.jpg",
    },
    {
      title: "sin título, pigmentos naturales sobre papel",
      image: "/images/trabajoArtistico/paints/4.jpg",
    },
  ];

  const exposition = [
    {
      title:
        "Expositora en XVI Jornadas Estudios e Investigaciones Arte e ideología del Instituto  de Teoría e Historia del Arte “Julio E. Payró”, Facultad de Filosofía y Letras, UBA.  (2024)",
      image: "/images/trabajoArtistico/exposition/1.jpg",
    },
    {
      title:
        "Juntas dar la vuelta (2022) exposición colectiva curada por Valentina Inostroza, se realizó en Casa Prochelle desde el 18 de octubre al 5 noviembre del 2022",
      image: "/images/trabajoArtistico/exposition/2.jpg",
    },
    {
      title:
        "Participe exposición colectiva Costuras Interdisciplinarias en Museo de Arte Contemporáneo Valdivia (2018)",
      image: "/images/trabajoArtistico/exposition/3.jpg",
    },
    {
      title:
        "Participe exposición colectiva Costuras Interdisciplinarias en Museo de Arte Contemporáneo Valdivia (2018)",
      image: "/images/trabajoArtistico/exposition/4.jpg",
    },
  ];

  const photographs = [
    {
      title: "Osorno, fotografía",
      image: "/images/trabajoArtistico/photographs/1.jpg",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="trabajoArtisticoSection" id="trabajoArtistico">
          <h2 className="sectionTitle">Trabajo Artístico</h2>

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

          <h3 className="artisticSubtitleFirst">Dibujo</h3>
          <Grid images={drawings} />

          <h3 className="artisticSubtitle">Grabado</h3>
          <Grid images={engravings} />

          <h3 className="artisticSubtitle">Pintura</h3>
          <Grid images={paints} />

          <h3 className="artisticSubtitle">Participación en Exposiciones</h3>
          <Grid images={exposition} />

          <h3 className="artisticSubtitle">Fotografía</h3>
          <Grid images={photographs} />
        </section>
      </main>
    </div>
  );
}
