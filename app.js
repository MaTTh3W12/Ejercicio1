var cont = 1;
var cont2 = 0;
var bandera = 0;

var x = prompt('Ingrese el numero para mostrarle los numeros primos');

while (cont <= x) {
    while (cont2 < cont) {
        if (cont % cont2 == 0 && cont2 != 1 && cont2 != cont) {
            bandera = 1;
        }
        cont2 ++;
    }

    if (bandera == 0) {
        document.write(cont2 + "<br/>")
    }
    else{
        bandera = 0;
    }

    cont++;
    cont2 = 0;
}
