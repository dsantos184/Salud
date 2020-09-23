import React, {Component} from 'react'

export default class SlideBeneficios extends Component
{

    constructor(props){
        super(props);
        this.state = {
            beneficios : [
                { 
                    nome: 'Exames e consultas',
                    titulo: "Conta Saúde – Consultas e exames com até 70% de desconto",
                    descricao: 'O Conta Saúde oferece acesso à rede credenciada para consultas e exames médicos e odontológicos particulares com preços reduzidos, tendo como forma de pagamento a utilização de cartão virtual pré-pago, disponível através do aplicativo MEU TEM.',
                    icone: 'icone-consulta-exame.png',
                    img: 'img-slide-consulta-exame.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Saude_24h_ContaSaude.pdf'
                },
                { 
                    nome: 'Seguro para morte acidental',
                    titulo: "Seguro para morte acidental",
                    descricao: 'Proteção para contribuir ou minimizar prejuízos causados por imprevistos, garantindo que o segurado e/ou sua família se reorganizem o mais breve possível. Cobertura de R$ 10.000,00 para titular e R$ 5.000,00 para dependentes.',
                    icone: 'icone-morte-natural.png',
                    img: 'img-slide-seguro-morte-acidental.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/uploads/ae9be589-34b3-43c7-ba70-9fdbec374203-vida-previsul.pdf'
                },
                { 
                    nome: 'Invalidez total ou parcial por acidente',
                    titulo: "Invalidez total ou parcial por acidente",
                    descricao: 'Acontecimentos como acidentes pessoais, podem ser minimizados com um seguro que entende de proteção e cuidado na medida certa. Cobertura de R$ 10.000,00 para titular e R$ 5.000,00 para os dependentes.',
                    icone: 'icone-invalidez.png',
                    img: 'img-slide-invalidez-total.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/uploads/3931a867-c1ab-4e03-9cdf-61859b621ccb-AP%20Previsul.pdf'
                },
                { 
                    nome: 'Assistência Funeral',
                    titulo: "Assistência Funeral",
                    descricao: 'Não sabemos quando vai acontecer, esperamos que não aconteça, mas acontecendo estaremos aqui para te ajudar. Cobertura para o Titular nos combos individuais e também para os dependentes nos combos familiares. Atendimento, 24H através de 0800 com equipe especializada nestes eventos. Tudo para o BEM de TODOS.',
                    icone: 'icone-assistencia-funeral.png',
                    img: 'img-slide-assit-funeral.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Funeral_Familiar_Master.pdf'
                },
                { 
                    nome: 'Assistência Residencial',
                    titulo: "Assistência Residencial",
                    descricao: 'Para a residência do segurado com diversas coberturas em caso de emergências tais como: chaveiro, encanador, eletricista, vidraceiro e várias outras assistências para facilitar a sua vida. Tudo para o BEM de TODOS que convivem em sua residência.',
                    icone: 'icone-assistencia-residencial.png',
                    img: 'img-slide-assist-residencial.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Residencial_Simplificada.pdf'
                },
                { 
                    nome: 'Assistência Nutriline',
                    titulo: "Assistência Nutriline",
                    descricao: 'O serviço de Assistência Nutriline disponibiliza ao Segurado, informações, via telefone com profissional qualificado, sobre alimentação e nutrição de forma simples e objetiva. A cada contato, o Segurado receberá dicas e comentários motivando-o a utilizar o programa de forma contínua e a alcançar seus objetivos. Tudo para o BEM de TODOS se alimentarem de uma forma saudável. Disponível de segunda a sexta, das 8:00 às 20:00h (exceto aos feriados), pela Central de Atendimento no telefone 0800 709 8059.',
                    icone: 'icone-assistencia-nutriline.png',
                    img: 'img-slide-assist-nutriline.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Nutriline.pdf'
                },
                { 
                    nome: 'Assistência Personal Fitness',
                    titulo: "Assistência Personal Fitness",
                    descricao: 'A Assistência Personal Fitness é um serviço que fornece ao Segurado, orientação via telefone, com profissional qualificado, sobre atividades físicas, melhor condicionamento e qualidade de vida. Tudo para o BEM de TODOS ficarem em forma. Este serviço garante uma assistência personalizada, através da Central de Atendimento pelo telefone  0800 709 8059 disponível 24 horas de qualquer dia da semana.',
                    icone: 'icone-assistencia-personal.png',
                    img: 'img-slide-assit-fitness.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Personal_Fitness.pdf'
                },
                { 
                    nome: 'Desconto em medicamentos',
                    titulo: "Farmassist - Desconto em medicamentos",
                    descricao: 'Assistência Farmacêutica “FARMASSIST”. Sempre que necessário, o Segurado terá à sua disposição uma rede de farmácias credenciadas, onde poderá adquirir medicamentos com descontos sobre o preço máximo ao consumidor.',
                    icone: 'icone-assistencia-farm.png',
                    img: 'img-slide-desconto-medicamento.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Farmaceutica_Farmassist.pdf'
                },
                { 
                    nome: 'Clube de Vantagens',
                    titulo: "Clube de Vantagens",
                    descricao: 'Acesso a uma grande rede de convênios e descontos com + de 600 marcas parceiras no Brasil e mais de 2 mil na América Latina, além de vários outros benefícios. Tudo para o BEM de TODOS.',
                    icone: 'icone-compras-online.png',
                    img: 'img-slide-clube-vantagens.png',
                    comum_todos: 1,
                    link: 'http://www.previsul.com.br/#clubemaisvantagens'
                },
                { 
                    nome: 'Sorteio Mensal - R$ 5.000,00',
                    titulo: "Sorteio Mensal - R$ 5.000,00",
                    descricao: 'O segurado principal receberá, sem qualquer custo adicional, a partir do início de vigência do seguro, 1 (um) número, informado no certificado de sorteio, que irá habilitá-lo a concorrer a sorteios mensais, pela Loteria Federal do Brasil. Tudo para o BEM de TODOS.',
                    icone: 'icone-sorteio-mensal.png',
                    img: 'img-slide-sorteio-5000.png',
                    comum_todos: 1,
                    link: ''
                },
                { 
                    nome: 'Assistência PET',
                    titulo: "Assistência PET",
                    descricao: 'Serviço de Assistências à Animais de Estimação – Consultas Veterinárias, transporte de emergência, envio de ração, hospedagem de animais, assistência funeral e muito mais. Tudo para o BEM de TODOS os seus Pets.',
                    icone: 'icone-assistencia-pet.png',
                    img: 'img-slide-assist-pet.png',
                    comum_todos: 0,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_a_Animais_de_Estimacao_PET.pdf'
                },
                { 
                    nome: 'Assistência 24h - Auto e Moto',
                    titulo: "Assistência 24h - Auto e Moto",
                    descricao: 'Tem como objetivo auxiliar o Segurado no caso de ocorrência de evento previsto, sendo esses: acidente, pane, furto, roubo ou incêndio. Socorro para seu veículo, carro ou moto,  com atendimento, 24H através de 0800. Tudo para o BEM de TODOS os seus veículos.',
                    icone: 'icone-assistencia-auto.png',
                    img: 'img-slide-assist-auto.png',
                    comum_todos: 0,
                    link: 'http://www.previsul.com.br/pdf/condicoes-gerais/assistencias/Assistencia_Auto_e_Moto_Mais_de_15_anos_200km_Vinculo_ao_Segurado.pdf'
                }
            ]           
        }
    }
    render()
    {
        return ( 
            <section class="beneficios-home">
                <div class="container">
                    <div class="slide-beneficios-home">
                    <h2 class="color-red">Benefícios</h2>
                    <h3 class="color-dark-blue">Conheça nossos benefícios:</h3>

                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                        <ul class="slide-menu-items">
                            {
                                this.state.beneficios.map( beneficio => {
                                    return (
                                        <li class="slide-menu-items-1" key={beneficio.id}>
                                            <img class="img-icone-slide-home" src={`/imagens/${beneficio.icone}`} />
                                            <span class="texto-item-slide-home color-dark-blue">
                                                {beneficio.titulo}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        </div>

                        <div class="col-lg-8 col-sm-12" style={{padding: 0}}>
                        <div class="exibe-slide-container">
                            <div class="conteudo-slide-home">                   
                            {
                                this.state.beneficios.map( (beneficio, k) => {
                                    return (
                                        <div class="row" key={beneficio.id}>
                                        <div class="col-lg-4 col-sm-12">
                                        <div class="img-slide-box">
                                            <img class="img-fluid" src={`/imagens/slide-beneficios/${beneficio.img}`} />
                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-12">
                                        <div class="texto-slide-box text-left">
                                            <span class="passo color-red">{k} de {this.state.beneficios.length}</span>
                                            <h4 class="color-dark-blue">{beneficio.titulo}</h4>
                                            <p>{beneficio.descricao}</p>

                                            (beneficio.comum_todos == 1 ) ? (
                                                <p class="frase-final">Benefício presente em todos os combos</p>
                                            ) 
                                            

                                            <a class="btn bg-btn-plano-1 color-white btn-lg" href="#">Escolha o seu combo</a>
                                            <a class="btn bg-light-blue color-white btn-lg" href={`${beneficio.link}`}>Regulamento</a>
                                        </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 
        )
    }
}