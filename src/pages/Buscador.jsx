import Home from "../components/Home"
import {useState} from "react"
import apiData from "../helpers/APIdata"
import CitasBox from "../components/CitasBox"

function Buscador() {
  const [citas, setCitas] = useState([])

  const getCitas = ()=>{
    
    const urlToGet = apiData.backendUrl + "citas"
    fetch(urlToGet,{
      headers: {'Content-Type': 'application/json'},
      method:"GET"
    })
      .then(res=>res.json())
      .then(data=>{
        
        //  setCitas([])
        const filterValue = document.querySelector("#fecha").value
        const idMed = apiData.getIdUser()
        data.forEach(element => {
          if(element.fechaCita === filterValue && element.idMedico === idMed){
            setCitas([
              ...citas,
              element
            ])
          }
        });
      })
  }
    return (
    <main className="bg-gray-100 h-screen">
        <Home/>
        <section className="container flex flex-wrap justify-center">
            <form className="container flex flex-wrap justify-center my-5">
                <label htmlFor="fecha" className="font-semibold text-l">Filtrar citas por fecha</label>
                <input type="date" id="fecha" onChange={getCitas} className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4 ml-8" />
            </form>
        </section>
        <section className="container flex flex-wrap ">
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
        </section>
    </main>
  )
}

export default Buscador