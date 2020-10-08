import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'

import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'
import FormTeste from '../paginas/externas/FormTeste' 


const Routes = (props) => (

    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/contato" component={Contato} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/form" component={FormTeste} /> 
    </Switch>
)

export default Routes
