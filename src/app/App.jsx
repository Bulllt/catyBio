import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout.jsx";

import Home from "../screens/home/index.jsx";
import Mediaciones from "../screens/mediaciones/index.jsx";
import ProcesosFormativos from "../screens/procesosFormativos/index.jsx";
import Curadurias from "../screens/curadurias/index.jsx";
import TrabajoArtistico from "../screens/trabajoArtistico/index.jsx";
import Publicaciones from "../screens/publicaciones/index.jsx";
import Contacto from "../screens/contacto/index.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mediaciones" element={<Mediaciones />} />
          <Route path="/procesosFormativos" element={<ProcesosFormativos />} />
          <Route path="/curadurias" element={<Curadurias />} />
          <Route path="/trabajoArtistico" element={<TrabajoArtistico />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}
