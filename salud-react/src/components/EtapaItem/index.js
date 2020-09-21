import React, { Fragment } from 'react'

const EtapaItem = (props) => {
    return(
        <Fragment>
            <div class="container-passo">
                <div class="container-icone-passos" id={props.etapaId}>
                    <div class="border-passos">
                        <div class="icone-passos bg-dark-blue">
                            <img src={props.etapaIcon} />
                        </div>
                    </div>
                </div>
                <p class="descricao-passo color-white">
                    {props.texto1} <span class="etapa color-dark-blue">{props.texto2}</span>
                </p>
            </div>
        </Fragment>
    )
}

export default EtapaItem