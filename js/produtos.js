
const formDados = document.querySelector('#div-form');
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

    divDados.reset()
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
    }

 }



