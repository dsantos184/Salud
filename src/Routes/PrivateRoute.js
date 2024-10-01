import React, { Component, Fragment, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { autenticar } from '../actions/AutenticacaoActions'

import Home from '../paginas/externas/Home'

import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'
import Login from '../paginas/externas/LoginCliente'
import Inicio from '../paginas/internas/Painel/Inicio'

import Pagamento from '../paginas/externas/Pagamento'

import Routes from './index'

import { Autorizacao, Autenticacao } from '../apis/Salud/Autenticacao'
import Forbiden from '../paginas/externas/Forbiden'


class PrivateRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {  

        console.log("render")
        console.log(this.props.autenticacao)

        if (this.props.autenticacao) {
            return <Route path={this.props.path} component={this.props.component} />
        } else {
             
            //return <Route path="/acesso-proibido" component={Forbiden}  />
            return <Redirect to="/acesso-proibido" />
        }
    }
}

const mapStateToProps = (state) => {  

    return {
        autenticacao: state.autenticacao.autenticacao 
    }
}

export default connect(mapStateToProps, { autenticar })(PrivateRoute); 
