import React from "react";
import Personaje from './Personaje';

export default class ListaPersonaje extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.personajesMH.map((personaje) => (
                    <Personaje nombre={personaje.nombre} img={personaje.img} descripcion={personaje.descripcion} />
                ))}
            </>
        );
    }
}