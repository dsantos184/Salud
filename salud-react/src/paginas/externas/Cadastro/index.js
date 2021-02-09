import React, { Fragment, Component } from 'react'
import {Redirect}  from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import MaskedInput from 'react-maskedinput'
import schema from './schema'
import axios from 'axios'
import { connect } from 'react-redux'

import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import Modal from '../../../components/Modal'
import { consultaCep } from '../../../Utils'

import { exibeModal } from '../../../actions/ModalActions'
import { editDadoscliente } from '../../../actions/ClientesActions'


export class Cadastro extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            exibeModal: false,
            msg: '',
            bgColor: '',
            titulo: '',
            redirPagameto: false
        }

        this.modal = this.modal.bind(this)
        this.preencheEndereco = this.preencheEndereco.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    modal(titulo, bgcolor, msg)
    {
        return <Modal
            isOpen={true}
            title={titulo}
            classCssHeader={`${bgcolor} color-white`}
        >
            <p>{msg}</p>
        </Modal>
    }

    preencheEndereco(ev, cep, setFieldValue)
    {
        ev.preventDefault()
        consultaCep(cep)
            .then(data => {
                const logradouro = `${data.tipo_logradouro} ${data.logradouro}`
                setFieldValue('endereco', logradouro)
                setFieldValue('bairro', data.bairro)
                setFieldValue('cidade', data.cidade)
                setFieldValue('uf', data.uf)
            })
    }

    async onSubmit(values, actions)
    {
        await axios.post(process.env.REACT_APP_API_URL + "cliente/cadastrar", values)
        .then(resp => {

            console.log(resp)

            const { status, msg } = resp.data

            if (status == 'erro')
            {
                this.setState({
                    ...this.state,
                    bgColor: 'bg-red',
                    titulo: 'Erro ao efetuar o cadastro'
                })

                //seta informações do modal no redux
                this.props.exibeModal(true)

                this.setState({...this.state, exibeModal:true})

            }
            else {
                
                this.props.editDadoscliente(values)
                
                this.setState({...this.state, redirPagameto:true})
                
                actions.resetForm({values:''})
            }
        })
    }

    render() {

        if( this.state.redirPagameto )
        {
            return <Redirect to="/pagamento" />
        }

        return (
            <Fragment>
                <HeaderInterno tituloHeader="Formulário de cadastro" />
                <div className="container">
                    {
                        this.state.exibeModal ? this.modal(this.state.titulo, this.state.bgColor, this.state.msg) : ''
                    }

                    <section className="container-form">
                        <Formik
                            onSubmit={this.onSubmit}
                            initialValues={{
                                cpf: "",
                                dataNasc: "1985-03-14",
                                nome: "Diogo dos Santos",
                                sexo: "",
                                cep: "",
                                endereco: "",
                                numero: "22",
                                complemento: "",
                                bairro: "",
                                uf: "",
                                cidade: "",
                                email: "",
                                ddd_telefone: "21",
                                telefone: "3333-3333",
                                dddCel: "21",
                                celular: "",
                                senha: "12345678",
                                confirmaSenha: "12345678",
                                plano_id: this.props.plano.id
                                /*/dependentes: [
                                    { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                    { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                    { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                ]*/
                            }}
                            validationSchema={schema}
                            render={({ values, setFieldValue }) => (
                                <Form className="clearfix">
                                    <Card textoHeader="Dados do Segurado">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-2">
                                                <div className="form-group">
                                                    <label>CPF: </label>
                                                    <MaskedInput
                                                        type="text"
                                                        name="cpf"
                                                        className="form-control input-sm cpf_valido"
                                                        mask="111.111.111-11"
                                                        onChange={(ev)=>setFieldValue('cpf', ev.target.value)}
                                                    />
                                                    <span className="error-message"><ErrorMessage name='cpf' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-4">
                                                <div className="form-group">
                                                    <label>Nome: </label>
                                                    <Field type="text" name="nome" className="form-control input-sm" />
                                                    <span className="error-message"><ErrorMessage name='nome' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-2">
                                                <div className="form-group">
                                                    <label>Data de Nasc: </label>
                                                    <Field type="date" name="dataNasc" className="form-control input-sm" />
                                                    <span className="error-message"><ErrorMessage name='dataNasc' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-2 ">
                                                <div className="form-group ">
                                                    <label>Sexo: </label>
                                                    <Field
                                                        component="select"
                                                        className="form-control input-sm"
                                                        name="sexo"
                                                    >
                                                        <option value="">SELECIONE </option>
                                                        <option value="M">MASCULINO </option>
                                                        <option value="F">FEMININO </option>
                                                        <option value="O">OUTROS </option>
                                                    </Field>
                                                    <span className="error-message"><ErrorMessage name='sexo' /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card textoHeader="Endereço">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-3">
                                                <div className="form-group ">
                                                    <label>CEP</label>
                                                    <div className="input-group">
                                                        <MaskedInput
                                                            type="text"
                                                            className="form-control  input-sm valid"                                                          
                                                            name="cep"
                                                            id="cep"
                                                            mask="11111-111"
                                                            onChange={(ev)=>setFieldValue('cep', ev.target.value)}
                                                        />
                                                        <span className="input-group-btn">
                                                            <a
                                                                href="#"
                                                                className="btn btn-warning input-sm btn-quadrado"
                                                                id="preencherCep"
                                                                onClick={(ev) => this.preencheEndereco(ev, values.cep, setFieldValue)}
                                                            >
                                                                Pesquisar
                                                        </a>
                                                        </span>
                                                        <span className="error-message"><ErrorMessage name='cep' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col-xs-12 col-lg-7">
                                                <div className="form-group " id="DivEndereco">
                                                    <label>Endereco</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm valid"
                                                        name="endereco"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='endereco' /></span>
                                                </div>
                                            </div>

                                            <div className=" col-xs-12 col-lg-2">
                                                <div className="form-group ">
                                                    <label>Número</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm"
                                                        name="numero"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='numero' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-3 ">
                                                <div className="form-group ">
                                                    <label>Complemento</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm "
                                                        name="complemento"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-3 ">
                                                <div className="form-group " id="DivBairro">
                                                    <label>Bairro</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm valid"
                                                        name="bairro"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='bairro' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-2 ">
                                                <div className="form-group ">
                                                    <label>UF</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm valid"
                                                        name="uf"
                                                        maxLength="2"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='uf' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-3 ">
                                                <div className="form-group ">
                                                    <label>Cidade</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control input-sm valid"
                                                        name="cidade"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='cidade' /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card textoHeader="Contatos">
                                        <div className="row">
                                            <div className=" col-xs-12 col-lg-4">
                                                <div className="form-group ">
                                                    <label>E-mail</label>
                                                    <Field
                                                        type="email"
                                                        className="form-control input-sm "
                                                        name="email"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='email' /></span>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-4">
                                                <div className="row">
                                                    <div className="col-xs-3 col-lg-4">
                                                        <label>DDD</label>
                                                        <Field                                                            
                                                            className="form-control input-sm"
                                                            name="ddd_telefone"
                                                            maxlength="2"
                                                        />
                                                        <span className="error-message"><ErrorMessage name='ddd_telefone' /></span>
                                                    </div>
                                                    <div className="col-xs-9 col-lg-8">
                                                        <label>Telefone</label>
                                                        <MaskedInput                                                            
                                                            className="form-control input-sm"
                                                            name="telefone"                                                            
                                                            mask="1111-1111"
                                                            onChange={(ev)=>setFieldValue('telefone', ev.target.value)}
                                                        />
                                                        <span className="error-message"><ErrorMessage name='telefone' /></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-4">
                                                <div className="row">
                                                    <div className=" col-xs-3 col-lg-4">
                                                        <label>DDD</label>
                                                        <Field                                                            
                                                            className="form-control input-sm"
                                                            name="dddCel"
                                                            maxlength="2"
                                                        />
                                                        <span className="error-message"><ErrorMessage name='dddCel' /></span>
                                                    </div>
                                                    <div className=" col-xs-9 col-lg-8">
                                                        <label>Celular</label>
                                                        <MaskedInput                                                            
                                                            className="form-control input-sm"
                                                            name="celular"
                                                            mask="11111-1111"
                                                            onChange={(ev)=>setFieldValue('celular', ev.target.value)}
                                                        />
                                                        <span className="error-message"><ErrorMessage name='celular' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    {/*ADICIONAR DEPENDENTE (NÃO REMOVER)  }<button type="button" className="btn btn-primary btn-quadrado" id="btnInserirDependente">
                                    <i className="fa fa-plus-circle"></i> Adicionar Dependente
                                </button>

                                <div style={{ marginBottom: "20px" }}>
                                    <small style={{ fontSize: "11px" }}>* Máximo de 3 dependentes</small>
                                    <p></p>
                                </div>

                                <Card textoHeader="Dependente">
                                    <div className="row">
                                        <div className="col-xs-12 col-lg-3 ">
                                            <div className="form-group">
                                                <label>CPF: </label>
                                                <Field
                                                    type="number"
                                                    className="form-control input-sm cpf_valido"
                                                    name="dependente[1][cpf]"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-4 ">
                                            <div className="form-group">
                                                <label>Nome: </label>
                                                <input type="text" className="form-control input-sm" name="dependente[1][nome]" id="nome_dependente" required="required" placeholder="Nome" />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2 ">
                                            <div className="form-group ">
                                                <label>Data de Nascimento: </label>
                                                <Field
                                                    type="date"
                                                    className="form-control input-sm"
                                                    name="dependente[1][data_nasc]"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2 ">
                                            <div className="form-group ">
                                                <label>Grau de Parentesco</label>
                                                <Field
                                                    component="select"
                                                    className="form-control input-sm "
                                                    name="dependente[1][grau_parentesco]"
                                                >
                                                    <option value="">SELECIONE</option>
                                                    <option value="Bisavós">Bisavós</option>
                                                    <option value="Avós">Avós</option>
                                                    <option value="Pais">Pais</option>
                                                    <option value="Cônjugue">Cônjugue</option>
                                                    <option value="Filhos">Filhos</option>
                                                    <option value="Enteados">Enteados</option>
                                                    <option value="Netos">Netos</option>
                                                    <option value="Bisnetos">Bisnetos</option>
                                                    <option value="Sogros">Sogros</option>
                                                    <option value="Cunhados">Cunhados</option>
                                                    <option value="Genro/Nora">Genro/Nora</option>
                                                    <option value="Primos">Primos</option>
                                                    <option value="Outros">Outros</option>

                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </Card>{*/}

                                    <Card textoHeader="Código do vendedor">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-12 ">
                                                <p>
                                                    Caso seu cadastro tenha sido feito por intermédio de um vendedor,
                                                    informe o código do mesmo no campo abaixo.
                                            </p>
                                                <span className="obs">OBS: dado não obrigatório</span>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: '20px' }}>
                                            <div className="col-xs-12 col-lg-2">
                                                <div className="form-group ">
                                                    <label>Código do vendedor: </label>
                                                    <Field type="text" name="codigo_vendedor" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card textoHeader="Dados para Login">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-2 ">
                                                <div className="form-group ">
                                                    <label>Senha: </label>
                                                    <Field type="password" name="senha" />
                                                    <span className="error-message"><ErrorMessage name='senha' /></span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-lg-2 ">
                                                <div className="form-group ">
                                                    <label>Confirme a senha: </label>
                                                    <Field type="password" name="confirmaSenha" />
                                                    <span className="error-message"><ErrorMessage name='confirmaSenha' /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <button type="submit" className="btn bg-red color-white btn-lg float-right">Cadastrar</button>
                                </Form>
                            )}
                        />
                    </section>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plano: {
            id: state.plano.id,
            titulo: state.plano.titulo,
            valor: state.plano.valor,
            idGetnet: state.plano.idGetnet,
            beneficios: state.plano.beneficios
        }
    }
}



const cadatroConnect = connect(mapStateToProps, { editDadoscliente })(Cadastro)

export default cadatroConnect

