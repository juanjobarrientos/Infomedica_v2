import Home from "../components/Home";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiData from "../helpers/APIdata";

function Agenda() {
  
  const navigate = useNavigate()

  const [agenda, setAgenda] = useState({
    idEspecialidad: "637978dd4567ec0ed4af021d",
    idMedico: "",
    idSucursal: "637a185db0eef503c00b73be",
    nombrePaciente: "",
    fechaCita: "",
    horaCita: "",
    tipoCita: "CONTROL",
    numeroConsultorio: "",
    estadoCita: "ACTIVO",
  });

  const change = (e) => {
    setAgenda({
      ...agenda,
      [e.target.name]: e.target.value,
    });
    console.log(apiData.getIdUser())
  };



  const submit = (e) => {
    const idMed = apiData.getIdUser()
    setAgenda({
      ...agenda,
      idMedico : idMed
    })
    e.preventDefault();
    agendarCita();
  };

  useEffect(() => {
    document.querySelector("#nombrePaciente").focus();
  }, []);

  const agendarCita = () => {
    const urlToFetch = apiData.backendUrl + "historiales";
    fetch(urlToFetch, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({nombrePaciente: agenda.nombrePaciente})
      
    })
      .then((res) => res.json())
      .then((data) => {
        const urlAgenda = apiData.backendUrl + "citas";
        const body = {
          ...agenda,
          idHistorial: data.body._id
        };
        fetch(urlAgenda, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then(()=>{
          navigate("/dashboard")
        });
      });
  };
  return (
    <main className="h-screen bg-gray-100">
      <Home />
      <section className="container flex flex-wrap justify-center">
        <div className="container flex flex-wrap items-center justify-center">
          <form onSubmit={submit} className="bg-white mx-auto my-8 p-6 shadow-md rounded-md w-96">
            <h3 className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 mb-5">Agendar una cita</h3>
            <div>
              <input
                type="text"
                id="nombrePaciente"
                name="nombrePaciente"
                placeholder="Nombre del paciente"
                onChange={change}
                required
                className="bg-white w-max border border-gray-400 rounded px-8 mb-2 p-1 shadow-md"
              />
            </div>
            <div>
              <label htmlFor="fechaCita" className="font-semibold">Feha de la cita:</label>
              <input
                type="date"
                id="fechaCita"
                name="fechaCita"
                onChange={change}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
              />
            </div>
            <div>
              <label htmlFor="horaCita" className="font-semibold">Hora de la cita:</label>
              <input
                type="time"
                id="horaCita"
                name="horaCita"
                onChange={change}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
              />
            </div>
            <div>
              <select name="tipoCita" onChange={change} required className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4">
                <option value="revision">Revision</option>
                <option value="cita general">Cita general</option>
                <option value="control">Control</option>
              </select>
              <input
                type="number"
                placeholder="Numero de consultorio"
                name="numeroConsultorio"
                onChange={change}
                className="bg-white w-max border border-gray-400 rounded px-8 mb-4 p-1 shadow-md"
              />
            </div>
            <div>
              <button type="submit" className="bg-blue-400 px-2 py-1 font-semibold text-white rounded-md hover:bg-blue-500">Agendar Cita</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Agenda;
