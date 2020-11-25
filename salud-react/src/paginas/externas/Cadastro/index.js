import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import { consultaCep } from '../../../Utils'

import { Formik, Field, Form,ErrorMessage } from 'formik'
import schema from './schema'
import axios from 'axios'

const Cadastro = props => {

    console.log(props)

    function preencheEndereco(ev, cep, setFieldValue) {
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

    async function onSubmit(values, actions)
    {
        await axios.post(
            process.env.REACT_APP_API_URL + "cliente/cadastrar", values)
        .then(resp=>{
            console.log(resp)
        })
    }

    return (
        <Fragment>
            <HeaderInterno tituloHeader="Formulário de cadastro" />
            <div className="container">
                <section className="container-form">
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{
                            cpf: "",
                            dataNasc: "",
                            nome: "",
                            sexo: "",
                            cep: "",
                            endereco: "",
                            numero: "",
                            complemento: "",
                            bairro: "",
                            uf: "",
                            cidade: "",
                            email: "",
                            ddd_telefone: "",
                            telefone: "",
                            dddCel: "",
                            celular: "",
                            senha: "",
                            confirmeSenha: ""
                            /*/dependentes: [
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                            ]*/
                        }}
                        validationSchema = {schema}
                        render={({ values, setFieldValue }) => (
                            <Form className="clearfix">
                                <Card textoHeader="Dados do Segurado">
                                    <div className="row">
                                        <div className="col-xs-12 col-lg-2">
                                            <div className="form-group">
                                                <label>CPF: </label>
                                                <Field 
                                                    type="text"
                                                    name="cpf"
                                                    className="form-control input-sm cpf_valido"
                                                    maxLength="11"
                                                />
                                                <span className="error-message"><ErrorMessage name='cpf'/></span>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-4">
                                            <div className="form-group">
                                                <label>Nome: </label>
                                                <Field type="text" name="nome" className="form-control input-sm" />
                                                <span className="error-message"><ErrorMessage name='nome'/></span>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2">
                                            <div className="form-group">
                                                <label>Data de Nasc: </label>
                                                <Field type="date" name="dataNasc" className="form-control input-sm" />
                                                <span className="error-message"><ErrorMessage name='dataNasc'/></span>
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
                                                <span className="error-message"><ErrorMessage name='sexo'/></span>
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
                                                    <Field
                                                        type="text"
                                                        className="form-control  input-sm valid"
                                                        maxLength="9"
                                                        name="cep"
                                                        id="cep"
                                                    />
                                                    <span className="input-group-btn">
                                                        <a
                                                            href="#"
                                                            className="btn btn-warning input-sm btn-quadrado"
                                                            id="preencherCep"
                                                            onClick={(ev) => preencheEndereco(ev, values.cep, setFieldValue)}
                                                        >
                                                            Pesquisar
                                                        </a>
                                                    </span>
                                                    <span className="error-message"><ErrorMessage name='cep'/></span>
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
                                                <span className="error-message"><ErrorMessage name='endereco'/></span>
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
                                                <span className="error-message"><ErrorMessage name='numero'/></span>
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
                                                <span className="error-message"><ErrorMessage name='bairro'/></span>
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
                                                <span className="error-message"><ErrorMessage name='uf'/></span>
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
                                                <span className="error-message"><ErrorMessage name='cidade'/></span>
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
                                                <span className="error-message"><ErrorMessage name='email'/></span>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-4">
                                            <div className="row">
                                                <div className="col-xs-3 col-lg-4">
                                                    <label>DDD</label>
                                                    <Field
                                                        type="number"
                                                        className="form-control input-sm"
                                                        name="ddd_telefone"
                                                        maxLength="2"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='ddd_telefone'/></span>
                                                </div>
                                                <div className="col-xs-9 col-lg-8">
                                                    <label>Telefone</label>
                                                    <Field
                                                        type="number"
                                                        className="form-control input-sm"
                                                        name="telefone"
                                                        maxLength="8"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='telefone'/></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-4">
                                            <div className="row">
                                                <div className=" col-xs-3 col-lg-4">
                                                    <label>DDD</label>
                                                    <Field
                                                        type="number"
                                                        className="form-control input-sm"
                                                        name="dddCel"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='dddCel'/></span>
                                                </div>
                                                <div className=" col-xs-9 col-lg-8">
                                                    <label>Celular</label>
                                                    <Field
                                                        type="number"
                                                        className="form-control input-sm"
                                                        name="celular"
                                                    />
                                                    <span className="error-message"><ErrorMessage name='celular'/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                {/*}<button type="button" className="btn btn-primary btn-quadrado" id="btnInserirDependente">
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

                                <Card textoHeader="Dados para Login">
                                    <div className="row">
                                        <div className="col-xs-12 col-lg-2 ">
                                            <div className="form-group ">
                                                <label>Senha: </label>
                                                <Field type="password" name="senha" />
                                                <span className="error-message"><ErrorMessage name='senha'/></span>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2 ">
                                            <div className="form-group ">
                                                <label>Confirme a senha: </label>
                                                <Field type="password" name="confirmaSenha" />
                                                <span className="error-message"><ErrorMessage name='confirmaSenha'/></span>
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

export default Cadastro