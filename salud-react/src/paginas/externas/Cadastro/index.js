import React, { Fragment } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'

const Cadastro = (props) => {

    return (
        <Fragment>
            <HeaderInterno tituloHeader="Formulário de cadastro" />

            <div className="container">
                <section className="container-form">
                    <form className="clearfix" method="POST" action="envia.php">

                        <Card textoHeader="Dados do Segurado">
                            <div className="row">
                                <div className="col-xs-12 col-lg-2">
                                    <div className="form-group">
                                        <label>CPF: </label>
                                        <input type="number" className="form-control input-sm cpf_valido" name="cliente[cpf]" id="cpf" required="required" placeholder="CPF" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Data de Nasc: </label>
                                        <input type="date" className="form-control input-sm" name="cliente[data_nasc]" id="data_nasc" required="required" placeholder="Data de Nascimento" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-4 ">
                                    <div className="form-group ">
                                        <label>Nome: </label>
                                        <input type="text" className="form-control input-sm" name="cliente[nome]" id="nome" required="required" placeholder="Nome Completo" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-4 ">
                                    <div className="form-group ">
                                        <label>Nome da Mãe</label>
                                        <input type="text" className="form-control input-sm " name="cliente[nome_mae]" id="nome_mae" required="required" placeholder="Nome da Mãe" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Sexo: </label>
                                        <select className="form-control input-sm" name="cliente[sexo]" id="sexo">
                                            <option value="">SELECIONE </option>
                                            <option value="M">MASCULINO </option>
                                            <option value="F">FEMININO </option>
                                            <option value="O">OUTROS </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Nacionalidade:</label>
                                        <input type="text" className="form-control input-sm valid" name="cliente[nacionalidade]" id="nacionalidade" placeholder="Nacionalidade" value="brasileiro" required="" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Estado Civil:</label>
                                        <select className="form-control input-sm " name="cliente[estado_civil]" id="estado_civil" required="">
                                            <option value="">SELECIONE</option>
                                            <option value="SOLTEIRO">SOLTEIRO</option>
                                            <option value="CASADO">CASADO</option>
                                            <option value="SEPARADO">SEPARADO</option>
                                            <option value="DIVORCIADO">DIVORCIADO</option>
                                            <option value="VIÚVO">VIÚVO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Tipo Doc:</label>
                                        <select className="form-control input-sm " name="cliente[tipo_doc]" id="tipo_doc">
                                            <option value="">SELECIONE</option>
                                            <option value="RG">RG</option>
                                            <option value="CNH">CNH</option>
                                            <option value="PASSAPORTE">PASSAPORTE</option>
                                            <option value="CARTEIRA DE TRABALHO">CARTEIRA DE TRABALHO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Nº de Identificação: </label>
                                        <input type="text" className="form-control input-sm " name="cliente[numero_identificacao]" id="numero_identificacao" placeholder="Nº de Identificação" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Orgão Expedidor: </label>
                                        <input type="text" className="form-control input-sm " name="cliente[orgao_expedidor]" id="orgao_expedidor" placeholder="Orgão Expedidor" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Data de Expedição: </label>
                                        <input type="date" className="form-control input-sm " name="cliente[data_expedicao]" id="data_expedicao" placeholder="Data de Expediçao" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-4 ">
                                    <div className="form-group ">
                                        <label>Atividade Exercida/Profissão/Ocupacão</label>
                                        <input type="text" className="form-control input-sm " name="cliente[profissao]" id="profissao" placeholder="Profissão" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Renda Mensal (R$)</label>
                                        <input type="number" className="form-control input-sm" name="cliente[renda_mensal]" id="renda_mensal" placeholder="Renda Mensal em Real R$" onchange="somenteNumeros(this)" onkeyup="somenteNumeros(this)" required="" />
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
                                            <input type="text" className="form-control  input-sm valid" maxlength="9" name="cliente[cep]" id="cep" required="required" placeholder="Digite seu cep" aria-invalid="false" />
                                            <span className="input-group-btn">
                                                <a href="javascript:void(0)" className="btn btn-warning input-sm" id="preencherCep">Pesquisar</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className=" col-xs-12 col-lg-7">
                                    <div className="form-group " id="DivEndereco">
                                        <label>Endereco</label>
                                        <input type="text" className="form-control input-sm valid" name="cliente[endereco]" id="logradouro" placeholder="Endereco" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className=" col-xs-12 col-lg-2">
                                    <div className="form-group ">
                                        <label>Número</label>
                                        <input type="text" className="form-control input-sm" name="cliente[numero]" id="numero" placeholder="Nº" required="" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-3 ">
                                    <div className="form-group ">
                                        <label>Complemento</label>
                                        <input type="text" className="form-control input-sm " name="cliente[complemento]" id="complemento" placeholder="Complemento" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-lg-3 ">
                                    <div className="form-group " id="DivBairro">
                                        <label>Bairro</label>
                                        <input type="text" className="form-control input-sm valid" name="cliente[bairro]" id="bairro" placeholder="Bairro" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>UF</label>
                                        <input type="text" className="form-control input-sm valid" name="cliente[uf]" id="uf" placeholder="UF" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-3 ">
                                    <div className="form-group ">
                                        <label>Cidade</label>
                                        <input type="text" className="form-control input-sm valid" name="cliente[cidade]" id="cidade" placeholder="Cidade" aria-invalid="false" />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card textoHeader="Contatos">
                            <div className="row">
                                <div className=" col-xs-12 col-lg-4">
                                    <div className="form-group ">
                                        <label>E-mail</label>
                                        <input type="email" className="form-control input-sm " name="cliente[email]" id="email" required="required" placeholder="E-mail" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-4">
                                    <div className="row">
                                        <div className="col-xs-3 col-lg-4">
                                            <label>DDD</label>
                                            <input type="number" max="99" className="form-control input-sm" name="ddd_telefone" id="ddd_telefone" required="required" placeholder="DDD" />
                                        </div>
                                        <div className="col-xs-9 col-lg-8">
                                            <label>Telefone</label>
                                            <input type="number" className="form-control input-sm" name="cliente[telefone]" id="telefone" required="required" placeholder="Telefone" onkeypress="mascara( this, mtel )" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-4">
                                    <div className="row">
                                        <div className=" col-xs-3 col-lg-4">
                                            <label>DDD</label>
                                            <input type="number" max="99" className="form-control input-sm" name="ddd_celular" id="ddd_celular" required="required" placeholder="DDD" />
                                        </div>
                                        <div className=" col-xs-9 col-lg-8">
                                            <label>Celular</label>
                                            <input type="number" className="form-control input-sm" name="cliente[celular]" id="celular" required="required" placeholder="Celular" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <button type="button" className="btn btn-primary" id="btnInserirDependente" onclick="geraBoxDependente(event)">
                            <i className="fa fa-plus-circle"></i> Adicionar Dependente
                        </button>

                        <div style={{ marginBottom: "20px" }}>
                            <small style={{ fontSize: "11px;" }}>* Máximo de 3 dependentes</small>
                            <p></p>
                        </div>

                        <Card textoHeader="Dependente">
                            <div className="row">
                                <div className="col-xs-12 col-lg-3 ">
                                    <div className="form-group">
                                        <label>CPF: </label>
                                        <input type="number" className="form-control input-sm cpf_valido" name="dependente[1][cpf]" id="cpf_dependente" required="required" placeholder="CPF" />
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
                                        <input type="date" className="form-control input-sm" name="dependente[1][data_nasc]" id="data_nasc_dependente" required="required" placeholder="Data de Nascimento" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-lg-2 ">
                                    <div className="form-group ">
                                        <label>Grau de Parentesco</label>
                                        <select className="form-control input-sm " name="dependente[1][grau_parentesco]" id="dependente_grau_parentesco">
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

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <button type="submit" className="btn bg-red color-white btn-lg float-right">Cadastrar</button>
                    </form>
                </section>
            </div>

            <Footer />

        </Fragment>
    )
}

export default Cadastro