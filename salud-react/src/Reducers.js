import { combineReducers } from 'redux'
import ClientesReducers from './reducers/ClientesReducers'
import PlanoEscolhidoReducers from './reducers/PlanoEscolhidoReducers'
import ModalReducers from './reducers/ModalReducers'


const Reducers = combineReducers({
    cliente: ClientesReducers,
    plano: PlanoEscolhidoReducers,
    modal: ModalReducers
})

export default Reducers