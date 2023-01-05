import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Agenda from "./pages/Agenda";
import CreateAcount from "./pages/CreateAcount";
import EditarCita from "./pages/EditarCita";
import Buscador from "./pages/Buscador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<CreateAcount/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/citas" element={<Buscador/>}/>
        <Route path="/cita/:id" element={<EditarCita/>}/>
        <Route path="/historial/:id" element={<History/>}/>
        <Route path="/agendar" element={<Agenda/>}/>
        <Route path="*" element={<div>404 not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
