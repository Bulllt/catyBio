import React from "react";
import Sidebar from "../../components/sidebar/index";

import "./style.css";

export default function Home() {
  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="quienSoySection" id="bio">
          <div className="textSections">
            <div className="leftTextSection">
              <div className="profileImageContainer">
                <img
                  src="/images/bio/a.jpg"
                  alt="Catherine Nuñez Flos"
                  className="profileImage"
                />
              </div>

              <h3 className="textSectionTitle">Catherine Nuñez Flos</h3>

              <div className="textSectionContent">
                <p>
                  Licenciada en Artes Visuales con Diplomado en Curaduría y
                  egresada de la Maestría en Gestión Cultural en la Universidad
                  de Buenos Aires. En mis experiencias laborales he desarrollado
                  formulación de proyectos para diferentes plataformas y fondos
                  concursables, curaduría, planificación y gestión de
                  mediaciones en exposiciones, fomentando la participación de
                  comunidades locales y fortaleciendo vínculos entre espacios
                  culturales, establecimientos educativos y las comunidades
                  locales. Además, he desarrollado estudios de públicos y
                  estrategias comunicacionales, así como registro fotográfico de
                  eventos culturales y manejo de redes sociales de instituciones
                  culturales y educativas. Estas experiencias me han permitido
                  contribuir a que las instituciones se consoliden como espacios
                  de encuentro para diversos actores y grupos locales. Además,
                  he impartido clases de artes visuales en establecimientos
                  educacionales y realizado asistencia en montaje en galerías de
                  arte y festivales.
                </p>
                <p>
                  Mis intereses profesionales se sitúan en la gestión y
                  promoción de las culturas, el patrimonio y las artes, el
                  desarrollo de proyectos artísticos culturales teniendo en
                  cuenta el contexto social y territorial, además de los
                  intereses e identidad local.
                </p>
              </div>
            </div>

            <div className="rightTextSection">
              <h3 className="textSectionTitle">Experiencia</h3>

              <div className="cvContent">
                <div className="cvSection">
                  <ul className="cvList">
                    <li className="cvItem">
                      <span className="cvTitle">
                        Taller de pintura al óleo para infancias (febrero 2026)
                      </span>
                      <span className="cvDescription">
                        Municipalidad de Puyehue. Desarrollo de taller de óleo
                        para infancias de la comuna de Puyehue, en el marco de
                        talleres de verano. Se busca conocer y explorar el
                        material, desarrollando la creatividad y técnicas
                        pictóricas.
                      </span>
                    </li>
                    <li className="cvItem">
                      <span className="cvTitle">
                        Digitalización Archivo 35mm (abril 2025)
                      </span>
                      <span className="cvDescription">
                        Centro Cultural La Unión. Desarrollo de trabajo de
                        digitalización, limpieza de archivos, registro, armado
                        de cajas de conservación, rotulación y embalaje del
                        fondo Gonzalo Carrasco, archivos fotográficos de 35mm.
                      </span>
                    </li>
                    <li className="cvItem">
                      <span className="cvTitle">
                        Taller de pintura al óleo (abril 2025)
                      </span>
                      <span className="cvDescription">
                        Municipalidad de Puyehue. Desarrollo de taller de óleo
                        para las y los vecinos de la comuna de Puyehue, se
                        trabaja el desarrollo de teoría de color, dibujos,
                        perspectiva, valor lineal, composición, entre otras
                        técnicas. El público asistente es mayoritariamente
                        adultos mayores.
                      </span>
                    </li>
                    <li className="cvItem">
                      <span className="cvTitle">
                        Instituto de Teoría e Historia del Arte "Julio E. Payró"
                        (2024)
                      </span>
                      <span className="cvDescription">
                        Pasante en el marco de la Maestría en Gestión Cultural.
                        Desarrollo de estudios de públicos y estrategias
                        comunicacionales para las Jornadas Estudios e
                        Investigaciones. Se elaboró el perfil de públicos de
                        ponentes y asistentes, describiendo rango etario,
                        formación académica, área de investigación, entre otras.
                        A partir del estudio previo se diseñaron estrategias de
                        comunicación acorde a las necesidades del Instituto y
                        preferencias de uso por parte de los/as participantes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
