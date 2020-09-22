import React from 'react'

const Etapas = (props) =>{
    return(
        <section class="clearfix container bg-light-blue container-passos">
            <div class="texto-passos">
                <h2 class="color-dark-blue">Veja como é fácil entrar nesse clube:</h2>
                <p class="color-white">Basta escolher as coberturas que mais são parecidas com você e seguir os passos.</p>
            </div>

            <div class="passos">
                {props.children}
            </div>
        </section>
    )
}

export default Etapas