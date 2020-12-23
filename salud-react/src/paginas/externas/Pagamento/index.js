import React, { Component, Fragment } from 'react'
import Card from '../../../components/Card'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import { connect } from 'react-redux'

export class Pagamento extends Component
{
    constructor(props)
    {
        super(props)
    }

    
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
                                    <p><span>Combo:</span> {this.props.dadosPlano.titulo}</p>
                                    <p><span>Valor:</span> R$ {this.props.dadosPlano.valor}</p>
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

const mapStateToProps = (state) =>{
    return {
        dadosCliente: {
            cpf: state.cliente.cpf,
            dataNasc: state.cliente.dataNasc,
            nome: state.cliente.nome,
            sexo: state.cliente.sexo,
            cep: state.cliente.cep,
            endereco: state.cliente.endereco,
            numero: state.cliente.numero,
            complemento: (!state.cliente.complemento)?"":state.cliente.complemento,
            bairro: state.cliente.bairro,
            uf: state.cliente.uf,
            cidade: state.cliente.cidade,
            email: state.cliente.email,
            ddd_telefone: state.cliente.ddd_telefone,
            telefone: state.cliente.telefone,
            dddCel: state.cliente.dddCel,
            celular: state.cliente.celular,
        }, 
        dadosPlano:{
            id: state.plano.id,
            titulo: state.plano.titulo,
            valor: state.plano.valor,
        }
    }
}

const connetPagamento = connect(mapStateToProps)(Pagamento)

export default connetPagamento

