import { combineReducers } from 'redux'
import PlanoEscolhidoReducers from './reducers/PlanoEscolhidoReducers'
import ModalReducers from './reducers/ModalReducers'
import AutenticacaoReducers from './reducers/AutenticacaoReducers'
 
const Reducers = combineReducers({
    plano: PlanoEscolhidoReducers,
    modal: ModalReducers,
    autenticacao: AutenticacaoReducers
})
 
export default Reducers