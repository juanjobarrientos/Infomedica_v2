import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import apiData from "../helpers/APIdata";

function EditarCita() {
  const { id } = useParams();
  const [cita, setCita] = useState({
    nombrePaciente: "",
    fechaCita: "",
    horaCita: "",
    tipoCita: "CONTROL",
    numeroConsultorio: "",
    estadoCita: "ACTIVO",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const urlToGet = apiData.backendUrl + "citas/" + id;
    fetch(urlToGet, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCita(data);
      });
  }, [id]);

  const change = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    actualizarCita();
  };

  const actualizarCita = () => {
    const urlToEdit = apiData.backendUrl + "citas/" + id;
    fetch(urlToEdit, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cita),
    }).then(() => {
      navigate("/dashboard");
    });
  };

  const cancelarCita = () => {
    const idHistorial = cita.idHistorial;
    const urlToDelete = apiData.backendUrl + "historiales/" + idHistorial;
    fetch(urlToDelete, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      const urlCita = apiData.backendUrl + "citas/" + id;
      fetch(urlCita, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        navigate("/dashboard");
      });
    });
  };

  return (
    <main className="h-screen bg-gray-100">
      <Home />
      <section className="container flex flex-wrap justify-center">
        <div className="container flex flex-wrap items-center justify-center">
          <form onSubmit={submit} className="bg-white mx-auto my-8 p-6 shadow-md rounded-md w-96">
            <h3 className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 mb-5">Editar una cita</h3>
            <div>
              <input
                type="text"
                id="nombrePaciente"
                name="nombrePaciente"
                placeholder="Nombre del paciente"
                value={cita.nombrePaciente || ""}
                onChange={change}
                required
                className="bg-white w-max border border-gray-400 rounded px-8 mb-2 p-1 shadow-md"

              />
            </div>
            <div>
              <label htmlFor="fechaCita" className="font-semibold">Feha de la cita</label>
              <input
                type="date"
                id="fechaCita"
                name="fechaCita"
                value={cita.fechaCita || ""}
                onChange={change}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
              />
            </div>
            <div>
              <label htmlFor="horaCita" className="font-semibold">Hora de la cita</label>
              <input
                type="time"
                id="horaCita"
                name="horaCita"
                value={cita.horaCita || ""}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                onChange={change}
                required
              />
            </div>
            <div>
              <select
                name="tipoCita"
                value={cita.tipoCita || ""}
                onChange={change}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
              >
                <option value="revision">Revision</option>
                <option value="cita general">Cita general</option>
                <option value="control">Control</option>
              </select>
              <input
                type="number"
                placeholder="Numero de consultorio"
                name="numeroConsultorio"
                value={cita.numeroConsultorio || ""}
                onChange={change}
                className="bg-white w-max border border-gray-400 rounded px-8 mb-4 p-1 shadow-md"

              />
            </div>
            <div className="container flex justify-center">
              <button type="submit" className="bg-blue-400 px-2 py-1 text-lg font-semibold text-white rounded-md hover:bg-blue-500">Editar cita</button>
              <button onClick={cancelarCita}  className="text-white font-semibold rounded px-2 py-1 hover:bg-red-700 bg-red-600 ml-4">Borrar cita</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default EditarCita;
