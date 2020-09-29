import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'
import Contato from '../paginas/externas/Contato'

const Routes = (props) => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contato} />                
    </Switch>
)

export default Routes
