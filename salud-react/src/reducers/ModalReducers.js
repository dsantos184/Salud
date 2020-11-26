const initialState = {
    isOpen: false
}

const ModalReducers = (state = [], action) =>{
    if( state.length == 0 )
    {
        return initialState
    }

    const {type} = action

    switch(type)
    {
        case 'exibeModal':
            return {...state, isOpen: action.payload.isOpen}
            break
        default: return initialState
    }
}

export default ModalReducers