import * as yup from 'yup' 

yup.setLocale({
    mixed:
    {
        required: "Campo Obrigatório",
    },
    number:
    {
        positive: "Campo numérico inválido",
        integer: "Campo numérico inválido"
    },
    string:
    {
        email: "E-mail inválido",
        min: (min) => `Deve ser maior que ${min}`,
    }
})

export default yup;