import {
    FaBuilding,
    FaCalendarAlt,
    FaJava,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaDatabase,
    FaDocker,
    FaLinux,
    FaAws,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiPostgresql,
    SiOracle,
    SiJavascript,
    SiApachekafka,
    SiRabbitmq,
    SiNestjs,
    SiApachenifi
} from "react-icons/si";
import { JSX } from "react";

const experiences = [
    {
        company: "Universidad de Pamplona",
        role: "Analista de Desarrollo",
        period: "mar 2025 - Actualidad",
        description:
            "Desarrollo y mantenimiento de software académico y administrativo para diferentes instituciones de eduación superior.",
        technologies: ["Java", "HTML5", "CSS", "JavaScript", "PostgreSQL", "Oracle"],
    },
    {
        company: "Sofka Technologies",
        role: "Consultor de Desarrollo",
        period: "feb 2023 - ene 2024",
        description:
            "Desarrollo de servicios REST para clientes en fintech y retail. Microservicios y arquitectura hexagonal.",
        technologies: [
            "Java",
            "Spring Boot",
            "NestJS",
            "Kafka",
            "RabbitMQ",
            "Apache Nifi",
            "Docker",
            "AWS",
            "Bases de datos",
        ],
    },
    {
        company: "Universidad de Pamplona",
        role: "Analista de Bases de Datos (DBA)",
        period: "ago 2021 - ene 2023",
        description:
            "Mantenimiento y administración de bases de datos, optimización de SQL, y servidores Linux.",
        technologies: ["Oracle", "PostgreSQL", "SQL", "Linux"],
    },
    {
        company: "BeGo",
        role: "Desarrollador de Software",
        period: "ago 2019 - jul 2021",
        description:
            "Software para gestión de pedidos y ventas en restaurantes y almacenes.",
        technologies: ["Java", "Python", "HTML5", "CSS", "React", "PostgreSQL", "Oracle"],
    },
];

const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
        Java: "bg-orange-400 text-orange-800",
        Python: "bg-yellow-100 text-yellow-800",
        HTML5: "bg-red-100 text-red-800",
        CSS: "bg-blue-100 text-blue-800",
        JavaScript: "bg-yellow-200 text-yellow-900",
        React: "bg-cyan-100 text-cyan-800",
        Spring: "bg-green-100 text-green-800",
        "Spring Boot": "bg-green-100 text-green-800",
        PostgreSQL: "bg-indigo-100 text-indigo-800",
        Oracle: "bg-purple-100 text-purple-800",
        SQL: "bg-teal-100 text-teal-800",
        Linux: "bg-gray-200 text-gray-800",
        Kafka: "bg-fuchsia-100 text-fuchsia-800",
        RabbitMQ: "bg-orange-200 text-orange-900",
        AWS: "bg-amber-100 text-amber-800",
        Docker: "bg-blue-200 text-blue-900",
        NestJS: "bg-pink-100 text-pink-800",
        "Apache Nifi": "bg-rose-100 text-purple-800",
        "Bases de datos": "bg-emerald-100 text-emerald-800",
    };

    return colors[tech] || "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100";
};

const getTechIcon = (tech: string) => {
    const icons: { [key: string]: JSX.Element } = {
        Java: <FaJava />,
        Python: <FaPython />,
        HTML5: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        JavaScript: <SiJavascript />,
        React: <FaReact />,
        "Spring Boot": <SiSpringboot />,
        PostgreSQL: <SiPostgresql />,
        Oracle: <SiOracle />,
        SQL: <FaDatabase />,
        Linux: <FaLinux />,
        Kafka: <SiApachekafka />,
        RabbitMQ: <SiRabbitmq />,
        AWS: <FaAws />,
        Docker: <FaDocker />,
        NestJS: <SiNestjs />,
        "Apache Nifi": <SiApachenifi />,
        "Bases de datos": <FaDatabase />,
    };

    return icons[tech] || null;
};

const Experience = () => {
    return (
        <section className="px-4 py-12 bg-gradient-to-b from-gray-600 text-white pt-40">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
                    Experiencia Laboral
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                                    <FaBuilding className="text-gray-400 dark:text-gray-300" />
                                    {exp.company}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2">
                                    <FaCalendarAlt className="text-gray-400" /> {exp.period}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`text-sm font-medium px-3 py-1 rounded-full inline-flex items-center gap-1 ${getTechColor(
                                                tech
                                            )}`}
                                        >
                                            {getTechIcon(tech)}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
