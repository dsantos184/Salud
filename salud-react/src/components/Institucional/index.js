import React from 'react'

const Institucional = () =>{
    return(
        <section class="container container-institucional">
            <div class="row">
                <div class="col-lg-6 col-md-7">
                    <div class="texto-institucional-home">
                        <h2 class="color-red">Institucional</h2>
                        <h3 class="color-dark-blue">Conheça a Salud</h3>
                        <p>Nossa empresa foi criada para atender a todos os públicos que perderam ou nunca tiveram a possibilidade
                        de contar com a segurança de um plano se saúde completo. Não somos um plano de saúde mais procuramos
                        oferecer aos nossos associados uma alternativa inovadora e eficaz para que todos possam ter acesso a
                        diversos serviços na área de saúde com excelência e a um baixo custo. Oferecemos ainda várias coberturas
                        na área de seguros e diversas assistências para o BEM de TODOS da sua família.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-5">
                    <img src="/imagens/instituicional-home.png" class="img-institucional-home img-fluid" />
                </div>
            </div>
        </section>
    )
}

export default Institucional