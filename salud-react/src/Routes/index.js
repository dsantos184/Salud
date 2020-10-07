import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'
import Contato from '../paginas/externas/Contato'

const Routes = (props) => (

    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/contato" component={Contato} />
    </Switch>
)

export default Routes
