/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function convertirMetros() {
    let nota = document.getElementById('caja').value;
    let resultado = document.getElementById('resultado');

    switch (nota) {
        case 'A':
            resultado.innerHTML = "<h6 class='title is-6 notification has-background-success'>Nota más alta: 100.00%, Nota más baja: 93.00%</h6>"
            break;

        case 'A-':
            resultado.innerHTML = "<h6 class='title is-6 notification has-background-primary'>Nota más alta: 92.99%, Nota más baja: 90.00%</h6>"
            break;

        case 'B+':
            resultado.innerHTML = "<h6 class='title is-6 notification is-link'>Nota más alta: 89.99%, Nota más baja: 87.00%</h6>"
            break;

        case 'B':
            resultado.innerHTML = "<h6 class='title is-6 notification is-link'>Nota más alta: 86.99%, Nota más baja: 83.00%</h6>"
            break;

        case 'B-':
            resultado.innerHTML = "<h6 class='title is-6 notification is-link'>Nota más alta: 82.99%, Nota más baja: 80.00%</h6>"
            break;

        case 'C+':
            resultado.innerHTML = "<h6 class='title is-6 notification is-warning'>Nota más alta: 79.99%, Nota más baja: 77.00%</h6>"
            break;            

        case 'C':
            resultado.innerHTML = "<h6 class='title is-6 notification is-warning'>Nota más alta: 76.99%, Nota más baja: 73.00%</h6>"
            break;
        
        case 'C-':
            resultado.innerHTML = "<h6 class='title is-6 notification is-warning'>Nota más alta: 72.99%, Nota más baja: 70.00%</h6>"
            break;

        case 'D+':
            resultado.innerHTML = "<h6 class='title is-6 notification is-danger'>Nota más alta: 69.99%, Nota más baja: 67.00%</h6>"
            break;
            
        case 'D':
            resultado.innerHTML = "<h6 class='title is-6 notification is-danger'>Nota más alta: 66.99%, Nota más baja: 60.00%</h6>"
            break;
        
        case 'F':
            resultado.innerHTML = "<h6 class='title is-6 notification is-danger'>Nota más alta: 56.99%, Nota más baja: 00.00%</h6>"
            break;
    
        default:
            resultado.innerHTML = "<h6 class='title is-6'>Nota invalida</h6>"
            break;
    }

}
