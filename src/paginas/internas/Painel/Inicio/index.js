import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { autenticar } from './../../../../actions/AutenticacaoActions'
import { Link } from 'react-router-dom'

class Inicio extends Component {
    constructor(props) {
        super(props)
    }
 
    render() {  
        return (
            <div>
            <h1>Inicio</h1> 
            <Link to="/painel/clientes/listar">Teste</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    
    return {          
        autenticacao: state.autenticacao.autenticacao
    }
}

export default connect(mapStateToProps, { autenticar })(Inicio); 