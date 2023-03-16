'use strict'
import { pesquisarCep } from "./viacep.js"
import { pesquisarCepPostman } from "./postmon.js"
//import { cep } from "./cep.js"
//teste para ver se estou recebendo o cep.js
//console.log(cep)



console.log(pesquisarCep)
pesquisarCep('06703320')
    // -------------------------------------------------------------------------------------
    // const pesquisarCep = async(cep) => {
    //     const url = `https://viacep.com.br/ws/${cep}/json/`
    //         //await -> espera só existe em funções assincronas  (async)
    //     const response = await fetch(url)
    //         //capiturar dados
    //     const data = await response.json()
    //         //console.log(data)
    //         // console.log(response)

//     // console.log(" O  cep digitado é: ", url)
//     return data

// }
//pesquisarCep('06703320')


// -------------------------------------------------------------------------------------//
const preencherFormulario = async() => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCepPostman(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)