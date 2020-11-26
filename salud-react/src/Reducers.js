import { combineReducers } from 'redux'
import PlanoEscolhidoReducers from './reducers/PlanoEscolhidoReducers'
import ModalReducers from './reducers/ModalReducers'

const Reducers = combineReducers({
    plano: PlanoEscolhidoReducers,
    modal: ModalReducers
})

export default Reducers