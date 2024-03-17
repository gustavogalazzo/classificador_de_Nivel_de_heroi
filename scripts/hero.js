//Variaveis de entrada
let heroi = 'DarkBlue'
let xp = 9002

// Estrutura de decisão utilizando if, else if, else!
let classeHeroi

if (xp < 1000) {
  classeHeroi = 'Ferro'
} else if (xp >= 1001 && xp <= 2000) {
  classeHeroi = 'Bronze'
} else if (xp >= 2001 && xp <= 5000) {
  classeHeroi = 'Prata'
} else if (xp >= 5001 && xp <= 7000) {
  classeHeroi = 'Ouro'
} else if (xp >= 7001 && xp <= 8000) {
  classeHeroi = 'Platina'
} else if (xp >= 8001 && xp <= 9000) {
  classeHeroi = 'Ascendente'
} else if (xp >= 9001 && xp <= 10000) {
  classeHeroi = 'Imortal'
} else {
  classeHeroi = 'Radiante'
}

// Saída
console.log('O Herói de nome' + heroi + ' está no nível ' + classeHeroi + '!')
