const btnAmarillo = document.getElementById("agregarAmarillo")
const btnAzul = document.getElementById("agregarAzul")
const btnRojo = document.getElementById("agregarRojo");
const body = document.getElementsByTagName("body")[0];
const contenedor1 = document.querySelector(".contenedor1")
const contenedor2 = document.querySelector(".contenedor2")
const contenedor3 = document.querySelector(".contenedor3")

function agregarElemAmarillo(){
    const nuevoElem = document.createElement("div");
    nuevoElem.classList.add("amarillo")
    contenedor1.appendChild(nuevoElem)
}

function agregarElemAzul(){
    const nuevoElem = document.createElement("div");
    nuevoElem.classList.add("azul")
    contenedor2.appendChild(nuevoElem)
}

function agregarElemRojo() {
    const nuevoElem = document.createElement("div");
    nuevoElem.classList.add("rojo");
    contenedor3.appendChild(nuevoElem)   
}

btnAmarillo.addEventListener("click", agregarElemAmarillo);
btnAzul.addEventListener("click", agregarElemAzul);
btnRojo.addEventListener("click", agregarElemRojo);
