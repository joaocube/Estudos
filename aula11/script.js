// EXERCICIO 7
/*
let velocidade = 60.5;
console.log(`A velocidade do seu carro e: ${velocidade}`);
if (velocidade > 60) {
  console.log("Voce esta acima de 60km/h. MULTADO!");
}
console.log("Dirija usando cinto de seguranca");
*/

/*CONDICIONAL EX
let pais = "EUA";
console.log(`Nasceu em ${pais}`);
if (pais == "Brasil") {
  console.log("Voce e BRASILEIRO");
} else {
  console.log("Voce eESTRANGEIRO");
}
*/
function calcular() {
  let txtVelocidade = document.getElementById("txtvelocidade");
  let resultado = document.querySelector("#resultado");
  let vel = Number(txtVelocidade.value);

  resultado.innerHTML = `Sua velocidade atual e de <strong> ${vel} </strong>Km/h`;
  if (vel > 60) {
    resultado.innerHTML += `<p>Voce esta MULTADO!</p>`;
  }
  resultado.innerHTML += `<p>Dirija sempre com cinto de seguranca!</p>`;
}
