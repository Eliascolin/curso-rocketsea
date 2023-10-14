//Variaveis

let randomnumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnrest = document.querySelector('#btnrest')

let xattempts = 1


// Eventos

btnTry.addEventListener('click',handleTryClick)


btnrest.addEventListener("click", handleResetClick)

document.addEventListener("keydown", function (e){

    if(e.key == "Enter" )(

        handleResetClick()
    )


})


// função callback

function handleTryClick(event){

event.preventDefault()

const inputNumber = document.querySelector("#inputNumber")


if(Number(inputNumber.value) == randomnumber){

    toggoScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xattempts} tentativas`

 

}else(console.log("errou o numero era " +randomnumber  ))


inputNumber.value = ""
xattempts++


}


function handleResetClick(){

    toggoScreen()
    xattempts = 1
    randomnumber = Math.round(Math.random() * 10)
}


function toggoScreen(){


    screen1.classList.toggle('hide')

    screen2.classList.toggle('hide')

}



