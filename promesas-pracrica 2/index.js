const body = document.getElementsByTagName("body")[0];

const btnYellow = document.getElementById("yellow");
const btnBlue = document.getElementById("blue");
const btnRed = document.getElementById("red");

const containerYellow = document.querySelector(".containerYellow")
const containerBlue = document.querySelector(".containerBlue")
const containerRed = document.querySelector(".containerRed")

function addYellow(){
    const newEle = document.createElement("div");
    newEle.classList.add("yellow");
    containerYellow.appendChild(newEle);
}

function addBlue(){
    console.log("cb")
    const newEle = document.createElement("div");
    console.log(newEle)
    newEle.classList.add("blue");
    containerBlue.appendChild(newEle)
 }

function addRed(){
    console.log("cb")
    const newEle = document.createElement("div");
    newEle.classList.add("red");
    containerRed.appendChild(newEle)
}

btnYellow.addEventListener("click", addYellow);
btnBlue.addEventListener("click", addBlue);
btnRed.addEventListener("click", addRed);