const valor = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","k"];
const figura = ["corazon","trebol","diamante","pica"];

function indice(numero){
  return `<p>${valor[numero]}</p>`;
}

function imagen(valor){
  return `<img src="pictures/${figura[valor]}.jpg">`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  let numero = getRandomInt(13);
  let figura = getRandomInt(4);
 document.getElementById("indice").innerHTML=indice(numero) + imagen(figura);
 document.getElementById("central").innerHTML=indice(numero);
 document.querySelector(".invertido").innerHTML=indice(numero) + imagen(figura);
};
