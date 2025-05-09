import {
    FaMapMarkerAlt,
    FaUniversity,
    FaBriefcase,
    FaLanguage,
    FaLightbulb,
    FaProjectDiagram,
    FaStar,
  } from "react-icons/fa";
  
  const About = () => {
    const iconClass = "text-lg md:text-xl min-w-[1.25rem]";
  
    return (
      <section className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white bg-gradient-to-b from-gray-600 pt-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 md:col-span-1 max-w-4xl mx-auto mt-12 p-6">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Información Personal</h1>
  
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className={`text-blue-600 ${iconClass}`} />
                Vivo actualmente en Pamplona, Colombia.
              </p>
  
              <p className="flex items-center gap-2">
                <FaUniversity className={`text-green-700 ${iconClass}`} />
                Egresado como Ingeniero de Sistemas de la Universidad de Pamplona.
              </p>
  
              <p className="flex items-center gap-2">
                <FaBriefcase className={`text-purple-600 ${iconClass}`} />
                Experiencia en desarrollo backend y frontend en proyectos académicos y profesionales,
                participando en equipos multidisciplinarios.
              </p>
  
              <p className="flex items-center gap-2">
                <FaLightbulb className={`text-yellow-500 ${iconClass}`} />
                He diseñado y mantenido aplicaciones empresariales con enfoque en rendimiento, escalabilidad
                y buenas prácticas de desarrollo.
              </p>
  
              <p className="flex items-center gap-2">
                <FaProjectDiagram className={`text-indigo-600 ${iconClass}`} />
                Familiarizado con metodologías ágiles como Scrum y uso de herramientas como Git, AWS y Azure.
              </p>
  
              <p className="flex items-center gap-2">
                <FaLanguage className={`text-red-500 ${iconClass}`} />
                Idiomas: Español (nativo), Inglés (intermedio).
              </p>
  
              <p className="flex items-center gap-2">
                <FaStar className={`text-yellow-500 ${iconClass}`} />
                Intereses: Inteligencia Artificial, DevOps, Arquitectura de Software y desarrollo con impacto social.
              </p>
            </div>
          </div>
  
          <div className="order-1 md:order-2 md:col-span-1 p-6">
            <h1 className="text-3xl font-semibold mb-4">Sobre mí</h1>
            <p className="mb-4">
              Soy una persona curiosa, dedicada y con pasión por la tecnología. Me motiva aprender
              continuamente y enfrentar nuevos desafíos técnicos y creativos.
            </p>
            <p className="mb-4">
              Disfruto trabajar en equipo, aportar soluciones efectivas y colaborar en entornos donde se
              valora la mejora continua. Me considero organizado, proactivo y con buena capacidad de
              adaptación.
            </p>
            <p className="mb-4">
              En mi tiempo libre me gusta explorar nuevas herramientas de desarrollo, participar en
              comunidades tecnológicas, leer sobre innovación y disfrutar de actividades al aire libre.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  