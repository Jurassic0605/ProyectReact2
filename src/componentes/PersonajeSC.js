import React from 'react';
import './Personaje.css'

export default class Personaje extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: false,
            valor2: true
        }

        this.esconderEsto = this.esconderEsto.bind(this);
    }

    esconderEsto() {
        this.setState(prevState =>({
            valor: !prevState.valor,
            valor2: !prevState.valor2
        }))
    }

    render() {
        return(
            <div className='col-12 d-flex flex-column mt-5 text-white'>
                <div className={"" + (this.state.valor ? ' d-none' : ' ')}>
                    <div className="d-flex align-items-center flex-column">
                        <h2> {this.props.nombre} </h2>
                        <img src={this.props.img} alt={this.props.nombre} width={600} className='img-thumbnail' />
                        <p className='mt-4 tmLetra'> {this.props.descripcion} </p>
                    </div>
                </div>
                <div className={'' + (this.state.valor ? ' d-none' : ' ')}>
                    <button className='btn btn-danger' onClick={this.esconderEsto}> Esconder </button>
                </div>
                <div className={'' + (this.state.valor2 ? ' d-none' : ' ')}>
                    <button className='btn btn-danger' onClick={this.esconderEsto}> Mostrar </button>
                </div>
            </div>
        )
    }
}