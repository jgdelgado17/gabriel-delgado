import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Inicio", icon: <FaHome /> },
  { to: "/about", label: "Sobre mí", icon: <FaUser /> },
  { to: "/technologies", label: "Tecnologías", icon: <FaCode /> },
  { to: "/skills", label: "Habilidades", icon: <FaTools /> },
  { to: "/projects", label: "Proyectos", icon: <FaProjectDiagram /> },
  { to: "/contact", label: "Contacto", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Cierra el menú al cambiar de ruta
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900/70 backdrop-blur-md text-white fixed w-full z-10 shadow-md dark:bg-gray-800/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nombre + perfil */}
        <div className="flex items-center gap-3">
          <img
            src={`${process.env.PUBLIC_URL}${process.env.REACT_APP_PHOTO_URL}`}
            alt="MyPhoto"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-sm font-bold italic">Jesus Gabriel Delgado Leal</h1>
            <h2 className="text-xs">Ingeniero de Sistemas</h2>
            <p className="text-xs text-gray-400">Desarrollador web Full Stack</p>
          </div>
        </div>

        {/* Botones: darkmode + hamburguesa */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-xl md:hidden hover:text-blue-400 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú Desktop */}
        <div className="space-x-6 text-sm md:text-base hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-blue-400 transition ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Menú Móvil con animación */}
      <div
        className={`md:hidden bg-gray-800 px-6 pb-4 space-y-2 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-blue-400 transition ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
