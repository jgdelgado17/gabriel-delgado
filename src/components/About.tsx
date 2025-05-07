import {
    FaMapMarkerAlt,
    FaUniversity,
    FaBriefcase,
    FaLanguage,
    FaLightbulb,
    FaProjectDiagram,
    FaStar
} from "react-icons/fa";

const About = () => {
    return (
        <section className="min-h-screen p-8 bg-gradient-to-b from-gray-900 text-white flex items-center pt-36">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div
                    className="order-2 md:order-1 md:col-span-1 max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-3 text-gray-800">
                        <h3 className="text-2xl font-semibold">Información Personal</h3>
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-600"/> Vivo actualmente en Pamplona, Colombia.
                        </p>
                        <p className="flex items-center gap-2">
                            <FaUniversity className="text-green-700"/> Egresado como Ingeniero de Sistemas de la
                            Universidad de Pamplona.
                        </p>
                        <p className="flex items-center gap-2">
                            <FaBriefcase className="text-purple-600 text-2xl"/>
                            Experiencia en desarrollo backend y frontend en proyectos académicos y profesionales,
                            participando en equipos multidisciplinarios.
                        </p>

                        <p className="flex items-center gap-2">
                            <FaLightbulb className="text-yellow-500 text-2xl"/>
                            He diseñado y mantenido aplicaciones empresariales con enfoque en rendimiento, escalabilidad
                            y buenas prácticas de desarrollo.
                        </p>

                        <p className="flex items-center gap-2">
                            <FaProjectDiagram className="text-indigo-600 text-xl"/>
                            Familiarizado con metodologías ágiles como Scrum y uso de herramientas como Git, AWS y
                            Azure.
                        </p>

                        <p className="flex items-center gap-2">
                            <FaLanguage className="text-red-500 text-xl"/>
                            Idiomas: Español (nativo), Inglés (intermedio).
                        </p>

                        <p className="flex items-center gap-2">
                            <FaStar className="text-yellow-500 text-2xl"/>
                            Intereses: Inteligencia Artificial, DevOps, Arquitectura de Software y desarrollo con
                            impacto social.
                        </p>
                    </div>
                </div>

                <div className="order-1 md:order-2 md:col-span-1 text-black">
                    <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
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
