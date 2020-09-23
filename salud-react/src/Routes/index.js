import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Home from '../paginas/externas/Home'

export default props => (
    <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/contato" component={''} />
        {/*<Redirect from="*" to='/erro' /> */}
    </HashRouter>
)