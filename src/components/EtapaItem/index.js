import React, { Fragment } from 'react'

const EtapaItem = (props) => {
    return(
        <Fragment>
            <div className="container-passo">
                <div className="container-icone-passos" id={props.etapaId}>
                    <div className="border-passos">
                        <div className="icone-passos bg-dark-blue">
                            <img src={props.etapaIcon} />
                        </div>
                    </div>
                </div>
                <p className="descricao-passo color-white">
                    {props.texto1} <span className="etapa color-dark-blue">{props.texto2}</span>
                </p>
            </div>
        </Fragment>
    )
}

export default EtapaItem