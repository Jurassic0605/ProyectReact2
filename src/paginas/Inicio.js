import React from "react";
import './Inicio.css';

export default class Inicio extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="row text-white">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <h1 className="tmTitulo tipoLetra">Inicio</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <p className="toLetra centrar tipoLetra"> Bienvenido/a, en esta página muestro algunos de los criaturas y/o personajes más poderosos de mis franquicias favoritas.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 mt-4 d-flex justify-content-center align-items-center">
                        <img src="/imgs/logoPokemon.png" alt="Logo Pokemón" width={500} />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4 d-flex justify-content-center align-items-center">
                        <img src="/imgs/logoMH.png" alt="Logo Monster Hunter" width={500}/>
                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
                        <img src="/imgs/logosonicpng.png" alt="Logo Monster Hunter" width={500}/>
                    </div>
                </div>
            </>
        );
    }
}