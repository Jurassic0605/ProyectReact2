import React from "react";
import './Contacto.css';

export default class Contacto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            mensaje: ""
        }
        this.submitted = this.submitted.bind(this);
        this.changedName = this.changedName.bind(this);
        this.changedMensagge = this.changedMensagge.bind(this)
    }

    changedName(event) {
        this.setState({
            nombre: event.target.value
        })
    }

    changedMensagge(event) {
        this.setState({
            nombre: event.target.value
        })
    }

    submitted(event) {
        alert("Se ha enviado el mensaje");
        event.preventDefault();
    }

    render() {
        return(
            <div className="text-white">
                <div className="row d-flex">
                    <div className="col-12 d-flex flex-column align-items-center mr-5">
                        <img src="/imgs/logo.png" alt="Logo" width={300} className="rounded-circle" />
                        <p className="nombre">Jurassic0619</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-5 d-flex align-items-center">
                        <a className='btn btn-danger m-md-3 m-sm-2 m-lg-5 p-md-3 bordes link colorInsta' href="https://www.instagram.com/jurassic0619/" target="_blank">
                        <i className="bi bi-instagram tamañoLetra"> Instagram</i>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 d-flex align-items-center">
                        <a className='btn btn-info m-md-3 m-sm-2 m-lg-5 p-md-3 bordes link' href="https://twitter.com/Jurassic0619" target="_blank">
                        <i className="bi bi-twitter tamañoLetra"> Twitter</i>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 d-flex align-items-center">
                        <a className='btn btn-danger m-md-3 m-sm-2 m-lg-5 p-md-3 bordes link colorYoutube' href="https://www.youtube.com/channel/UCGzyDAufuuHcebY4hboGdUg" target="_blank">
                        <i className="bi bi-youtube tamañoLetra"> Youtube</i>
                        </a>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-12">
                        <form onSubmit={this.submitted}>
                            <div className="form-group mt-5">
                                <label>Nombre</label>
                                <input type="text" className="form-control" onChange={this.changedName}/>
                            </div>
                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea className="form-control" onChange={this.changedMensagge}></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning my-3">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}