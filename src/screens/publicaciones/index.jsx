import React from "react";
import Sidebar from "../../components/sidebar/index";

import "./style.css";

export default function Publicaciones() {
  const publications = [
    {
      id: 1,
      title: "Catálogo Postales Feministas",
      thumbnail: "/docs/1.jpg",
      pdfUrl:
        "https://drive.google.com/file/d/1d-2lF2WbeOxNGxxu6JUOO8MUQGoCRCZT/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Catálogo Trama",
      thumbnail: "/docs/2.jpg",
      pdfUrl:
        "https://drive.google.com/file/d/1QLvbiVIZI7FjtdvCe0qUW2UvwAUCQFeB/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Foto Libro",
      thumbnail: "/docs/3.jpg",
      pdfUrl:
        "https://drive.google.com/file/d/1vBUOC2XM4458t-Vsl9acTzC7LkjABPXr/view?usp=drive_link",
    },
  ];

  const handlePublicationClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="publicacionesSection" id="publicaciones">
          <div className="introTextContainer">
            <p className="introParagraph">
              Aquí puedes encontrar mis publicaciones académicas y artísticas
              disponibles para descarga.
            </p>
          </div>

          <div className="docsGridContainer">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="publicationCard"
                onClick={() => handlePublicationClick(pub.pdfUrl)}
              >
                <div className="thumbnailContainer">
                  <img
                    src={pub.thumbnail}
                    alt={pub.title}
                    className="publicationThumbnail"
                  />
                  <div className="overlay">
                    <span className="viewText">Ver publicación</span>
                  </div>
                </div>
                <h3 className="publicationTitle">{pub.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
