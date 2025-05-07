import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";

const Contact = () => {    
    return (
        <section className="p-8 bg-gradient-to-b from-gray-900 text-white pt-40">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Contacto</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <FaGithub className="text-gray-800 text-xl" />
                                <a
                                    href="https://github.com/jgdelgado17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    github.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaLinkedin className="text-blue-700 text-xl" />
                                <a
                                    href="https://www.linkedin.com/in/jesus-gabriel-delgado-leal-ab958a1a1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    linkedin.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaFacebook className="text-blue-600 text-xl" />
                                <a
                                    href="https://www.facebook.com/profile.php?id=100002960101066"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    facebook.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Contacto Directo</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <PiMicrosoftOutlookLogoFill className="text-blue-600 text-xl" />
                                <span className="text-gray-800">correo jegadele@hotmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <SiGmail className="text-red-600 text-xl" />
                                <span className="text-gray-800">correo jegadele@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-green-500 text-xl" />
                                <a
                                    href="https://api.whatsapp.com/send?phone=573102203726&text=Hola,%20me%20gustar%C3%ADa%20trabajar%20contigo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    +57 3102203726
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
