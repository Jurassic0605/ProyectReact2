import React from "react";
import PersonajeSC from './PersonajeSC';

export default class ListaPersonajeSC extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.personajesSC.map((personaje) => (
                    <PersonajeSC nombre={personaje.nombre} img={personaje.img} descripcion={personaje.descripcion} />
                ))}
            </>
        );
    }
}