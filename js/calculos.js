const valorAdic = ({ valor, quantidade }) => {
    valor = Number(valor);
    quantidade = Number(quantidade);

    const total = valor * quantidade;

    if (total <= 3000) {
        return "Isento";
    } else if (total <= 8000) {
        return total * 1.05;
    } else if (total <= 12000) {
        return total * 1.10;
    } else if (total <= 20000) {
        return total * 1.15;
    }

    return total * 1.20;
}

export{valorAdic}