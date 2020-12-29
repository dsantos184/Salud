export const autenticar = ( boolAutenticado ) =>
{ 

     return {
        type: "autenticar",
        payload: boolAutenticado
    }
}