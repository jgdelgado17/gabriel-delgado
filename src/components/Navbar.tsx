import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <div className="space-x-6">
          <NavLink to="/" className="hover:text-blue-400">Inicio</NavLink>
          <NavLink to="/about" className="hover:text-blue-400">Sobre mí</NavLink>
          <NavLink to="/technologies" className="hover:text-blue-400">Tecnologías</NavLink>
          <NavLink to="/skills" className="hover:text-blue-400">Habilidades</NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">Proyectos</NavLink>
          <NavLink to="/contact" className="hover:text-blue-400">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;