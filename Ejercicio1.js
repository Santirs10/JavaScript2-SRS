const sc = require("prompt-sync")({ sigint: true });
console.log("-----BIENVENIDO AL VALIDADOR DEL DNI------")
let dni = sc("Escribe los numeros que corresponden con tu Documento Nacional de Identidad --->");
let letra = sc("Escribe la letra que corresponde a tu Documento Nacional de Identidad --->");
let validador = dni %23;
let ltr = "L";

if (!isNaN(dni) && dni.length === 8) {
    if (isNaN(letra) && letra.length === 1) {
        console.log("Tu DNI es correcto y corresponde a: " + dni + letra);
    } else {
        console.log("Letra no válida")
    }
} else {
    console.log("DNI erróneo");
}
    switch (validador) {
        case 0:
            ltr = 'T'
            break;
        case 1:
            ltr = 'R'
            break;
        case 2:
            ltr = 'W'
            break;
        case 3:
            ltr = 'A'
            break;
        case 4:
            ltr = 'G'
            break;
        case 5:
            ltr = 'M'
            break;
        case 6:
            ltr = 'Y'
            break;
        case 7:
            ltr = 'F'
            break;
        case 8:
            ltr = 'P'
            break;
        case 9:
            ltr = 'D'
            break;
        case 10:
            ltr = 'X'
            break;
        case 11:
            ltr = 'B'
            break;
        case 12:
            ltr = 'N'
            break;
        case 13:
            ltr = 'J'
            break;
        case 14:
            ltr = 'Z'
            break;
        case 15:
            ltr = 'S'
            break;
        case 16:
            ltr = 'Q'
            break;
        case 17:
            ltr = 'V'
            break;
        case 18:
            ltr = 'H'
            break;
        case 19:
            ltr = 'L'
            break;
        case 20:
            ltr = 'C'
            break;
        case 21:
            ltr = 'K'
            break;
        case 22:
            ltr = 'E'
            break;
        default:
        console.log("No corresponde a ningún DNI")
        break
    }
    if (ltr==letra){
        console.log("DNI validado correctamente")
    }else{
        console.log("DNI no válido")
    }