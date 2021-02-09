import { combineReducers } from 'redux'
import ClientesReducers from './reducers/ClientesReducers'
import PlanoEscolhidoReducers from './reducers/PlanoEscolhidoReducers'
import ModalReducers from './reducers/ModalReducers'
import AutenticacaoReducers from './reducers/AutenticacaoReducers'
import PedidosReducers from './reducers/PedidosReducers'
 
const Reducers = combineReducers({
    cliente: ClientesReducers,
    plano: PlanoEscolhidoReducers,
    modal: ModalReducers,
    autenticacao: AutenticacaoReducers,
    pedido: PedidosReducers
})
 
export default Reducers