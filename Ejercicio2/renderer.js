/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function obtenerNota() {
    let calificacion = document.getElementById('cal');
    console.log(calificacion);
    calificacion = parseFloat(calificacion.value);

    console.log(calificacion);
    console.log(typeof(calificacion));

    let res = document.getElementById('resultado');
    if(calificacion>=0 && calificacion<=69)
    {
        res.innerHTML = "<p class='notification is-danger'>Reprobado: "+calificacion+"</p>";
    }else if(calificacion>=70 && calificacion<=79)
    {
        res.innerHTML = "<p class='notification is-warning'>Aprobado: "+calificacion+"</p>";
    }else if(calificacion>=80 && calificacion<=89)
    {
        res.innerHTML = "<p class='notification is-link'>Notable: "+calificacion+"</p>";
    }else if(calificacion>=90 && calificacion<=99)
    {
        res.innerHTML = "<p class='notification has-background-primary'>Sobresaliente: "+calificacion+"</p>";
    }else if(calificacion==100) 
    {
        res.innerHTML = "<p class='notification has-background-success'>Matricula de honor: "+calificacion+"</p>";
    }
}