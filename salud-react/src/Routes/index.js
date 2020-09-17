import React from 'react'
import { Router, Route, Redirect, HashRouter } from 'react-router-dom'

import Header from '../components/Header'

export default props => (
    <HashRouter>
        <Route path="/" component={Header} />
        <Route path="/contato" component={''} />
        <Redirect from="*" to='/erro' />
    </HashRouter>
)