import yup from '../../../validation'

export default yup.object().shape({
    termosContrato: yup.boolean().oneOf([true],'Essa opção deve ser marcada'),
    numeroCartao: yup.string().min(16).required(),
    nomeCartao: yup.string().min(10).required(),
    validadeCartao: yup.string().min(5).required(),
    codigoCartao: yup.string().min(3).required()

})