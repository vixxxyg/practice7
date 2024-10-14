window.onload = inicio;
let rojo = `<img src="/img/rocket-7757105_640.png" alt="">`;
let azul = `<img src="/img/logo-2582748_640.png">`;
let caja;

function inicio(){
    caja = document.querySelector("#caja");
    document.querySelectorAll('button')[0].onclick = unoRojo;
    document.querySelectorAll("button")[1].onclick = cuatroAzules;
}

function unoRojo(){
    caja.insertAdjacentHTML("beforeend", rojo);

}

function cuatroAzules(){
caja.insertAdjacentHTML("beforeend", azul);
caja.insertAdjacentHTML("beforeend", azul);
caja.insertAdjacentHTML("beforeend", azul);
caja.insertAdjacentHTML("beforeend", azul);

}