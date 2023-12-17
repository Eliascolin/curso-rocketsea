import state from "./state.js"
import * as el from "./elements.js" 
import { reset } from "./actions.js"
import { kitchenTimer } from "./sound.js" 


export function contdown(){

    clearTimeout(state.countdownId)
if(!state.isRunning){

    return

}
let minutes = Number(el.minutes.textContent)

let seconds = Number(el.seconds.textContent)



seconds--


if(seconds<0){

seconds=59
minutes--

}

if(minutes<0){


 kitchenTimer.play()
reset()

return

}

updateDisplay(minutes,seconds)

state.countdownId = setTimeout(()=>contdown(),1000)

}


export function updateDisplay(minutes,seconds){


minutes = minutes ?? state.minutes /*nullish coalesing operator*/

seconds = seconds ?? state.seconds

el.minutes.textContent = String(minutes).padStart(2,"0")

el.seconds.textContent = String(seconds).padStart(2,"0")

}