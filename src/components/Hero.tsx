import { IoCloudDownloadSharp } from "react-icons/io5";

const Hero = () => {
  return (
      <section className="min-h-screen bg-gradient-to-b from-gray-900 text-white flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jesus Gabriel Delgado Leal</h1>
          <p className="text-xl md:text-2xl mb-2">Ingeniero de Sistemas</p>
          <p className="text-xl md:text-2xl mb-6">Desarrollador Full Stack</p>

          <div className="mt-10 flex justify-center">
            <a
                href={`${process.env.PUBLIC_URL}${process.env.REACT_APP_CV_URL}`}
                className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
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
