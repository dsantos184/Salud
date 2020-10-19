import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'

export default class Cadastro extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            dadosForm:{
                segurado:{
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
                    rendaMensal: ""
                },
                endereco:{
                    cep: "",
                    endereco: "",
                    numero: "",
                    complemento: "",
                    bairro: "",
                    uf: "",
                    cidade: "",                        
                },
                contatos:{
                    email: "",
                    dddTel: "",
                    telefone:"",
                    dddCel: "",
                    celular: ""
                },
                dependentes:[
                    {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
                    {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
                    {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
                ]
            } 
        }

        this.setDadosSegurado = this.setDadosSegurado.bind(this)
        this.setDadosEndereco = this.setDadosEndereco.bind(this)
        this.setDadosContato = this.setDadosContato.bind(this)
    }

    setDadosSegurado(event)
    {
        const estado = this.state
        estado.dadosForm.segurado[event.target.name] = event.target.value
        this.setState(estado)   
    }

    setDadosEndereco(event)
    {
        const estado = this.state
        estado.dadosForm.endereco[event.target.name] = event.target.value
        this.setState(estado)
    }

    setDadosContato(event)
    {
        const estado = this.state
        estado.dadosForm.contatos[event.target.name] = event.target.value
        this.setState(estado)
    }

    render()
    {        
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
                                            <label>{this.state.dadosForm.segurado.cpf}</label>
                                            <input 
                                                type="number" 
                                                className="form-control input-sm cpf_valido" 
                                                name="cpf" id="cpf" required="required" 
                                                placeholder="CPF" 
                                                value={this.state.dadosForm.segurado.cpf}
                                                onChange={this.setDadosSegurado}
                                            />
                                            
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Data de Nasc: </label>
                                            <input 
                                                type="date" 
                                                className="form-control input-sm" 
                                                name="dataNasc" 
                                                id="data_nasc" 
                                                required="required" 
                                                placeholder="Data de Nascimento"
                                                value={this.state.dadosForm.segurado.dataNasc} 
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-4 ">
                                        <div className="form-group ">
                                            <label>Nome: </label>
                                            <input 
                                                type="text" 
                                                className="form-control input-sm" 
                                                name="nome" id="nome" 
                                                required="required" 
                                                placeholder="Nome Completo"
                                                value={this.state.dadosForm.segurado.nome} 
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-4 ">
                                        <div className="form-group ">
                                            <label>Nome da Mãe</label>
                                            <input 
                                                type="text"
                                                className="form-control input-sm "
                                                name="nomeMae" id="nome_mae"
                                                required="required"
                                                placeholder="Nome da Mãe"
                                                value={this.state.dadosForm.segurado.nomeMae} 
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Sexo: </label>
                                            <select 
                                                className="form-control input-sm" 
                                                name="sexo" 
                                                id="sexo"
                                                value={this.state.dadosForm.segurado.sexo}
                                                onChange={this.setDadosSegurado}
                                            >
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
                                            <input 
                                                type="text"
                                                className="form-control input-sm valid"
                                                name="nacionalidade" 
                                                id="nacionalidade" 
                                                placeholder="Nacionalidade" 
                                                value={this.state.dadosForm.segurado.nacionalidade}
                                                required=""
                                                aria-invalid="false"
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Estado Civil:</label>
                                            <select 
                                                className="form-control input-sm "
                                                name="estadoCivil" 
                                                id="estado_civil" 
                                                required=""
                                                value={this.state.dadosForm.segurado.estadoCivil}
                                                onChange={this.setDadosSegurado}
                                            >
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
                                            <select
                                                className="form-control input-sm "
                                                name="tipoDoc"
                                                id="tipo_doc"
                                                value={this.state.dadosForm.segurado.tipoDoc}
                                                onChange={this.setDadosSegurado}
                                            >
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
                                            <input 
                                                type="text"
                                                className="form-control input-sm "
                                                name="identificacao"
                                                id="numero_identificacao"
                                                placeholder="Nº de Identificação"
                                                value={this.state.dadosForm.segurado.identificacao}
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Orgão Expedidor: </label>
                                            <input
                                                type="text"
                                                className="form-control input-sm "
                                                name="orgaoExpedidor"
                                                id="orgao_expedidor"
                                                placeholder="Orgão Expedidor"
                                                value={this.state.dadosForm.segurado.orgaoExpedidor}
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Data de Expedição: </label>
                                            <input
                                                type="date"
                                                className="form-control input-sm "
                                                name="dataExpedicao"
                                                id="data_expedicao"
                                                placeholder="Data de Expediçao"
                                                value={this.state.dadosForm.segurado.dataExpedicao}
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-4 ">
                                        <div className="form-group ">
                                            <label>Atividade Exercida/Profissão/Ocupacão</label>
                                            <input 
                                                type="text"
                                                className="form-control input-sm "
                                                name="profissao"
                                                id="profissao"
                                                placeholder="Profissão"
                                                value={this.state.dadosForm.segurado.profissao}
                                                onChange={this.setDadosSegurado}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>Renda Mensal (R$)</label>
                                            <input 
                                                type="number"
                                                className="form-control input-sm"
                                                name="rendaMensal" 
                                                id="renda_mensal" 
                                                placeholder="Renda Mensal em Real R$"
                                                value={this.state.dadosForm.segurado.rendaMensal} 
                                                onChange={this.setDadosSegurado} 
                                                required="" />
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
                                                <input 
                                                    type="text" 
                                                    className="form-control  input-sm valid" 
                                                    maxLength="9" 
                                                    name="cep"
                                                    id="cep"
                                                    required="required" 
                                                    placeholder="Digite seu cep" 
                                                    aria-invalid="false"
                                                    value={this.state.dadosForm.endereco.cep}
                                                    onChange={this.setDadosEndereco}
                                                />
                                                <span className="input-group-btn">
                                                    <a href="#" className="btn btn-warning input-sm btn-quadrado" id="preencherCep">Pesquisar</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className=" col-xs-12 col-lg-7">
                                        <div className="form-group " id="DivEndereco">
                                            <label>Endereco</label>
                                            <input
                                                type="text"
                                                className="form-control input-sm valid"
                                                name="endereco"
                                                id="logradouro"
                                                placeholder="Endereco"
                                                aria-invalid="false"
                                                value={this.state.dadosForm.endereco.endereco}
                                                onChange={this.setDadosEndereco}
                                            />
                                        </div>
                                    </div>
    
                                    <div className=" col-xs-12 col-lg-2">
                                        <div className="form-group ">
                                            <label>Número</label>
                                            <input
                                                type="text"
                                                className="form-control input-sm"
                                                name="numero"
                                                id="numero"
                                                placeholder="Nº"
                                                required=""
                                                value={this.state.dadosForm.endereco.numero}
                                                onChange={this.setDadosEndereco}    
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-3 ">
                                        <div className="form-group ">
                                            <label>Complemento</label>
                                            <input
                                                type="text"
                                                className="form-control input-sm "
                                                name="complemento"
                                                id="complemento"
                                                placeholder="Complemento"
                                                value={this.state.dadosForm.endereco.complemento}
                                                onChange={this.setDadosEndereco}    
                                            />
                                        </div>
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className="col-xs-12 col-lg-3 ">
                                        <div className="form-group " id="DivBairro">
                                            <label>Bairro</label>
                                            <input
                                                type="text"
                                                className="form-control input-sm valid"
                                                name="bairro" 
                                                id="bairro"
                                                placeholder="Bairro"
                                                aria-invalid="false"
                                                value={this.state.dadosForm.endereco.bairro}
                                                onChange={this.setDadosEndereco}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-2 ">
                                        <div className="form-group ">
                                            <label>UF</label>
                                            <input 
                                                type="text"
                                                className="form-control input-sm valid"
                                                name="uf"
                                                id="uf"
                                                placeholder="UF"
                                                aria-invalid="false"
                                                value={this.state.dadosForm.endereco.uf}
                                                onChange={this.setDadosEndereco}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-xs-12 col-lg-3 ">
                                        <div className="form-group ">
                                            <label>Cidade</label>
                                            <input
                                                type="text"
                                                className="form-control input-sm valid"
                                                name="cidade"
                                                id="cidade"
                                                placeholder="Cidade"
                                                aria-invalid="false"
                                                value={this.state.dadosForm.endereco.cidade}
                                                onChange={this.setDadosEndereco}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
    
                            <Card textoHeader="Contatos">
                                <div className="row">
                                    <div className=" col-xs-12 col-lg-4">
                                        <div className="form-group ">
                                            <label>E-mail</label>
                                            <input
                                                type="email"
                                                className="form-control input-sm "
                                                name="email"
                                                id="email"
                                                required="required"
                                                placeholder="E-mail"
                                                value={this.state.dadosForm.contatos.email}
                                                onChange={this.setDadosContato}
                                            />
                                        </div>
                                    </div>
    
                                    <div className="col-md-12 col-lg-4">
                                        <div className="row">
                                            <div className="col-xs-3 col-lg-4">
                                                <label>DDD</label>
                                                <input
                                                    type="number"
                                                    max="99"
                                                    className="form-control input-sm"
                                                    name="ddd_telefone"
                                                    id="dddTel"
                                                    required="required"
                                                    placeholder="DDD"
                                                    value={this.state.dadosForm.contatos.dddTel}
                                                    onChange={this.setDadosContato}    
                                                />
                                            </div>
                                            <div className="col-xs-9 col-lg-8">
                                                <label>Telefone</label>
                                                <input
                                                    type="number"
                                                    className="form-control input-sm"
                                                    name="telefone"
                                                    id="telefone"
                                                    required="required"
                                                    placeholder="Telefone"
                                                    value={this.state.dadosForm.contatos.telefone}
                                                    onChange={this.setDadosContato}
                                                />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-md-12 col-lg-4">
                                        <div className="row">
                                            <div className=" col-xs-3 col-lg-4">
                                                <label>DDD</label>
                                                <input
                                                    type="number"
                                                    max="99"
                                                    className="form-control input-sm"                                                    
                                                    name="dddCel"
                                                    id="ddd_celular"
                                                    required="required"
                                                    placeholder="DDD"
                                                    value={this.state.dadosForm.contatos.dddCel}
                                                    onChange={this.setDadosContato}    
                                                />
                                            </div>
                                            <div className=" col-xs-9 col-lg-8">
                                                <label>Celular</label>
                                                <input
                                                    type="number"
                                                    className="form-control input-sm"
                                                    name="celular"
                                                    id="celular"
                                                    required="required"
                                                    placeholder="Celular"
                                                    value={this.state.dadosForm.contatos.celular}
                                                    onChange={this.setDadosContato}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
    
                            <button type="button" className="btn btn-primary btn-quadrado" id="btnInserirDependente">
                                <i className="fa fa-plus-circle"></i> Adicionar Dependente
                            </button>
    
                            <div style={{ marginBottom:"20px" }}>
                                <small style={{fontSize:"11px"}}>* Máximo de 3 dependentes</small>
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
}