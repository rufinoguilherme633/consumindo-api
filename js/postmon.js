'use strict'
export const pesquisarCepPostman = async(cep) => {

    const url = `https://api.postmon.com.br/v1/cep/${cep}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        municipio: data.cidade,
        estado: data.nome,
        bairro: data.bairro,
        cidade: data.cidade,
        logradouro: data.logradouro
            // ...data
    }
}