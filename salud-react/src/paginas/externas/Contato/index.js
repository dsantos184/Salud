import React, { Component, Fragment } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import axios from 'axios'

export default class Contato extends Component {

    constructor(props) {
        super(props)
        this.state = {inputNome: ''}
 
<<<<<<< HEAD
    return (
        <Fragment>
            <HeaderInterno tituloHeader="Formulário de Contato" />

            <div className="container">
                <section className="container-form">
                    <form className="clearfix" method="POST" action="envia.php">
                        <div className="form-group">
                            <label for="inputPessoa">Desejo adquirir para: </label><br />

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaFamilia" value="Minha Familia" checked="" required="" />
                                <label className="form-check-label" for="inputParaMinhaFamilia">Minha Família</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaEmpresa" value="Minha Empresa" required="" />
                                <label className="form-check-label" for="inputParaMinhaEmpresa">Minha Empresa</label>
=======
    }

    handleSubmit(event) { 
        event.preventDefault();
      }

    handleChange(event) {
        const target = event.target;

        console.log(target.type)
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        alert(name + " " + value)

        this.setState({
            [name]: value
        });
    }

    render() {

        return (

            <Fragment>
                <HeaderInterno titulo="Contato" />

                <div className="container container-pagina-interna">
                    <section>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <div className="form-group">
                                <label htmlFor="inputPessoa">Desejo adquirir para: </label><br />

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaFamilia" value="Minha Familia" checked="" required="" />
                                    <label className="form-check-label" htmlFor="inputParaMinhaFamilia">Minha Família</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaEmpresa" value="Minha Empresa" required="" />
                                    <label className="form-check-label" htmlFor="inputParaMinhaEmpresa">Minha Empresa</label>
                                </div>

>>>>>>> f3fde136e5cc747d331536fb38784a9d03dabc56
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Nome do Contato*</label>
                                <input className="form-control" type="nome" name="inputNome" id="inputNome" required="" value={this.state.value} onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Email* </label>
                                <input className="form-control" type="email" name="inputEmail" id="inputEmail" required="" onChange={this.handleChange} />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputDDD">DDD* </label>
                                    <input type="number" step="1" min="0" max="99" id="inputDDD" name="inputDDD" className="form-control" required="" onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-10">
                                    <label htmlFor="inputTelefone">Telefone*</label>
                                    <input type="number" id="inputTelefone" name="inputTelefone" className="form-control" required="" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="form-group divInputQtdeFuncionarios" style={{ display: "none" }}>
                                <label htmlFor="inputQtdeFuncionarios">Quantidade de Funcionários </label>
                                <input className="form-control" type="number" min="1" max="9999999" name="inputQtdeFuncionarios" id="inputQtdeFuncionarios" disabled="" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputMensagem">Mensagem </label>
                                <textarea id="inputMensagem" name="inputMensagem" className="form-control" style={{ minHeight: "200px" }} onChange={this.handleChange}></textarea>
                            </div>

                            <button type="submit" className="btn bg-red color-white btn-lg float-right">Enviar</button>
                        </form>
                    </section>
                </div>

                <Footer />

            </Fragment>
        )
    }
}
