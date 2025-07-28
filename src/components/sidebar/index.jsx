import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <ul className="sidebarList">
        <li className="sidebarItem">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Bio
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/mediaciones"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Mediaciones
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/procesosFormativos"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Procesos Formativos
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/curadurias"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Curadurias
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/trabajoArtistico"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Trabajo Artístico
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/publicaciones"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Publicaciones
          </NavLink>
        </li>
        <li className="sidebarItem">
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `sidebarLink ${isActive ? "active" : ""}`
            }
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
