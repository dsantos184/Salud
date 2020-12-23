export const editId = (id) =>{
    return{
        type: 'editId',
        payload: {id}
    }
}

export const editTitulo = (titulo) =>{
    return{
        type: 'editTitulo',
        payload: {titulo}
    }
}

export const editValor = (valor) =>{
    return{
        type: 'editValor',
        payload: {valor}
    }
}

export const editBeneficios = (beneficios) =>{
    return{
        type: 'editBeneficios',
        payload: {beneficios}
    }
}

export const editDadosPlano = (dadosPlano) =>{
    return{
        type: 'editDadosPlano',
        payload:{dadosPlano}
    }
}