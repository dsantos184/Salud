import axios from 'axios'

const consultaCep = async (cep)=>{
   
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const req = await fetch(url)
    const json = await req.json()

    return json
}


export default consultaCep
