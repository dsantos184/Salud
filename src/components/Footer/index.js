import React, { Fragment} from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <section className="footer bg-dark-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="logo-footer" src="./imagens/logo.png" />
                            <p className="color-white">
                                Avenida das Américas 12900, Loja SS106  <br />
                                Barra da Tijuca, Rio de Janeiro, RJ<br />
                                CEP: 22790-022
                            </p>

                            <div className="row">

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <span className="color-white">CNPJ: 35.842.745/0001-82</span>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-telefone-footer.png" alt="telefone" /> <span className="color-white">(21) 3369-9571</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-email-footer.png" alt="Facebook" /> <span className="color-white">atendimento@secuidae.com.br</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 menu-footer">
                            <h3 className="color-light-blue">Explore</h3>
                            <ul className="menu-footer">
                                <li><a className="color-white" href="">Página Inicial</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#beneficios`}>Benefícios</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#institucional`}>Institucional</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#combos-home`}>Combos</a></li>
                            </ul>

                            <a className="btn bg-btn-plano-2 color-black btn-lg btn-entre-contato" href={`${process.env.REACT_APP_PUBLIC_URL}contato`}>Entre em contato conosco</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <div className="container text-center color-dark-blue">
                    Copyright {currentYear}. Todos os direitos reservados. Secuidae.
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
