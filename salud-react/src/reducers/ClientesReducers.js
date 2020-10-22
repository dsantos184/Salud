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
    telefone:"",
    dddCel: "",
    celular: "",
    dependentes:[
        {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
        {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
        {cpf:"", nomeDependente:"", nascDependente: "", parentesco:""},
    ]
}

const clientesReducers = (state = [], action) =>{
    if( state.length === 0 )
    {
        return initialState
    }
}

export default clientesReducers