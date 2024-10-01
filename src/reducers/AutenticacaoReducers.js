const initialState = {

    autenticacao: false

}

const AutenticacaoReducers = (state = [], action) => {
    if (state.length == 0) {
        return initialState
    }


    const { type } = action

    switch (type) {
        case 'autenticar': 

            return { ...state, autenticacao: action.payload }
            break
        default: return state
    }
}

export default AutenticacaoReducers