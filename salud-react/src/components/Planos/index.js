import React, { Component } from 'react'

const Planos = (props) => {
    return (
        <section className="planos-home">
            {/*Aqui Vai um SVG*/}

            <div className="container-beneficios">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="color-red text-center">Benefícios</h2>
                            <h3 className="color-white text-center">Escolha o seu plano:</h3>
                        </div>
                    </div>

                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos