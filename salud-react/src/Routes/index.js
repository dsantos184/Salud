import React, { Component, Fragment, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { autenticar } from './../actions/AutenticacaoActions'

import Home from '../paginas/externas/Home'

import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'
import Login from '../paginas/externas/LoginCliente'
import Inicio from '../paginas/internas/Painel/Inicio'
import Pagamento from '../paginas/externas/Pagamento'
import Teste from '../teste-redux'

import { Autorizacao, Autenticacao } from './../apis/Salud/Autenticacao'

import PrivateRoute from './PrivateRoute'
import Forbiden from '../paginas/externas/Forbiden'

class Routes extends Component {
    constructor(props) {
        super(props); 
    }

    render() {  
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contato} />
                <Route path="/cadastro" component={Cadastro} />
                <Route exact path="/login-cliente" component={Login} />
                <Route exact path="/acesso-proibido" component={Forbiden}  />
                <Route exact path="/pagamento" component={Pagamento} />
                <Route exact path="/teste" component={Teste} />
                
                <PrivateRoute path="/painel/inicio" component={Inicio} /> 
                <PrivateRoute path="/painel/clientes/listar" component={ () => <h1>Oi</h1> } />

            </Switch>
        )
    }
}

     
        


const mapStateToProps = (state) => {  

    return {
        autenticacao: state.autenticacao.autenticado 
    }
}

export default connect(mapStateToProps, { autenticar })( Routes ); 
