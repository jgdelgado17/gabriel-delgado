import { FaCode, FaUsers, FaBug, FaGitAlt, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

const skills = {
    Técnicas: [
        { label: "Código limpio", icon: <FaCode /> },
        { label: "Pruebas unitarias", icon: <FaBug /> },
        { label: "Manejo de Git y GitHub", icon: <FaGitAlt /> },
    ],
    Blandas: [
        { label: "Resolución de problemas", icon: <FaLightbulb /> },
        { label: "Trabajo en equipo", icon: <FaUsers /> },
        { label: "Metodologías ágiles (Scrum)", icon: <FaProjectDiagram /> },
    ],
};

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-16 pt-40 bg-white dark:bg-gray-900 text-black dark:text-white bg-gradient-to-b from-gray-600 text-center">
            <h2 className="text-3xl font-bold mb-10">Habilidades</h2>

            <div className="max-w-5xl mx-auto space-y-12">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {items.map((skill, idx) => (
                                <div
                                    key={skill.label}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md border hover:scale-105 transition-transform"
                                >
                                    <span className="text-lg text-blue-600">{skill.icon}</span>
                                    <span>{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
