const skills = [
  "Resolución de problemas",
  "Trabajo en equipo",
  "Metodologías ágiles (Scrum)",
  "Escritura de código limpio",
  "Pruebas unitarias",
  "Manejo de Git y GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white shadow-md px-4 py-2 rounded-lg border">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;