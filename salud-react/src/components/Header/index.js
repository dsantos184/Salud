import React, {Component, Fragment} from 'react'
import './style.css'

import Logo from '../../imagens/logo.png'
import facebookIcon from '../../imagens/icone-facebook.png'
import instagranIcon from '../../imagens/icone-instagram.png'
import twitterIcon from '../../imagens/icone-twitter.png'
import linkedinIcon from '../../imagens/icone-linkedin.png'

export default class Header extends Component
{
    render()
    {
        return(
            <Fragment>
                <header className="container-header">
                    <nav className="col navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand link-logo" href="#">
                            <img className="img-logo" src={Logo} alt="Salud" />
                        </a>
            
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="container-menu collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link color-white" href="#">Institucional <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-white" href="#">Benefícios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-white" href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
            
                        <div className="container-btn-header collapse navbar-collapse container-cadastre-se" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active nav-btn-red">
                                    <a className="btn bg-red color-white btn-sm" href="#">Cadastre-se grátis
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-white btn-outline-primary btn-sm color-white" href="#">Sou Cliente</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-white btn-outline-primary btn-sm color-white" href="#">Sou Prestador</a>
                                </li>
                            </ul>
                        </div>
            
                        <div className="collapse navbar-collapse container-sociais" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        <img className="icone-sociais" src={facebookIcon}/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img className="icone-sociais" src={instagranIcon} alt="Instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img className="icone-sociais" src={twitterIcon} alt="Twitter" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img className="icone-sociais" src={linkedinIcon} alt="Linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <section className="container container-carousel">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item container-carousel-familia active">
                                    <div className="institucional-carousel">
                                        <h1 className="display-4 color-light-blue titulo">Para Você</h1>
                                        <p className="lead color-white">Saúde e proteção para o bem de todos da sua família</p>
                                        <a className="btn bg-light-blue color-white btn-lg" href="#">Como funciona?</a>
                                        <a className="btn bg-red color-white btn-lg" href="#">Escolha o seu plano</a>
                                    </div>
                                </div>
                                <div className="carousel-item container-carousel-empresa">
                                    <div className="institucional-carousel">
                                        <h1 className="display-4 color-light-blue titulo">Para sua empresa</h1>
                                        <p className="lead color-white">Saúde e proteção para o bem de todos os seus colaboradores</p>
                                        <a className="btn bg-light-blue color-white btn-lg" href="#">Como funciona?</a>
                                        <a className="btn bg-red color-white btn-lg" href="#">Entre em contato</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </Fragment>
        )
    }
}
