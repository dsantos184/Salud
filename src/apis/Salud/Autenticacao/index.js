import React from 'react'
import axios from 'axios'

// no arquivos routes da api, verifica todas as rotas com metodo GET 
const Autenticacao =  ( props ) => {
     
    const rota =  process.env.REACT_APP_API_URL + "verificaAutenticacao/" + 
    localStorage.getItem("token") + "/" +
    localStorage.getItem("tipoUsuario");

    const retorno = axios.get(rota)
    .then( (res) =>  {  return true } )
    .catch(function (error) {                               
           return false;         
      });  

      return retorno
        
}

const Autorizacao =  ( props ) => {    
    return true
}


export  {Autorizacao, Autenticacao}