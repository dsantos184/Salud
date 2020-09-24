import React, {Fragment, Component} from 'react'

import Header  from '../../../components/Header'
import Etapas from '../../../components/Etapas'
import EtapaItem from '../../../components/EtapaItem'
import Institucional from '../../../components/Institucional'
import Planos from  '../../../components/Planos'
import Combo from '../../../components/Combo'
import SlideBeneficios from '../../../components/SlideBeneficios'
import Footer from '../../../components/Footer'

export default class Home extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            combos: [
                {
                    id: 1,
                    plano: 'plano individual',
                    valor: '19,90',
                    beneficios: [
                        '',
                        'Exames e consultas',
                        'Seguro para morte acidental',
                        'Invalidez total ou parcial por acidente',
                        'Assistência Funeral',
                        'Assistência Residencial',
                        'Assistência Nutriline',
                        'Assistência Personal Fitness',
                        'Desconto em medicamentos',
                        'Clube de Vantagens',
                        'Sorteio Mensal - R$ 5.000,00',
                        '',
                        ''
                    ]
                },
                {
                    id: 2,
                    plano: 'plano familiar',
                    valor: '26,90',
                    beneficios: [
                        '',
                        'Exames e consultas',
                        'Seguro para morte acidental',
                        'Invalidez total ou parcial por acidente',
                        'Assistência Funeral',
                        'Assistência Residencial',
                        'Assistência Nutriline',
                        'Assistência Personal Fitness',
                        'Desconto em medicamentos',
                        'Clube de Vantagens',
                        'Sorteio Mensal - R$ 5.000,00',
                        '',
                        ''
                    ]
                },
                {
                    id: 3,
                    plano: 'master familiar',
                    valor: '32,90',
                    beneficios: [
                        '',
                        'Exames e consultas',
                        'Seguro para morte acidental',
                        'Invalidez total ou parcial por acidente',
                        'Assistência Funeral',
                        'Assistência Residencial',
                        'Assistência Nutriline',
                        'Assistência Personal Fitness',
                        'Desconto em medicamentos',
                        'Clube de Vantagens',
                        'Sorteio Mensal - R$ 5.000,00',
                        'Assistência PET',
                        'Assistência 24h - Auto e Moto'
                    ]
                }
            ]
        }
    }

    render()
    {
        return(
            <Fragment>
                <Header/>
                <main className="container-principal">
                    <Etapas>
                        <EtapaItem 
                            etapaId="primeiro-passo" 
                            etapaIcon="/imagens/icone-passo1.png"
                            texto1="Acesse o"
                            texto2="nosso site"
                        />

                        <EtapaItem 
                            etapaId="segundo-passo" 
                            etapaIcon="/imagens/icone-passo2.png"
                            texto1="Escolha o"
                            texto2="seu combo"
                        />

                        <EtapaItem 
                            etapaId="terceiro-passo" 
                            etapaIcon="/imagens/icone-passo3.png"
                            texto1="Confira os"
                            texto2="benefícios"
                        />

                        <EtapaItem 
                            etapaId="quarto-passo" 
                            etapaIcon="/imagens/icone-passo4.png"
                            texto1="Finalize seu"
                            texto2="cadastro"
                        />
                    </Etapas>
                    
                    <Institucional />
                    
                    <Planos>
                        {
                            this.state.combos.map( combo=>{
                                return(
                                    <Combo
                                        key={combo.id}
                                        comboId ={combo.id}
                                        valor = {combo.valor}
                                        titulo = {combo.plano}
                                        beneficios = {combo.beneficios}
                                    />
                                )
                            })
                        }
                    </Planos>

                    <SlideBeneficios/>

                    <Footer /> 
                </main>
                <Footer />
            </Fragment>
        )
    }
}