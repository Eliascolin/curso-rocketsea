//Variaveis

let imageLetter = document.querySelector("img")

let divMessagem = document.querySelector(".div-messagem")

let messagem = document.querySelector(".messagem")

let button = document.querySelector("button")




// Fuontions


function showLetterClick(){

  
    if(divMessagem.classList.contains("hiden")){

        imageLetter.src= "./imagem/carta-2.svg"

        toggoScreen()
        changeMessage()
        

    }


}


function toggoScreen(){

    divMessagem.classList.remove("hiden")

    button.classList.remove("hiden")



}


function changeMessage(){

    let randomnumber = Math.round(Math.random() * 4) 


let randomMessagem;


    switch(randomnumber){


        case 0 : randomMessagem = "O único modo de fazer um ótimo trabalho é amar o que você faz."

        break


case 1 : randomMessagem = "O caminho para o sucesso começa com um único passo."

break

case 2 : randomMessagem = "Acredite nas possibilidades e faça acontecer."

break

case 3 : randomMessagem = "Não deixe que o medo do desconhecido impeça o brilho da sua jornada."

break

case 4 : randomMessagem = "Seja a mudança que você deseja ver no mundo."



    }


messagem.innerText = randomMessagem 

}


// eventos

imageLetter.addEventListener("click", showLetterClick)


button.addEventListener("click",changeMessage)


