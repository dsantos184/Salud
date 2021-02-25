export const editTransacao = (transacao)=>{
    return{
        type: 'editStatus',
        payload:{
            status: transacao.status,
            description: transacao.description
        }
    }
}