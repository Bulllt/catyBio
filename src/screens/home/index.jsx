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
                  Descripción profesional y personal aquí. Puedes hablar sobre
                  tu experiencia, tus intereses, tu formación y lo que te
                  apasiona en el mundo del arte y la cultura.
                </p>
                <p>
                  Agrega más información relevante sobre tu trabajo, tu visión
                  artística y los proyectos en los que has participado.
                </p>
              </div>
            </div>

            <div className="rightTextSection">
              <h3 className="textSectionTitle">CV</h3>

              <div className="cvContent">
                <div className="cvSection">
                  <h4 className="cvSectionTitle">Formación</h4>
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
