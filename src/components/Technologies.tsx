import {
    FaAngular,
    FaDatabase,
    FaDocker,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiApachekafka,
    SiApachenifi,
    SiHtml5,
    SiJavascript,
    SiNestjs,
    SiPodman,
    SiRabbitmq,
    SiSpringboot,
    SiTypescript,
    SiReactos,
    SiAmazondynamodb
} from "react-icons/si";

import { LuFileJson2 } from "react-icons/lu";

const technologies = [
    { icon: FaJava, title: "Java", color: "text-[#f89820]" },
    { icon: SiSpringboot, title: "Spring Boot", color: "text-green-700" },
    { icon: FaReact, title: "React JS", color: "text-blue-500" },
    { icon: FaAngular, title: "Angular", color: "text-red-600" },
    { icon: SiNestjs, title: "NestJS", color: "text-red-500" },
    { icon: SiTypescript, title: "TypeScript", color: "text-blue-700" },
    { icon: SiJavascript, title: "JavaScript", color: "text-yellow-500" },
    { icon: SiHtml5, title: "HTML", color: "text-orange-600" },
    { icon: FaDocker, title: "Docker", color: "text-blue-600" },
    { icon: FaPython, title: "Python", color: "text-yellow-400" },
    { icon: SiRabbitmq, title: "RabbitMQ", color: "text-orange-500" },
    { icon: SiApachekafka, title: "Kafka", color: "text-black" },
    { icon: SiApachenifi, title: "Apache Nifi", color: "text-purple-700" },
    { icon: FaDatabase, title: "Bases de Datos Relacionales", color: "text-gray-800" },
    { icon: FaNodeJs, title: "Node.js", color: "text-green-600" },
    { icon: SiPodman, title: "Podman", color: "text-purple-500" },
    { icon: SiReactos, title: "WebFlux", color: "text-green-500" },
    { icon: LuFileJson2, title: "Bases de Datos No Relacionales", color: "text-gray-600" },
    { icon: SiAmazondynamodb, title: "DynamoDB", color: "text-yellow-600" },
];

const Technologies = () => {
    return (
        <section className="min-h-screen p-8 bg-gradient-to-b from-gray-600 text-white pt-40">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Tecnologías</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
                    {technologies.map(({ icon: Icon, title, color }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`text-5xl ${color} transition-transform hover:scale-110`}>
                                <Icon />
                            </div>
                            <span className="mt-2 text-sm font-medium text-black">{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
