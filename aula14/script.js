// USAR O SWITCH COM NUMEROS INTEIROS, STRINGS E VALORES PONTUAIS
let agora = new Date();
let diaSem = agora.getDay();
/*
DOMINGO [0]
SEGUNDA [1]
TERCA [2]
QUARTA [3]
QUINTA [4]
SEXTA [5]
SABADO [6]
*/
console.log(diaSem);
switch (diaSem) {
  case 0:
    console.log("DOMINGO");
    break;
  case 1:
    console.log("SEGUNDA");
    break;
  case 2:
    console.log("TERCA");
    break;
  case 3:
    console.log("QUARTA");
    break;
  case 4:
    console.log("QUINTA");
    break;
  case 5:
    console.log("SEXTA");
    break;
  case 6:
    console.log("SABADO");
    break;
  default:
    console.log("ERROR: DATA INVALIDA");
}
