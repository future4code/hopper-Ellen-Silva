import axios from "axios"

export const getInfoAddress =  async (cep:string) =>{
    try {
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`)
        
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}