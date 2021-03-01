import React from 'react'
import { connect } from 'react-redux'


const Transacao = props =>{
    return(
        <div>
            <p>Status da Transacao: {props.status}</p>
            <p>Descrição: {props.description}</p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        status: state.transacao.status,
        description: state.transacao.description
    }
}

export default connect(mapStateToProps)(Transacao)