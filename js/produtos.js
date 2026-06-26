import { valorAdic } from "./calculos.js";
const formDados = document.querySelector('#form-dados');
const divDados = document.querySelector('#div-dados');

const produtos = []

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const  novoDados = new FormData(formDados)

    const informacoes ={
        produto: novoDados.get('produto'),
        valor: novoDados.get('valor'),
        quantidade: novoDados.get('quantidade')
    }
    
    addInformacoes(informacoes)

   formDados.reset()
});

const addInformacoes = (novaInf) => {
    produtos.push(novaInf)

    listInf()
}
 const listInf = () => {

    divDados.innerHTML = ''

    if (produtos.length === 0){
        divDados.innerHTML = "Nada foi registrado"
        return
    }else{

    }

    produtos.forEach((elem, i) =>{

        const resultado = valorAdic(elem)

        listInf.innerHTML += `
        <p> produto ${elem.produto}<p>
        <p> ${elem.valor}<p>
        <p> ${elem.quantidade}<p>`
    })
 }
listInf()


