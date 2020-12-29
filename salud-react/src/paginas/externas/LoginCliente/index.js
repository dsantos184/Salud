import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import Card from '../../../components/Card'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import { connect } from 'react-redux'
import { exibeModal } from '../../../actions/ModalActions'
import { autenticar } from './../../../actions/AutenticacaoActions'
import Modal from '../../../components/Modal'
import queryString from 'query-string';

import { Alert } from 'reactstrap';
import { Redirect } from 'react-router'


class Login extends Component {

    constructor(props) {
 
        super(props)
        //pega parametros da URL
        this.params = queryString.parse(this.props.location.search);

        this.state = {
            erroLogin: '',
            erroAuth: '',
            modal : {
                title: '',
                classCss: '',
                msg: ''
            }
        }
    }

    /*componentDidMount() {
        if( this.params.auth == "false" ){
            this.setState({
                ...this.state,
                erroAuth:true,
                modal: {
                    title: "Erro de Autenticação",
                    msg: "Você não está autorizado a acessar essa página!",
                    classCss: "color-white bg-red"
                }
            })
            this.props.exibeModal(true)
        }
        
    }*/

    renderModal(title, classCss, msg) {

        return <Modal
            title={title}
            classCssHeader={`${classCss}`}
        >
            <p>{msg}</p>
        </Modal>
    }



    onSubmit = async (values, actions) => { 

        let resp = await axios.get(process.env.REACT_APP_API_URL + "clientes/login", { params: values }).then((resp) => resp.data)

       if (resp.status == "sucesso") {
            
            this.props.autenticar(true) 

            localStorage.setItem('token', resp.dados.usuario_token)
            localStorage.setItem('tipoUsuario', resp.dados.usuario_tipo_usuario)
            localStorage.setItem('tokenDtExpiracao', resp.dados.updated_at.date)

            this.setState({...this.state,erroLogin:false})

            console.log(this.props)
                         
        } else { 

            this.setState({
                ...this.state,
                erroLogin:true, 
                modal: {
                    title: "Erro de Login",
                    msg: "CPF e/ou Senha incorretos!",
                    classCss: "color-white bg-red"
                }
            })
            this.props.exibeModal(true)
            //redux
            //this.props.autenticar(false)
            
        }
              
    }

    render() {
        return (
            <Fragment>

                <HeaderInterno tituloHeader="Login Cliente" />
                <div className="container">
                    <section className="container-form">

                        {/* RENDER MODAL ERRO LOGIN */}
                        {this.state.erroLogin === true ?
                        this.renderModal(this.state.modal.title, this.state.modal.classCss, this.state.modal.msg) :
                         ""   
                        }
                        {/* REDIRECT PAINEL*/}
                        { this.state.erroLogin === false ? <Redirect to="painel/inicio" /> : "" } 


                        {/* RENDER MODAL ERRO AUTH */}
                        {this.state.erroAuth == true ? this.renderModal(this.state.modal.title, this.state.modal.classCss, this.state.modal.msg) : ''}


                        <Formik
                            onSubmit={  this.onSubmit }
                            initialValues={{
                                cpf: "",
                                senha: "",
                                manter_conectado: ""
                            }}
                            render={({ values }) => (
                                <Form className="clearfix">
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <Card textoHeader="Login">
                                                <div className="row">
                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <label>CPF: </label>
                                                            <Field type="text" name="cpf" className="form-control input-sm cpf_valido" />
                                                            <ErrorMessage name="cpf" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <label>Senha: </label>
                                                            <Field type="password" name="senha" className="form-control input-sm" />
                                                            <ErrorMessage name="senha" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-xs-12 col-lg-12">
                                                            <div className="form-check">
                                                                <label htmlFor="defaultCheck1">
                                                                    <Field type="checkbox" name="manter_conectado" id="defaultCheck1" /> Manter Conectado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <button className="btn btn-primary float-right" type="submit">Entrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        />
                    </section>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => { 

    return {         
        isOpen: state.modal.isOpen ,
        autenticacao: state.autenticacao.autenticado
    }
}

export default connect(mapStateToProps, { exibeModal, autenticar })(Login); 
