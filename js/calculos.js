const valorAdic = (valor, quantidade) => {
    let valorCalculado = ''

    if (valor * quantidade <= 3000){
         valorCalculado = "Insento"
    }else if ( valor * quantidade <= 8000){
        valorCalculado = (valor * quantidade) * 1.05
    }else if ( valor  * quantidade <= 12000){
        valorCalculado = (valor * quantidade) * 1.10
    }else if ( valor * quantidade <= 20000){
        valorCalculado = (valor * quantidade) * 1.15
    }else{
        valorCalculado = (valor * quantidade) * 1.20
    }
    return valorCalculado

}

export{valorAdic}