import * as controls from "./elements.js";

import * as actions from './actions.js'

import * as time from "./elements.js"
import status from "./status.js";

import { ubdateDisplay } from "./timer.js";





export function registerControls(){

controls.controls.addEventListener("click",(event)=>{

const action = event.target.dataset.action

if(typeof actions[action] != 'function'){
    return
}

actions[action]()

})




controls.controlsSons.addEventListener("click",(event)=>{
    
    const actionMusic = event.target.dataset.music

    
  


 const classAdd = event.target

    classAdd.classList.toggle(".stop")

    
 


 if(typeof actions[actionMusic] !="function"){

    return
 }
    

     actions[actionMusic]()
    
    
    })

}






time.timer.addEventListener("click",(event)=>{

    const actionTimer = event.target.dataset.action

      



    if(typeof actions[actionTimer] !="function"){

        return
     }
        
    
         actions[actionTimer]()

         
        
        
        })


        export function setMinutes(){

time.minutes.addEventListener("focus",() =>{

    time.minutes.textContent =""
    time.seconds.textContent=""
    
})

time.minutes.onkeypress = (event) => /\d/.test(event.key)

time.seconds.onkeypress = (event) => /\d/.test(event.key)

time.minutes.addEventListener('blur',(event)=>{

let time = event.currentTarget.textContent

time = time > 60 ? 60 : time

status.minutes = time

status.seconds = 0

ubdateDisplay()
time.minutes.removeAttribute("contenteditable")
})



time.seconds.addEventListener('blur',(event)=>{

    let time = event.currentTarget.textContent
    
    time = time > 60 ? 60 : time
    
    status.minutes = time
    
    status.seconds = 0
    
    ubdateDisplay()
    time.seconds.removeAttribute("contenteditable")
    })

        }










