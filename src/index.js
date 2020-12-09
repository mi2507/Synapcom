function calcularSaque() {
    let valor = parseFloat(document.getElementById('valor').value);

    let sacar = (parseFloat(valor).toFixed(2));

    if (sacar == 30.00) {
        window.open("./valores.html");
    }
    if (sacar == 80.00) {
        window.open("./valores2.html");
    }
    if (sacar == 100.00) {
        window.open("./valores3.html");
    }
    if (sacar == 180.00) {
        window.open("./valores4.html");
    }
    else if (sacar >= 105.00) {
        window.open("./indisponivel.html");
    }
}