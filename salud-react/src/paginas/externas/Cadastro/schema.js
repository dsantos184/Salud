import yup from '../../../validation';
import {validaCpf, unicCpf} from '../../../Utils'



export default yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.string().required()
    .test('cpf', 'CPF inválido', value =>{
        const valido = validaCpf(value)
        return valido     
     })
     .test('cpf', 'CPF já cadastrado', async value =>{
        const unico = await unicCpf(value).then(resp=>{
            return resp.dados
        })

        if( unico )
        {
            return false
        }

        return true
     }),
    email: yup.string().email().required(),
    dataNasc: yup.date().required(),
    sexo: yup.string().required(),
    ddd_telefone: yup.number().required().positive().integer(),
    telefone: yup.number().required().positive().integer(),
    dddCel: yup.number().required().positive().integer(),
    celular: yup.number().required().positive().integer(),
    endereco: yup.string().required(),
    numero: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    uf: yup.string().min(2).required(),
    cep: yup.string().required(),

})