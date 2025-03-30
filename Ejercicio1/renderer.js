/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function generarCajas() {
    let cajas = parseInt(document.getElementById('caja').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML="";

    for(let i=0; i<cajas; i++)
    {
        resultado.innerHTML+=`<label for="n${i+1}">Calificación ${i+1}:</label>
                              <div class="field">
                                <div class="control" style="margin-top: 20px;">
                                <input type="text" class="input is-rounded" id="caja${i+1}">
                                </div>
                              </div>`;
    }

    resultado.innerHTML += "<button onclick='promedio()' style='margin-bottom=20px' class='button is-primary' id='boton'>Obtener promedio</button>"
}

function promedio() {
    let cajas = document.querySelectorAll('input');
    console.log(cajas);
    let prom=0;

    for(let i=1; i<cajas.length; i++)
    {
        prom+=parseFloat(cajas[i].value);
    }

    prom/=cajas.length-1;

    document.getElementById('resultado').innerHTML+= "<h5 class='title is-5' style='margin-top: 20px'>Promedio: "+prom+"</h5>";
}