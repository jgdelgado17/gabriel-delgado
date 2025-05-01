const Projects = () => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-bold">Gestor de Empleados</h3>
            <p>App CRUD construida con Java, JSP, Servlets y Bootstrap.</p>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-bold">Portafolio Personal</h3>
            <p>Este sitio web hecho con React y desplegado en GitHub Pages.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;