window.onload = inicio;
let rojo = "./img/cartoon-1298905_640.png";
let azul = "./img/rocket-7757105_640.png";
let caja;

function inicio(){
    caja = document.querySelector("#caja");
    document.querySelectorAll('button')[0].onclick = unoRojo;
    document.querySelectorAll("button")[1].onclick = cuatroAzules;
    document.querySelectorAll("button")[2].onclick = modificarAzules;
    document.querySelectorAll("button")[3].onclick = eliminarRojos;
    document.querySelectorAll("button")[4].onclick = vaciar;

}

function unoRojo(){
    caja.insertAdjacentHTML("beforeend", `<img class = "rojo" src="${rojo}" alt="">`);

}

function cuatroAzules(){
    for(let k = 0; k<4; k++){
        caja.insertAdjacentHTML("beforeend", `<img class = "azul" src="${azul}" alt="">`);
    }
}

function modificarAzules(){
    let contar = document.querySelectorAll(".azul").length;
    for (let k = contar - 1; k >= 0; k--) {
        document.querySelectorAll(".azul")[k].src = rojo;
        document.querySelectorAll(".azul")[k].setAttribute("class", "rojo");
    }
        
}

function eliminarRojos(){
    let contar = document.querySelectorAll(".rojo").length;
    for (let k = contar - 1; k >= 0; k--) {
        document.querySelectorAll(".rojo")[k].remove();
    }
}

function vaciar(){
  caja.innerHTML = "";
}