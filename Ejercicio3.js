const sc = require("prompt-sync")({ sigint: true });
let num=sc("Escribe un número y yo te diré si es un numero par o no, escribe salir para cerrar el programa. Adelante -->")


while(num.toLowerCase()!=="salir"){
    esPar(parseInt(num));
    num = sc("Otro número --> ");
}
console.log("Gracias por jugar, hasta pronto")

function esPar(){
    if (isNaN(num)){
        console.log("Introduce un nuúmero váido");

    }else{
        if(num %2==0){
            console.log(+num+" --> Es un numero par");
        }else{
            console.log(+num+" --> Es un número impar");
        }
    }
}