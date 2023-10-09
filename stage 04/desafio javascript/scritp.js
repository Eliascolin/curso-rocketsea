/* 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/


function math (){
  



  let numberOne = Number(prompt("Digite o Primeiro  numero"))


  let numberTwo = Number(prompt("Digite o segundo Numero"))
  
  if(!isNaN(numberOne) && !isNaN(numberTwo)){
    alert(`A soma dos dados é de ${numberOne + numberTwo}`)
  
    alert(`A subtração é de ${numberOne - numberTwo}`)
    
    alert(`A multiplicação e de ${numberOne * numberTwo}`)
    
    alert(`A divição é de ${numberOne / numberTwo}`)
    
    alert(`o resto da divição é de ${numberOne % numberTwo}`)


    if(numberTwo){

      if(numberOne & 2 == 0 ){
    
        alert(`o primeiro numero é par`)
       
    
      } else(alert(`O numero é impar`))
    }else  if(numberTwo){
    
      if(numberTwo & 2 == 0 ){
    
        alert(`o primeiro numero é par`)
       
    
      } else(alert(`O numero é impar`))
    }
    
   


  }else(`Nao é um numero`)
  



} 





math ()