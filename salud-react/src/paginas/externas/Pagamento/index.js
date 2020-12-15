import React, { Component, Fragment } from 'react'
import Card from '../../../components/Card'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import { Form } from 'reactstrap'

export default class Pagamento extends Component
{
    render()
    {
        return(
            <Fragment>
                <HeaderInterno tituloHeader="Formas de pagamento" />                                
                <div className="container">
                    <section className="container-form">
                        <Card textoHeader="Dados do plano escolhido">
                            <div className="row">
                                <div className="col-xs-12 col-lg-12">
                                    <p><span>Combo:</span> Combo Individual</p>
                                    <p><span>Valor:</span> R$ 19.90</p>
                                </div>
                            </div>
                        </Card>

                        <Card textoHeader="Formas de pagamento">
                            <form className="clearfix">
                                <div className="row">
                                    <div className="col-xs-12 col-lg-8">
                                        <input type="checkbox" name="acordo-termos-contrato" value="1" style={{marginRight:'10px'}} />
                                        <label>
                                            <a href="contrato_clube_minha_vida_mais.pdf">Li e aceito os termos do contrato</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-8">
                                        <input type="image" src="/imagens/logo-cartoes.jpg" /> 
                                    </div>
                                </div>
                            </form>
                        </Card>
                    </section>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

