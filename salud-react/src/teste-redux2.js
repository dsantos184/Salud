import React, {Component} from 'react'
import { connect } from 'react-redux'
import {editDadosPlano} from './actions/PlanosEscolhidoActions'


export class Teste2 extends Component
{
    constructor(props)
    {
        super(props)
    }

    componentDidMount()
    {
        const plano = {
            id: 1,
            titulo:'Combo Individual' ,
            valor: '19.90'
        }

        this.props.editDadosPlano(plano)
    }


    render()
    {
        console.log(this.props)
        return(
            <h1>asasas</h1>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        cliente:{
            nome: state.cliente.nome,
            cpf: state.cliente.cpf
        },
        plano:{
            id: state.plano.id,
            titulo: state.plano.titulo,
            valor: state.plano.valor
        }
    }       
}

const connectTeste2 = connect(mapStateToProps, {editDadosPlano})(Teste2)

export default connectTeste2