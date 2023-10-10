/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/


const studenName = prompt("Qual é o nome do aluno(a)")

let n1 = prompt('Valor Primeira nota')
let n2 = prompt('Valor segunga nota')
let n3 = prompt('Valor terceira nota')


let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if(result){

alert(`parabens ${studenName} o serultado foi de ${average} voce esta aprovado`)
}else{

alert(`${studenName} sua nota foi de ${average} estude para a recuperação`)


}