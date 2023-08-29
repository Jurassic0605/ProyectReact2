import React from "react";
import { Link } from "react-router-dom";
import './menu.css';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center align-self-center bg-success fixed-top py-1 px-4">
                    <h2> Página </h2>
                    <Link to="/" className="mx-4 colorLink text-decoration-none text-primary"> Inicio </Link>
                    <Link to="/personajesMH" className="mx-4 colorLink text-decoration-none text-primary"> Personajes MH </Link>
                    <Link to="/personajesPK" className="mx-4 colorLink text-decoration-none text-primary"> Personajes PK </Link>
                    <Link to="/personajesSC" className="mx-4 colorLink text-decoration-none text-primary"> Personajes SC </Link>                 
                    <Link to="/contacto" className="mx-4 colorLink text-decoration-none text-primary"> Contacto </Link>   
                </div>
            </div>
        );
    }
}