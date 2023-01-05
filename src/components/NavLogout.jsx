import { Link } from "react-router-dom";
import logo from "./../icons/logo2.svg";

function NavLogout() {
  return (
    <header className="p-3  bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo infomedica" className="w-10 px-1" />
          <Link to="/" class="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-gray-200">
            Infomedica
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="text-blue-400 mr-8 font-semibold border p-2 rounded-md border-blue-400 hover:border-blue-500 hover:text-blue-500"
          >
            Iniciar sesion
          </Link>
          <Link
            to="/registro"
            className="bg-blue-400 text-white p-2 rounded-md font-semibold hover:bg-blue-500"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavLogout;
