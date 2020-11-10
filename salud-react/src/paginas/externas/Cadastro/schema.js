import yup from '../../../validation';



export default yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.number().required().positive().integer().test('cpf', 'CPF inválido', value =>{
        console.log(value)
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