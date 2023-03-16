'use strict'


export const pesquisarCep = async(cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
        //await -> espera só existe em funções assincronas  (async)
    const response = await fetch(url)
        //capiturar dados
    const data = await response.json()
        //console.log(data)
        // console.log(response)

    // console.log(" O  cep digitado é: ", url)
    return {
        municipio: data.localidade,
        estado: data.uf,
        bairro: data.bairro,
        //cidade: data.cidade,
        logradouro: data.logradouro
            // ...data
    }

}



// export const cep = {
//     "cep": "69909-024",
//     "logradouro": "Rua Acre",
//     "complemento": "",
//     "bairro": "Rosa Linda",
//     "municipio": "Rio Branco",
//     "estado": "AC"
// }