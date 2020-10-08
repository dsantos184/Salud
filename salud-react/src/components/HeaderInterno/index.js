import React from 'react'
import Navbar from '../Navbar'


const HeaderInterno = ( props ) => {
    return (
        <header class="container-header" style={{height:"auto"}}>
            <Navbar />

            <div class="titulo-pagina">
                <section class="container">
                    <div class="breadcrumbs">
                        <span class="anterior color-light-blue">home</span>
                        <span class="atual color-white">formulário de cadastro</span>
                    </div>
                    <h1 class="color-white">{props.tituloHeader}</h1>
                </section>
            </div>
        </header>
    )
}

export default HeaderInterno