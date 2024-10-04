import React from 'react'

const Institucional = () => {
    return(
        <section id="institucional" className="container container-institucional">
            <div className="row">
                <div className="col-lg-6 col-md-7">
                    <div className="texto-institucional-home">
                        <h2 className="color-red">Institucional</h2>
                        <h3 className="color-dark-blue">Conheça o SeCuidaê</h3>
                        <p>O SeCuidaê foi criado com a missão de proporcionar acesso a serviços de saúde e bem-estar para todos, especialmente para aqueles que não dispõem de um plano de saúde tradicional. Embora não sejamos um plano de saúde ou seguro saúde, oferecemos uma alternativa inovadora e eficiente, garantindo aos nossos associados acesso a uma ampla gama de serviços de saúde e bem-estar com excelência e a custos acessíveis. Além disso, disponibilizamos diversas coberturas na área de seguros e assistências, sempre focados no bem-estar de sua família ou empresa. Nosso compromisso é com a segurança e qualidade de vida de todos os nossos associados.</p>
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