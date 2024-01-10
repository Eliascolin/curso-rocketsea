import state from "./status.js"

import * as timer from "./timer.js"

import * as el from "./elements.js"

import * as audio from "./sounds.js"

export function toggleRuning(){

state.isRunning = document.documentElement.classList.toggle("running")

timer.countdown()

}



el.imagemSons.forEach(function(div){

div.addEventListener("click",()=>{


div.classList.toggle("playMusic")

console.log(div)

})



})



export function set(){

  el.minutes.setAttribute('contenteditable',true)
  el.seconds.setAttribute('contenteditable',true)
  el.minutes.focus()


}


export function reset(){

  state.isRunning = false

    document.documentElement.classList.remove('running')
    timer.ubdateDisplay()
  

}



export function morTime(){

  
  let minutes = Number(el.minutes.textContent)

  let seconds = Number(el.seconds.textContent)


   minutes +=  5

  

  


    
    timer.ubdateDisplay(minutes,seconds)


}



export function minusTime(){


  let minutes = Number(el.minutes.textContent)

  let seconds = Number(el.seconds.textContent)


   minutes -=  5

  

  


    
    timer.ubdateDisplay(minutes,seconds)
}



export function tree(){

audio.floresta.play()




}


export function cloud(){

audio.chuva.play()


}


export function coffe(){


audio.coffe.play()


}


export function fire(){

audio.lareira.play()


}


