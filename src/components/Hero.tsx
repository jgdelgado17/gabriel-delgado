import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaJava, FaCode, FaDatabase, FaCog, FaReact } from "react-icons/fa";
import { SiSpring, SiReactos } from "react-icons/si";

const Hero = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}${process.env.REACT_APP_HERO_BG_URL}`;

    return (
        <section
            className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white bg-gradient-to-b from-gray-600 flex items-center justify-between px-4 pt-20 bg-right bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
            <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/20 z-0"></div>

            <div className="relative z-10 w-full md:w-1/2 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Jesus Gabriel Delgado Leal</h1>
                <p className="text-xl md:text-2xl mb-2">Ingeniero de Sistemas</p>
                <p className="text-xl md:text-2xl mb-6">Desarrollador Backend</p>

                {/* Íconos de stack */}
                <div className="flex justify-center gap-6 mt-6 text-3xl text-gray-800 dark:text-white">
                    <FaCode title="Código" />
                    <FaJava title="Java" className="text-orange-600" />
                    <SiSpring title="Spring Boot" className="text-green-700" />
                    <SiReactos title="WebFlux" className="text-green-500" />
                    <FaDatabase title="Bases de datos" className="text-purple-600" />
                    <FaReact title="React JS" className="text-blue-500" />
                    <FaCog title="Arquitectura" className="text-gray-500 dark:text-gray-300" />
                </div>

                {/* Botón de descarga */}
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href={`${process.env.PUBLIC_URL}${process.env.REACT_APP_CV_URL}`}
                        className="bg-blue-800 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                        download
                    >
                        <IoCloudDownloadSharp className="text-xl" />
                        <span className="text-base">Descargar CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
