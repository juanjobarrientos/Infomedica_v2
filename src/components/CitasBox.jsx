import { Link } from "react-router-dom";
import check from "../icons/citas/check.svg";

function CitasBox(props) {
  return (
    <div className="bg-white rounded mx-5 my-5 w-max p-4 shadow-md">
      <div className="container flex flex-wrap bg-gray-200 p-2 rounded-md shadow-md">
        <h3 className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 pl-2">
          {props.name}
        </h3>
        <p className="mx-7 my-2 self-center text-l font-light whitespace-nowrap">
          {props.date}
        </p>
        <div className="mx-8 w-7 my-1">
          <button className="bg-green-400 rounded-full hover:bg-green-500">
            <img src={check} className="w-10 px-1 my-1" alt="Check" />
          </button>
        </div>
      </div>
      <div className="my-4 mx-4">
        <h3 className=" text-l font-semibold">Informacion de la Cita :</h3>
        <p className="mx-7 my-2 text-l font-light ">
          Hora de la cita : {props.time}
        </p>
        <p className="mx-7 my-2 text-l font-light ">
          Numero de consultorio : {props.consultorio}
        </p>
        <Link
          to={"/historial/" + props.idHistorial}
          className="bg-blue-400 py-1 px-2 text-white font-semibold rounded-lg my-3"
        >
          Historia medica
        </Link>
      </div>
      <div className="container flex flex-wrap justify-center">
        <Link to={"/cita/" + props.idCita} className="font-semibold underline hover:bg-gray-100 p-2 rounded">Editar Informacion</Link>
      </div>
    </div>
  );
}

export default CitasBox;
