import * as controls from "./elements.js";


export function registerControls(){

controls.controls.addEventListener("click",(event)=>{

console.log(event.target)
})


controls.controlsSons.addEventListener("click",(event)=>{
    
    console.log(event.target)
    
    
    
    })

}





