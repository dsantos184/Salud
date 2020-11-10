import axios from 'axios'

const consultaCep = async (cep)=>{
   
    const url = `http://cep.republicavirtual.com.br/web_cep.php?cep=${cep}&formato=json`

    const req = await fetch(url)
    const json = await req.json()

    return json
}


export default consultaCep
