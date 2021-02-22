/*import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { editDadoscliente } from './actions/ClientesActions'
import { editDadosPlano } from './actions/PlanosEscolhidoActions'



const dadosPlano = {
    id: 1,
    titulo: 'Combo Individual',
    valor: 19.90
}

export class Teste extends Component 
{
    constructor(props)
    {
        super(props)

        this.state = {
            redir: false
        }

        this.setaRedux = this.setaRedux.bind(this) 
    }

    setaRedux()
    {
        const dadosCliente = {
            nome: "asasasasasas",
            cpf: '39331512015'
        }
        
        this.props.editDadoscliente(dadosCliente)

        this.setState({...this.state, redir: true})   
    }

    render()
    {
        if( this.state.redir )
        {
            return <Redirect to="/teste2" />
        }


        return(
            <div>
            <h1>Teste de redux</h1>
            
            <hr />
            <button onClick={()=>this.setaRedux()}>testar</button>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{ 
    }
}

const connectTest = connect(mapStateToProps, { editDadoscliente})(Teste)

export default connectTest*/


import React from 'react'

const Teste = (props) =>{

    console.log(props.match.url)
    
    return(
        <div>
            <h1>asjdasikjdhsaikjdh</h1>
        </div>
    )    
}

export default Teste