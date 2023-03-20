// Pestaña Nuestro Refugio
// (A) Botones de cambio de color de img (con distintos métodos)
let primerBoton = document.getElementById("primerBoton");
let primerImg = document.getElementById("muchachos");

primerBoton.onclick = () => {
    primerImg.style.animationName = "primerbyn";
    setTimeout(removerEstilo, 15000);
    function removerEstilo(){
        primerImg.style.animationName = "";
    }
}

let segundoBoton = document.getElementById("segundoBoton");
let segundaImg = document.getElementById("refu");

segundoBoton.addEventListener("click", cambioByN)
function cambioByN(){
    segundaImg.style.animationName = "segundobyn";
    setTimeout(removerEstilo, 15000);
    function removerEstilo(){
        segundaImg.style.animationName = "";
    }
}

// (B) Actualización del contador del Carrito
let contador = document.getElementById("contador");
var conteo = 0;
contador.innerHTML = conteo;

function agregarCarrito(){
    conteo++;
    contador.innerHTML = conteo;
    return true
}