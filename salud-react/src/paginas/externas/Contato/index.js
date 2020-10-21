import React, { Component, Fragment } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import axios from 'axios'

export default class Contato extends Component {

    constructor(props) {
        super(props)
 
        this.state = {
            inputPara: '',
            inputNome: '',
            inputEmail: '',
            inputDDD: '',
            inputTelefone: '',
            inputMensagem: '',
            inputQtdeFuncionarios: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)


         
    }

    handleSubmit(event) {
        event.preventDefault()

        //se for post add linha abaixo (bug do)
        const headers = { "Content-Type":"text/plain" }
        axios.post(process.env.REACT_APP_API_URL + "enviaEmailContato", this.state, {headers})
        .then((response) => {
            alert(response.data.msg)
        }, (error) => {
            console.log(error);
        });
    }

    handleQtdeFuncionarios(event) {

        const target = event.target
        const name = target.name
        const value = target.value

        document.getElementById("divInputQtdeFuncionarios").style.display = 'none'
        if (name == 'inputPara' && value == 'Minha Empresa') {
            document.getElementById("divInputQtdeFuncionarios").style.display = 'block'
        }
 
 
    }


    handleChange(event) {

        this.handleQtdeFuncionarios(event)

        const target = event.target;
        const value = /*target.type === 'radio' ? target.checked : */target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {

        return (

            <Fragment>
                <HeaderInterno tituloHeader="Contato" />

                <div className="container container-pagina-interna">
                    <section>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputPessoa">Desejo adquirir para: </label><br />

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaFamilia" value="Minha Familia" onChange={this.handleChange} required />
                                    <label className="form-check-label" htmlFor="inputParaMinhaFamilia">Minha Família</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inputPara" id="inputParaMinhaEmpresa" value="Minha Empresa" onChange={this.handleChange} required />
                                    <label className="form-check-label" htmlFor="inputParaMinhaEmpresa">Minha Empresa</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Nome do Contato*</label>
                                <input className="form-control" type="nome" name="inputNome" id="inputNome" value={this.state.inputNome} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Email* </label>
                                <input className="form-control" type="email" name="inputEmail" id="inputEmail" value={this.state.inputEmail} onChange={this.handleChange} required />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputDDD">DDD* </label>
                                    <input type="number" step="1" min="0" max="99" id="inputDDD" name="inputDDD" className="form-control" value={this.state.inputDDD} onChange={this.handleChange} required />
                                </div>
                                <div className="form-group col-md-10">
                                    <label htmlFor="inputTelefone">Telefone*</label>
                                    <input type="number" id="inputTelefone" name="inputTelefone" className="form-control" value={this.state.inputTelefone} onChange={this.handleChange} required />
                                </div>
                            </div>

                            <div id="divInputQtdeFuncionarios" className="form-group" style={{ display: "none" }}>
                                <label htmlFor="inputQtdeFuncionarios">Quantidade de Funcionários </label>
                                <input className="form-control" type="number" min="1" max="9999999" name="inputQtdeFuncionarios" id="inputQtdeFuncionarios" disabled="" value={this.state.value} onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputMensagem">Mensagem </label>
                                <textarea id="inputMensagem" name="inputMensagem" className="form-control" style={{ minHeight: "200px" }} value={this.state.value} onChange={this.handleChange}></textarea>
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
