import Home from "../components/Home";
import CitasBox from "../components/CitasBox";
import apiData from "../helpers/APIdata";
import { useState, useEffect } from "react";

function Dashboard() {
  const [citas, setCitas] = useState([]);

  const getCitas = () => {
    const url = apiData.backendUrl + "citas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

          const idMed = apiData.getIdUser()
          data.forEach(element => {
            if (element.idMedico === idMed) {
              setCitas([
                ...citas,
                element
              ])
            }
          });
      });
  };

  useEffect(() => {
    getCitas();
  }, []);

  return (
    <main className="bg-gray-100 h-screen">
      <Home />
      <section>
        <div className="container flex flex-wrap">
          {citas.map((element) => (
            <CitasBox
              key={element._id}
              name={element.nombrePaciente}
              date={element.fechaCita}
              time={element.horaCita}
              consultorio={element.numeroConsultorio}
              idHistorial={element.idHistorial}
              idCita= {element._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
