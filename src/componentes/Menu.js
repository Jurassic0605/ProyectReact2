import React from "react";
import { Link } from "react-router-dom";
import './menu.css';

export default class Menu extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg shadow fixed-top navbar-light bg-light">
                    <h3>Página</h3>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link mx-4 colorLink text-decoration-none text-primary"> Inicio </Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/personajesMH" className="mx-4 nav-link colorLink text-decoration-none text-primary"> Personajes MH </Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/personajesPK" className="mx-4 nav-link colorLink text-decoration-none text-primary"> Personajes PK </Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/personajesSC" className="mx-4 nav-link colorLink text-decoration-none text-primary"> Personajes SC </Link> 
                        </li>
                        <li class="nav-item active">                
                            <Link to="/contacto" className="mx-4 nav-link colorLink text-decoration-none text-primary"> Contacto </Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        );
    }
}