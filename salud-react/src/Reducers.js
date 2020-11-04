import { combineReducers } from 'redux'
import ClientesReducers from './reducers/ClientesReducers'

const Reducers = combineReducers({
    clientes:ClientesReducers
})

export default Reducers