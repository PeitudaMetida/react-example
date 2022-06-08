import {
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CadastroPage from "../pages/cadastroPage";
function VehicleRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<CadastroPage />}/>
    </Routes>
  )
}

export default VehicleRoutes
