import React from 'react'

const Etapas = (props) =>{
    return(
        <section className="clearfix container bg-light-blue container-passos">
            <div className="texto-passos">
                <h2 className="color-dark-blue">Veja como é fácil entrar nesse clube:</h2>
                <p className="color-white">Basta escolher as coberturas que mais são parecidas com você e seguir os passos.</p>
            </div>

            <div className="passos">
                {props.children}
            </div>
        </section>
    )
}

export default Etapas