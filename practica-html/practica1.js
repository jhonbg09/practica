const btn1 = document.getElementById("agregar");
console.log(btn1)
const cb = () => {
    const nuevoEle = document.createElement("div")
    console.log(nuevoEle)
}
btn1.addEventListener("click", cb)