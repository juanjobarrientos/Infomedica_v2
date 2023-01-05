import Home from "../components/Home";
import { useEffect, useState } from "react";
import apiData from "../helpers/APIdata";
import { useParams, useNavigate } from "react-router-dom";

function History() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [history, setHistory] = useState({
    nombrePaciente: "",
    medicamentos: "",
    pesoPaciente: "",
    alturaPaciente: "",
    ocupacionPaciente: "",
  });

  useEffect(() => {
    const urlToFetch = apiData.backendUrl + "historiales/" + id;
    fetch(urlToFetch, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
      });
  }, [id]);

  const cancelData = () => {
    setHistory({
      nombrePaciente: "",
      medicamentos: "",
      pesoPaciente: "",
      alturaPaciente: "",
      ocupacionPaciente: "",
    });
  };
  const change = (e) => {
    setHistory({
      ...history,
      [e.target.name]: e.target.value,
    });
  };

  const update = (e) => {
    e.preventDefault();
    guardarHistorial();
  };

  const guardarHistorial = () => {
    const url = apiData.backendUrl + "historiales/" + id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(history),
    }).then(() => {
      navigate("/dashboard");
    });
  };
  return (
    <main className="bg-gray-100 h-full xl:h-screen">
      <Home />
      <section className="container flex flex-wrap justify-center">
        <div className="container flex flex-wrap items-center justify-center">
          <form
            onSubmit={update}
            className="bg-white mx-auto my-8 p-6 shadow-md rounded-md w-2/3"
          >
            <h3 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 mb-3">
              Historial de la cita
            </h3>{" "}
            <hr className="mb-3" />
            <div>
              <h4 className="self-center text-lg font-semibold whitespace-nowrap text-gray-900 mb-3">
                Informacion del paciente
              </h4>
              <div className="ml-4 mb-5">
                <span className=" text-gray-900 ">
                  Nombre: {history.nombrePaciente}
                </span>
              </div>
            </div>
            <div>
              <div>
                <textarea
                  placeholder="Motivo de consulta"
                  name="motivoConsulta"
                  onChange={change}
                  value={history.motivoConsulta || ""}
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                ></textarea>
              </div>
              <div>
                <textarea
                  placeholder="Antecedentes"
                  name="antecedentes"
                  onChange={change}
                  value={history.antecedentes || ""}
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                ></textarea>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Peso (Kg)"
                  name="pesoPaciente"
                  onChange={change}
                  value={history.pesoPaciente || ""}
                  className=" appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-1/3"
                />
                <input
                  type="number"
                  placeholder="Altura (cm)"
                  name="alturaPaciente"
                  onChange={change}
                  value={history.alturaPaciente || ""}
                  className="ml-10 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-1/2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ocupacion"
                  name="ocupacionPaciente"
                  onChange={change}
                  value={history.ocupacionPaciente || ""}
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Medicamentos recetados"
                  name="medicamentos"
                  onChange={change}
                  value={history.medicamentos || ""}
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 w-full"
                ></textarea>
              </div>
              <div className="container flex justify-center">
                <button type="submit" className="bg-blue-400 px-2 py-1 font-semibold text-white rounded-md hover:bg-blue-500">Guardar historial</button>
                <button
                  onClick={cancelData}
                  className="text-white font-semibold rounded px-2 py-1 hover:bg-red-700 bg-red-600 ml-4"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default History;
