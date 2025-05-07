import { useEffect, useState } from "react";
import {
  FaBars,
  FaCode,
  FaEnvelope,
  FaHome,
  FaTimes,
  FaTools,
  FaUser,
  FaBriefcase
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Inicio", icon: <FaHome /> },
  { to: "/about", label: "Sobre mí", icon: <FaUser /> },
  { to: "/experience", label: "Experiencia", icon: <FaBriefcase /> },
  { to: "/technologies", label: "Tecnologías", icon: <FaCode /> },
  { to: "/skills", label: "Habilidades", icon: <FaTools /> },
  { to: "/contact", label: "Contacto", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const imageUrl = `${process.env.PUBLIC_URL}${process.env.REACT_APP_PHOTO_URL}`;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900/70 backdrop-blur-md text-white dark:bg-gray-800/80 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={imageUrl}
              alt="MyPhoto"
              className="w-12 h-12 rounded-full border-2 border-white"
              onClick={() => setIsModalOpen(true)}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-sm font-bold italic">Jesus Gabriel Delgado Leal</h1>
              <h2 className="text-xs">Ingeniero de Sistemas</h2>
              <p className="text-xs text-gray-400">Desarrollador Backend</p>
            </div>
          </div>

          {/* button menu mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-xl md:hidden hover:text-blue-400 transition"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="space-x-6 text-sm md:text-base hidden md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-blue-400 transition ${isActive ? "text-blue-400" : ""
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* animation menu mobile */}
        <div
          className={`md:hidden bg-gray-800 px-6 pb-4 space-y-2 text-sm overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-blue-400 transition ${isActive ? "text-blue-400" : ""
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={imageUrl}
            alt="Foto ampliada"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg border-4 border-white"
            onClick={(e) => e.stopPropagation()} // prevent click event from closing the modal
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
