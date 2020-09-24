import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'

import Home from '../paginas/externas/Home'
import Contato from '../paginas/externas/Contato'

const Routes = (props) => (

    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/contato">
            <Contato />
        </Route>
    </Switch>
)

export default Routes