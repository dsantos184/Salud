import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'
import Contato from '../paginas/externas/Contato' 
import FormTeste from '../paginas/externas/FormTeste' 

const Routes = (props) => (

    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/contato" component={Contato} /> 
        <Route path="/form" component={FormTeste} /> 
    </Switch>
)

export default Routes
