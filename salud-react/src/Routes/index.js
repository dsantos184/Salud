import React, { Component, Fragment, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../paginas/externas/Home'

import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'
import Login from '../paginas/externas/LoginCliente'

import { Autorizacao, Autenticacao } from './Autenticacao'
import Modal from './../components/Modal'

class PrivateRoute extends Component{
    constructor(props){
        super(props);
        this.state = { auth: false}
    }

    componentWillMount(){        

        Autenticacao(this.props).then( resp => { 
            this.setState({auth:resp})  
            return resp
        }) 
 
    }

    render(){       
        if( this.state.auth ){ 
            return <Route path={this.props.path} component={this.props.component} />
        }else{
            
          // return <Route path={this.props.path} component={Login}  />
            return <Redirect to="/login-cliente?auth=false" />
        } 
    }
}

const Routes = (props) => (

    <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login-cliente" component={Login} />

        <PrivateRoute path="/clientes/listar" component={() => <h1>Você ESTÁ autenticado!</h1>} />

    </Switch>
)

export default Routes
