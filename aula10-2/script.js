function somar() {
  let tn1 = document.getElementById("txt1");
  let tn2 = document.getElementById("txt2");
  let resultado = document.getElementById("resultado");
  let n1 = Number(tn1.value);
  let n2 = Number(tn2.value);
  const soma = n1 + n2;
  resultado.innerHTML = `A soma entre ${n1} e ${n2} <br> E igual a <strong> ${soma} </strong>`;
}
