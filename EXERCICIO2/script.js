/* PEGANDO ANO DE NASCIMENTO E MUDANDO IMAGEM
DE ACORDO COM GENERO */
function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  // ID DA CAIXA DE TEXTO TIPO NUMBER
  let formAno = document.getElementById("txtano");
  let resultado = document.getElementById("resultado");

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] VERIFIQUE OS DADOS!");
  } else {
    let formSexo = document.getElementsByName("radiosex");
    let idade = ano - Number(formAno.value);
    let genero = "";
    let imagem = document.createElement("img");
    imagem.setAttribute("id", "foto");

    if (formSexo[0].checked) {
      genero = "HOMEM";
      if (idade >= 0 && idade < 10) {
        // CRIANCA
        imagem.setAttribute("src", "homem-crianca.webp");
      } else if (idade < 21) {
        // HOMEM ADOLESCENTE
        imagem.setAttribute("src", "homem-adolescente.webp");
      } else if (idade < 50) {
        // HOMEM ADULTO
        imagem.setAttribute("src", "homem-adulto.jpg");
      } else {
        // HOMEM  IDOSO
        imagem.setAttribute("src", "homem-velho.jpg");
      }

      // SE O INPUT RADIO MARCADO FOR MULHER
    } else if (formSexo[1].checked) {
      genero = "MULHER";
      if (idade >= 0 && idade < 10) {
        // CRIANCA
        imagem.setAttribute("src", "mulher-crianca.jpg");
      } else if (idade < 21) {
        // mulher ADOLESCENTE
        imagem.setAttribute("src", "mulher-adolescente.jpg");
      } else if (idade < 50) {
        // mulher ADULTO
        imagem.setAttribute("src", "mulher-adulta.png");
      } else {
        // mulher  IDOSO
        imagem.setAttribute("src", "mulher-velha.webp");
      }
    }

    resultado.style.textAlign = "center";
    resultado.innerHTML = `Voce é ${genero} e tem ${idade} anos!`;
    resultado.appendChild(imagem);
  }
}
