import axios from 'axios'

export const consultaCep = async (value)=>{
   
    const cep = value.replace(/[^0-9]/g, '')

    const url = `http://cep.republicavirtual.com.br/web_cep.php?cep=${cep}&formato=json`

    const req = await fetch(url)
    const json = await req.json()

    return json
}

export const validaCpf = value =>{

    const cpf = value.toString().replace(/[^0-9]/g, '')

    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

export const unicCpf = async value =>{
    
    const cpf = value.replace(/[^0-9]/g, '')
    const url = `${process.env.REACT_APP_API_URL}clientes/verificaCpf/${cpf}`

    const req = await fetch(url)
    const json = await req.json()

    return json
}

export const unicEmail = async value =>{
    
    const url = `${process.env.REACT_APP_API_URL}usuario/verificaEmail/${value}`

    const req = await fetch(url)
    const json = await req.json()

    return json
}

export const FirstLastName = (nome) =>
{
    if( !nome  )
    {
        return {status: 'error', mensagem: "Nome não informado", data:{}}
    }

    const aNome = nome.split(" ")
    const firstName = aNome[0]
    const lastName = aNome[aNome.length - 1]

    const nomeCompleto = {
        firstName: firstName,
        lastName: lastName
    }

    return {status:'success', mensagem:'sucesso', data: nomeCompleto}   
   
}