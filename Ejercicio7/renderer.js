/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var numero;
var intentosRes = 5;

function adivinar() {
    let caja = parseInt(document.getElementById('caja').value);
    console.log(caja);

    let resultado = document.getElementById('resultado');
    let intentos = document.getElementById('intentos');

    if(intentosRes>1)
    {
        if(caja>numero)
        {
            resultado.innerHTML = "<p class='notification is-warning'>El número esta más abajo</p>";    
            intentosRes--;
            intentos.innerHTML = "(Te quedan "+intentosRes+" intentos)";
        }else if(caja<numero)
        {
            resultado.innerHTML = "<p class='notification is-warning'>El número esta más arriba</p>";
            intentosRes--;
            intentos.innerHTML = "(Te quedan "+intentosRes+" intentos)";
        }else{
            resultado.innerHTML = "<p class='notification is-success'>Felicidades, adivinaste el número</p>";
        }
    }else{
        intentos.innerHTML = "(Te quedan "+0+" intentos)";
        resultado.innerHTML = "<p class='notification is-danger'>Te quedaste sin intentos, el número era: "+numero+"</p>";
    }

}

function cargarNumero() {
    numero = Math.floor(Math.random() * 101);
    console.log("Número generado:", numero);
}

document.addEventListener('DOMContentLoaded', cargarNumero);