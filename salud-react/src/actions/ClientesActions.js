export const storeDadosCliente = (cliente) =>{
    return{
        type: 'storeDadosCliente',
        payload: {
            cliente: cliente
        }
    }
}


export const editCep = (cep) =>{
    return{
        type: 'editCep',
        payload: {
            cep: cep
        }
    }
}

export const editEndereco = (endereco) =>{
    return{
        type: 'editEndereco',
        payload: {
            endereco: endereco
        }
    }
}

export const editNumero = (numero) =>{
    return{
        type: 'editNumero',
        payload: {
            numero: numero
        }
    }
}

export const editComplemento = (complemento) =>{
    return{
        type: 'editComplemento',
        payload: {
            complemento: complemento
        }
    }
}

export const editBairro = (bairro) =>{
    return{
        type: 'editBairro',
        payload: {
            bairro: bairro
        }
    }
}

export const editUf = (uf) =>{
    return{
        type: 'editUf',
        payload: {
            uf: uf
        }
    }
}

export const editCidade = (cidade) =>{
    return{
        type: 'editCidade',
        payload: {
            cidadae: cidade
        }
    }
}

