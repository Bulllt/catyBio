import React from "react";
import Sidebar from "../../components/sidebar/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function ProcesosFormativos() {
  const navigate = useNavigate();

  const images = [
    {
      image: "/images/procesosFormativos/tallerArte/background.jpg",
      title: "Taller de arte para infancias",
      description:
        "Los talleres de arte para infancias son un espacio creativo dedicado a fomentar la expresión artística y el desarrollo integral de las infancias a través de talleres de arte. En los talleres, busco ofrecer una experiencia educativa que estimule la imaginación, la curiosidad y el pensamiento crítico de los niños y niñas, utilizando el arte como herramienta de aprendizaje y transformación.",
      description2:
        "A través de actividades dinámicas y participativas, los y las niñas exploran diversas disciplinas artísticas, como la pintura, el dibujo, el collage, el grabado y el trabajo con materiales reciclados. Los talleres están diseñados para promover habilidades cognitivas, emocionales y sociales, favoreciendo la expresión personal y el trabajo en equipo.",
      arrayImages: [
        "/images/procesosFormativos/tallerArte/1.jpg",
        "/images/procesosFormativos/tallerArte/2.jpg",
        "/images/procesosFormativos/tallerArte/3.jpg",
        "/images/procesosFormativos/tallerArte/4.jpg",
        "/images/procesosFormativos/tallerArte/5.jpg",
      ],
    },
    {
      image: "/images/procesosFormativos/tallerOleo/background.jpg",
      title: "Taller de óleo",
      description:
        "El taller de óleo busca entregar aspectos técnicos de la pintura, abordando técnicas de dibujo utilizando materiales como el carboncillo y lápices técnicos, trabajando aspectos como la perspectiva, el encaje y la proporción. También se han explorado técnicas de color, comprendiendo su manejo, variaciones tonales y usos posibles dentro de la práctica pictórica.",
      description2:
        "Este espacio además de ser un espacio de formación artística, es un espacio de relajación y creatividad para las y los participantes. Fortaleciendo el tejido social a partir de la práctica artística.",
      arrayImages: [
        "/images/procesosFormativos/tallerOleo/1.jpg",
        "/images/procesosFormativos/tallerOleo/2.jpg",
        "/images/procesosFormativos/tallerOleo/3.jpg",
        "/images/procesosFormativos/tallerOleo/4.jpg",
        "/images/procesosFormativos/tallerOleo/5.jpg",
      ],
    },
  ];

  const navigateTo = (item) => {
    navigate("/procesosFormativos/detalle", { state: { item } });
  };

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="procesosSection" id="procesosFormativos">
          <h2 className="sectionTitle">Procesos Formativos</h2>

          <div className="introParagraph">
            <p>
              He desarrollado procesos formativos dirigidos a diversos públicos,
              adaptando las metodologías según las edades e intereses de cada
              grupo. Destaco especialmente los talleres de arte para infancias,
              donde además de entregar herramientas técnicas sobre materiales,
              busco fomentar la exploración, la experimentación y la
              creatividad. Estos espacios se transforman en instancias lúdicas
              de aprendizaje, que culminan en procesos creativos llenos de
              nuevas experiencias y risas.
            </p>
            <p>
              Por otro lado, he impartido talleres de pintura al óleo para
              adultos en la comuna de Puyehue. En ellos se han abordado técnicas
              de dibujo utilizando materiales como el carboncillo y lápices
              técnicos, trabajando aspectos como la perspectiva, el encaje y la
              proporción. También se han explorado técnicas de color,
              comprendiendo su manejo, variaciones tonales y usos posibles
              dentro de la práctica pictórica.
            </p>
            <p>
              Estos procesos formativos al desarrollarse con cierta continuidad
              en el tiempo, permiten generar vínculos dentro del grupo y un
              sentido de pertenencia. Quienes participan reconocen sus avances y
              progresos. Se sienten parte activa del proceso y valoran el
              espacio como un lugar de crecimiento personal y colectivo.
            </p>
          </div>

          <div className="listContainer">
            <ul className="procesosList">
              <li className="listItem">2025 | Taller de arte para infancias</li>
              <li className="listItem">
                2025 | Taller de pintura al óleo - Departamento de Cultural
                Puyehue
              </li>
              <li className="listItem">
                2022 | Taller extraprogramático de Artes Visuales - Colegio
                Creación Osorno
              </li>
              <li className="listItem">
                2021 | Taller de creación de portafolio de artista - Corporación
                Cultural Osorno
              </li>
            </ul>
          </div>

          <div className="processGridContainer">
            {images.map((item, index) => (
              <div
                key={index}
                className="processGridItem"
                onClick={() => navigateTo(item)}
              >
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  className="processGridImage"
                  effect="blur"
                />
                <div className="processGridOverlay">
                  <h3 className="processGridTitle">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
