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
                <HeaderInterno tituloHeader="ACESSO PROIBIDO" />
                <main className="container-principal">    
                    <div className="container container-pagina-interna clearfix">
                        <section>
                            <h1>ACESSO PROIBIDO</h1>
                        </section>
                    </div>
                    
                    <Footer /> 
                </main>
            </Fragment>
        )
    }
}