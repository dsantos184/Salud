import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'
import Contato from '../paginas/externas/Contato'
import Cadastro from '../paginas/externas/Cadastro'

const Routes = (props) => (

    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/contato" component={Contato} />

        <Route path="/cadastro" component={Cadastro} />
    </Switch>
)

export default Routes
