import React from "react";
import Sidebar from "../../components/sidebar/index";
import Carousel from "../../components/carousel";

import "./style.css";

export default function TrabajoArtistico() {
  const images = [
    {
      src: "/images/trabajoArtistico/1.jpg",
      alt: "Mediación 1",
    },
    {
      src: "/images/trabajoArtistico/2.jpg",
      alt: "Mediación 2",
    },
    {
      src: "/images/trabajoArtistico/3.jpg",
      alt: "Mediación 3",
    },
    {
      src: "/images/trabajoArtistico/4.jpg",
      alt: "Mediación 4",
    },
    {
      src: "/images/trabajoArtistico/5.jpg",
      alt: "Mediación 5",
    },
    {
      src: "/images/trabajoArtistico/6.jpg",
      alt: "Mediación 6",
    },
    {
      src: "/images/trabajoArtistico/7.jpg",
      alt: "Mediación 6",
    },
    {
      src: "/images/trabajoArtistico/8.jpg",
      alt: "Mediación 6",
    },
    {
      src: "/images/trabajoArtistico/9.jpg",
      alt: "Mediación 6",
    },
    {
      src: "/images/trabajoArtistico/10.jpg",
      alt: "Mediación 6",
    },
    {
      src: "/images/trabajoArtistico/11.jpg",
      alt: "Mediación 6",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="trabajoArtisticoSection" id="trabajoArtistico">
          <div className="listContainer">
            <ul className="list">
              <li className="listItem">
                Expositora en XVI Jornadas Estudios e Investigaciones Arte e
                ideología del Instituto de Teoría e Historia del Arte "Julio E.
                Payró", Facultad de Filosofía y Letras, UBA. (2024)
              </li>
              <li className="listItem">
                Curadora de Habitar: espacios y memorias en Corporación Cultural
                de Osorno. (2022)
              </li>
              <li className="listItem">
                Exposición colectiva Juntas dar la vuelta curada por Valentina
                Inostroza, Casa Prochelle, Corporación Cultural Municipal
                Valdivia. (2022)
              </li>
              <li className="listItem">
                Curadora de Trama Revisión a cuatro artistas de la ciudad de
                Osorno en Corporación Cultural de Osorno. (2021)
              </li>
              <li className="listItem">
                Participe en Cortes de luz, Antología artística en pandemia,
                primera edición (2020). Rancagua, Chile: Editorial i con
                bototos.
              </li>
              <li className="listItem">
                Mamá, ¿hoy sí se puede salir? presentada en Señales en espera,
                Galería Réplica. (2020)
              </li>
              <li className="listItem">
                Lugar donde se encierra, presentada en Situación documental,
                Laboratorio Antropología Audiovisual de la Dirección Museológica
                UACh. (2020)
              </li>
              <li className="listItem">
                Postal feminista en resistencia, presentada en el libro de
                artista compilación 18.10: La revuelta de los rotos, Colectivo
                Tramarte. (2020)
              </li>
              <li className="listItem">
                Exposición Postales feministas (2020). Campus Los Canelos,
                Universidad de Austral de Chile, Valdivia.
              </li>
              <li className="listItem">
                Fanzine Postales feministas, 6to evento Internacional de Arte
                Correo, Museo de Arte Cañadense, Argentina. (2019)
              </li>
              <li className="listItem">
                Participe exposición colectiva Costuras Interdisciplinarias en
                Museo de Arte Contemporáneo Valdivia. (2018)
              </li>
              <li className="listItem">
                Participe en exposición colectiva de dibujo en el Museo
                Philippi, Valdivia. (2018)
              </li>
              <li className="listItem">
                Las Meninas obra colectiva donada al hospital base de Valdivia.
                (2017)
              </li>
            </ul>
          </div>

          <Carousel images={images} />
        </section>
      </main>
    </div>
  );
}
