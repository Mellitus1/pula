function verificarCodigo() {
    var input = document.getElementById("codigo");
    var codigoIngresado = input.value;
    
    if (codigoIngresado === "25125") {
        alert("debajo del coche de juguete");
    } else {
        alert("INCORRECTO");
    }
}
