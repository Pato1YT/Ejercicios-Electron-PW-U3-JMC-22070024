/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function convertirMetros() {
    let metros = parseFloat(document.getElementById('caja').value);
    let opcion = parseInt(document.getElementById('opcion').value);
    let resultado = document.getElementById('resultado');

    //console.log(metros);
    //console.log(opcion);


    switch (opcion) {
        case 1:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*1000)+" mm</h6>"
            break;

        case 2:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*100)+" cm</h6>"
            break;

        case 3:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*10)+" dm</h6>"
            break;

        case 4:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*0.001)+" km</h6>"
            break;

        case 5:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*0.000621371)+" mi</h6>"
            break;

        case 6:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*1.09361)+" yd</h6>"
            break;            

        case 7:
            resultado.innerHTML = "<h6 class='title is-6'>"+metros+" metros son: "+(metros*3.28084)+" ft</h6>"
            break;
    
        default:
            resultado.innerHTML = "<h6 class='title is-6'>Opción no seleccionada</h6>"
            break;
    }
}
