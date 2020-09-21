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
                        <div class="col-lg-3 col-md-6">
                            <div class="box-plano">
                                <div class="topo-plano  text-center">
                                    <svg id="Layer_1" data-name="Layer 1" class="shadow-svg-topo-plano" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 350.7 190.12">
                                        <linearGradient id="bg-svg-topo-plano-1" x2="1" y2="0">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <path fill="url(#bg-svg-topo-plano-1)" stroke="none"
                                            d="M339.38,170.92,185.57,189.51a85.14,85.14,0,0,1-20.43,0L11.32,170.92C4.81,170.13,0,165.76,0,160.63V10.41C0,4.66,6,0,13.38,0h324c7.39,0,13.37,4.66,13.37,10.41V160.63C350.7,165.76,345.9,170.13,339.38,170.92Z" />
                                    </svg>

                                    <div class="circulo-topo-plano ">
                                        <div class="texto">
                                            <div class="texto-maior">R$ 19,90</div>
                                            <div class="texto-menor">/mes</div>
                                        </div>
                                    </div>
                                    <span class="titulo-topo-plano">Individual Pleno</span>
                                </div>
                                <ul class="lista-plano">
                                    <li></li>
                                    <li>A finalidade do elemento COL vai muito além de servir como referência para estilização</li>
                                    <li>A finalidade do elemento COL vai muito além de servir como referência para estilização</li>
                                    <li>lista 1</li>
                                    <li>lista 2</li>
                                    <li>lista 1</li>
                                    <li>lista 2</li>
                                    <li>lista 2</li>
                                    <li>lista 2</li>
                                    <li></li>
                                    <li>
                                        <a href="" class="btn-planos-home bg-btn-plano-1 color-white">Quero este plano!</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos