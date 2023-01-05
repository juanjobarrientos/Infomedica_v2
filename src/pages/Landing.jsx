import { Link } from "react-router-dom";
import NavLogout from "../components/NavLogout";
import ser1 from "../icons/ser1.png";
import order from "../icons/landing/order.svg";
import dates from "../icons/landing/dates.svg";
import historial from "../icons/landing/historial2.svg";

function Landing() {
  return (
    <main className="bg-gray-100 h-full">
      <NavLogout />
      <section className="bg-white p-9 m-7 ml-24 container flex flex-wrap justify-between rounded-lg shadow-md">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-7">
            Logra organizar tus citas facilmente
          </h1>
          <h4 className="self-center text-xl font-semibold text-gray-900 mb-4">
            Agenda facilmente las citas con este asistente virtual creado para
            los medicos
          </h4>
          <hr />
          <div className="container flex flex-col justify-center mt-8">
            <Link
              to="/registro"
              className="bg-green-400 w-max font-semibold text-white text-xl rounded-md p-2 hover:bg-green-500 shadow-md mb-3"
            >
              Empieza por aqui
            </Link>
            <p className="font-light">
              O si ya tienes una cuenta{" "}
              <Link
                to="/login"
                className="text-blue-400 font-semibold underline ml-2 hover:text-blue-500"
              >
                inicia sesion
              </Link>
            </p>
          </div>
        </div>
        <div className="mr-24">
          <img src={ser1} alt="hero shot" srcset="" />
        </div>
      </section>
      <section className=" w-full bg-green-400">
        <div className="container flex flex-col justify-center items-center ml-24">
          <h2 className="text-3xl font-bold mb-5 mt-8 text-white ">
            ¿Que es infoMedicas?
          </h2>
          <p className="self-center text-xl font-semibold text-gray-900 mb-4">
            Descubre esta herramienta que facilitara tu trabajo como medico
          </p>
        </div>
        <div className="container flex flex-wrap justify-evenly ml-20 mt-3">
          <div className="w-72 bg-white m-3 container flex flex-col p-3 rounded-lg shadow-md hover:shadow-xl">
            <img
              src={order}
              alt="beneficio1"
              srcset=""
              className="w-16 ml-24"
            />
            <h4 className="self-center text-xl font-semibold text-gray-900 mb-2">
              Mantente organizado
            </h4>{" "}
            <hr />
            <p className="self-center ml-5 text-gray-900 mt-3 mb-4">
              Deja el caos de las citas en un solo lugar, ordenado y simple de
              manejar
            </p>
          </div>
          <div className="w-72 bg-white m-3 container flex flex-col p-3 rounded-lg shadow-md hover:shadow-xl">
            <img src={dates} alt="beneficio2" className="w-16 ml-24" />
            <h4 className="self-center text-center text-xl font-semibold text-gray-900 mb-2">
              Agenda y elimina citas facilmente
            </h4>{" "}
            <hr />
            <p className="self-center ml-5 text-gray-900 mt-3 mb-4">
              Organiza tus horarios, agrega y cancela las citas rapidamente
            </p>
          </div>
          <div className="w-72 bg-white m-3 container flex flex-col p-3 rounded-lg shadow-md hover:shadow-xl">
            <img src={historial} alt="beneficio3" className="w-16 ml-24" />
            <h4 className="self-center text-center text-xl font-semibold text-gray-900 mb-2">
              Administra las historias clinicas
            </h4>{" "}
            <hr />
            <p className="self-center ml-5 text-gray-900 mt-3 mb-4">
              Gestiona rapidamente los medicamentos e historias clinicas de tus
              pacientes
            </p>
          </div>
          
        </div>
        <div className="flex justify-center">
          <Link
            to="/registro"
            className="bg-blue-400 text-white text-xl p-3 rounded-md font-semibold hover:bg-blue-500 mb-12 mt-3"
          >
            ¡Crear Tu Cuenta Ahora!
          </Link>
          </div>
      </section>
      <section className="bg-white p-16 m-7 ml-24 container flex flex-wrap justify-between rounded-lg shadow-md">
        <div className="container flex flex-col items-center ">
          <h4 className="text-3xl font-bold mb-5 mt-2 text-white bg-blue-400 p-3 rounded-lg ">¿Que estas esperando para entrar a tu asistente virtual?</h4>
          <p className="text-center text-xl font-semibold text-gray-900 mb-4">
            En infoMedicas te estamos esperando para organizar tu consultorio y
            disfrutes mucho mas ayudando a los demas
          </p>
          <div className="mt-8">
          <Link to="/registro" className="text-blue-400 mr-8 text-xl font-semibold border p-3 rounded-md border-blue-400 hover:border-blue-500 hover:text-blue-500">Empieza por aqui</Link>
        </div>
        </div>        
      </section>
      <footer className="p-3 bg-gray-800 flex justify-center w-full">
        <p className="text-white">
          Infomedicas © Todos los derechos reservados - {" "}
          <a className="underline" href="https://github.com/juan192001-jg/infomedicas_V2">Github</a>
        </p>
      </footer>
    </main>
  );
}

export default Landing;
