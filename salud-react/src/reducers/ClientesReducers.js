const initialState = {
    cpf: "",
    dataNasc: "",
    nome: "",
    nomeMae: "",
    sexo: "",
    nacionalidade: "brasileira",
    estadoCivil: "",
    tipoDoc: "",
    identificacao: "",
    orgaoExpedidor: "",
    dataExpedicao: "",
    profissao: "",
    rendaMensal: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    uf: "",
    cidade: "",
    email: "",
    dddTel: "",
    telefone: "",
    dddCel: "",
    celular: "",
    dependentes: [
        { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
        { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
        { cpf: "", nomeDependente: "", nascDependente: "", parentesco: "" },
    ]
}

const clientesReducers = (state = [], action) => {

    if (state.length == 0) {
        return initialState
    }

    switch (action.type) {
        case 'storeDadosCliente':
            return { ...state, cliente: action.payload.cliente}
            break
        case 'editCep':
            return { ...state, cep: action.payload.cep }
            break
        case 'editEndereco':
            return { ...state, endereco: action.payload.endereco }
            break
        case 'editNumero':
            return { ...state, numero: action.payload.numero }
            break
        case 'editComplemento':
            return { ...state, complemento: action.payload.complemento }
            break
        case 'editBairro':
            return { ...state, bairro: action.payload.bairro }
            break
        case 'editUf':
            return { ...state, uf: action.payload.uf }
            break
            case 'editCidade':
                return { ...state, cidade: action.payload.cidade }
                break
        default:
            return state
    }
}

export default clientesReducers