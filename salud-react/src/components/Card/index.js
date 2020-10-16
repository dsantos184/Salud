import React from 'react'

const Card = props => {
    return (
        <div className="card bg-light mb-3" style={{maxWidth: "18rem;"}}>
            <div className="card-header bg-light-blue color-dark-blue">
                <h4>{props.textoHeader}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.tituloCard}</h5>
                {props.children}
            </div>
        </div>
    )
}

export default Card