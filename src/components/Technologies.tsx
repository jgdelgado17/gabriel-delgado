const Technologies = () => {
  const tech = ['React', 'Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML', 'CSS'];

  return (
    <section className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Tecnologías</h2>
        <ul className="flex flex-wrap gap-4">
          {tech.map((item) => (
            <li key={item} className="bg-gray-200 px-4 py-2 rounded-full shadow-sm">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;