const initialState = {
    status: "",
    descrition: "",
}

const TransacaoReducers = (state = [], action ) =>{
    
    if( state.length == 0 )
    {
        return initialState
    }

    switch(action.type)
    {
        case 'editTransacao':
            return {...state, status: action.payload.status, description: action.payload.description}
            break
        default:
            return state
    }

}