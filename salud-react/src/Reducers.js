import { combineReducers } from 'redux'
import PlanoEscolhidoReducers from './reducers/PlanoEscolhidoReducers'

const Reducers = combineReducers({
    plano: PlanoEscolhidoReducers 
})

export default Reducers