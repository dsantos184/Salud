import React, { Component, Fragment } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import axios from 'axios'

export default class Contato extends Component {

    constructor(props) {
        super(props)
    }

    enviarForm(event){
        console.log(this.state)
        event.preventDefault();
    }

    mudaEstado(event){
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name] : value
        })
 
    }
 

    render() {

        return (

            <Fragment>
                <HeaderInterno titulo="Contato" />

                <div className="container container-pagina-interna">
                    <section>
                        <form onSubmit={ (event) => this.enviarForm(event) }>
                            <input name="inputNome" type="text" onChange={(event) => this.mudaEstado(event)}></input>
                            <button type="submit">Enviar</button>
                        </form>
                    </section>
                </div>

                <Footer />

            </Fragment>
        )
    }
}
