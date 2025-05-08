import { IoCloudDownloadSharp } from "react-icons/io5";

const Hero = () => {
  const backgroundUrl = `${process.env.PUBLIC_URL}${process.env.REACT_APP_HERO_BG_URL}`;

  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-gray-900 text-white flex items-center justify-between px-4 pt-20 bg-right bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 w-full md:w-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jesus Gabriel Delgado Leal</h1>
        <p className="text-xl md:text-2xl mb-2">Ingeniero de Sistemas</p>
        <p className="text-xl md:text-2xl mb-6">Desarrollador Backend</p>

        <div className="mt-10 flex justify-center gap-4">
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
