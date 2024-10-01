import React, { Component } from 'react'
import axios from 'axios'


class GetNet extends Component{

    constructor(props){
        super(props)    
           
        this.urlbase = process.env.REACT_APP_APIGETNET_URL  

        this.config = { 
            headers: { 
            "clientName" : "salud",
            "sellerId": "b6010cf6-0ef1-4b67-bbd2-4af6a0783a64"
         } 
        }     
          
    }     
 
    autenticar = async () => { 
    
        let resp = await axios.get( `${this.urlbase}gerarTokenAcesso`, this.config)
        .then((resp) => resp.data)
        .catch(function (error) {
            console.log(error);
            return error;
        }); 

       return resp
    }

    listarClientes = async (page, limit) => { 
         
        let config = {
            ...this.config,
            params: { page: page, limit: limit}
        } 

        return await axios.get( `${this.urlbase}listarClientes`, config)
        .then((resp) => resp.data)
        .catch(function (error) {
            console.log(error);
            return error;
        });
    }

    
} 

export default GetNet