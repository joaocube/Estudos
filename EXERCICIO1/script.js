/* PEGANDO HORARIO REAL E MUDANDO IMAGEM
E BACKGROUND DE ACORDO COM O HORARIO */
function carregar() {
  let mensagem = document.getElementById("mensagem");
  let imagem = document.getElementById("imagem");
  const main = document.getElementById("main");
  let data = new Date();
  let hora = data.getHours();
  // let hora = 19;
  let minutos = data.getMinutes();
  mensagem.innerHTML = `Agora sao ${hora} horas e ${minutos} minutos!`;

  if (hora >= 5 && hora < 12) {
    imagem.src = "./img/manha.jpg";
    main.style.background = "#3b6a44";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "./img/tarde.jpg";
    main.style.background = "#e4947b";
  } else {
    imagem.src = "./img/noite.jpg";
    main.style.background = "#a585ba";
  }
}
