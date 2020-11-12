import { Breadcrumb } from "react-bootstrap"

const initialState = {
    id: '',
    titulo: '',
    valor: '',
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
            return { ...state, id: action.payload.id }
            break
        case 'editTitulo':
            return { ...state, id: action.payload.titulo }
            break
        case 'editValor':
            return { ...state, id: action.payload.valor }
            break
        case 'editBeneficios':
            return { ...state, id: action.payload.beneficios }
            break
        case 'editDadosPlano':
                const {dadosPlano} = action.payload
                return{...state, ...dadosPlano}
            break
    } 
}

export default PlanoEscolhidoReducers

