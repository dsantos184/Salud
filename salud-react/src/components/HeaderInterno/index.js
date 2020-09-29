import React from 'react'
import Navbar from '../Navbar'

const HeaderInterno = () => {
    return (
        <header class="container-header">
            <Navbar />

            <div class="titulo-pagina">
                <section class="container">
                    <div class="breadcrumbs">
                        <span class="anterior color-light-blue">home</span>
                        <span class="atual color-white">formulário de cadastro</span>
                    </div>
                    <h1 class="color-white">formulário de cadastro</h1>
                </section>
            </div>
        </header>
    )
}

export default HeaderInterno