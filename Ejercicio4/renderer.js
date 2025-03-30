/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var votos = {
    "América": 0,
    "Chivas": 0,
    "Pachuca": 0
};
var votosRes = 20;
var input;

function elegirVotar() {
    let inputs = document.getElementsByTagName('input');

    for(let i=0; i<inputs.length; i++)
    {
        if(inputs[i].checked)
        {
            document.getElementById('boton').innerHTML = "Votar por: "+inputs[i].value;
            input = inputs[i].value;
            //console.log(input);
        }
    }
}

function votar() {
    if(votosRes>0)
    {
        votos[input]++;
        //console.log(votos);
        votosRes--;    

        let votosRestantes = document.getElementById('votos');
        votosRestantes.innerHTML = "(Votos restantes "+votosRes+")";
    }else{
        document.getElementById('sin-votos').innerHTML = "<p class='notification is-danger'>Te has quedado sin votos</p> <a onclick='calcularResultados()' class='button is-primary' id='boton'>Calcular resultados</a>"
    }
}

function calcularResultados() {
    let resultados = document.getElementById('resultados');

    let votaciones = Object.entries(votos).sort((a, b) => b[1] - a[1]);

    let lugares = {};
    let lugar = 1;
    let votosAnteriores = null;

    votaciones.forEach(([equipo, votosEquipo], indice) => {
        if (votosEquipo !== votosAnteriores) {
            lugar = indice+1;
        }
        lugares[equipo] = lugar;
        votosAnteriores = votosEquipo;
    });

    let mensaje = "<h5 class='title is-5'>Resultados:</h5>";
    for (let equipo in lugares) {
        mensaje += `<p>${lugares[equipo]}° lugar: ${equipo} (${votos[equipo]} votos)</p>`;
    }

    resultados.innerHTML = mensaje;
}