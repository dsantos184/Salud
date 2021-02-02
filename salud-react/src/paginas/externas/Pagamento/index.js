import React, { Component, Fragment } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import MaskedInput from 'react-maskedinput'
import schema from './schema'
import Card from '../../../components/Card'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import Modal from '../../../components/Modal'
import axios from 'axios'

import { connect } from 'react-redux'
import { exibeModal }  from '../../../actions/ModalActions'
import { FirstLastName } from '../../../Utils'
export class Pagamento extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            sellerId:'b6010cf6-0ef1-4b67-bbd2-4af6a0783a64',
            clientName: 'salud',
            token:{},
            cadCliente:{},
            cardToken:{},
            dadosPagamento:{},
        }

        this.renderModal = this.renderModal.bind(this)
        this.submit = this.submit.bind(this)
        this.tokenAcessoGentNet = this.tokenAcessoGentNet.bind(this)
        this.cadastroCliente = this.cadastroCliente.bind(this)
        this.tokenNumeroCartao = this.tokenNumeroCartao.bind(this)
        this.handleChangeField  = this.handleChangeField.bind(this)
    }

    handleChangeField(event)
    {
        this.setState({
            ...this.state,
            fieldInitialValues:{...this.state.fieldInitialValues, [event.target.name]: event.target.value}
        })
    }

    renderModal(title, classCss, msg) {

        return <Modal
            title={title}
            classCssHeader={`${classCss}`}
        >
            <p>{msg}</p>
        </Modal>
    }    
    
    tokenAcessoGentNet = async () =>{
        const url = `${process.env.REACT_APP_APIGETNET_URL}gerarTokenAcesso`
        await axios.get(url, {headers:{clientName: 'salud'}})
        .then(resp=>{
            this.setState({
                ...this.state,
                token: resp.data
            })
        })
    }

    cadastroCliente = async () =>{
        const {dadosCliente} = this.props
        const objnome = FirstLastName(dadosCliente.nome)
        const {sellerId} = this.state
        const url = `${process.env.REACT_APP_APIGETNET_URL}cadastrarCliente`

        const headers = {
            sellerId: sellerId,
            clientName: this.state.clientName,
            Authorization: this.state.token.dados.token.access_token
        }

        //montando o objeto para enviar para a API da GetNet
        const data = {
            seller_id: sellerId,
            customer_id: dadosCliente.cpf, 
            first_name: (objnome.status == 'success')?objnome.data.firstName:"" ,
            last_name: (objnome.status == 'success')?objnome.data.lastName:"",
            document_type: "CPF",
            document_number: dadosCliente.cpf,
            birth_date: dadosCliente.dataNasc,
            phone_number: dadosCliente.telefone,
            celphone_number: dadosCliente.celular,
            email: dadosCliente.email,
            //observation: "O cliente tem interesse no plano x.",
            address: 
            {
                street: dadosCliente.endereco,
                number: dadosCliente.numero,
                complement: dadosCliente.complemento,
                district: dadosCliente.bairro,
                city: dadosCliente.cidade,
                state: dadosCliente.uf,
                country: "Brasil",
                postal_code: dadosCliente.cep
            }
        }
        
        await axios.post(url,data,{headers}).then(resp=>{            
            this.setState({
                ...this.state,
                cadCliente: resp.data
            })
        })
    }

    async tokenNumeroCartao()
    {
        const sellerId = this.state.sellerId
        const url = `${process.env.REACT_APP_APIGETNET_URL}tokenizarNumeroCartao`

        const headers = {
            Authorization: this.state.token.dados.token.access_token,
            clientName: this.state.clientName,
            sellerId: sellerId,
        }
        
        const dados = {
            card_number: this.state.dadosPagamento.numeroCartao,
            customer_id: this.state.cadCliente.dados.customer_id
        }

        await axios.post(url,dados,{headers})
        .then(resp=>{
            this.setState({
                ...this.state,
                cardToken: resp.data
            })
        })
    }

    cadastrarAssinatura()
    {
        const sellerId = this.state.sellerId

        const headers = {
            sellerId: sellerId,
            Authorization: this.state.token.dados.token.access_token
        }

        const {dadosCliente} = this.props

        const dados = {
            seller_id: sellerId,
            customer_id: this.state.cadCliente.dados.customer_id,
            plan_id: "",
            order_id: "",
            subscription:{
                payment_type:{
                    credit: {
                        transaction_type: "FULL",
                        number_installments: 1, //numero de parcelas
                        soft_descriptor: 'Assinatura clube de benefícios Salud', //texto exibido na fatura do comprador
                        billing_address:{ //endereço do comprador
                            street: dadosCliente.endereco, //logradouro
                            number: dadosCliente.numero,
                            complement: dadosCliente.complemento,
                            district: dadosCliente.bairro, //bairro
                            city: dadosCliente.cidade,
                            state: dadosCliente.uf,
                            country: "BR",
                            postal_code: dadosCliente.cep,
                            card:{
                                number_token: this.state.cardToken.dados.number_token, //número do cartão tokenizado
                                cardholder_name: this.state.dadosPagamento.nomeCartao, //nome do comprador impresso no cartão
                                security_code: this.state.dadosPagamento.codigoCartao, //codigo de segurança CVV ou CVC
                                brand: this.state.dadosPagamento.bandeiraCard, //bandeira do cartão válidos: Mastercard, visa, Amex
                                expiration_month:"" , //mes de expiração do cartão com dois dígitos
                                expiration_year: "", //ano de expiração do cartão com dois dígitos
                                bin: "" //seis primeiros números do cartão 
                            },
                            installment_start_date: "", //string <YYYY-MM-DD> data de inínio de cobrança da assinatura
                        }
                    }
                }
            }
        }
    }

    async submit(values, action)
    {
        console.log(values)
        
        this.setState({
            ...this.state,
            dadosPagamento: values
        })

        //if( (this.props.dadosCliente.cpf && this.props.dadosCliente.cpf != "" ) && (this.props.dadosPlano.id && this.props.dadosPlano.id != "") )
        {
            //gerar toke de acesso e o insere no estado
            await this.tokenAcessoGentNet()

            if( this.state.token.erro == 0 )
            {
                await this.cadastroCliente()
                
                if( this.state.cadCliente.erro == 0 )
                {
                    await this.tokenNumeroCartao() //função tokenização do numero do cartão de crédito
                    console.log(this.state)
                }
            }
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
                                    bandeiraCard: ""
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
                                                <label>Bandeira do cartão</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-4 col-lg-2">
                                                <Field
                                                    name="bandeiraCard"                                                   
                                                    type="radio"
                                                    value="Visa"
                                                />
                                                <img src="/imagens/visa.png"/>
                                            </div>
                                            <div className="col-xs-4 col-lg-2">
                                                <Field
                                                    name="bandeiraCard"                                                   
                                                    type="radio"
                                                    value="Mastercard"
                                                />
                                                <img src="/imagens/mastercard.png"/>
                                            </div>
                                            <div className="col-xs-4 col-lg-2">
                                                <Field
                                                    name="bandeiraCard"                                                   
                                                    type="radio"
                                                    value="Amex"
                                                />
                                                <img src="/imagens/amex.png"/>
                                            </div>
                                            <div className="col-xs-4 col-lg-2">
                                                <Field
                                                    name="bandeiraCard"                                                   
                                                    type="radio"
                                                    value="Elo"
                                                />
                                                <img src="/imagens/elo.png"/>
                                            </div>
                                            <div className="col-xs-4 col-lg-2">
                                                <Field
                                                    name="bandeiraCard"                                                   
                                                    type="radio"
                                                    value="Hipercard"
                                                />
                                                <label>Hipercard</label>
                                            </div>            
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-4 col-lg-2">
                                                <span className="error-message"><ErrorMessage name='bandeiraCard' /></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-6">
                                                <label>Número do cartão</label>                    
                                                <MaskedInput 
                                                    className="form-control"
                                                    name="numeroCartao"
                                                    mask="1111 1111 1111 1111"
                                                    onChange={(val)=>setFieldValue("numeroCartao", val.target.value)}
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
                                                <MaskedInput
                                                    className="form-control"                                                    
                                                    name="validadeCartao"
                                                    mask="11/1111"                                                    
                                                    onChange={(val)=>setFieldValue("validadeCartao", val.target.value)}
                                                />
                                                <span className="error-message"><ErrorMessage name='validadeCartao' /></span>
                                            </div>
                                            <div className="col-xs-12 col-lg-3">
                                                <label>CVV</label>                    
                                                <Field 
                                                    className="form-control"
                                                    name="codigoCartao"
                                                    maxlength="3"
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
            idGetnet: state.plano.idGetnet
        }
    }
}

const connetPagamento = connect(mapStateToProps, {exibeModal})(Pagamento)

export default connetPagamento

