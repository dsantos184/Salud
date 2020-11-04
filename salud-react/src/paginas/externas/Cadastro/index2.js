import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import consultaCep from '../../../Utils'

import {Field, Form, formik} from  'formik'


export class Cadastro extends Component
{
    constructor(props)
    {
        super(props)
        this.preencheEndereco = this.preencheEndereco.bind(this)
    }

    /*preencheEndereco(event, cep)
    {
        event.preventDefault()

        consultaCep(cep).then(resp=>{
            const estado = this.state
            estado.dadosForm.endereco.bairro = resp.bairro
            estado.dadosForm.endereco.endereco = resp.logradouro
            estado.dadosForm.endereco.cidade = resp.localidade
            estado.dadosForm.endereco.uf = resp.uf

            this.setState(estado)
        })
    }*/

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
                                            <input 
                                                type="number" 
                                                className="form-control input-sm cpf_valido" 
                                                name="cpf" id="cpf" required="required" 
                                                placeholder="CPF" 
                                                value={this.props.cpf}
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
                                                value={this.props.dataNasc} 
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
                                                value={this.props.nome} 
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
                                                value={this.props.nomeMae} 
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
                                                value={this.props.sexo}
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
                                                value={this.props.nacionalidade}
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
                                                value={this.props.estadoCivil}
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
                                                value={this.props.tipoDoc}
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
                                                value={this.props.identificacao}
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
                                                value={this.props.orgaoExpedidor}
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
                                                value={this.props.dataExpedicao}
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
                                                value={this.props.profissao}
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
                                                value={this.props.rendaMensal} 
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
                                                    value={this.props.cep}
                                                    onChange={(event)=>this.props.editCep(event.target.value)}
                                                />
                                                <span className="input-group-btn">
                                                    <a 
                                                        href="#"
                                                        className="btn btn-warning input-sm btn-quadrado"
                                                        id="preencherCep"
                                                        onClick={(e)=>this.preencheEndereco(e, this.props.cep)}
                                                    >
                                                        Pesquisar
                                                    </a>
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
                                                value={this.props.endereco}
                                                onChange={(event)=>this.props.editEndereco(event.target.value)}
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
                                                value={this.props.numero}
                                                onChange={(event)=>this.props.editNumero(event.target.value)}    
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
                                                value={this.props.complemento}
                                                onChange={(event)=>this.props.editComplemento(event.target.value)}    
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
                                                value={this.props.bairro}
                                                onChange={(event)=>this.props.editBairro(event.target.value)}
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
                                                value={this.props.uf}
                                                onChange={(event)=>this.props.editUf(event.target.value)}
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
                                                value={this.props.cidade}
                                                onChange={(event)=>this.props.editCidade(event.target.value)}
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
                                                value={this.props.email}
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
                                                    value={this.props.dddTel}
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
                                                    value={this.props.telefone}
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
                                                    value={this.props.dddCel}
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
                                                    value={this.props.celular}
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

const mapStateToProps = (state) => {
    return {
        cpf: state.clientes.cpf,
        dataNasc: state.clientes.dataNasc,
        nome: state.clientes.nome,
        nomeMae: state.clientes.nomeMae,
        sexo: state.clientes.sexo,
        nacionalidade: state.clientes.nacionalidade,
        estadoCivil: state.clientes.estadoCivil,
        tipoDoc: state.clientes.tipoDoc,
        identificacao: state.clientes.identificacao,
        orgaoExpedidor: state.clientes.orgaoExpedidor,
        dataExpedicao: state.clientes.dataExpedicao,
        profissao: state.clientes.profissao,
        rendaMensal: state.clientes.rendaMensal,
        cep: state.clientes.cep,
        endereco: state.clientes.endereco,
        numero: state.clientes.numero,
        complemento: state.clientes.complemento,
        bairro: state.clientes.bairro,
        uf: state.clientes.uf,
        cidade: state.clientes.cidade,      
        email: state.clientes.email,
        dddTel: state.clientes.dddTel,
        telefone:state.clientes.telefone,
        dddCel: state.clientes.dddCel,
        celular: state.clientes.celular,
    }
}


const clientesConnect = connect(mapStateToProps, {
                                                    editCep, 
                                                    editEndereco,
                                                    editNumero,
                                                    editComplemento,
                                                    editBairro,
                                                    editUf,
                                                    editCidade,
                                                })(Cadastro)

export default clientesConnect