/*CONDICIONAL EX
let pais = "EUA";
console.log(`Nasceu em ${pais}`);
if (pais == "Brasil") {
  console.log("Voce e BRASILEIRO");
} else {
  console.log("Voce eESTRANGEIRO");
}
*/

function nacao() {
  let txtPais = document.querySelector("input#txtpais");
  let res = document.getElementById("resultado");
  let pais = txtPais.value.toUpperCase();
  res.innerHTML = `SEU PAIS: ${pais.toUpperCase()}`;
  if (pais == "BRASIL") {
    res.innerHTML += `<p>VOCE E BRASILEIRO</p>`;
  } else {
    res.innerHTML += `<p>VOCE E ESTRANGEIRO</p>`;
  }
}
