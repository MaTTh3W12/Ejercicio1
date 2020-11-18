function EsPrimo(num) {
    for(var i=2;i<=num-1;i++) {
        if(num%i==0) {
            return false;
        }
    }
    return true;
}

for(var i=1;i<=20;i++) {

    if(EsPrimo(i)) {
        console.log("Es primo el numero ",i);
    } else {
        console.log("No es primo el numero ",i);
    }
}