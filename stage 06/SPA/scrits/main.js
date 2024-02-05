import * as elemes from "./elemens.js"

import * as action from "./actions.js"



// Evento de clic para homeLink
elemes.homeLink.addEventListener('click',action.route)
// Evento de clic para universoLink
elemes.universoLink.addEventListener('click',action.route) 

// Evento de clic para exploracaoLink
elemes.exploracaoLink.addEventListener('click', action.route)


//Evento de error 
elemes.errorLink.addEventListener("click",action.route)


