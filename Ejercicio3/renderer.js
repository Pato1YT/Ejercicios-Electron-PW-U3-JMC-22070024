/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function operacion() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //console.log(numero1);
    //console.log(numero2);

    let operacion = parseFloat(document.getElementById('opcion').value);
    let res;
    let resultado = document.getElementById('resultado');

    switch (operacion) {
        case 1:
            res=numero1+numero2;
            break;
            
        case 2:
            res=numero1-numero2;
            break;
            
        case 3:
            res=numero1*numero2;
            break;
    
        case 4:
            res=numero1/numero2;
            break;            
        
        default:
            res="Operacion no seleccionada"
            break;
        }

    //console.log(res);
    //console.log(typeof(res));
    if(!isNaN(numero1) && !isNaN(numero2))
    {
        resultado.innerHTML = "<p class='notification is-success'>Resultado: "+res+"</p>";
    }else{
        resultado.innerHTML = "<p class='notification is-danger'>Resultado: "+res+"</p>";
    }
    
}

function cargarEventos() {
    boton = document.getElementById('boton');
    boton.addEventListener('click', operacion);
}