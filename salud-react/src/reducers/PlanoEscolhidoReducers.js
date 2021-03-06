const initialState = {    
    id: '',
    titulo: '',
    valor: '',
    idGetnet: "",
    beneficios: []
}

const PlanoEscolhidoReducers = (state=[], action) =>
{
    if (state.length == 0) {
        return initialState
    }

    switch(action.type)
    {
        case 'editId':
            return {...state, id: action.payload.id}
            break
        case 'editTitulo':
            return {...state, titulo: action.payload.titulo}
            break
        case 'editValor':
            return {...state, valor: action.payload.valor}
            break
        case 'editBeneficios':
            return {...state, beneficio: action.payload.beneficios}
            break
        case 'editDadosPlano':
                return {...state,...action.payload.dadosPlano}
            break
        default: return  state
    } 
}

export default PlanoEscolhidoReducers

