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
              <h3 className="textSectionTitle">Catherine Nuñez Flos</h3>

              <div className="textSectionContent">
                <p>
                  Licenciada en Artes Visuales con Diplomado en Curaduría, y
                  actualmente curso la Maestría en Gestión Cultural en la
                  Universidad de Buenos Aires.
                </p>
                <p>
                  Mi trabajo se ha desarrollado en torno a la curaduría, la
                  gestión y coordinación de exposiciones, así como la mediación
                  cultural, fomentando la participación activa de comunidades
                  locales y fortaleciendo vínculos entre espacios culturales,
                  educativos y sociales.
                </p>
                <p>
                  Me interesa especialmente el cruce entre arte, educación y
                  territorio. He realizado estudios de públicos, estrategias
                  comunicacionales, registro fotográfico de actividades
                  culturales y gestión de redes sociales para instituciones
                  culturales y educativas. Estas experiencias me han permitido
                  aportar a la creación de espacios de encuentro y reflexión
                  colectiva.
                </p>
                <p>
                  He impartido clases de artes visuales en contextos educativos
                  y talleres de creación artística para infancias y personas
                  adultas, principalmente en torno a la pintura al óleo. También
                  he colaborado en montajes de exposiciones en galerías y
                  festivales.
                </p>
              </div>
            </div>

            <div className="rightTextSection">
              <h3 className="textSectionTitle">Formación</h3>

              <div className="cvContent">
                <div className="cvSection">
                  <ul className="cvList">
                    <li className="cvItem">
                      <span className="cvYear">2016 - 2020</span>
                      <span className="cvDescription">
                        Licenciada en Artes Visuales - Universidad Austral de
                        Chile
                      </span>
                    </li>
                    <li className="cvItem">
                      <span className="cvYear">2021</span>
                      <span className="cvDescription">
                        Diplomado Curaduría - Universidad Adolfo Ibañez
                      </span>
                    </li>
                    <li className="cvItem">
                      <span className="cvYear">2023 - actualmente</span>
                      <span className="cvDescription">
                        Maestría Gestión Cultural - Universidad de Buenos Aires
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
