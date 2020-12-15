import React, { Component, Fragment, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../paginas/externas/Home'

import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'
import Login from '../paginas/externas/LoginCliente'
import Inicio from '../paginas/internas/Painel/Inicio'

import { Autorizacao, Autenticacao } from '../apis/Salud/Autenticacao'
 


class PrivateRoute extends Component {
    constructor(props) {
        super(props); 
         
    }

    render() { 

        if (this.props.auth) {
            return <Route path={this.props.path} component={this.props.component} />
        } else {

            //return <Route path={this.props.path} component={Login}  />
            return <Redirect to="/login-cliente?auth=false" />
        }

    }
}


class Routes extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/contato" component={Contato} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login-cliente" component={Login} />

                <PrivateRoute path="/clientes/listar" component={() => <h1>Você ESTÁ autenticado!</h1>} />

                <PrivateRoute path="/painel/inicio" component={Inicio} />

            </Switch>
        )
    }

}
 

export default   Routes 
