import React from 'react'
import Navbar from '../Navbar'
import Breadcrumbs from '../Breadcrumbs'


const HeaderInterno = ( props ) => {
    return (
        
        <header className="container-header" style={{height:"auto"}}> 
 
            <Navbar />
            
            <div className="titulo-pagina">
                <section className="container">
                    <Breadcrumbs/>
                    <h1 className="color-white">{props.titulo}</h1>
                </section>
            </div>
        </header>
    )
}

export default HeaderInterno