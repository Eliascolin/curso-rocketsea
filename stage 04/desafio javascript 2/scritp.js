/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno
 obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


*/

const students = [

{
name:'João',
firstNote:7.5,
secondNote:10
},


{
    name:"Maria",
    firstNote:9.5,
    secondNote:9
    },

    
{
    name:'José',
    firstNote:5.2,
    secondNote:7
    },

    
{
    name:'Ana',
    firstNote:7.8,
    secondNote:3.1
    }



]

function average(firstTry,secondTest){

    result = (firstTry + secondTest) / 2

    return result



}


function studenAverage(student){

    let averageCalculation = average(student.firstNote,student.secondNote)
    let messageAverge;

    if (averageCalculation > 7){
messageAverge = "Parabens você aprovou"
    }else(messageAverge ="Tem que repetir a prova")



return`

O estudante ${student.name}  teve uma media de ${averageCalculation}

${messageAverge}


`
}


for(student of students){

let averageMessage = studenAverage(student)
alert(averageMessage)


}