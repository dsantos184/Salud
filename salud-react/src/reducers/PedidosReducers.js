const initialState = {
    cliente_id: '',
    created_at: '',
    id: '',
    meio_pagamento_id: '',
    plano_id: '',
    vendedor_id: ''
}

const PedidosResducres = (state = [], action) =>{

    if( state.length == 0 )
    {
        return initialState
    }

    switch(action.type)
    {
        case 'editDadosPedido':
            return{...state, ...action.payload.dadosPedido}
        default:
            return state
    }
}

export default PedidosResducres