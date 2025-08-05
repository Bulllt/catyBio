import React from "react";
import Sidebar from "../../components/sidebar/index";
import Carousel from "../../components/carousel";

import "./style.css";

export default function Curadurias() {
  const images1 = [
    {
      image: "/images/espaciosYmemorias/1.jpg",
      title: "Mediación 1",
    },
    {
      image: "/images/espaciosYmemorias/2.jpg",
      title: "Mediación 2",
    },
    {
      image: "/images/espaciosYmemorias/3.jpg",
      title: "Mediación 3",
    },
    {
      image: "/images/espaciosYmemorias/4.jpg",
      title: "Mediación 4",
    },
    {
      image: "/images/espaciosYmemorias/5.jpg",
      title: "Mediación 5",
    },
    {
      image: "/images/espaciosYmemorias/6.jpg",
      title: "Mediación 6",
    },
    {
      image: "/images/espaciosYmemorias/7.jpg",
      title: "Mediación 6",
    },
    {
      image: "/images/espaciosYmemorias/8.jpg",
      title: "Mediación 6",
    },
  ];

  const images2 = [
    {
      image: "/images/trama/1.jpg",
      title: "Mediación 1",
    },
    {
      image: "/images/trama/2.jpg",
      title: "Mediación 2",
    },
    {
      image: "/images/trama/3.jpg",
      title: "Mediación 3",
    },
    {
      image: "/images/trama/4.jpg",
      title: "Mediación 4",
    },
    {
      image: "/images/trama/5.jpg",
      title: "Mediación 5",
    },
    {
      image: "/images/trama/6.jpg",
      title: "Mediación 6",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="curaduriasSection" id="curadurias">
          <div className="exhibitionItem">
            <h3 className="exhibitionTitle">
              Habitar: espacios y memorias (2022)
            </h3>

            <div className="exhibitionText">
              <p>
                El año 2022 se abre una convocatoria para la exposición de obras
                en la Sala Ventanal de la Corporación Cultural de Osorno, de la
                cual se pudo concluir como comunes denominadores los conceptos
                que dan nombre a la exposición Habitar: espacios y memorias.
              </p>
              <p>
                Conceptos que se abren en múltiples dimensiones tanto formales y
                objetuales desplegando discursos poéticos, sentires, memorias
                individuales y colectivas.
              </p>
              <p>
                La selección de obras y artistas nos desembrollan diferentes
                sentipensares del habitar y el cobijo que obtienen en los
                espacios y la memoria: habitar en el consumo, en los recuerdos,
                en la memoria histórica, en los no lugares, en el hogar, en las
                calles donde transitamos, en el cariño y en el cuerpo.
              </p>
              <p className="artistsList">
                <strong>Artistas:</strong> Paula Carmona Araya, Camila Contreras
                Tapia, Nicolas Cox Ascencio, Alonso Escobar Zabala, Matías
                Fuentes Ibacache, Paola Fuentes Fuentes, Francisca Hono Olmos,
                Valentina Inostroza Bravo, Irma Mellado Iturriaga, Samanta Nash
                Muñoz, María Constanza Reyes Malschafsky.
              </p>
            </div>

            <Carousel images={images1} />
          </div>

          <div className="exhibitionItem">
            <h3 className="exhibitionTitle">
              Trama: Revisión a cuatro artistas de la ciudad de Osorno (2021)
            </h3>

            <div className="exhibitionText">
              <p>
                La exposición recoge la producción artística individual para
                poner en valor las miradas colectivas de discursos artísticos y
                políticos. Diálogos entre artistas sobre sus inquietudes,
                impulsos y cuestionamientos que divisaron una narración de
                cruces y enlaces en común, impulsando la unión y la red de arte
                contemporáneo en la ciudad de Osorno. Cuatro artistas de la
                ciudad investigan y experimentan con medios y lenguajes
                contemporáneos.
              </p>
              <p>
                El corpus de selección de obras varía tanto en materialidad y
                conceptos, la utilización de materiales de desecho, recolección
                de materia orgánica, lecturas de la representación corporal
                femenina, cartografías sociales e intentos de reconstrucción son
                algunas de las propuestas que recogieron las y los artistas.
              </p>
              <p className="artistsList">
                <strong>Artistas:</strong> Eduardo Filún Matus, Rocío Montoya
                Ceballo, Jonathan Petres Garnica, Lilisbeth Vargas Neumann
              </p>
            </div>

            <Carousel images={images2} />
          </div>
        </section>
      </main>
    </div>
  );
}
