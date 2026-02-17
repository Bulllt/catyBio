import React from "react";
import Sidebar from "../../components/sidebar/index";
import Carousel from "../../components/carousel";

import "./style.css";

export default function Proyectos() {
  const images1 = [
    {
      image: "/images/proyectos/difusionFondoFotografico/1.jpg",
      title: "proyecto 1",
    },
  ];

  const images2 = [
    {
      image: "/images/proyectos/taller556/2.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/taller556/1.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/taller556/2.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/taller556/1.jpg",
      title: "proyecto 1",
    },
  ];

  const images3 = [
    {
      image: "/images/proyectos/postalesFeministas/1.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/postalesFeministas/2.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/postalesFeministas/1.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/postalesFeministas/2.jpg",
      title: "proyecto 1",
    },
  ];

  const images4 = [
    {
      image: "/images/proyectos/costurasInterdisciplinarias/1.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/costurasInterdisciplinarias/2.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/costurasInterdisciplinarias/3.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/costurasInterdisciplinarias/4.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/costurasInterdisciplinarias/5.jpg",
      title: "proyecto 1",
    },
    {
      image: "/images/proyectos/costurasInterdisciplinarias/6.jpg",
      title: "proyecto 1",
    },
  ];

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="proyectosSection" id="proyectos">
          <div className="exhibitionItem">
            <h2 className="sectionTitle">
              Difusión Fondo Fotográfico Richard Engel (2026)
            </h2>

            <div className="exhibitionText">
              <ul className="projectsList" style={{ overflow: "hidden" }}>
                <li className="listItemSecond">
                  <strong>Estado:</strong> Admisible / Seleccionado
                </li>
                <li className="listItemSecond">
                  <strong>Folio:</strong> 826731
                </li>
                <li className="listItemSecond">
                  <strong>Fondo:</strong> Fondart Regional – Línea Difusión
                </li>
                <li className="listItemSecond">
                  <strong>Modalidad:</strong> Difusión / Única
                </li>
                <li className="listItemSecond">
                  <strong>Región:</strong> Los Lagos
                </li>
              </ul>

              <p>
                El proyecto tiene por objetivo difundir series fotográficas
                inéditas realizadas entre 1968 y 1972 en la Región de Los Lagos
                por el fotógrafo Richard Engel, mediante la producción de un
                fotolibro en formato físico y digital, junto con la realización
                de exhibiciones en espacios comunitarios de uso cotidiano en las
                comunas de Osorno, Puyehue y San Juan de la Costa.
              </p>
              <p>
                La iniciativa busca contribuir a la salvaguardia, el acceso y la
                visibilización del patrimonio visual del territorio y sus
                habitantes, promoviendo instancias de circulación y mediación en
                contextos locales.
              </p>
              <p>
                Su ejecución está proyectada entre abril de 2026 y enero de
                2027.
              </p>
            </div>

            <Carousel images={images1} />
          </div>

          <div className="exhibitionItem">
            <h2 className="sectionTitle">Taller 556 (2021)</h2>

            <div className="exhibitionText">
              <p>
                Durante el año 2021, bajo el alero de la Corporación Cultural de
                Osorno, desarrollé y gestioné una convocatoria dirigida a
                artistas visuales emergentes de la ciudad, a partir de la
                identificación de una particularidad en el campo local: la
                ausencia de una carrera de formación profesional en artes
                visuales en el territorio.
              </p>
              <p>
                Esta situación ha implicado que quienes buscan profesionalizar
                su práctica deban formarse en universidades de otras regiones,
                generando, a su retorno, una desvinculación entre artistas
                emergentes a nivel local. En este contexto, estuve a cargo de la
                convocatoria, coordinación de reuniones y generación de
                instancias de encuentro orientadas al diálogo, el reconocimiento
                mutuo y la proyección de un trabajo colaborativo a futuro.
              </p>
              <p>
                A partir de este proceso surge Taller 556, haciendo alusión al
                Taller 99 fundado por Nemesio Antúnez, como una plataforma de
                encuentro y trabajo colectivo entre sus artistas fundadores:
                Catherine Núñez, Eduardo Filun, Jonathan Petres, Rocío Montoya y
                Lía Miranda.
              </p>
              <p>
                Posteriormente, realicé la coordinación general y producción de
                la exposición TRAMA: Revisión de cuatro artistas de la ciudad de
                Osorno, primera muestra del colectivo, la cual contó además con
                la edición y producción de un catálogo, con el objetivo de
                insertarse en la circulación de publicaciones de artes visuales
                a nivel local y generar un archivo de este hito.
              </p>
              <p>
                Actualmente, el taller continúa vigente, incorporando a nuevas y
                nuevos artistas emergentes de la ciudad.
              </p>
            </div>

            <Carousel images={images2} />
          </div>

          <div className="exhibitionItem">
            <h2 className="sectionTitle">Postales Feministas (2019)</h2>

            <div className="exhibitionText">
              <p>
                Postales Feministas surge a partir de una conversación en torno
                al territorio, el feminismo y el arte, dando paso a la necesidad
                de construir un archivo visual colectivo sobre lo que estos
                conceptos significan para cada mujer, y cómo se transforman
                desde distintas experiencias y contextos territoriales.
              </p>
              <p>
                El proyecto consistió en la recopilación de postales elaboradas
                por mujeres en diversas ciudades de Chile, entre ellas Valdivia,
                Osorno, Santiago y Valparaíso, mediante la realización de
                talleres y la disposición de materiales para su creación. Como
                resultado, se reunieron un total de 360 postales provenientes de
                8 países.
              </p>
              <p>
                El archivo fue posteriormente exhibido en el Campus Los Canelos
                de la Universidad Austral de Chile en enero de 2020.
              </p>
            </div>

            <Carousel images={images3} />
          </div>

          <div className="exhibitionItem">
            <h2 className="sectionTitle">
              Costuras Interdisciplinarias (2018)
            </h2>

            <div className="exhibitionText">
              <p>
                Co-gestora del proyecto Costuras Interdisciplinarias,
                desarrollado en la Facultad de Arquitectura y Artes de la
                Universidad Austral de Chile, orientado a articular y
                visibilizar las diversas prácticas y disciplinas creativas que
                convergen al interior de la Facultad.
              </p>
              <p>
                En el contexto de la reciente incorporación de nuevas carreras
                (Creación Audiovisual, Diseño, Artes Musicales y Sonoras), el
                proyecto propició instancias de encuentro entre estudiantes y
                docentes, favoreciendo el reconocimiento mutuo de los distintos
                campos disciplinares, sus procesos de trabajo y líneas de
                interés. Asimismo, generó espacios de diálogo en torno a la
                identidad y proyección de la Facultad, incluyendo reflexiones
                colectivas sobre su denominación y quehacer.
              </p>
              <p>
                Desde la gestión y coordinación del proyecto, se promovió una
                instancia interdisciplinaria de producción y exhibición
                artística, relevando el desarrollo de un polo artístico-cultural
                situado en la periferia del sur austral.
              </p>
            </div>

            <Carousel images={images4} />
          </div>
        </section>
      </main>
    </div>
  );
}
