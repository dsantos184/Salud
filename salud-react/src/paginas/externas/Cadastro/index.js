import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import consultaCep from '../../../Utils'

import { Formik, Field, Form } from 'formik'

const Cadastro = props => {
    return (
        <Fragment>
            <HeaderInterno tituloHeader="Formulário de cadastro" />
            <div className="container">
                <section className="container-form">
                    <Formik
                        initialValues={{
                            cpf: "",
                            dataNasc: "",
                            nome: "",
                            nomeMae: "",
                            sexo: "",
                            nacionalidade: "brasileira",
                            estadoCivil: "",
                            tipoDoc: "",
                            identificacao: "",
                            orgaoExpedidor: "",
                            dataExpedicao: "",
                            profissao: "",
                            rendaMensal: "",
                            cep: "",
                            endereco: "",
                            numero: "",
                            complemento: "",
                            bairro: "",
                            uf: "",
                            cidade: "",
                            email: "",
                            dddTel: "",
                            telefone: "",
                            dddCel: "",
                            celular: "",
                            dependentes: [
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                                { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
                            ]
                        }}
                        render={({ values }) => (
                            <Form className="clearfix">
                                <Card textoHeader="Dados do Segurado">
                                    <div className="row">
                                        <div className="col-xs-12 col-lg-2">
                                            <div className="form-group">
                                                <label>CPF: </label>
                                                <Field type="number" name="cpf" className="form-control input-sm cpf_valido" />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2">
                                            <div className="form-group">
                                                <label>Data de Nasc: </label>
                                                <Field type="date" name="dataNasc" className="form-control input-sm" />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-4">
                                            <div className="form-group">
                                                <label>Nome: </label>
                                                <Field type="text" name="nome" className="form-control input-sm" />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-4">
                                            <div className="form-group">
                                                <label>Nome da Mãe: </label>
                                                <Field type="text" name="nomeMae" className="form-control input-sm" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
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

                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-lg-2 ">
                                            <div className="form-group ">
                                                <label>Nacionalidade:</label>
                                                <Field
                                                    type="text"
                                                    className="form-control input-sm valid"
                                                    name="nacionalidade"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Form>
                        )}
                    />
                </section>
            </div>
        </Fragment>
    )
}

export default Cadastro