import NavLogout from "../components/NavLogout";
import apiData from "../helpers/APIdata";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAcount() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    corre: "",
    Tipo_usuario: "Medico",
    telefono: 0,
    direccion: "",
    tipoDocumento: "CC",
    numeroDocumento: 0,
    edad: 0,
    fechaNacimiento: "",
    usuarioAcesso: "",
    claveAcceso: "",
    rol: "Medico",
    estados: "ACTIVO",
  });

  const change = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    crearUsuario();
  };

  const crearUsuario = () => {
    const urlToAdd = apiData.backendUrl + "usuarios/";
    fetch(urlToAdd, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok === "NO") {
          alert(data.msg);
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <main className="bg-gray-100 h-full">
      <NavLogout />
      <section className="container flex flex-wrap justify-center py-10">
        <div className="container flex flex-wrap items-center justify-center">
          <form
            onSubmit={submit}
            className="bg-white mx-auto my-8 p-6 py-9 shadow-md rounded-xl w-1/3 h-max"
          >
            <div>
              <h3 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 mb-2">
                Datos personales
              </h3>
              <hr className="mb-8" />
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electronico"
                  name="corre"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
                <input
                  type="number"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Direccion"
                  name="direccion"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
              </div>
              <div>
                <select className="w-1/3 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 ">
                  <option value="TI">Tarjeta de identidad</option>
                  <option value="CC">Cedula de ciudadania</option>
                  <option value="otro">Otro documento de identidad</option>
                </select>
                <input
                  type="number"
                  placeholder="Documento de identidad"
                  name="numeroDocumento"
                  onChange={change}
                  required
                  className="ml-2 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 "
                />
              </div>
              <div>
                <label htmlFor="fecha" className="font-semibold">
                  Fecha de nacimiento{" "}
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fechaNacimiento"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                />
                <input
                  type="number"
                  placeholder="Edad"
                  name="edad"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                />
              </div>
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Datos de acceso a InfoMedica
              </h3>
              <div>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="usuarioAcesso"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contraseña"
                  name="claveAcceso"
                  onChange={change}
                  required
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-400 w-full font-semibold text-white text-xl rounded-md p-1 hover:bg-green-500 shadow-md"
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CreateAcount;
