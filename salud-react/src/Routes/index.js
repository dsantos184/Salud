import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Header from '../components/Header'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Header} />
        <Route path="/contato" component={''} />
        <Redirect from="*" to='/erro' />
    </Router>
)