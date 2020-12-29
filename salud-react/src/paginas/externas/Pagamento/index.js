import React, { Component, Fragment } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import schema from './schema'
import Card from '../../../components/Card'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import Modal from '../../../components/Modal'

import { connect } from 'react-redux'
import { exibeModal }  from '../../../actions/ModalActions'

export class Pagamento extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            confirmaContrato: false,
            exibeModal: false,
        }

        this.renderModal = this.renderModal.bind(this)
        this.submit = this.submit.bind(this)
    }

    aceiteContrato(e)
    {
        const confirm = e.target.checked
        this.setState({...this.state, confirmaContrato: confirm})
    }

    renderModal(title, classCss, msg) {

        return <Modal
            title={title}
            classCssHeader={`${classCss}`}
        >
            <p>{msg}</p>
        </Modal>
    }

    handleState(e)
    {
        if( !this.state.confirmaContrato )
        {
            this.props.exibeModal(true)
            this.setState({...this.state, exibeModal: true})
        }
        else
        {
            const estado = this.state
            estado.dadosPagamento[e.target.name] = e.target.value
            this.setState({...this.state, estado})
        }
    }

    submit()
    {
        if( !this.state.confirmaContrato )
        {
            this.props.exibeModal(true)
            this.setState({...this.state, exibeModal: true})
        }
        else
        {
            console.log("asssasa")
           //mandar dados para a api
        }
    }

    render()
    {
        return(
            <Fragment>
                <HeaderInterno tituloHeader="Formas de pagamento" />                                
                <div className="container">
                    <section className="container-form">
                        {
                            (this.state.exibeModal === true)?this.renderModal("Termos do contrato", "color-white bg-red", "A opção (Li e aceito os termos do contrato) deve ser marcada"):""
                        }
                        
                        <Card textoHeader="Dados do plano escolhido">
                            <div className="row">
                                <div className="col-xs-12 col-lg-12">
                                    <p><span>Combo:</span> {this.props.dadosPlano.titulo}</p>
                                    <p><span>Valor:</span> R$ {this.props.dadosPlano.valor}</p>
                                </div>
                            </div>
                        </Card>

                        <Card textoHeader="Dados do pagamento">

                            <Formik
                                onSubmit={this.submit}
                                initialValues={{
                                    termosContrato: false,
                                    numeroCartao: "",
                                    nomeCartao: "",
                                    validadeCartao: "",
                                    codigoCartao: "",
                                }}
                                validationSchema={schema}
                                render={({values, setFieldValue})=>(
                                    <Form className="clearfix">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-8">
                                               
                                                <Field 
                                                    type="checkbox"
                                                    name="termosContrato"                                                    
                                                    style={{marginRight:'10px'}}                                                    
                                                />
                                                <label>
                                                    <a href="contrato_clube_minha_vida_mais.pdf">Li e aceito os termos do contrato</a>
                                                </label>
                                                <span className="error-message" style={{display: 'block'}}><ErrorMessage name='termosContrato' /></span>                                                
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-6">
                                                <label>Número do cartão</label>                    
                                                <Field 
                                                    className="form-control"                                         
                                                    name="numeroCartao"                                                    
                                                />
                                                <span className="error-message"><ErrorMessage name='numeroCartao' /></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-6">
                                                <label>Nome impresso no cartão</label>                    
                                                <Field 
                                                    className="form-control"                                                 
                                                    name="nomeCartao"                                                                         
                                                />
                                                <span className="error-message"><ErrorMessage name='nomeCartao' /></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-3">
                                                <label>validade</label>                    
                                                <Field
                                                    className="form-control"                                                    
                                                    name="validadeCartao"                                                   
                                                />
                                                <span className="error-message"><ErrorMessage name='validadeCartao' /></span>
                                            </div>
                                            <div className="col-xs-12 col-lg-3">
                                                <label>CVV</label>                    
                                                <Field 
                                                    className="form-control"
                                                    name="codigoCartao"                                                    
                                                />
                                                <span className="error-message"><ErrorMessage name='codigoCartao' /></span>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginTop: '30px'}}>
                                            <div className="col-xs-12 col-lg-6">
                                                <button 
                                                    className="btn btn-primary" 
                                                    style={{float: 'right'}}
                                                    type="submit"                                                    
                                                >
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}

                            />
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

const connetPagamento = connect(mapStateToProps, {exibeModal})(Pagamento)

export default connetPagamento

