import React from "react";
import ListaPersonajeSC from "../componentes/ListaPersonajesSC";
import './PgPersonajes.css';

export default class PaginaPersonajesSC extends React.Component {
    constructor(props) {
        super(props);
    }

    personajesSC = [
        {
            nombre: 'Dark Gaia',
            img: './imgs/darkgaia2.jpg',
            descripcion: 'Es un organismo de energía hiper primordial desde el principio de los tiempos y la encarnación de la oscuridad, la noche y la destrucción. Desde su nacimiento, Dark Gaia ha estado en un eterno conflicto con Light Gaia, donde ellos mantienen un ciclo de destrucción y renacimiento del planeta. En el día de hoy, Dark Gaia fue prematuramente despertado por el Dr. Eggman, quien planeó utilizar su poder para establecer el Eggman Empire, lo que provocó que se rompiera y dispersara por todo el mundo. Después de volver a unirse, Dark Gaia intentó destruir el mundo, pero fue derrotado y vuelto a la latencia por Sonic the Hedgehog y Light Gaia, restaurando su ciclo.'
        },
        {
            nombre: 'Time Eater',
            img:'./imgs/timeeater2.jpg',
            descripcion: 'Inicialmente, era una criatura a la deriva por el espacio, dotado con el poder de "borrar y alterar el tiempo y el espacio", fue descubierto por el Dr. Eggman, que decidió utilizarlo para conquistar el mundo, al usarlo para alterar la historia y corregir sus errores del pasado, con la ayuda de su propio pasado. Time Eater se considera uno de los enemigos más difíciles de vencer ya que gracias a su poder de viajar en el tiempo y por al genio del Dr. Eggman y del genio del Dr. Ivo Robotnik puede corregir cada error hasta los innecesarios.'
        },
        {
            nombre: 'Solaris',
            img: './imgs/solaris2.jpg',
            descripcion: 'Él es el dios del sol de Soleanna, así como una forma de vida superdimensional y un dios del tiempo, que es adorado por la gente de Soleanna. Originalmente una llama viva, Solaris se dividió en dos mitades durante el Proyecto Solaris; Mephiles the Dark, su mente consciente, e Iblis, su poder crudo. Ambas mitades de Solaris fueron posteriormente selladas. Diez años más tarde, Mephiles e Iblis fueron liberados y se reincorporaron, recreando a Solaris, quien intentó destruir el tiempo en sí, pero fue derrotado por Super Sonic, Super Shadow y Super Silver. Solaris fue posteriormente borrado de la existencia, asegurando que su ira nunca sería desatada en el mundo.'
        }
    ]

    render() {
        return(
            <>
                <div className="row justify-content-center flex-column align-items-center text-white">
                    <h1 className="tmTituloSC">Sonic The Hedgheog</h1>
                </div>
                <div className="row">
                    <ListaPersonajeSC personajesSC={this.personajesSC} />
                </div>
            </>
        )
    }
}