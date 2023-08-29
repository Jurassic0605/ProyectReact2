import React from 'react';
import './PersonajePK.css';
import '../paginas/PaginaPersonajesMH';

export default class PersonajePK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: false,
            valor2: true,
            ubicaciones: {
                height: 0,
                weight: 0,
                base_experience: 0,
                id: 0,
            }
        }

        this.esconderEsto = this.esconderEsto.bind(this);
    }

    esconderEsto() {
        this.setState(prevState =>({
            valor: !prevState.valor,
            valor2: !prevState.valor2
        }))
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.namePK}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            this.setState({
                ubicaciones: {
                    height: result.height,
                    weight: result.weight,
                    base_experience: result.base_experience,
                    id: result.id,
                },
            });
        });
    }

    render() {
        return(
            <div className='col-12 d-flex flex-column mt-5 text-white'>
                <div className={"" + (this.state.valor ? ' d-none' : ' ')}>
                    <div className="d-flex align-items-center flex-column">
                        <h2> {this.props.nombrePK} </h2>
                        <img src={this.props.imgPK} alt={this.props.nombrePK} width={600} className='img-thumbnail' />
                        <p className='mt-3 tmLetra'> {this.props.descripcionPK} </p>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                        <p className='tmLetra'>ID: {this.state.ubicaciones.id}</p>
                        <p className='tmLetra'>Altura: {this.state.ubicaciones.height}</p>
                        <p className='tmLetra'>Peso: {this.state.ubicaciones.weight}</p>
                        <p className='tmLetra'>Experiencia base: {this.state.ubicaciones.base_experience}</p>
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