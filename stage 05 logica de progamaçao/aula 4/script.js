/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/



let itens = []


for (let iten = 0; iten < 10; iten++){

let itenName = prompt('Digite o nome do seu iten '+ (iten +1))

itens[iten]=itenName
}


alert(`Voce comprou ${itens}`)