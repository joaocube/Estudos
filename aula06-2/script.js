// FORMATANDO STRINGS

let nome = window.prompt("qual seu nome?");
document.write(`Ola ${nome}! Seu nome tem ${nome.length} letras. <br>`);
document.write(`Seu nome em maiusculo e ${nome.toUpperCase()} <br>`);
document.write(`seu nome em minusculo e ${nome.toLowerCase()}`);

// n1.toFixed(2) - 2 casas decimais
// n1.toFixed(2).replace('.',',') - mudando ponto por virgula
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) - colocando o dinheiro em real
