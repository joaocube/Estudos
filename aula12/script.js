function votar() {
  let txtidade = document.getElementById("txtidade");
  let resultado = document.getElementById("resultado");
  let idade = Number(txtidade.value);
  console.log(`Voce tem ${idade} anos`);

  if (idade < 16) {
    resultado.innerHTML = `<p>NAO VOTA!</p>`;
  } else if (idade < 18 || idade > 65) {
    resultado.innerHTML = `<p>VOTO OPICIONAL</p>`;
  } else {
    resultado.innerHTML = `<p>VOTO OBRIGATORIO</p>`;
  }
}
