import NavLogout from "../components/NavLogout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiData from "../helpers/APIdata";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    usuarioAcceso: "",
    claveAcceso: "",
  });

  const change = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  const iniciarSesion = async () => {
    const urlToFetch = apiData.backendUrl + "usuarios/login";
    //const auth = apiData.loginConfirmation();
    let response;
    fetch(urlToFetch, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
        if (response.ok === "NO_EXISTE") {
          alert("Usuario no existe");
        } else if (response.ok === "CLAVE_INCORRECTA") {
          alert("Clave incorrecta");
        } else {
          //eliminar datos del localstorage
          localStorage.removeItem("token");
          localStorage.removeItem("iduser");
          localStorage.removeItem("username");

          //obtener datos a almacenar
          const token = response.tokenJwt;
          const idUsuario = response._id;
          const nombreUsuario = response.nombre;
          console.log({ token, idUsuario, nombreUsuario });

          // //guardar en el localstorage
          localStorage.setItem("token", token);
          localStorage.setItem("iduser", idUsuario);
          localStorage.setItem("username", nombreUsuario);

          //redireccionar al menu principal o al dashboard
          navigate("/dashboard");
        }
      });
  };

  return (
    <main className="bg-gray-100 h-screen">
      <NavLogout />
      <section className="container flex flex-wrap justify-center py-10">
        <div>
          <form
            onSubmit={submit}
            className="bg-white mx-auto my-8 p-6 py-9 shadow-md rounded-xl w-96 h-max"
          >
            <h3 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 mb-2">
              Iniciar Sesion
            </h3>
            <hr className="mb-8" />
            <div>
              <input
                type="text"
                placeholder="Usuario de infomedicas"
                name="usuarioAcceso"
                onChange={change}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Contraseña"
                name="claveAcceso"
                onChange={change}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-400 w-full font-semibold text-white text-xl rounded-md p-1 hover:bg-green-500 shadow-md"
              >
                Iniciar sesion
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
