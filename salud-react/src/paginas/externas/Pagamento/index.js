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
import { 
        FirstLastName,
        retiraCaracteresEspeciais,
        partString 
    } from '../../../Utils'
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
            cadAssinatura:{}
        }

        this.renderModal = this.renderModal.bind(this)
        this.submit = this.submit.bind(this)
        this.tokenAcessoGentNet = this.tokenAcessoGentNet.bind(this)
        this.cadastroCliente = this.cadastroCliente.bind(this)
        this.tokenNumeroCartao = this.tokenNumeroCartao.bind(this)
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
        const objNome = FirstLastName(dadosCliente.nome)
        const {sellerId} = this.state
        const url = `${process.env.REACT_APP_APIGETNET_URL}cadastrarCliente`
        const objCpf = retiraCaracteresEspeciais(dadosCliente.cpf)

        if(objCpf.status == "success" )
        {
            const headers = {
                sellerId: sellerId,
                clientName: this.state.clientName,
                Authorization: this.state.token.dados.token.access_token
            }

            const cpf = objCpf.data.string

            const { dadosPedido } = this.props
            const customerId = `${dadosPedido.cliente_id}${dadosPedido.id}${dadosPedido.plano_id}`

            //montando o objeto para enviar para a API da GetNet
            const data = {
                seller_id: sellerId,
                customer_id:customerId , 
                first_name: (objNome.status == 'success')?objNome.data.firstName:"" ,
                last_name: (objNome.status == 'success')?objNome.data.lastName:"",
                document_type: "CPF",
                document_number: cpf,
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
        else
        {
            console.log(objCpf)
        }
    }

    async tokenNumeroCartao()
    {
        const sellerId = this.state.sellerId
        const url = `${process.env.REACT_APP_APIGETNET_URL}tokenizarNumeroCartao`
        const objCardNumber = retiraCaracteresEspeciais(this.state.dadosPagamento.numeroCartao)
        
        if( objCardNumber.status == 'success' )
        {
            this.setState({
                ...this.state,
                dadosPagamento:{
                    ...this.state.dadosPagamento,
                    numeroCartao: objCardNumber.data.string
                }
            })            
            
            const headers = {
                Authorization: this.state.token.dados.token.access_token,
                clientName: this.state.clientName,
                sellerId: sellerId,
            }

            const dados = {
                card_number: objCardNumber.data.string,
                customer_id: this.state.cadCliente.dados.customer_id
            }
    
            await axios.post(url,dados,{headers})
            .then(resp=>{

                this.setState({
                    ...this.state,
                    cardToken: resp.data
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
        else
        {
            console.log(`${objCardNumber.mensagem}` )
        }
    }

    async cadastrarAssinatura()
    {
        const sellerId = this.state.sellerId
        const objDataExp = retiraCaracteresEspeciais(this.state.dadosPagamento.validadeCartao)
        
        if(objDataExp.status == "success" )
        {
            const objMesExp =  partString(objDataExp.data.string, 0, 2)
            const objAnoExp =  partString(objDataExp.data.string, 5, 2)
            const url = `${process.env.REACT_APP_APIGETNET_URL}cadastrarAssinatura`

            if(objAnoExp.status == "success" && objMesExp.status == "success" )
            {
                const headers = {
                    sellerId: sellerId,
                    clientName: this.state.clientName,
                    Authorization: this.state.token.dados.token.access_token
                }

                if( this.state.dadosPagamento.numeroCartao != "" )
                {
                    const numeroCartao = this.state.dadosPagamento.numeroCartao
                    const objBin = partString(numeroCartao, 0, 6)

                    if( objBin.status == "success")
                    {
                        const dataAtual = new Date(Date.now()).toISOString()
                        const objData = partString(dataAtual, 0, 10)

                        if( objData.status == "success" )
                        {
                            const bin = objBin.data.string

                            const mesExp = objMesExp.data.string
                            const anoExp = objAnoExp.data.string
                    
                            const {dadosCliente} = this.props

                            const dadosAss = {
                                seller_id: sellerId,
                                customer_id: this.state.cadCliente.dados.customer_id,
                                plan_id: this.props.dadosPlano.idGetnet,
                                order_id: this.props.dadosPedido.id,
                                subscription:
                                {
                                    payment_type: 
                                    {
                                        credit: 
                                        {
                                            transaction_type: "FULL",
                                            number_installments: 1,
                                            soft_descriptor: "Assinatura clube de benefícios Salud",
                                            billing_address: 
                                            {
                                                street: dadosCliente.endereco, //logradouro
                                                number: dadosCliente.numero,
                                                complement: dadosCliente.complemento,
                                                district: dadosCliente.bairro,
                                                city: dadosCliente.cidade,
                                                state: dadosCliente.uf,
                                                country: "Brasil",
                                                postal_code: dadosCliente.cep,
                                            },
                                            card: 
                                            {
                                                number_token: this.state.cardToken.dados.number_token, //número do cartão tokenizado
                                                cardholder_name: this.state.dadosPagamento.nomeCartao, //nome do comprador impresso no cartão
                                                security_code: this.state.dadosPagamento.codigoCartao, //codigo de segurança CVV ou CVC
                                                brand: this.state.dadosPagamento.bandeiraCard, //bandeira do cartão válidos: Mastercard, visa, Amex
                                                expiration_month: mesExp , //mes de expiração do cartão com dois dígitos
                                                expiration_year: anoExp, //ano de expiração do cartão com dois dígitos
                                                bin: bin
                                            }
                                        }
                                    },
                                },
                                installment_start_date: objData.data.string,
                            }

                            await axios.post(url,dadosAss,{headers})
                            .then(resp=>{
                                
                                console.log(resp)

                                this.setState({
                                    ...this.state,
                                    cadAssinatura: resp
                                })
                            })
                        }
                    }
                    else
                    {
                        //mensagem de erro
                    }
                }
                else
                {
                    //mensagem de erro
                }
            }
        }       
    }

    async submit(values, action)
    { 
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
                    await this.tokenNumeroCartao() //função tokenização do numero do cartão de crédit

                    await this.cadastrarAssinatura()
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
                                                    mask="11/11"                                                    
                                                    onChange={(val)=>setFieldValue("validadeCartao", val.target.value)}
                                                />
                                                <span className="error-message"><ErrorMessage name='validadeCartao' /></span>
                                            </div>
                                            <div className="col-xs-12 col-lg-3">
                                                <label>CVV</label>                    
                                                <Field 
                                                    className="form-control"
                                                    name="codigoCartao"
                                                    maxLength="3"
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
        },
        dadosPedido:{
            cliente_id: state.pedido.cliente_id,
            created_at: state.pedido.created_at,
            id: state.pedido.id,
            meio_pagamento_id: state.pedido.meio_pagamento_id,
            plano_id: state.pedido.plano_id,
            vendedor_id: state.pedido.vendedor_id
        }
    }
}

const connetPagamento = connect(mapStateToProps, {exibeModal})(Pagamento)

export default connetPagamento

