import React, { Fragment} from 'react'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer bg-dark-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="logo-footer" src="./imagens/logo.png" />
                            <p className="color-white">
                                Av. das Américas 17.150 – Bloco 1 – Sala 525 <br />
                                Recreio dos Bandeirantes, Rio de Janeiro, RJ<br />
                                CEP: 22790-704
                            </p>

                            <div className="row">
                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-telefone-footer.png" alt="telefone" /> <span className="color-white">(21) 2496-5644</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-email-footer.png" alt="Facebook" /> <span className="color-white">contato@salud.com.br</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 menu-footer">
                            <h3 className="color-light-blue">Explore</h3>
                            <ul className="menu-footer">
                                <li><a className="color-white" href="">Página Inicial</a></li>
                                <li><a className="color-white" href="">Benefícios</a></li>
                                <li><a className="color-white" href="">Institucional</a></li>
                                <li><a className="color-white" href="">Planos</a></li>
                            </ul>

                            <a className="btn bg-btn-plano-2 color-black btn-lg btn-entre-contato" href="contato.html">Entre em contato conosco</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <div className="container text-center color-dark-blue">
                    Copyright 2020. Todos os direitos reservados. Salud. CNPJ: 35.842.745/0001-82
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
