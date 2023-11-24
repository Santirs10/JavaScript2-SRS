const sc = require("prompt-sync")({ sigint: true });
AdivinarNumero();

function AdivinarNumero() {
    const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

    let intentos = 0;

    while (true) {
        const intentoUsuario = parseInt(sc("Introduce un número para adivinar (entre 1 y 100): "));

        if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
            console.log("Por favor, introduce un número válido entre 1 y 100.");
            continue;
        }

        intentos++;

        if (intentoUsuario < numeroCorrecto) {
            console.log("MÁS ALTO. Intenta de nuevo.");
        } else if (intentoUsuario > numeroCorrecto) {
            console.log("MÁS BAJO. Intenta de nuevo.");
        } else {
            console.log("¡ÉXITO! El número correcto es:" +numeroCorrecto);
            console.log("Número de intentos:" +intentos);
            break;
        }
    }
}