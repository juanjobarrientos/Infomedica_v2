import { Link } from "react-router-dom";
import logo from "./../icons/logo2.svg";
import dashboard from "./../icons/dashboard.svg";
import agendar from "./../icons/citas/send.svg"
import lista from "./../icons/citas/list.svg"

function Home() {
  return (
    <>
      <header className="p-3 border-gray-200 bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="Logo infomedica" className="w-10 px-1" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              Infomedica
            </span>
          </div>
          <Link
            to="#"
            className="text-white font-semibold rounded px-1 py-1 hover:bg-gray-700"
          >
            Perfil
          </Link>
          <Link
            to="#"
            className="text-white font-semibold rounded px-2 py-1 hover:bg-red-700 bg-red-600"
          >
            Cerrar sesion
          </Link>
        </div>
      </header>
      <section className="container flex justify-center ">
        <div className="mx-5 my-3 h-12 rounded-full container flex justify-evenly items-center bg-gray-200 shadow-md ml-32">
          <div className="flex items-center">
            <img src={dashboard} alt="Logo infomedica" className="w-8 px-1" />
            <Link
              to="/dashboard"
              class="self-center text-xl font-semibold whitespace-nowrap text-gray-900"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <img src={agendar} alt="Logo infomedica" className="w-8 px-1" />
            <Link
              to="/agendar"
              class="self-center text-xl font-semibold whitespace-nowrap text-gray-900"
            >
              Agendar citas
            </Link>
          </div>
          <div className="flex items-center">
            <img src={lista} alt="Logo infomedica" className="w-8 px-1" />
            <Link
              to="/citas"
              class="self-center text-xl font-semibold whitespace-nowrap text-gray-900"
            >
              Citas agendadas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
