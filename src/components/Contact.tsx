import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {PiMicrosoftOutlookLogoFill} from "react-icons/pi";
import {SiGmail} from "react-icons/si";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "jesus29", // Reemplaza con tu Service ID
                "template_d459jgr", // Reemplaza con tu Template ID
                formRef.current,
                "B6a2SbR_6_ThwpKAf" // Reemplaza con tu Public Key
            )
            .then(
                () => {
                    setSent(true);
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("Error al enviar el correo:", error);
                }
            );
    };

    return (
        <section className="p-8 bg-gradient-to-b from-gray-600 text-white pt-40">
            <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-black underline text-center">Puedes escribirme a:</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 mb-4">
                    <div className="flex items-center gap-3">
                        <PiMicrosoftOutlookLogoFill className="text-blue-600 text-xl"/>
                        <span className="text-gray-800">jegadele@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <SiGmail className="text-red-600 text-xl"/>
                        <span className="text-gray-800">jegadele@gmail.com</span>
                    </div>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        required
                        className="w-full p-2 rounded border border-gray-300 text-black"
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Asunto"
                        required
                        className="w-full p-2 rounded border border-gray-300 text-black"
                    />
                    <input
                        type="hidden"
                        name="email"
                        value="jegadele@gmail.com"
                        placeholder="Mi correo aquí,  ej: jegadele@hotmail"
                        required
                        className="w-full p-2 rounded border border-gray-300 text-black"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje y tus datos para contactarme contigo"
                        rows={4}
                        required
                        className="w-full p-2 rounded border border-gray-300 text-black"
                    ></textarea>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Enviar
                        </button>
                    </div>
                    {sent && <p className="text-green-600 mt-2">Mensaje enviado correctamente 🎉</p>}
                </form>
            </div>

            {/* Redes sociales en rectángulos ovalados */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                    <FaGithub className="text-gray-800 text-xl"/>
                    <a
                        href="https://github.com/jgdelgado17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        github.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-700 text-xl"/>
                    <a
                        href="https://www.linkedin.com/in/jesus-gabriel-delgado-leal-ab958a1a1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        linkedin.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-500 text-xl"/>
                    <a
                        href="https://api.whatsapp.com/send?phone=573102203726"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        +57 3102203726
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
