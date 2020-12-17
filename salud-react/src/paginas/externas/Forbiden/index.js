import React, {Component, Fragment} from 'react'
import HeaderInterno from './../../../components/HeaderInterno'
import Footer from './../../../components/Footer'

export default class Forbiden extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <HeaderInterno tituloHeader="Contato" />
                <main className="container-principal">    
                <h1>PORIBIDO</h1>
                    <Footer /> 
                </main>
            </Fragment>
        )
    }
}