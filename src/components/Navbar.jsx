import {Link} from "react-router-dom"
import "./NavbarStyle.css"
function Navbar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Projeto Futebol</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Confirmar" className="nav-link">Confirmar Presença</Link>
            <Link to="/Grupos" className="nav-link">Criar Grupos</Link>
            <Link to="/Futebol" className="nav-link">Criar Futebol</Link>
            <Link to="/Jogadores" className="nav-link">Lista de Jogadores</Link>
        </div>
    </nav>
}

export default Navbar