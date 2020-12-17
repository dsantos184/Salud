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

import { Autorizacao, Autenticacao } from './../apis/Salud/Autenticacao'

import PrivateRoute from './PrivateRoute'
import Forbiden from '../paginas/externas/Forbiden'
 

class Routes extends Component {
    constructor(props) {
        super(props); 
    }

    render() { 
        console.log(this.props)
        return (
            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/contato" component={Contato} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login-cliente" component={Login} />
                <Route path="/pagamento" component={Pagamento} />

                <Route exact path="/" component={Home} />
                <Route path="/contato" component={Contato} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login-cliente" component={Login} />
                <Route path="/acesso-proibido" component={Forbiden}  />
                <Route path="/pagamento" component={Pagamento} />

                <PrivateRoute path="/clientes/listar" component={() => <h1>Você ESTÁ autenticado!</h1>} />

                <PrivateRoute path="/painel/inicio" component={Inicio} />
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
