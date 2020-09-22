import React, { Component } from 'react'

const Planos = (props) => {
    return (
        <section class="planos-home">
            {/*Aqui Vai um SVG*/}

            <div class="container-beneficios">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="color-red text-center">Benefícios</h2>
                            <h3 class="color-white text-center">Escolha o seu plano:</h3>
                        </div>
                    </div>

                    <div class="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos