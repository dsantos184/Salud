import React, { Fragment } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import { waitForElementToBeRemoved } from '@testing-library/react'

const Contato = () => {
    return (
        <Fragment>
            <HeaderInterno />

            <div className="container">
                <section>
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
                            </div>

                        </div>

                        <div className="form-group">
                            <label for="inputEmail">Nome do Contato*</label>
                            <input className="form-control" type="nome" name="inputNome" id="inputNome" required="" />
                        </div>

                        <div className="form-group">
                            <label for="inputEmail">Email* </label>
                            <input className="form-control" type="email" name="inputEmail" id="inputEmail" required="" />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="inputDDD">DDD* </label>
                                <input type="number" step="1" min="0" max="99" id="inputDDD" name="inputDDD" className="form-control" required="" />
                            </div>
                            <div className="form-group col-md-10">
                                <label for="inputTelefone">Telefone*</label>
                                <input type="number" id="inputTelefone" name="inputTelefone" className="form-control" required="" />
                            </div>
                        </div>

                        <div className="form-group divInputQtdeFuncionarios" style={{display:"none"}}>
                            <label for="inputQtdeFuncionarios">Quantidade de Funcionários </label>
                            <input className="form-control" type="number" min="1" max="9999999" name="inputQtdeFuncionarios" id="inputQtdeFuncionarios" disabled="" />
                        </div>

                        <div className="form-group">
                            <label for="inputMensagem">Mensagem </label>
                            <textarea id="inputMensagem" name="inputMensagem" className="form-control" style={{minHeight: "200px"}}></textarea>
                        </div>

                        <button type="submit" className="btn bg-red color-white btn-lg float-right">Enviar</button>
                    </form>
                </section>
            </div>
            
            <Footer />

        </Fragment>
    )
}

export default Contato