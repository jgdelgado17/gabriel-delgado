import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {FaGithub, FaLinkedin} from "react-icons/fa";

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
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 rounded-lg p-[6px] z-0 animate-ping">
                    <div className="w-full h-full rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 filter blur-lg opacity-80"></div>
                </div>
                <div className="relative bg-gray-100 p-6 rounded-lg shadow-md z-10">
                    <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
                        Contactame
                    </h2>

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
