import { FaBuilding, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const experiences = [
    {
      company: "Universidad de Pamplona",
      role: "Analista de Desarrollo",
      period: "mar 2025 - Actualidad",
      description:
        "Desarrollo de y mantenimiento de software académico y administrativo para diferentes instituciones de eduación superior. Uso de tecnologías como Java, Html 5, CSS, JavaScript, PostgreSQL y Oracle.",
    },
    {
      company: "Sofka Technologies",
      role: "Consultor de Desarrollo",
      period: "feb 2023 - ene 2024",
      description:
        "Desarrollo de servicios REST para diferentes clientes de la compañia en el sector fintech y retail. Uso de tecnologías como Java, Spring Boot, nestJS, Kafka, RabbitMQ, Apache Nifi, Docker, AWS, Bases de datos entre otras. Implementación de microservicios y arquitectura hexagonal.",
    },
    {
      company: "Universidad de Pamplona",
      role: "Analista de Bases de Datos (DBA)",
      period: "ago 2021 - ene 2023",
      description:
        "Mantenimiento y administración de bases de datos Oracle y PostgreSQL asi como generación de backups automaticos. Optimización de consultas SQL y diseño de esquemas de bases de datos. Administración de  servidores Linux",
    },
    {
      company: "BeGo",
      role: "Desarrollador de Software",
      period: "ago 2019 - jul 2021",
      description:
        "Desarrollo de Software para la gestión de pedidos y ventas en restaurantes y almacenes de viveres. Uso de tecnologías como Java, Python, Html 5, CSS, React, PostgreSQL y Oracle.",
    },
  ];

const Experience = () => {
    return (
        <section className="px-4 py-12 bg-gradient-to-b from-gray-900 text-white pt-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
              Experiencia Laboral
            </h2>
    
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-4 items-start md:items-center"
                >
                  <div className="text-blue-500 text-3xl">
                    <FaBriefcase />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <FaBuilding className="text-gray-400 dark:text-gray-300" />
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2">
                      <FaCalendarAlt className="text-gray-400" /> {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};
export default Experience