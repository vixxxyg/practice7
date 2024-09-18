window.onload = inicio;
let valor;
let monedas = 5;
let coincidencia = 0;

function inicio() {
  document.querySelector(".boton").onclick = empezar;
  dibujarMonedas();
  vaciar();
}

function empezar() {
    coincidencia = 0;
  valor = document.querySelector("#campo").value;
  if (valor >= 2 && valor <= 9) {
    crearCuadros();
  } else {
    vaciar();
  }
}

function crearCuadros() {
  document.querySelector(".contenido").innerHTML = "";
  for (let k = 0; k < valor; k++) {
    let azar = Math.ceil(Math.random() * valor);
    let estilo = comprobar(azar);
    document
      .querySelector(".contenido")
      .insertAdjacentHTML(
        "beforeend",
        `<div class = "cuadro ${estilo}">${azar}</div>`
      );
  }
  if (coincidencia > 0) {
    var mensaje = `Se ha producido ${coincidencia} coincidencia${plural(coincidencia)} y has ganado ${coincidencia} moneda${plural(coincidencia)}`;
    monedas += coincidencia;
  } else {
    var mensaje = `No se ha producido ninguna coincidencia y has perdido ${valor} monedas`;
    monedas -= valor;
  }
  document.querySelector(".informacion").innerHTML = mensaje;
  dibujarMonedas();
  vaciar();
}

function comprobar(azar) {
  if (azar == valor) {
    coincidencia++;
    return "verde";
  } else {
    return "rojo";
  }
}

function dibujarMonedas() {
  let m = document.querySelector(".monedas");
  m.innerHTML = `<div class = "saldo">Monedas: <span class = "grande">${monedas}</span></div>`;
  for (let k = 0; k < monedas; k++) {
    m.insertAdjacentHTML("beforeend", `<img src = "img/coin.png">`);
  }
}

function vaciar() {
  document.querySelector("#campo").value = "";
  document.querySelector("#campo").focus();
}

function plural (cantidad) {
  if (cantidad !=1){
    return "s";
  } else {
    return "";
  }
};