function horario() {
  let txthora = document.getElementById("txthora");
  let hora = Number(txthora.value);
  let resultado = document.getElementById("resultado");

  if (hora < 12 && hora > 4) {
    resultado.innerHTML = `<p>BOM DIA PRA VOCE</p>`;
  } else if (hora >= 12 && hora < 18) {
    resultado.innerHTML = `<p>BOA TARDE PRA VOCE</p>`;
  } else if (hora >= 18 && hora < 24) {
    resultado.innerHTML = `<p>BOA NOITE PRA VOCE</p>`;
  } else {
    resultado.innerHTML = `<p>BOA MADRUGADAPRA VOCE</p>`;
  }
}

/* PEGANDO HORA E MINUTO DO PC EM TEMPO REAL
let agora = new Date();
let horario = agora.getHours();
let minutos = agora.getMinutes();
console.log(`Agora sao ${horario} horas e ${minutos} minutos`);
*/
