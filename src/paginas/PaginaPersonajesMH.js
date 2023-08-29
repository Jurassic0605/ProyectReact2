import React from "react";
import ListaPersonajes from '../componentes/ListaPersonajes'
import './PgPersonajes.css';


export default class PaginaPersonajesMH extends React.Component {

    constructor(props) {
        super(props);
    }

    personajesMH = [
        {
            nombre: "Fatalis Blanco",
            img: './imgs/fatalisblanco2.jpg',
            descripcion: 'Las leyendas sobre este dragón se remontan a la antiguedad. Mucho son los cazadores que han intentado desafiarlo, pero ninguno de ellos ha sobrevivido. Un monstruo rodeado de misterio. El Fatalis Blanco ataca físicamente con coletazos, embestidas y golpes de garra, pero su principal poder es la capacidad de lanzar rayos de un color rojizo, invocándolos a voluntad, puede crear una lluvia de rayos que cubre toda el área o hacer que caigan sobre un blanco fijo. También puede lanzar bolas de esta electricidad o cargar sus garras eléctricamente.',
        },
        {
            nombre: "Alatreon",
            img: './imgs/alatreon2.jpg',
            descripcion: 'Un símbolo de destrucción: muchos temen incluso decir su nombre. Se dice que puede controlar a toda la naturaleza, pero todos (o casi todos) los registros sobre él han ardido. Alatreon es un dragón legendario que solo se conoce en las leyendas y cuya existencia es mantenida en secreto por el Gremio debido a su enorme poder. Apenas se conoce sobre su ecología, pero sabe que posee el control de cuatro elementos: Fuego, Draco, Rayo y Hielo. En el Nuevo Mundo, es también capaz de utilizar el elemento Agua. El elemento que emplea es indicado por el brillo de sus escamas, por el que recibe el nombre de Oscuridad Brillante.',
        },
        {
            nombre: "Fatalis",
            img: './imgs/fatalis2.jpg',
            descripcion: 'Un dragón negro legendario, conocido solo como Fatalis. Se rumorea que destruyó un reino entero en una sola noche, y se quedó con su castillo como colofón. El Fatalis es un monstruo muy agresivo que atacará a cualquier ser vivo en sus dominios, intentando reducirlo a cenizas con su poderoso aliento de fuego o haciendo uso de embestidas, coletazos y golpes con sus garras. También puede alzar el vuelo y atacar desde el aire con bolas de fuego. A partir de Monster Hunter 4, es capaz de infligir la plaga de nitro con sus garras y provocar explosiones.',
        },
    ]

    render() {
        return(
            <>
                <div className="row justify-content-center align-items-center text-white">
                    <h1 className="tmTituloMH">Monster Hunter</h1>
                </div>
                <div className="row">
                    <ListaPersonajes personajesMH={this.personajesMH} />
                </div>
            </>
        );
    }
}