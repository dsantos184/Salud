import React from 'react'

const Institucional = () => {
    return(
        <section id="institucional" className="container container-institucional">
            <div className="row">
                <div className="col-lg-6 col-md-7">
                    <div className="texto-institucional-home">
                        <h2 className="color-red">Institucional</h2>
                        <h3 className="color-dark-blue">Conheça a Salud</h3>
                        <p>Nossa empresa foi criada para atender a todos os públicos, especialmente aqueles que perderam ou nunca tiveram a possibilidade de contar com a segurança de um plano de saúde completo. Não somos um PLANO DE SAÚDE ou mesmo um SEGURO SAÚDE, mas procuramos oferecer aos nossos associados uma alternativa inovadora e eficaz para que todos possam ter acesso a diversos serviços na área de saúde e bem-estar, com excelência e a um baixo custo. Oferecemos ainda várias coberturas na área de seguros e diversas assistências, sempre pensando no BEM de TODOS da sua família ou empresa.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5">
                    <img src="/imagens/instituicional-home.png" className="img-institucional-home img-fluid" />
                </div>
            </div>
        </section>
    )
}

export default Institucional