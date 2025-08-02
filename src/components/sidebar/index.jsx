import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <button className="mobileMenuButton" onClick={toggleMobileMenu}>
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
          isMobileOpen ? "mobileOpen" : ""
        }`}
        id="sidebar"
      >
        <ul className="sidebarList">
          {[
            { to: "/", text: "Bio" },
            { to: "/mediaciones", text: "Mediaciones" },
            { to: "/procesosFormativos", text: "Procesos Formativos" },
            { to: "/curadurias", text: "Curadurias" },
            { to: "/trabajoArtistico", text: "Trabajo Artístico" },
            { to: "/publicaciones", text: "Publicaciones" },
            { to: "/contacto", text: "Contacto" },
          ].map((item) => (
            <li className="sidebarItem" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `sidebarLink ${isActive ? "active" : ""}`
                }
                onClick={() => setIsMobileOpen(false)}
              >
                {isCollapsed ? (
                  <span className="tooltip">{item.text}</span>
                ) : (
                  item.text
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`contentMargin ${isCollapsed ? "collapsed" : ""}`} />
    </>
  );
}
